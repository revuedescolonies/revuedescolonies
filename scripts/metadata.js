#!/usr/bin/env node

const fs = require('fs')
const config = require('../gatsby-config')

const metadata = {
  title: config.siteMetadata.title,
  htmlTitle: config.siteMetadata.htmlTitle,
  subtitle: config.siteMetadata.subtitle  || '',
  authors: config.siteMetadata.authors,
  authors_struct: config.siteMetadata.authors_struct,
  doi: config.siteMetadata.doi,
  issue: config.siteMetadata.issue,
  group_order: config.siteMetadata.group_order
}

fs.writeFile('public/metadata.json', JSON.stringify(metadata, null, 2), (err) => {
  if (err) {
    throw err
  }
})