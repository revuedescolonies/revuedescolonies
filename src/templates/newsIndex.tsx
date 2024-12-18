import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugify } from "../utils/slugify";
import { Container, List, ListItem, ListItemText, Stack, Typography } from "@mui/material"
import { Link } from "gatsby";
import { makeDate } from "../utils/makeDate";

interface NewsProps {
  pageContext: {
    lang: Lang
    posts: {
      createdTime: string
      title: string
      excerpt: string
      author: string
    }[]
  }
}

export default function NewsTemplate({ pageContext }: NewsProps) {
  const { posts, lang } = pageContext

  const title = lang === "en" ? "News" : "Nouvelles"

  return (
    <Layout location={`/${lang}/${title.toLowerCase()}`}>
      <SEO title={title} lang={lang}/>
      <Container component="main" maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom={false} sx={{
          marginBottom: "2rem"
        }}>{title}</Typography>
        
        <List sx={{ width: '100%' }}>
          {posts.map((post)=> (
            <ListItem>
              <ListItemText primary={
                <Stack direction="column" spacing={1}>
                  <Typography variant="h3" component="h2">{
                    <Link to={`/${lang}/${title.toLowerCase()}/${slugify(post.title)}`} dangerouslySetInnerHTML={{__html: post.title}}/>
                  }</Typography>
                  <Typography variant="body2">
                  {makeDate(post.createdTime, lang)} — {post.author}
                  </Typography>
                </Stack>
              } secondary={
                  <Typography
                  variant="body2"
                  gutterBottom={true}
                  component="div"
                  sx={{borderTop: "1px solid #dedede", paddingTop: "1.25em"}}
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                } 
                sx={{"& .MuiListItemText-primary": {paddingBottom: 0}}}/>
            </ListItem>
          ))}
        </List>

        
      </Container>
    </Layout>
  )
}
