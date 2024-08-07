const lunr = require('lunr')
/*
const makeIndexData = require('./searchIndex.js')
const { graphql } = require("gatsby");
*/
const jsdom = require("jsdom");
const MiniSearch = require('minisearch');
const { JSDOM } = jsdom;

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  await makePages(createPage, reporter, graphql)
  await makeSynoptic(createPage, reporter, graphql)
  /*
  await getAllCETEI(reporter,graphql)
  */

  
  let search_index = await makeSearchIndex(reporter, graphql)

  search_index.searchWithHeadings = function(searchTerm) {
    const results = this.search(searchTerm)
    const newResults = []
    results.forEach(result =>{
      newResults.push({
        score: result.score,
        title: result.title,
        heading: result.heading,
      })
    })
    return newResults
  }

  const searchTerm = ''
  const searchResults = search_index.searchWithHeadings(searchTerm)
  console.log(searchResults)
}

async function makePages(createPage, reporter, graphql) {
  const component = require.resolve(`./src/templates/pages.tsx`)

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              path
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
    createPage({
      path: node.frontmatter.path,
      component,
      context: {
        html: node.html,
        title: node.frontmatter.title,
        lang: node.frontmatter.path === "/" ? "en" : "fr"
      }
    })   
  })
}

/*
async function getAllCETEI(reporter, graphql) {
  await makeIndexData(reporter,graphql)
}
*/

async function makeSynoptic(createPage, reporter, graphql) {
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
    const section = result.data.allCetei.nodes.reduce((acc, node) => {
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
        acc.prefixed += `<tei-standOff>${backs.join(" ")}</tei-standOff></tei-TEI>`
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

async function makeSearchIndex(reporter, graphql){
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
    storeFields: ['title', 'heading'], // Fields to return with search results
    searchOptions: {
      prefix: true,
      fuzzy: 0.2
    },
    boost:{heading: 2}
  });

  result_md.data.allMarkdownRemark.nodes.forEach((node) => {
    const tree = remark().parse(node.rawMarkdownBody)
    let heading = ""
    let content = ""
    let headings = []

    for (const child of tree.children){
      if(child.type === 'heading'){
        if(content !== ""){
          headings.push({heading: heading, content: content})
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

    headings.push({heading: heading, content: content})

    indexDocument({
      id: node.frontmatter.path,
      title: node.frontmatter.title,
      headings: headings
    })
  })

  result_tei.data.allCetei.nodes.forEach(( node ) => {
      const filePath = `${node.parent.relativeDirectory}/${node.parent.name}`
      const dom = new JSDOM(node.prefixed, { contentType: "text/xml" })
      const doc = dom.window.document

      let heading = ""
      let content = ""
      let headings = []

      if(filePath === '/entities'){
        parseEntityTag("tei-listPerson", "tei-person", "tei-persName")
        parseEntityTag("tei-listPlace", "tei-place", "tei-placeName")
        parseEntityTag("tei-listOrg", "tei-org", "tei-orgName")
        parseEntityTag("tei-listBibl", "tei-bibl", "tei-title")

        function parseEntityTag (tagName,entityName, nameAttr){
          if(doc.querySelector(tagName)){
            const allElements = Array.from(doc.querySelector(tagName).children)
            for(element of allElements){
              if(element.tagName === entityName){
                element.querySelectorAll('tei-note').forEach(note =>{
                  content += note.textContent
                })
                headings.push({heading: element.querySelector(nameAttr).textContent, content: content})
                heading = ""
                content = ""
              }
            }
          }
        }
      }else{
        if(doc.querySelector('tei-body')){
          const allElements = doc.querySelector('tei-body').children
  
          for(element of allElements){
            if(element.tagName === 'tei-div'){
              getTEITextContent(element)
            }
          }
        }else if(doc.querySelector('tei-noteGrp')){
          headings.push({heading: "Note", content: doc.querySelector('tei-noteGrp').textContent})
        }
      }

      indexDocument({
        id: filePath,
        title: node.parent.name,
        headings: headings
      })

      function getTEITextContent(element){
        if(element.querySelectorAll("tei-div").length > 0){
          element.querySelectorAll('tei-div').forEach(part =>{
            getTEITextContent(part)
          })
        }else{
          let content = element.textContent.trim()

          if(element.querySelector("tei-head")){
            let heading = element.querySelector("tei-head").textContent
            content = content.substring(heading.length)
            headings.push({heading: heading, content: content})
          }else{
            headings.push({heading: "", content: content})
          }
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
    const { title, headings } = document;
  
    headings.forEach((headingEntry, index) => {
      search_index.add({
        id: `${document.id}-${index}`, // Unique ID for each heading entry
        title: title,
        heading: headingEntry.heading,
        content: headingEntry.content
      })
    })
  }

  return search_index
}