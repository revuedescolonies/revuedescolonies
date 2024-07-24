const lunr = require('lunr')

const makeIndexData = require('./searchIndex.js')
const { graphql } = require("gatsby");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  await makePages(createPage, reporter, graphql)
  await makeSynoptic(createPage, reporter, graphql)
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

async function getAllCETEI(reporter, graphql) {
  
  await makeIndexData(reporter,graphql)

}

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
          html
          frontmatter {
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


  const searchIndex = lunr(function () {
    this.ref('path')
    this.field('title')
    this.field('heading')
    this.field('content')
    this.metadataWhitelist = ['position']
  
    result_md.data.allMarkdownRemark.nodes.forEach((node) => {
      const tree = remark().parse(node.rawMarkdownBody)
      let heading = ""
      let content = ""

      for (const child of tree.children){
        if(child.type === 'heading'){
          if(content !== ""){
            this.add({
              path: node.frontmatter.path,
              title: node.frontmatter.title,
              heading: heading,
              content: content
            })
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

      this.add({
        path: node.frontmatter.path,
        title: node.frontmatter.title,
        heading: heading,
        content: content
      })
    })

    const self = this

    result_tei.data.allCetei.nodes.forEach(( node ) => {
      const filePath = `${node.parent.relativeDirectory}/${node.parent.name}`
      const dom = new JSDOM(node.prefixed, { contentType: "text/xml" })
      const doc = dom.window.document

      let heading = ""
      let content = ""

      if(filePath === '/entities'){

        function parseEntityTag (tagName,entityName,nameAttr,idAttr){
          if(doc.querySelector(tagName)){
            const allElements = Array.from(doc.querySelector(nameAttr).children)
            for(element of allElements){
              if(element.tagName === entityName){
                element.querySelectorAll('tei-note').forEach(note =>{
                  content += note.textContent
                })

                self.add({
                  path: filePath,
                  title: node.parent.name,
                  heading: element.querySelector('tei-persName').textContent,
                  content: content
                })
                heading = ""
                content = ""
              }
            }
          }
        }
  
        if(doc.querySelector('tei-listOrg')){
          const allElements = doc.querySelector('tei-listOrg').children
  
          for(let i = 0; i < allElements.length; i++){
            if(allElements[i].tagName === 'tei-org'){
              allElements[i].querySelectorAll('tei-note').forEach(element =>{
                content+=element.textContent
              })
              self.add({
                path: filePath,
                title: node.parent.name,
                heading: allElements[i].querySelector('tei-orgName').textContent,
                content: content
              })
              heading = ""
              content = ""
            }
          }
        }

        if(doc.querySelector('tei-listBibl')){
          const allElements = doc.querySelector('tei-listBibl').children
  
          for(let i = 0; i < allElements.length; i++){
            if(allElements[i].tagName === 'tei-bibl'){
              allElements[i].querySelectorAll('tei-note').forEach(element =>{
                content+=element.textContent
              })
              self.add({
                path: filePath,
                title: node.parent.name,
                heading: allElements[i].querySelector('tei-title').textContent,
                content: content
              })
              heading = ""
              content = ""
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
          self.add({
            path: filePath,
            title: node.parent.name,
            heading: "Note",
            content: doc.querySelector('tei-noteGrp').textContent
          })
        }
      }

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

            self.add({
              path: filePath,
              title: node.parent.name,
              heading: heading,
              content: content
            })
          }else{
            self.add({
              path: filePath,
              title: node.parent.name,
              content: content
            })
          }
        }
      }

    })

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

  

  return searchIndex;
}