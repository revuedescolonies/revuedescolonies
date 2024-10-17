const path = require('path')
const {JSDOM} = require("jsdom")
const serialize = require("w3c-xmlserializer")
const fs = require("fs")

const {include} = require('./xinclude')

/* 
obj = {
  original: string
  prefixed: string,
  elements: string[]
}
*/

const TEINS = "http://www.tei-c.org/ns/1.0"

const addPtrNumbers = (obj) => {
  const newObj = Object.assign({}, obj)
  const {original} = newObj
  const jdom = new JSDOM(original, {contentType: 'text/xml'})
  const doc = jdom.window.document

  let start = 0

  const m = original.match(/RdCv2n1-(en|fr)/)

  // read RdCv1n1 to get last note number
  if (m) {
    const vol1 = fs.readFileSync(path.join(__dirname, `../static/data/tei/RdCv1n1-${m[1]}.xml`), 'utf-8')
    const jdomVol1 = new JSDOM(vol1, {contentType: 'text/xml'})
    const vol1Doc = jdomVol1.window.document
    for (const tr of Array.from(vol1Doc.getElementsByTagNameNS(TEINS, "ptr")).entries()) {
      start += 1
    }
  }

  for (const [i, ptr] of Array.from(doc.getElementsByTagNameNS(TEINS, "ptr")).entries()) {
    ptr.setAttribute("n", start + i + 1)
  }

  newObj.original = serialize(doc)

  return newObj
}

const xinclude = async (obj) => {
  const newObj = Object.assign({}, obj)
  const {original} = newObj

  newObj.original = await include(original, path.join(__dirname, '../static/data/tei/'))

  return newObj
}


exports.xinclude = xinclude
exports.addPtrNumbers = addPtrNumbers
