const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const lunr = require('lunr');

async function makeIndexData(reporter, graphql) {
  const mdData = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          rawMarkdownBody
          frontmatter {
            path
          }
        }
      }
    }
  `);
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
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  console.log("Markdown Data:", mdData);
  console.log("XML Data:", xmlData);

  parseXMLData(xmlData);

  const mdSearchIndex = await parseMarkDownData(mdData);
  console.log(mdSearchIndex.search("first periodical in France to be directed by people of color"));
}

const parseXMLData = (xmlData) => {
  
}

const parseMarkDownData = async (mdData) => {
  const remark = (await import('remark')).remark;
  const remarkParse = (await import('remark-parse')).default;

  const md_search_index = lunr(function () {
    this.ref('path');
    this.field('title');
    this.field('heading');
    this.field('content');
    this.metadataWhitelist = ['position'];

    mdData.data.allMarkdownRemark.nodes.forEach((node) => {
      const tree = remark().use(remarkParse).parse(node.rawMarkdownBody);
      let heading = "";
      let content = "";

      for (const child of tree.children) {
        if (child.type === 'heading') {
          if (content !== "") {
            this.add({
              path: node.frontmatter.path,
              title: node.frontmatter.title,
              heading: heading,
              content: content
            });
          }

          content = "";
          heading = child.children[0]?.value || "";
        } else {
          content += getMarkdownTextContent(child);
        }
      }

      this.add({
        path: node.frontmatter.path,
        title: node.frontmatter.title,
        heading: heading,
        content: content
      });
    });
  });

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

  return md_search_index;
}

module.exports = makeIndexData;
