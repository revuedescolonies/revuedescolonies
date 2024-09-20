import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography } from "@mui/material"
import GlobeMap from "../components/GlobeMap"


export default function MapPage() {
    return (
        <Layout location={location.pathname}>
          <SEO title={'map'} lang={'en'}/>
          <Container component="main" maxWidth="md">
            <GlobeMap />
          </Container>
        </Layout>
      )


}