/*
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const lunr = require('lunr');

const indexObj = {
    "persons":[],
    "org":[],
    "places":[],
    "bibl":[]
}

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
                original
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

const parseXMLData = (xmlData) => {

    const entitiesXML = xmlData.data.allCetei.nodes.filter((node) => {
        const filePath = `${node.parent.relativeDirectory}/${node.parent.name}`;
        return filePath==="/entities";
    })

    const teiXml = xmlData.data.allCetei.nodes.filter((node) => {
        const filePath = `${node.parent.relativeDirectory}/${node.parent.name}`;
        return filePath!="/entities";
    })

    entitiesXML.forEach((entity) => {
        const entityString = new JSDOM(entity.original, {contentType:'text/xml'}).window.document;
        indexObj.persons  = parseEntityTag(entityString,"listPerson","person","persName","xml:id")
        indexObj.places   = parseEntityTag(entityString,"listPlace","place","placeName","xml:id")
        indexObj.org      = parseEntityTag(entityString,"listOrg","org","orgName","xml:id")
        indexObj.bibl     = parseEntityTag(entityString,"listBibl","bibl","title","xml:id");
    })

    teiXml.forEach((teiDoc) => {
        const tei = new JSDOM(teiDoc.original, {contentType:'text/xml'}).window.document;
        if(tei) {
            findOccurences(tei,indexObj.persons,"persName","ref")
            findOccurences(tei,indexObj.places,"placeName","ref")
            findOccurences(tei,indexObj.org,"orgName","ref")
        }
    })
}

//Helper Functions 
//For Parsing EntitiesXML file 
const parseEntityTag = (entityString,tagName,entityName,nameAttr,idAttr) => {
    const lists = entityString.querySelector(tagName);

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
const findOccurences = (teiXMLString, entities, tagName, ref) => {
    const teiDoc = teiXMLString.querySelector("TEI")
    let occurenceObj = {
        "teiID": "ABC"
    }
    if(teiXMLString.querySelectorAll(tagName)) {
        teiXMLString.querySelectorAll(tagName).forEach((tag) => {
            let refValue = tag.getAttribute(ref)
            if(refValue) {
                refValue = refValue.substring(1)
                const entity = entities.find((entity)=>entity.id === refValue)
                if(entity) {
                    entity.occurrences.push(occurenceObj)
                }
            }
        })
    }
}

module.exports = makeIndexData;
*/
