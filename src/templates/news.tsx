import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Grid2, Typography } from "@mui/material"
import { slugify } from "../utils/slugify"
import { makeDate } from "../utils/makeDate"
import useMediaQuery from "@mui/material/useMediaQuery"
import theme from "../theme"

interface NewsProps {
  pageContext: {
    createdTime: string
    title: string
    content: string
    author: string
    lang: Lang
  }
}

const newsStyles = {
  textAlign: "justify",
  "& video": {
    width: "33%"
  },
}

const newStyleSmall = {
  "& video": {
    width: "100%"
  }
}

export default function NewsTemplate({ pageContext }: NewsProps) {
  const { createdTime, title, content, lang, author } = pageContext

  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'))

  const date = makeDate(createdTime, lang)

  const name = lang === "en" ? "news" : "nouvelles"

  return (
    <Layout location={`/${lang}/${name}/${slugify(title)}`}>
      <SEO title={title} lang={lang}/>
      <Container component="main" maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom={false} sx={{
          marginBottom: "2rem"
        }} dangerouslySetInnerHTML={
          {__html: title}
        } />
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Typography variant="body2">{author}</Typography>
          </Grid2>
          <Grid2 size={6} sx={{textAlign: "right"}}>
            <Typography variant="body2">{date}</Typography>
          </Grid2>
        </Grid2>
        <Typography
          variant="body1"
          gutterBottom={true}
          component="div"
          sx={Object.assign({}, newsStyles, isScreenSmall ? newStyleSmall : {})}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </Layout>
  )
}
