const basePath = process.env.BASEPATH
const title = "Digital Scholarly Edition and Translation of the Revue des Colonies"
const htmlTitle = "The <em>Revue des Colonies</em>: a Digital Scholarly Edition and Translation"
const {addPtrNumbers, xinclude} = require('./scripts/transformers')

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    title,
    htmlTitle,
    description: `${title}. Edited by Maria Beliaeva Solomon.`,
    authors: [
      {
        "first": "Maria",
        "middle": "",
        "last": "Beliaeva Solomon",
        "affiliations": [
          "University of Maryland"
        ],
        orcid:"0000-0000-0000-0000"
      },
      {
        "first": "Raffaele",
        "middle": "",
        "last": "Viglianti",
        "affiliations": [
          "University of Maryland"
        ],
        orcid:"0000-0000-0000-0000"
      }
    ],
    repository: "https://github.com/revuedescolonies/revuedescolonies",
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'about',
        link: '/about'
      },
      {
        name: 'people',
        link: '/people'
      },
      {
        name: 'edition',
        link: '/toc'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-theme-ceteicean`,
      options: {
        applyBefore: [addPtrNumbers, xinclude],
        applyAfter: [],
        namespaces: {
          "http://www.tei-c.org/ns/1.0": "tei",
          "http://www.tei-c.org/ns/Examples": "teieg",
          "http://www.w3.org/2001/XInclude": "xi"
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `static/tei`,
      },
    },
    {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `pages`,
            path: `${__dirname}/src/contents`,
          },
        },
      
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Revue des Colonies`,
        short_name: `Revue des Colonies`,
        start_url: `/`,
        icon: `src/images/RdC-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
