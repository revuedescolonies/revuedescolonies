import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid2, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { makeDate } from "../utils/makeDate"
import { slugify } from "../utils/slugify"

interface PostInfo {
  childrenMarkdownRemark: {
    excerpt: string
    frontmatter: {
      title: string
      date: string
    }
  }[]
}

interface Props {
  pageContext: {
    lang: Lang
    title: string
    pagePath: string
    html: string
    htmlTitle: {
      en: string
      fr: string
    }
    latestEn: PostInfo
    latestFr: PostInfo
  }
}

export default function HomePageTemplate({ pageContext }: Props) {
  const { html, pagePath, htmlTitle, latestEn, latestFr } = pageContext

  
  let curLang: Lang = pageContext.lang
  const latestPost = curLang === "en" ? latestEn : latestFr
  const postTitle = latestPost.childrenMarkdownRemark[0].frontmatter.title

  return (
    <Layout location={pagePath}>
      <SEO title={curLang === "en" ? "Home" : "Accueil"} lang={curLang}/>
      <Container component="main" maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom dangerouslySetInnerHTML={
          {__html: htmlTitle[curLang]}
        } />
        <Grid2 container gap={3}>
          <Grid2 size={{xs: 12, md: 8}} >
            <Typography
              variant="body1"
              gutterBottom={true}
              component="div"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Grid2>
          <Grid2 size={{xs: 12, md: 3}} display="flex" alignItems={"center"} sx={{flexDirection: "column"}}>
            <Card sx={{marginBottom: "2em", maxWidth: 230}} >
              <CardMedia
                sx={{ height: 310, overflow: "hidden", "& img": {width: "250px !important", objectPosition: "0 -50px"}}}
              >
                <StaticImage alt="pages from the Revue des Colonies" src="../images/RevueCover.jpg"  />
              </CardMedia>
              <CardContent>
                <Button size="large" href={`/${curLang}/${curLang === "en" ? "toc" : "sommaire"}/`}>
                  {curLang == "en" ? "Read the Edition" : "Lire l'édition"}
                </Button>
              </CardContent>
            </Card>
            <Card sx={{marginBottom: "2em", maxWidth: 230}}>
              <CardMedia
                sx={{ height: 140, overflow: "hidden", "& img": {width: "250px !important", objectPosition: "0 400%"}}}
              >
                <StaticImage alt="pages from the Revue des Colonies" src="../images/news/colloquium.jpg"  />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {curLang == "en" ? "Latest News" : "Dernières nouvelles"}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}
                  dangerouslySetInnerHTML={{ __html: postTitle }}
                />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {makeDate(latestPost.childrenMarkdownRemark[0].frontmatter.date, curLang)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={`/${curLang}/${curLang === "en" ? "news" : "nouvelles"}/${slugify(postTitle)}`}>
                  {curLang == "en" ? "Read More" : "En savoir plus"}
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Layout>
  )
}
