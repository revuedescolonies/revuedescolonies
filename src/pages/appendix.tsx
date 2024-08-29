import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography } from "@mui/material"
import { graphql, navigate } from "gatsby"

const placeHolders=['Persons','Places','Organization','Title']

interface indexData {
    allIndexData: {
      nodes: {
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
      }[]
    }
} 

interface objData {
  id:string,
  name:string,
  occurrences:{
    pageName:string,
    pageLink:string
  }[]
}[]

const renderIndexData = (data: indexData): JSX.Element => {
  const personObj = data.allIndexData.nodes[0].persons;
  const biblObj = data.allIndexData.nodes[0].bibl;
  const placesObj = data.allIndexData.nodes[0].places;
  const orgObj = data.allIndexData.nodes[0].org;
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

export default function IndexPage(props: any) {
  return (
    <Layout location={"/appendix"}>
    <SEO title={"Appendix"} lang={"en"}/>
    <Container component="main" maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom={false} sx={{
          marginBottom: "2rem"
        }}>Appendix</Typography>
      {renderIndexData(props.data)}
    </Container>
    </Layout>
  )

}

export const indexQuery = graphql`
  query MyQuery {
  allIndexData {
    nodes {
      bibl {
        id
        name
        occurrences {
          pageName,
          pageLink
        }
      }
      org {
        id
        name
        occurrences {
          pageName,
          pageLink
        }
      }
      persons {
        id
        name
        occurrences {
          pageName,
          pageLink
        }
      }
      places {
        id
        name
        occurrences {
          pageName,
          pageLink
        }
      }
    }
  }
}
`