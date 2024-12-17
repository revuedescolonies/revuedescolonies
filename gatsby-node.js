const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const serialize = require("w3c-xmlserializer");
const MiniSearch = require("minisearch");

function slugify(text) {
  return text.toLowerCase()
    .replace(/<[^>]+>/g, '') // remove html tags
    .replace(/ /g,'-') // spaces become -
    .replace(/-+/g, '-') // no repeated -
    .replace(/[^\p{L}-]+/gu,'') // remove all non word or - characters. 
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type Occurence {
        pageName: String!
        pageLink: String!
        repeats: Int! 
    }

    type index {
        id: String!
        name: String!
        occurrences: [Occurence!]!
    }
    
    type indexData implements Node {
        persons: [index!]!
        org: [index!]!
        places: [index!]!
        bibl: [index!]!
    }
    `)
}

async function getPublishedTEI(graphql) {
  const result = await graphql(`
    query allPublishedTEI {
      allTocJson {
        nodes {
          teiBasePath
        }
      }
    }
  `)

  return result.data.allTocJson.nodes.map(node => node.teiBasePath);
} 

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const publishedTei = await getPublishedTEI(graphql);

  await makeCeteiceanPages(createPage, reporter, graphql, publishedTei)
  await makePages(createPage, reporter, graphql)
  await makeNewsIndex(createPage, reporter, graphql)
  // This needs to be changed to compare translations.
  // await makeSynoptic(createPage, reporter, graphql, publishedTei)
  await makeIndices(createPage, reporter, graphql, publishedTei)

  let search_index = await makeSearchIndex(reporter, graphql, publishedTei)
  await makeSearchPage(createPage, JSON.stringify(search_index))
}

async function makeCeteiceanPages(createPage, reporter, graphql, publishedTei) {
  const component = require.resolve(`./src/gatsby-theme-ceteicean/components/Ceteicean.tsx`)

  const result = await graphql(`
  query CETEIQuery {
    allCetei {
      nodes {
        prefixed
        elements
        parent {
          ... on File {
            name
          }
        }
      }
    }
    allTocJson {
      nodes {
        teiBasePath
      }
    }
  }
`)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  for (const node of result.data.allCetei.nodes) {
    const {name} = node.parent
    if (publishedTei.includes(name.split("-")[0])) {
      createPage({
        path: name,
        component,
        context: {
          site: result.data.site,
          name,
          prefixed: node.prefixed,
          elements: node.elements
        }
      })
    }
    
  }
}

async function makeSearchPage(createPage, search_index) {
  const component = require.resolve(`./src/templates/search.tsx`)

  createPage({
    path: '/en/search/',
    component,
    context: {
      search_index,
      language: 'en'
    }
  });

  createPage({
    path: '/fr/rechercher/',
    component,
    context: {
      search_index,
      language: 'fr'
    }
  })
}

async function makePages(createPage, reporter, graphql) {
  // Also handles blog posts (news).
  const component = require.resolve(`./src/templates/pages.tsx`)
  const newsComponent = require.resolve(`./src/templates/news.tsx`)

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              path
              title
              author
              }
              parent {
              ... on File {
                sourceInstanceName
                birthTime
                dir
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {

    if (node.parent.sourceInstanceName === "pages") {
      createPage({
        path: node.frontmatter.path,
        component,
        context: {
          lang: node.frontmatter.path === "/" ? "en" : "fr",
          title: node.frontmatter.title, 
          pagePath: node.frontmatter.path,
          html: node.html
        }
      })   
    } else if (node.parent.sourceInstanceName === "news") {
      const lang = node.parent.dir.split("/").pop()
      createPage({
        path: `/${lang}/${lang === "en" ? "news" : "nouvelles"}/${slugify(node.frontmatter.title.replace(/<[^>]+>/g, ""))}`,
        component: newsComponent,
        context: {
          content: node.html,
          title: node.frontmatter.title,
          createdTime: node.parent.birthTime,
          author: node.frontmatter.author,
          lang
        }
      })  
    }

  })
}

async function makeNewsIndex(createPage, reporter, graphql) {
  const component = require.resolve(`./src/templates/newsIndex.tsx`)

  const result = await graphql(`
    query NewsIndex {
      allFile(filter: {sourceInstanceName: {eq: "news"}}) {
        group(field: {dir: SELECT}) {
          nodes {
            birthTime
            childMarkdownRemark {
              excerpt
              frontmatter {
                title
                author
              }
            }
          }
          fieldValue
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allFile.group.forEach(( group ) => {
    const lang = group.fieldValue.split("/").pop()

    const posts = group.nodes.map(n => {
      return {
        createdTime: n.birthTime,
        excerpt: n.childMarkdownRemark.excerpt,
        title: n.childMarkdownRemark.frontmatter.title,
        author: n.childMarkdownRemark.frontmatter.author
      }
    })

    createPage({
      path: `/${lang}/${lang === "en" ? "news" : "nouvelles"}`,
      component,
      context: {
        lang,
        posts
      }
    })

  })
}

async function makeIndices(createPage, reporter, graphql, publishedTei) {
  const component = require.resolve(`./src/templates/indices.tsx`)
  const entityComponent = require.resolve(`./src/templates/entities.tsx`)

  const parseEntityTag = (entityDoc, tagName, entityName, nameAttr, idAttr) => {
    const lists = entityDoc.querySelector(tagName);

    if(lists) {
        const entities = lists.querySelectorAll(entityName)
        let entityArr = []
        entities.forEach((entity)=> {
            let name = entity.querySelector(nameAttr).textContent
            let id = entity.getAttribute(idAttr)
            if(name && id) {
                entityArr.push({
                    id,
                    name,
                    occurrences:[]
                })
            }
        })
        return entityArr;
    }
    return []
  }

  //for parsing tei xml files 
  const findOccurences = (teiXMLDoc, entities, tagName, ref, docName) => {
    const teiHeader = teiXMLDoc.querySelector("teiHeader")
    let pageName = "pagename"
    if(teiHeader) {
      const titleSmt = teiHeader.querySelector("titleStmt")
      pageName = titleSmt.querySelector("title").textContent
    }
    
    const entityEls = teiXMLDoc.querySelectorAll(tagName);
    
    entityEls.forEach((tag) => {
      const refValue = tag.getAttribute(ref)
      if (refValue) {
        const entity = entities.find((entity)=>entity.id === refValue.substring(1))
        if (entity) {
          const sameDocOccurrence = entity.occurrences.find(o => o.pageLink === docName.name)
          if (sameDocOccurrence) {
            sameDocOccurrence.repeats++
          } else {
            entity.occurrences.push({
              "pageName": pageName,
              "pageLink": docName.name,
              "repeats": 1
            })
          }
        }
      }
    })
  }

  const result = await graphql(`
    query Indices {
      allCetei {
        nodes {
          original
          prefixed
          elements
          parent {
            ... on File {
              name
              relativeDirectory
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const indexObj = {
    "persons":[],
    "org":[],
    "places":[],
    "bibl":[]
  }

  const entitiesNode = result.data.allCetei.nodes.find(n => n.original.includes(`xml:id="entities"`));
  const entityDoc = new JSDOM(entitiesNode.original, {contentType:'text/xml'}).window.document;
  indexObj.persons = parseEntityTag(entityDoc, "listPerson", "person", "persName", "xml:id")
  indexObj.places = parseEntityTag(entityDoc, "listPlace", "place", "placeName", "xml:id")
  indexObj.org = parseEntityTag(entityDoc, "listOrg", "org", "orgName", "xml:id")
  indexObj.bibl = parseEntityTag(entityDoc, "listBibl", "bibl", "title", "xml:id")

  for (const document of result.data.allCetei.nodes.filter(n => publishedTei.includes(n.parent.name.split("-")[0]))) {
    if (document.original.includes(`xml:id="RdC`)) {
      const tei = new JSDOM(document.original, {contentType:'text/xml'}).window.document;
      const docName = document.parent;
      if(tei) {
        findOccurences(tei, indexObj.persons, "persName", "ref", docName)
        findOccurences(tei, indexObj.places, "placeName", "ref", docName)
        findOccurences(tei, indexObj.org, "orgName", "ref", docName)
        findOccurences(tei, indexObj.bibl, "title", "ref", docName)
      }
    }
  }

  // Create entity pages
  const entityDocPrefixed = new JSDOM(entitiesNode.prefixed, {contentType:'text/xml'}).window.document;
  for (const entity of Object.values(indexObj).flat()) {
    const entityEl = entityDocPrefixed.getElementById(entity.id);
    createPage({
      path: `/en/${slugify(entity.name)}`,
      component: entityComponent,
      context: {
        language: "en",
        data: entity,
        elements: entitiesNode.elements,
        prefixed: serialize(entityEl)
      }
    })
    createPage({
      path: `/fr/${slugify(entity.name)}`,
      component: entityComponent,
      context: {
        language: "fr",
        data: entity,
        elements: entitiesNode.elements,
        prefixed: serialize(entityEl)
      }
    })
  }

  // Create index page

  // en
  createPage({
    path: `/en/index`,
    component,
    context: {
      language: "en",
      data: indexObj
    }
  })
  // fr
  createPage({
    path: `/fr/index`,
    component,
    context: {
      language: "fr",
      data: indexObj
    }
  })
}


async function makeSynoptic(createPage, reporter, graphql, publishedTei) {
  const component = require.resolve(`./src/gatsby-theme-ceteicean/components/Ceteicean.tsx`)

  const result = await graphql(`
    query {
      allCetei {
        nodes {
          prefixed
          elements
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create combined pages

  const langs = [
    'en',
    'fr'
  ]

  for (lang of langs) {
    const path = `synoptic-${lang}`
    const section = result.data.allCetei.nodes.filter(n => publishedTei.includes(n.parent.name.split('-')[0])).reduce((acc, node) => {
      if (node.parent.name === `RdCv1n1-${lang}`) {
        // wrap the two TEI files in a single <TEI> element
        acc.prefixed = `<tei-TEI data-xmlns=\"http://www.tei-c.org/ns/1.0\" data-origname=\"TEI\" data-origatts=\"xmlns\" xml:id=\"synoptic\" id=\"synoptic\">${node.prefixed}`
        acc.elements = node.elements
      } else if (node.parent.name === `RdCv2n1-${lang}`) {
        acc.prefixed += node.prefixed
        // merge notes
        const backs = acc.prefixed.match(/<tei-back[^>]*>(.*?)<\/tei-back>/gs)
        acc.prefixed = acc.prefixed.replace(/<tei-back.*?<\/tei-back>/gs, "")
        // close
        if (backs) {
          acc.prefixed += `<tei-standOff>${backs.join(" ")}</tei-standOff></tei-TEI>`
        }
        // merge element lists
        for (const el of node.elements) {
          if (acc.elements.indexOf(el) === -1) {
            acc.elements.push(el)
          }
        }
        acc.name = path
      } 
      return acc
    }, {elements: [], prefixed: ''})
  
    createPage({
      path,
      component,
      context: section
    })
  }
}

async function makeSearchIndex(reporter, graphql, publishedTei){
  const remark = (await import('remark')).remark

  const result_md = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          rawMarkdownBody
          frontmatter {
            title
            path
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
        }
      }
    }
  `)
  const result_tei = await graphql(`
    query {
      allCetei {
        nodes {
          prefixed
          elements
          parent {
            ... on File {
              name
              relativeDirectory
            }
          }
        }
      }
    }
  `)

  if (result_md.errors || result_tei.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const search_index = new MiniSearch({
    fields: ['title', 'heading', 'content'], // Fields to index for search
    storeFields: ['title', 'heading', 'content', 'type', 'language'], // Fields to return with search results
    searchOptions: {
      prefix: true,
      fuzzy: 0.2
    },
    boost:{heading: 2}
  });

  result_md.data.allMarkdownRemark.nodes.forEach((node) => {

    if (node.parent.sourceInstanceName === "pages") {
      const tree = remark().parse(node.rawMarkdownBody)
      let heading = ""
      let content = ""
      let headings = []
      let lang = (node.frontmatter.path.substring(0, 3) === "/en") ? "en" : (node.frontmatter.path.substring(0, 3) === "/fr") ? "fr" : "en"
  
      for (const child of tree.children){
        if(child.type === 'heading'){
          if(content !== ""){
            headings.push({heading: heading, content: content, type: "Miscellaneous", language: lang})
          }
          
          content = ""
          heading = child.children[0].value
        }else{
          if(child.children){
            for (const subChild of child.children){
              content += getMarkdownTextContent(subChild)
            }
          }else{
            if(child.type === 'text'){
              content += tree.children[i].value
            }
          }
        }
      }
  
      headings.push({heading, content, type: "Miscellaneous", language: lang})
  
      indexDocument({
        id: node.frontmatter.path,
        title: node.frontmatter.title,
        headings
      })

    }

  })

  result_tei.data.allCetei.nodes.filter(n => publishedTei.includes(n.parent.name.split('-')[0]) || n.parent.name === "entities").forEach(( node ) => {
      const filePath = `${node.parent.relativeDirectory}/${node.parent.name}`
      const dom = new JSDOM(node.prefixed, { contentType: "text/xml" })
      const doc = dom.window.document

      let headings = []
      let lang = ""

      if(filePath === 'shared/entities'){
        let teiElements = new Map();
        teiElements.set("tei-person", "Person")
        teiElements.set("tei-place", "Place")
        teiElements.set("tei-org", "Organization")
        teiElements.set("tei-bibl", "Bibl")

        processEntityTag("tei-listPerson", "tei-person", "tei-persName")
        processEntityTag("tei-listPlace", "tei-place", "tei-placeName")
        processEntityTag("tei-listOrg", "tei-org", "tei-orgName")
        processEntityTag("tei-listBibl", "tei-bibl", "tei-title")

        function processEntityTag (tagName,entityName, nameAttr){
          if(doc.querySelector(tagName)){
            const allElements = Array.from(doc.querySelector(tagName).children)

            for(element of allElements){
              if(element.tagName === entityName){
                element.querySelectorAll('tei-note').forEach(note =>{
                  headings.push({
                    heading: element.querySelector(nameAttr).textContent.replace(/\s+/g, ' ').trim(),
                    content: note.textContent.replace(/\s+/g, ' ').trim(),
                    type: teiElements.get(entityName),
                    language: (note.getAttribute("xml:lang") === "fr") ? "fr" : "en"})
                })
              }
            }
          }
        }
      }else{
        if(doc.querySelector('tei-body')){
          const allElements = doc.querySelector('tei-body').children
          lang = (doc.querySelector("tei-text").getAttribute("xml:lang") === "fr") ? "fr" : "en"

          for(element of allElements){
            if(element.tagName === 'tei-div'){
              getTEITextContent(element)
            }
          }
        }
        // else if(doc.querySelector('tei-noteGrp')){
        //   const allNotes = Array.from(doc.querySelector('tei-noteGrp').children)

        //   for(noteGrp of allNotes){
        //     noteGrp.querySelectorAll('tei-note').forEach(note => {
        //       headings.push({
        //         heading: noteGrp.getAttribute("xml:id"), 
        //         content: note.textContent.replace(/\s+/g, ' ').trim(), 
        //         type: "Note", 
        //         language: (note.getAttribute("xml:lang") === "fr") ? "fr" : "en"})
        //     })
        //   }
        // }
      }
      
      indexDocument({
        id: filePath,
        title: node.parent.name,
        headings
      })

      function getTEITextContent(element){
        if(element.querySelectorAll("tei-div").length > 0){
          element.querySelectorAll('tei-div').forEach(part =>{
            getTEITextContent(part)
          })
        }else{
          let content = element.textContent.trim()
          let heading = ""

          if(element.querySelector("tei-head")){
            heading = element.querySelector("tei-head").textContent.replace(/\s+/g, ' ').trim()
            content = content.substring(heading.length).replace(/\s+/g, ' ').trim()
          }

          headings.push({
            heading: heading, 
            content: content, 
            type: "Journal Content", 
            language: lang})
        }
      }

    })

  function getMarkdownTextContent(node){
    let heading = ""

    if(!node.children){
        heading = node.value
    }else{
      for(child of node.children){
        getMarkdownTextContent(child)
      }
    }
    return heading
  }

  function indexDocument(document) {
    const {title, headings} = document
  
    headings.forEach((headingEntry, index) => {
      search_index.add({
        id: `${document.id}-${index}`,
        title: title,
        language: headingEntry.language,
        type: headingEntry.type,
        heading: headingEntry.heading,
        content: headingEntry.content.replace(/\n+/g, ' ').trim()
      })
    })
  }

  return search_index
}

