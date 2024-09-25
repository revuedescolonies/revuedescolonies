import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography } from "@mui/material"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout location="404">
    <SEO title="404: Not found" lang="en"/>
    <Container>
      <Typography component="h2" variant="h1">PAGE NOT FOUND | PAGE INTROUVABLE</Typography>

      <Typography component="h3" variant="h5"><Link to="/">Home</Link></Typography>
    </Container>
  </Layout>
)

export default NotFoundPage
