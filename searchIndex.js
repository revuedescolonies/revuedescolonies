const jsdom = require("jsdom")
const {JSDOM} = jsdom;
const crypto = require('crypto')

const indexObj = {
    "persons":[],
    "org":[],
    "places":[],
    "bibl":[]
}

async function makeIndexData(actions,reporter, graphql) {
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
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  parseXMLData(xmlData)
  parseMarkDownData(mdData)
  writeDataToGraphQLLayer(actions);
}

const writeDataToGraphQLLayer =  (actions) => {
    const { createNode } = actions;
    const contentDigest = crypto.createHash('md5').update(JSON.stringify(indexObj)).digest('hex');
    
    
    createNode({
        ...indexObj,
        id: "allIndexData1",
        parent: null,
        children:[],
        internal: {
            type: 'indexData',
            contentDigest: contentDigest,
        }
    })

    
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
        const docName = teiDoc.parent;
        if(tei) {
            findOccurences(tei,indexObj.persons,"persName","ref",docName)
            findOccurences(tei,indexObj.places,"placeName","ref",docName)
            findOccurences(tei,indexObj.org,"orgName","ref",docName)
            findOccurences(tei,indexObj.bibl,"title","ref",docName)
        }
    })
}

const parseMarkDownData = (mdData) => {

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
const findOccurences = (teiXMLString, entities, tagName, ref,docName) => {
    const teiHeader = teiXMLString.querySelector("teiHeader")
    let pageName = "pagename"
    if(teiHeader) {
        let titleSmt = teiHeader.querySelector("titleStmt")
        pageName = titleSmt.querySelector("title").textContent
    }
    let occurenceObj = {
        "pageName": pageName,
        "pageLink": docName.name
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