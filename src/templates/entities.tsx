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
import Entity from "./tei/Entity";

interface repeatCount {
  section: string
  count: number
}

interface occurenceObj {
    pageName: string
    pageLink: string
    repeats: number
    sections: repeatCount
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
    authors: {[key: string]: string}
  }
}

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[],
  curLang: string
}


const renderRefrences = (references:occurenceObj[], id: string) => {

  const sectionStyle = {
    paddingLeft: '30px',  // Note: "paddingLeft" is camelCase
  };
    
    return (
      <List>
        {references.map((refObj:occurenceObj) => (
          <ListItem>
            <ListItemText>
              <Link to={`/${refObj.pageLink}?showEntities=${id}`}>{refObj.pageName} ({refObj.repeats})</Link>
              {Object.entries(refObj.sections).map(([index, sectionData]) => (
                <div>
                  <p style={sectionStyle}>
                  <Link to={`/${refObj.pageLink}#${sectionData.sectionId}`}>{sectionData.section} ({sectionData.count})</Link>
                  </p>
                </div>
              ))}
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
  const {language, prefixed, elements, data, authors} = pageContext;

  const routes: Routes = {
    "tei-person": (props) => <Entity lang={language} authors={authors} {...props}/>,
    "tei-place": (props) => <Entity lang={language} authors={authors} {...props}/>,
    "tei-org": (props) => <Entity lang={language} authors={authors} {...props}/>,
    "tei-bibl": (props) => {
      const el = props.teiNode as Element
      // Only deal with bibliography bibls.
      if (el.parentElement?.tagName.toLocaleLowerCase() === "tei-note") {
        return <SafeUnchangedNode {...props}/>
      }
      return <Entity lang={language} authors={authors} {...props}/>
    },
    "tei-graphic": (props) => <Box sx={{textAlign: "center"}}><Graphic {...props}/></Box>,
    "tei-ref": Ref,
    "tei-q": (props) => <Q {...props} curLang={language}/>,
    "tei-persname": (props) => <Title {...props} curLang={language}/>,
    "tei-orgname": (props) => <Title {...props} curLang={language}/>,
    "tei-placename": (props) => <Title {...props} curLang={language}/>,
    "tei-title": (props) => {
      const el = props.teiNode as Element
      return ["periodical", "legal"].includes(el.parentElement?.getAttribute("type") || "") ? <Title {...props} curLang={language}/>
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