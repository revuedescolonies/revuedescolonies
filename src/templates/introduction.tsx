import React from "react"

import SEO from "../components/seo"
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import theme from "../theme"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


interface Props {
  pageContext: {
    title?: string
    html: string
  },
  location: string
}

interface Author {
  first: string
  middle?: string
  last: string,
  affiliations: string[]
  orcid?: string
}

const useStyles = makeStyles({
  orcid: {
    marginLeft: ".5rem"
  },
  Content: {
    "& p": {
      textIndent: "2rem"
    },
    "& p:first-of-type, & h2 + p, & h3 + p, & h4 + p, & h5 + p, & h6 + p, & .noindent p": {
      textIndent: "0"
    },
    "& blockquote": {
      marginLeft: "5rem"
    },
    "& .footnote-backref": {
      marginLeft: ".75rem"
    }
  }
})

export default function Introduction({pageContext}: Props) {
  const { site, orcid } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            htmlTitle
            authors {
              first
              middle
              last
              affiliations
              orcid
            }
          }
        }
        orcid: allFile(filter: {relativePath: {eq: "orcid.png"}}) {
          nodes {
            childImageSharp {
              gatsbyImageData(width: 16)
            }
          }
        }
      }
    `
  )

  const classes = useStyles()

  const authors = site.siteMetadata.authors.map((a: Author) => (
    <React.Fragment key={a.last}>
      {a.first} {a.middle || ''} {a.last}, {a.affiliations.join(', ')}
      {a.orcid && 
        <a href={`https://orcid.org/${a.orcid}`} className={classes.orcid}>
          <GatsbyImage image={orcid.nodes[0].childImageSharp.gatsbyImageData} alt="ORCID logo"/>
        </a>
      }
      <br/>
    </React.Fragment>
  ))

  return (
    <Layout location="intro">
      <SEO title="Introduction" />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom={false} dangerouslySetInnerHTML={
            {__html: site.siteMetadata.htmlTitle}
          } />
          {pageContext.title ?
            <Typography variant="h4" component="h3" gutterBottom={false} dangerouslySetInnerHTML={
              {__html: pageContext.title}
            } />
          : ''}
          <Typography variant="h5" component="h4" gutterBottom={false} >
              Edited by {site.siteMetadata.authors.length > 1 ? <br/> : ''}
              {authors}
          </Typography>
          <Typography
            className={classes.Content}
            variant="body1"
            gutterBottom
            component="div"
            dangerouslySetInnerHTML={{ __html: pageContext.html }}
          />
          </Container>
        </ThemeProvider>
      </StyledEngineProvider>
    </Layout>
  );
}
