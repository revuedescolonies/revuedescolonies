import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import GlobeMap from "../components/GlobeMap";
import { Container } from "@mui/material";



interface Props {
  pageContext:{
    geojson: any; 
    language: "en" | "fr";
    elements: string[];
    prefixed: string;
  }
}

export default function MapPage({pageContext}: Props) {
  const { geojson, language, elements, prefixed} = pageContext; 
  return (
      <Layout location={location.pathname}>
          <SEO title={'map'} lang={language}/>
          <Container component="main" maxWidth="md">
            <GlobeMap geojson={geojson} elements={elements} prefixed={prefixed} language={language}/> {}
          </Container>
      </Layout>
  )
} 