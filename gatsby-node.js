exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  await makePages(createPage, reporter, graphql)
  await makeSynoptic(createPage, reporter, graphql)
  const searchIndex = await makeSearchIndex(reporter, graphql);
  if(searchIndex){
    searchData = searchIndex.search("THE NEED FOR EDUCATION IN THE COLONIES")
  }
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
  const lunr = require('lunr')
  const remark = (await import('remark')).remark

  const jsdom = require("jsdom")
  const { JSDOM } = jsdom

  const result_md = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)
  const result_synoptic = await graphql(`
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

  if (result_md.errors || result_synoptic.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }


  const searchIndex = lunr(function () {
    this.ref('path')
    this.field('title')
    this.field('heading')
    this.field('content')
    this.metadataWhitelist = ['position']
  
    result_md.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const tree = remark().parse(node.rawMarkdownBody)
      let heading = ""
      let content = ""

      for(let i = 0; i < tree.children.length; i++){
        if(tree.children[i].type === 'heading'){
          if(content !== ""){
            this.add({
              path: node.frontmatter.path,
              title: node.frontmatter.title,
              heading: heading,
              content: content
            })
          }
          
          content = ""
          heading = tree.children[i].children[0].value
        }else{
          if(tree.children[i].children){
            for(let x = 0; x < tree.children[i].children.length; x++){
              content += getParagraph(tree.children[i].children[x])
            }
          }else{
            if(tree.children[i].type === 'text'){
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

    result_synoptic.data.allCetei.nodes.forEach(( node ) => {
      const filePath = `${node.parent.relativeDirectory}/${node.parent.name}`
      let dom = new JSDOM(node.prefixed, { contentType: "text/xml" })

      let heading = ""
      let content = ""

      if(filePath === '/entities'){
        if(dom.window.document.querySelector('tei-listPerson')){
          const allElements = dom.window.document.querySelector('tei-listPerson').children
  
          for(let i = 0; i < allElements.length; i++){
            if(allElements[i].tagName === 'tei-person'){
              allElements[i].querySelectorAll('tei-note').forEach(element =>{
                content+=element.textContent
              })
              console.log(allElements[i].querySelector('tei-persName').textContent)
              self.add({
                path: filePath,
                title: node.parent.name,
                heading: allElements[i].querySelector('tei-persName').textContent,
                content: content
              })
              heading = ""
              content = ""
            }
          }
        }

        if(dom.window.document.querySelector('tei-listPlace')){
          const allElements = dom.window.document.querySelector('tei-listPlace').children
  
          for(let i = 0; i < allElements.length; i++){
            if(allElements[i].tagName === 'tei-place'){
              allElements[i].querySelectorAll('tei-note').forEach(element =>{
                content+=element.textContent
              })
              self.add({
                path: filePath,
                title: node.parent.name,
                heading: allElements[i].querySelector('tei-placeName').textContent,
                content: content
              })
              heading = ""
              content = ""
            }
          }
        }
  
        if(dom.window.document.querySelector('tei-listOrg')){
          const allElements = dom.window.document.querySelector('tei-listOrg').children
  
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

        if(dom.window.document.querySelector('tei-listBibl')){
          const allElements = dom.window.document.querySelector('tei-listBibl').children
  
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
        if(dom.window.document.querySelector('tei-body')){
          const allElements = dom.window.document.querySelector('tei-body').children
  
          for(let i = 0; i < allElements.length; i++){
            if(allElements[i].tagName === 'tei-div'){
              getParagraph2(allElements[i])
            }
          }
        }else if(dom.window.document.querySelector('tei-noteGrp')){
          self.add({
            path: filePath,
            title: node.parent.name,
            heading: "Note",
            content: dom.window.document.querySelector('tei-noteGrp').textContent
          })
        }
      }

      function getParagraph2(element){
        if(element.querySelectorAll("tei-div").length > 0){
          element.querySelectorAll('tei-div').forEach(part =>{
            getParagraph2(part)
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

  function getParagraph(node){
    let heading = ""

    if(!node.children){
        heading = node.value
    }else{
      for(let i = 0; i < node.children.length; i++){
        getParagraph(node.children[i])
      }
    }
    return heading
  }

  

  return searchIndex;
}