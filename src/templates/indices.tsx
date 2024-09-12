import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography } from "@mui/material"
import { navigate } from "gatsby"

const placeHolders=['Persons','Places','Organization','Title']

interface indexData {
  bibl:{
    id:string
    name:string 
    occurrences:{
      pageName:string,
      pageLink:string
    }[]
  }[]
  org:{
    id:string
    name:string 
    occurrences:{
      pageName:string,
      pageLink:string
    }[]
  }[]
  places:{
    id:string
    name:string 
    occurrences:{
      pageName:string,
      pageLink:string
    }[]
  }[]
  persons:{
    id:string
    name:string 
    occurrences:{
      pageName:string,
      pageLink:string
    }[]
  }[]
} 

interface objData {
  id:string,
  name:string,
  occurrences:{
    pageName:string,
    pageLink:string
  }[]
}[]

interface Props {
  pageContext: {
    data: indexData
    language: "en" | "fr"
  }
}

const renderIndexData = (data: indexData): JSX.Element => {
  const personObj = data.persons;
  const biblObj = data.bibl;
  const placesObj = data.places;
  const orgObj = data.org;
  return (
    <div>
    {placeHolders.map((ele)=>(
      <div>
      <h3>{ele}</h3>
      {ele==="Persons" ? (
        renderNames(personObj)
      ):<></>}
      {ele==="Places" ? (
        renderNames(placesObj)
      ):<></>}
      {ele==="Organization" ? (
        renderNames(orgObj)
      ):<></>}
      {ele==="Title" ? (
        renderNames(biblObj)
      ):<></>}
      </div>
    ))}
    </div>
  )
}

const navigateToReferences =(referenceData:any) => {
  navigate("/references", {
    state:referenceData
  });
}
const renderNames = (data:Array<objData>): JSX.Element => {
  return (
    <div>
    {data.map((obj)=> (
      <p onClick={() => navigateToReferences(obj.occurrences)} style={{cursor:"pointer"}}>{obj.name}</p>
    ))}
    </div>
  )
}

export default function IndexPage({pageContext}: Props) {
  const {data, language} = pageContext; 
  return (
    <Layout location={`/${language}/index`}>
    <SEO title={"Indices"} lang={language}/>
    <Container component="main" maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom={false} sx={{
          marginBottom: "2rem"
        }}>{language === "en" ? "Indices" : "Index"}</Typography>
      {renderIndexData(data)}
    </Container>
    </Layout>
  )

}