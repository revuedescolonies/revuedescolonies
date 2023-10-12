import React from "react"
import { graphql } from "gatsby"
import months from "../utils/months"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography } from "@mui/material"

interface Props {
  location: any
  data: {
    site: {
      siteMetadata: {
        menuLinks: {
          en: {name:string, link: string}
          fr: {name:string, link: string}
        }[]
        htmlTitle: {en:string, fr: string}
      }
    }
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
      }
      html: string
    }
  }
  pageContext: {
    modifiedTime: string
  }
}

type Lang = "en" | "fr"

export default function PageTemplate({ location, data, pageContext }: Props) {
  const { modifiedTime } = pageContext
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title } = frontmatter

  const modifiedDate = new Date(modifiedTime)
  const date = `${modifiedDate.getDate()} ${
    months[modifiedDate.getMonth()]
  } ${modifiedDate.getFullYear()}`

  const loc = decodeURIComponent(location.pathname) 
  let curLang: Lang = "en" 
  
  for (const ml of data.site.siteMetadata.menuLinks) {
    if (ml["fr"].link === loc) curLang = "fr"
    console.log(ml["fr"].link, loc, curLang)
  }

  const homePageTitle = location.pathname === "/" || location.pathname.match(/fr\/?$/) ? <Typography variant="h3" component="h1" gutterBottom={false} dangerouslySetInnerHTML={
    {__html: data.site.siteMetadata.htmlTitle[curLang]}
  } /> : ""

  return (
    <Layout location={location.pathname}>
      <SEO title={title} lang={curLang}/>
      <Container component="main" maxWidth="md">
        {homePageTitle}
        <Typography variant="h3" component="h1" gutterBottom={false} sx={{
            marginBottom: "2rem"
          }}>{title}</Typography>
        <Typography
          variant="body1"
          gutterBottom={true}
          component="div"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {/* <div>Last updated: {date}</div> */}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        menuLinks {
          en {
            link
          }
          fr {
            link
          }
        }
        htmlTitle {
          en
          fr
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`
