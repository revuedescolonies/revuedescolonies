import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography } from "@mui/material"
import { navigate } from "gatsby"

interface occurenceObj {
    pageName:string
    pageLink:string
}

const navigateToPage =(pageLink:string) => {
  let link = "/"+pageLink;
  navigate(link);
}


const renderRefrences = (references:occurenceObj[]) => {
    
    return (
        <div>
            {references.map((refObj:occurenceObj) => (
                <p onClick={() => navigateToPage(refObj.pageLink)} style={{cursor:"pointer"}}>{refObj.pageName}</p>))}
        </div>
    )
}
export default function ReferencesPage(props:any) {
    return (
      <Layout location={"/appendix"}>
      <SEO title={"Appendix"} lang={"en"}/>
      <Container component="main" maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom={false} sx={{
            marginBottom: "2rem"
          }}>{props.pageContext.data.name}</Typography>
        {renderRefrences(props.pageContext.data.occurrences)}
      </Container>
      </Layout>
    )
}