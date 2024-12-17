import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import months from "../utils/months"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography } from "@mui/material"
import Toc from "../components/toc"

interface Props {
  pageContext: {
    lang: Lang
    title: string
    pagePath: string
    html: string
  }
}

export default function PageTemplate({ pageContext }: Props) {
  const siteData = useStaticQuery(graphql`
    query siteInfoForPage {
      site {
        siteMetadata {
          htmlTitle {
            en
            fr
          }
        }
      }
    }
  `)
  const { html, title, pagePath } = pageContext

  let curLang: Lang = pageContext.lang

  const homePageTitle = pagePath === "/" || pagePath.match(/fr\/?$/) ? <Typography variant="h3" component="h1" gutterBottom={false} dangerouslySetInnerHTML={
    {__html: siteData.site.siteMetadata.htmlTitle[curLang]}
  } /> : ""

  const divGen = ["/en/toc/", "/fr/sommaire/"].includes(pagePath) && <Toc lang={curLang}/>

  return (
    <Layout location={pagePath}>
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
        {divGen}
        {/* <div>Last updated: {date}</div> */}
      </Container>
    </Layout>
  )
}
