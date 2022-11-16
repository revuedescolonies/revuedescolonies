#!/usr/bin/env node
// Resolve XInclude instructions

const {JSDOM} = require("jsdom")
const fs = require("fs")
const path = require('path')
const serialize = require("w3c-xmlserializer")
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const XINS = "http://www.w3.org/2001/XInclude"

const include = async (xmlString, basePath='', skipDecl=false) => {
  const jdom = new JSDOM(xmlString, {contentType: 'text/xml'})
  const doc = jdom.window.document

  for (const xi of Array.from(doc.getElementsByTagNameNS(XINS, 'include'))) {
    const href = xi.getAttribute('href')

    let toInclude = ''
    try {
      if (path.isAbsolute(href)) {
        toInclude = fs.readFileSync(href, 'utf-8')
      } else {
        toInclude = fs.readFileSync(path.join(basePath, href), 'utf-8')
      }
    } catch (err) {
      console.error(`Could not parse file to include at ${href}`, err)
    }

    const processed = await include(toInclude, basePath, true)

    const jdomInc = new JSDOM(processed, {contentType: 'text/xml'})
    const docInc = jdomInc.window.document

    xi.parentNode.replaceChild(docInc.documentElement, xi)

  }

  const result = serialize(doc)

  if (!skipDecl) {
    return `<?xml version="1.0" encoding="UTF-8"?>
${result}`
  }

  return result
  
}

if (argv.xml) {
  const inputPath = path.parse(argv.xml)
  const output = argv.output ? argv.output : `${path.join(inputPath.dir, inputPath.name)}-included.xml` 
  try {
    const xmlString = fs.readFileSync(argv.xml, 'utf-8')
    include(xmlString, inputPath.dir, false).then((result) => {
      fs.writeFileSync(output, result)
    })
  } catch (err) {
    console.error(`Could not parse ${argv.xml}`, err)
  }
}

exports.include = include