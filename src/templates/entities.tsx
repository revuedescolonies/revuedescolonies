import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Container, List, ListItem, ListItemText, Typography } from "@mui/material"
import { Link } from "gatsby"
import {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import Renderer from "gatsby-theme-ceteicean/src/components/Renderer";
import Q from "../gatsby-theme-ceteicean/components/Q";
import Graphic from "../gatsby-theme-ceteicean/components/Graphic";
import { Ref, SafeUnchangedNode } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors";
import { slugify } from "../utils/slugify";
import Birth from "./tei/Birth";

interface occurenceObj {
    pageName: string
    pageLink: string
    repeats: number
}

interface Props {
  pageContext: {
    language: Lang
    data: {
      id: string,
      name: string,
      occurrences: occurenceObj[]
    }
    elements: string[]
    prefixed: string
  }
}

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[],
  curLang: string
}


const renderRefrences = (references:occurenceObj[], id: string) => {
    
    return (
      <List>
        {references.map((refObj:occurenceObj) => (
          <ListItem>
            <ListItemText>
              <Link to={`/${refObj.pageLink}?showEntities=${id}`}>{refObj.pageName} ({refObj.repeats})</Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    )
}

const Title = (props: TEIProps) => {
  const el = props.teiNode as Element
  const lang = el.getAttribute("lang")
  if (lang !== props.curLang) return null;
  return <Typography variant="h3" component="h1" gutterBottom={false} sx={{
    marginBottom: "2rem"
  }}><SafeUnchangedNode {...props}/></Typography>
}

export default function ReferencesPage({pageContext}: Props) {
  const {language, prefixed, elements, data} = pageContext;

  const routes: Routes = {
    "tei-graphic": (props) => <Box sx={{textAlign: "center"}}><Graphic {...props}/></Box>,
    "tei-ref": Ref,
    "tei-q": (props) => <Q {...props} curLang={language}/>,
    "tei-persname": (props) => <Title {...props} curLang={language}/>,
    "tei-orgname": (props) => <Title {...props} curLang={language}/>,
    "tei-placename": (props) => <Title {...props} curLang={language}/>,
    "tei-title": (props) => {
      const el = props.teiNode as Element
      return el.parentElement?.getAttribute("type") === "periodical" ? <Title {...props} curLang={language}/>
      : <SafeUnchangedNode {...props}/>
    },
    "tei-birth": Birth,
    "tei-note": (props) => {
      const el = props.teiNode as Element
      if (el.getAttribute("xml:lang") === language) {
        return <SafeUnchangedNode {...props}/>
      }
      return null
    }
  }
    return (
      <Layout location={`/${language}/${slugify(data.name)}`}>
      <SEO title={data.name} lang={"en"}/>
      <Container component="main" maxWidth="md">
        
        <Renderer name={data.name} prefixed={prefixed} elements={elements} routes={routes}/>
        <Typography variant="h4" component="h2" gutterBottom={false} sx={{
          marginBottom: "1rem", marginTop: "2rem"
        }}>{
          language === "fr" ? "Figure dans"
          : "Appears in"
        }</Typography>
        {renderRefrences(data.occurrences, data.id)}
      </Container>
      </Layout>
    )
}