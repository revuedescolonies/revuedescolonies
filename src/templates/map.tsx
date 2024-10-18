import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "@mui/material"
import {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import Renderer from "gatsby-theme-ceteicean/src/components/Renderer";
import GlobeMap from "../components/GlobeMap"


interface Props {
    geojson: any; 
    language: string;
}

export default function MapPage({pageContext}: Props) {
  const { geojson, language, prefixed, elements} = pageContext; 

  return (
      <Layout location={location.pathname}>
          <SEO title={'map'} lang={language}/>
          <Container component="main" maxWidth="md">
              <GlobeMap geojson={geojson} /> {}
          </Container>
      </Layout>
  );
}