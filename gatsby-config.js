const basePath = process.env.BASEPATH
const title = "Revue des Colonies"
const htmlTitle = title

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    title,
    htmlTitle,
    description: `Digital Edition of Revue des Colonies`,
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
        name: 'edition',
        link: '/example' // This needs to match the filename of the TEI
      },
    ]
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-material-ui`,
    `gatsby-theme-ceteicean`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
