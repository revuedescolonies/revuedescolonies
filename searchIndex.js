const jsdom = require("jsdom")
const {JSDOM} = jsdom;

async function makeIndexData(reporter, graphql) {
    const mdData = await graphql(`
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
    const xmlData = await graphql(`
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
  `);
  if (mdData.errors || xmlData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  console.log("data:")
  parseXMLData(xmlData)
  parseMarkDownData(mdData)
}

const parseXMLData = (xmlData) => {
    console.log(xmlData)
}

const parseMarkDownData = (mdData) => {
    console.log(mdData)
}

module.exports = makeIndexData;