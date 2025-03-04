const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const serialize = require("w3c-xmlserializer");
const MiniSearch = require("minisearch");

// slugify(text) aims to convert the input string to all lowercase
// and remove html tags, replace spaces with '-', and remove
// special characters
function slugify(text) {
  return text.toLowerCase()
    .replace(/<[^>]+>/g, '') // remove html tags
    .replace(/ /g,'-') // spaces become -
    .replace(/-+/g, '-') // no repeated -
    .replace(/[^\p{L}-]+/gu,'') // remove all non word or - characters. 
}

// customizing new schemas for the program
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  // developing types

  // RepeatCount stores the section and instances
  // of each index value 

  // Occurence stores the name of the document, 
  // the total times an index value is repeated and 
  // and the breakdown of sections

  // index stores the id of the index value, the name
  // of it, and the number of occurences it has in 
  // the documents

  // indexData stores the index type of all the index 
  // values in 4 categories: person, place, places, bibl
  createTypes(`
    type RepeatCount {
      sectionId: String!
      section: String!
      count: Int!
    }

    type Occurence {
        pageName: String!
        pageLink: String!
        repeats: Int!
        sections: [RepeatCount!]! 
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

// getPublishedTEI(graphql) sends a graphql query where 
// data is requested from the collection of documents
// and maps the data with base path values
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

  await makeMap(createPage, reporter, graphql)
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
      // build internal TOC
      const teiDoc = new JSDOM(node.prefixed, {contentType:'text/xml'}).window.document;
      const toc = []
      for (const div of teiDoc.querySelectorAll(`tei-body tei-div[id]`)) {
        toc.push({
          id: div.getAttribute("id"),
          label: div.querySelector("tei-head").textContent
        })
      }
      createPage({
        path: name,
        component,
        context: {
          site: result.data.site,
          name,
          toc,
          prefixed: node.prefixed,
          elements: node.elements
        }
      })
    }
    
  }
}

// makeSearchPage() creates the search page that allows for users to search
// for values based on if the language of the site is english or french
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
  const homeComponent = require.resolve(`./src/templates/homePage.tsx`)
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
              date
              }
              parent {
              ... on File {
                sourceInstanceName
                dir
              }
            }
          }
        }
      }
    }
  `)
  const pageInfo = await graphql(`
    query siteInfoForPage {
      site {
        siteMetadata {
          htmlTitle {
            en
            fr
          }
        }
      }
      lastFr: allFile(
        filter: {sourceInstanceName: {eq: "news"}, dir: {regex: "/news\\/fr/"}}
        limit: 1
        sort: {childMarkdownRemark: {frontmatter: {date: DESC}}}
      ) {
        nodes {
          childrenMarkdownRemark {
            frontmatter {
              title
              date
            }
          }
        }
      }
      lastEn: allFile(
        filter: {sourceInstanceName: {eq: "news"}, dir: {regex: "/news\\/en/"}}
        limit: 1
        sort: {childMarkdownRemark: {frontmatter: {date: DESC}}}
      ) {
        nodes {
          childrenMarkdownRemark {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  if (result.errors|| pageInfo.errors ) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    
    if (node.parent.sourceInstanceName === "pages") {
      const lang = node.frontmatter.path.includes("/fr/") ? "fr" : "en"
      const context = {
        lang,
        title: node.frontmatter.title, 
        pagePath: node.frontmatter.path,
        html: node.html
      }
      // special case for homepage
      if (node.frontmatter.path ===  "/" || node.frontmatter.path ===  "/fr/") {
        createPage({
          path: node.frontmatter.path,
          component: homeComponent,
          context: {...context, ...{
            htmlTitle: pageInfo.data.site.siteMetadata.htmlTitle,
            latestEn: pageInfo.data.lastEn.nodes[0],
            latestFr: pageInfo.data.lastFr.nodes[0]
          }}
        })
      } else {
        createPage({
          path: node.frontmatter.path,
          component,
          context
        })   
      }
    } else if (node.parent.sourceInstanceName === "news") {
      const lang = node.parent.dir.split("/").pop()
      createPage({
        path: `/${lang}/${lang === "en" ? "news" : "nouvelles"}/${slugify(node.frontmatter.title.replace(/<[^>]+>/g, ""))}`,
        component: newsComponent,
        context: {
          content: node.html,
          title: node.frontmatter.title,
          createdTime: node.frontmatter.date,
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
      allFile(filter: {sourceInstanceName: {eq: "news"}}, sort: {childMarkdownRemark: {frontmatter: {date: DESC}}}) {
        group(field: {dir: SELECT}) {
          nodes {
            childMarkdownRemark {
              excerpt
              frontmatter {
                title
                author
                date
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
        createdTime: n.childMarkdownRemark.frontmatter.date,
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

async function makeMap(createPage, reporter, graphql) {
  const component = require.resolve(`./src/templates/map.tsx`)

  const result = await graphql(`
    query EntityDataQuery { 
      allFile(filter: {name: {eq: "entities"}}) {
        nodes {
          childCetei {
            prefixed
            elements
          }
        } 
      } 
    }  
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const entitiesNode = result.data.allFile.nodes[0].childCetei;

  // JSDOM
  const prefixedDoc = new JSDOM(entitiesNode.prefixed, { contentType: 'text/xml' }).window.document;

  const placeData = [];
  const geoData = [];
  // Get place from original 
  const placeElements = prefixedDoc.querySelectorAll('tei-place');
  const container = prefixedDoc.createElement("tei-div")

  placeElements.forEach((placeElement) => {
    // For each place in original 
    const xmlId = placeElement.getAttribute('xml:id'); 
    // parse geojson data 
    const geoElement = placeElement.querySelector('tei-geo[decls="#geojson"]');
    if (geoElement) {
      
      const snippet = JSON.parse(geoElement.textContent);
      // Add xml:id to the properties of the geojson snippet
      snippet.properties.id = xmlId;
      geoData.push(snippet)
      // Find the places with geodata in prefixed XML 
      container.appendChild(placeElement)
    }  
  });

  const contextGeoJSON = {
    type: "FeatureCollection",
    features: geoData.flatMap(snippet => snippet.features || [snippet]),
  };
  
  createPage({
    path: '/en/map',
    component,
    context: {
      geojson: contextGeoJSON, 
      language: 'en',
      
      elements: entitiesNode.elements,
      prefixed: serialize(container)
    }
  }) 

  createPage({
    path: '/fr/carte',
    component,
    context: {
      geojson: contextGeoJSON, 
      language: 'fr',

      elements: entitiesNode.elements,
      prefixed: serialize(container)
    }
  })
  
}

// makeIndices(create Page, reporter, graphql, publishedTei) creates the 
// index page
async function makeIndices(createPage, reporter, graphql, publishedTei) {
  // stores absolute paths of the indices.tsx and entities.tsx file
  const component = require.resolve(`./src/templates/indices.tsx`)
  const entityComponent = require.resolve(`./src/templates/entities.tsx`)

  // each entity tag is parsed in the entity list for the index
  const parseEntityTag = (entityDoc, tagName, entityName, nameAttr, idAttr) => {
    // finds the locations of the html tag passed in tagName in the document
    const lists = entityDoc.querySelector(tagName);

    // if the tag is located in the document
    if(lists) {
      // the instances of the html tag storing the entityName is found and stored
        const entities = lists.querySelectorAll(entityName)
        let entityArr = []
        // for each entity found
        entities.forEach((entity)=> {
            // the name and id is extracted from the entity
            let name = entity.querySelector(nameAttr).textContent
            let id = entity.getAttribute(idAttr)
            // the name and id values are added for each entity with an empty
            // list of occurences that will be populated later
            if(name && id) {
                entityArr.push({
                    id,
                    name: name.textContent,
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
    // stores the name of the document 
    const teiHeader = teiXMLDoc.querySelector("teiHeader")
    let pageName = "pagename"
    if(teiHeader) {
      const titleSmt = teiHeader.querySelector("titleStmt")
      pageName = titleSmt.querySelector("title").textContent
    }
    
    //entityEls = stores nodeList of all instances of the tagName (persName, placeName, etc)
    const entityEls = teiXMLDoc.querySelectorAll(tagName);
    
    // goes through each instance in the nodeList
    entityEls.forEach((tag) => {
      //stores value for the ref in the instance
      const refValue = tag.getAttribute(ref)
      if (refValue) {
        // if the ref exists, checks to see if the id of an entity matches the ref Value in the XML
        const entity = entities.find((entity)=>entity.id === refValue.substring(1))
        // use .filter() on this Array to find the current tag (use getAttribute to find the id)
        // if the entity does match
        if (entity) {
          const closestDiv = tag.closest("div")

          let section;
          let sectionId;
          if (closestDiv ) {
            if (closestDiv.getAttribute("xml:id")){
              sectionId = closestDiv.getAttribute("xml:id")
            }
            section = closestDiv.querySelector("head")
          }

          let sectionText;
          if (section) {
            const nVal = section.getAttribute("n")
            if (nVal) {
              sectionText = nVal
            } else {
              sectionText = section.textContent
            }
          };
          
          
          // the name of the section the index value is located in is stored
          // for each occurence of the index, checks to see if the name of the 
          // document is the same as the link of the page of the reference
          const sameDocOccurrence = entity.occurrences.find(o => o.pageLink === docName.name)

          if (sameDocOccurrence && sectionText) {
        
            // checks to see if the section is found in the sections subtype
            
            const sectionRepeat = sameDocOccurrence.sections.find((repeat) => repeat.section === sectionText);
            if (sectionRepeat) {
              // If the section is found, increase the count of repeats in that section
              sectionRepeat.count++;
              sameDocOccurrence.repeats = sameDocOccurrence.sections.reduce((total, section) => total + section.count, 0);
            } else {
              // If the section is not found, add a new RepeatCount for the section
              sameDocOccurrence.sections.push({ "sectionId": sectionId, "section": sectionText, "count": 1 });
              sameDocOccurrence.repeats = sameDocOccurrence.sections.reduce((total, section) => total + section.count, 0);
            }
            

          } else {
            // if the sameDocOccurrence is null, the occurences list is updated, 
            // to specfiy data of each occurence, storing the name of the document,
            // name of the parent node, and that the occurence is once
            entity.occurrences.push({
              "pageName": pageName,
              "pageLink": docName.name,
              "repeats": 1,
              "sections": [{
                "sectionId": sectionId,
                "section": sectionText,
                "count": 1
              }]
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
  // if the graphql query runs into errors, an error message is passed
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // fragment looks at entities stored in an xml document and then parses through all
  // other documents to locate instances of the entities 
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

  const editionStmtNode = result.data.allCetei.nodes.find(n => n.original.includes(`<editionStmt`));
  const editionStmtDoc = new JSDOM(editionStmtNode.original, {contentType:'text/xml'}).window.document;
  const authors = {}
  editionStmtDoc.querySelectorAll("name").forEach(n => {
    authors[n.getAttribute("xml:id")] = n.textContent
  })

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

  // entityDocPrefixed creates a new document for the entities
  const entityDocPrefixed = new JSDOM(entitiesNode.prefixed, {contentType:'text/xml'}).window.document;
  // for each entity
  for (const entity of Object.values(indexObj).flat()) {
    // get the name of the element 
    const entityEl = entityDocPrefixed.getElementById(entity.id);
    createPage({
      path: `/en/${slugify(entity.name)}`,
      component: entityComponent,
      context: {
        language: "en",
        data: entity,
        elements: entitiesNode.elements,
        prefixed: serialize(entityEl),
        authors
      }
    })
    createPage({
      path: `/fr/${slugify(entity.name)}`,
      component: entityComponent,
      context: {
        language: "fr",
        data: entity,
        elements: entitiesNode.elements,
        prefixed: serialize(entityEl),
        authors
      }
    })
  }

  // create index page in english
  createPage({
    path: `/en/index`,
    component,
    context: {
      language: "en",
      data: indexObj
    }
  })
  // create index page in french
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

  // If there is an error while running the graphql, alerts user
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

  // builds table of contents regarding the name of the documents 
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

