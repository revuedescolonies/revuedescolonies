const basePath = process.env.BASEPATH
const customTitle = {
  en: "The Revue des Colonies: a Digital Scholarly Edition and Translation",
  fr: "La Revue des Colonies: ..."
}
const htmlTitle = {
  en: "The <em>Revue des Colonies</em>: a Digital Scholarly Edition and Translation",
  fr: "La <em>Revue des Colonies</em>:"
}
const {addPtrNumbers, xinclude} = require('./scripts/transformers')

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    customTitle,
    htmlTitle,
    desc: {
      en: `${customTitle.en}. Edited by Maria Beliaeva Solomon.`,
      fr: `${customTitle.fr}. ... Maria Beliaeva Solomon.`
    },
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
        en: {
          name: 'home',
          link: '/'
        },
        fr: {
          name: 'accueil',
          link: '/fr'
        }
      },
      {
        en: {
          name: 'about',
          link: '/en/about'
        },
        fr: {
          name: 'à propos',
          link: '/fr/àpropos'
        }
      },
      {
        en: {
          name: 'people',
          link: '/en/people'
        },
        fr: {
          name: 'équipe',
          link: '/fr/équipe'
        }
      },
      {
        en: {
          name: 'edition',
          link: '/en/toc'
        },
        fr: {
          name: 'édition',
          link: '/fr/sommaire'
        }
      }
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
