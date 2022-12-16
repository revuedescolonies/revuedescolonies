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
        htmlTitle: string
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

export default function PageTemplate({ location, data, pageContext }: Props) {
  const { modifiedTime } = pageContext
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title } = frontmatter

  const modifiedDate = new Date(modifiedTime)
  const date = `${modifiedDate.getDate()} ${
    months[modifiedDate.getMonth()]
  } ${modifiedDate.getFullYear()}`

  return (
    <Layout location={location.pathname}>
      <SEO title={title} />
      <Container component="main" maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom={false} dangerouslySetInnerHTML={
            {__html: data.site.siteMetadata.htmlTitle}
          } />
        <Typography variant="h4" component="h3" gutterBottom={false} sx={{
            marginBottom: "2em"
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
        htmlTitle
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
