const basePath = process.env.BASEPATH
const title = "Selections from the Revue des Colonies"
const htmlTitle = "Selections from the <em>Revue des Colonies</em>"
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
    repository: "https://github.com/mashabelsol/revuedescolonies",
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
        name: `Scholarly Editing`,
        short_name: `Scholarly Editing`,
        start_url: `/`,
        icon: `src/images/se-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
