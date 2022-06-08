const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  await makePages(createPage, graphql)
}

async function makePages(createPage, graphql) {
  const pageTemplate = path.resolve(`src/templates/pages.tsx`)

  const result = await graphql(`
    query {
      allFile(
        filter: {sourceInstanceName: {eq: "pages"}}
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
                path
              }
          }
          mtime
        }
      }
    }    
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allFile.nodes.forEach((node) => {
    createPage({
      path: node.childMarkdownRemark.frontmatter.path,
      component: pageTemplate,
      context: {
        modifiedTime: node.mtime
      },
    })
  })
}
