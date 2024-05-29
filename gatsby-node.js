exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  await makePages(createPage, reporter, graphql)
  await makeSynoptic(createPage, reporter, graphql)
  const searchIndex = await makeSearchIndex(reporter, graphql);
  if(searchIndex){
    searchData = searchIndex.search("Technical Director")
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


    result_synoptic.data.allCetei.nodes.forEach(( node ) => {
      const filePath = `${node.parent.relativeDirectory}/${node.parent.name}`

      this.add({
        path: filePath,
        title: node.parent.name,
      })
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