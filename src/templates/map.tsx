import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "@mui/material"
import GlobeMap from "../components/GlobeMap"

interface Props {
    geojson: any; 
    language: string;
}

export default function MapPage({pageContext}: Props) {
  const { geojson, language } = pageContext; 

  return (
      <Layout location={location.pathname}>
          <SEO title={'map'} lang={language}/>
          <Container component="main" maxWidth="md">
              <GlobeMap geojson={geojson} /> {}
          </Container>
      </Layout>
  );
}