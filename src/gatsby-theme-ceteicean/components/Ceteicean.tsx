import React from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Ceteicean, {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  TeiHeader,
  Ref,
  SafeUnchangedNode,
  TBehavior
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import Pb from "./Pb"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MicroEdAppbar from "../../components/microedAppbar"
import Ptr from "./Ptr"
import Note from "./Note"
import Text from "./Text"
import Orig from "./Orig"
import Reg from "./Reg"
import Entity from "./Entity"
import EntitySimple from "./EntitySimple"
import EntityLink from "./EntityLink"
import Graphic from './Graphic'
import Synoptic from './Synoptic'
import { DisplayContext, EntityContext, NoteContext } from './Context'
import type { IOptions, TNote, TEntity } from "./Context"
import Q from "./Q"
import { Container } from "@mui/material"

interface Props {
  pageContext: {
    name: string
    toc: {id: string, label: string}[]
    prefixed: string
    elements: string[]
  }
}

export interface Fac {
  name: string
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

const EditionCeteicean = ({pageContext}: Props) => {
  const queryData = useStaticQuery(graphql`
    query general {
      facs: allFile(filter: {relativeDirectory: {in: "facs"}}) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  const facs: Fac[] = queryData.facs.nodes
  const lang = pageContext.name.replace(/\w+-/, "") as Lang

  let isSynoptic = pageContext.name.includes("synoptic") ? true : false

  type renderEntityProps = {
    teiNode: Node,
    availableRoutes?: string[],
    entityType: string,
  }
  const renderEntity = (props: renderEntityProps) => {
    // Determine whether to render a simple popup or show connected entities
    const el = props.teiNode as Element
    const corresp = el.getAttribute('corresp')
    if (corresp) {
      return <Entity isSynoptic={isSynoptic} {...props} />
    } else {
      return <EntitySimple isSynoptic={isSynoptic} {...props} />
    }
  }

  const routes: Routes = {
    "tei-teiheader": TeiHeader,
    "tei-ptr": Ptr,
    "tei-ref": Ref,
    "tei-notegrp": (props) => <Note isSynoptic={isSynoptic} {...props}/>,
    "tei-person": (props) => renderEntity(Object.assign({}, props, {entityType: "tei-persName"})),
    "tei-place": (props) => renderEntity(Object.assign({}, props, {entityType: "tei-placeName"})),
    "tei-org": (props) => renderEntity(Object.assign({}, props, {entityType: "tei-orgName"})),
    "tei-bibl": (props) => {
      const el = props.teiNode as Element
      // Only deal with bibliography bibls.
      if (el.parentElement?.tagName.toLocaleLowerCase() !== "tei-listbibl") {
        return <SafeUnchangedNode {...props}/>
      }
      return renderEntity(Object.assign({}, props, {entityType: "tei-title"}))
    },
    "tei-persname": EntityLink,
    "tei-placename": EntityLink,
    "tei-orgname": EntityLink,
    "tei-title": (props) => {
      const el = props.teiNode as Element
      // Only deal with bibliography bibls.
      if (el.getAttribute("ref")) {
        return <EntityLink {...props}/>
      }
      return <SafeUnchangedNode {...props}/>      
    },
    "tei-graphic": Graphic,
    "tei-orig": Orig,
    "tei-reg": Reg,
    "tei-q": (props) => <Q {...props} curLang={lang}/>
  }

  if (!isSynoptic) {
    routes["tei-text"] = Text
    routes["tei-pb"] = (props) => <Pb facs={facs} {...props}/>
  }

  if (isSynoptic) {
    routes["tei-tei"] = Synoptic
  }

  const startOpts: IOptions = {annosLang: lang, originalSpelling: false}

  const [displayOpts, setDisplayOpts] = React.useState(startOpts)
  const [note, setNote] = React.useState<TNote | null>(null)
  const [entity, setEntity] = React.useState<TEntity | null>(null)

  const isPublished = pageContext.name.includes("RdCv1n1") || pageContext.name.includes("RdCv2n1")

  // Match the location to the TEI filename
  return(
    <DisplayContext.Provider value={{
      contextOpts: displayOpts,
      setContextOpts: setDisplayOpts
    }}>
      <EntityContext.Provider value={{entity, setEntity}}>
        <NoteContext.Provider value={{note, setNote}}>
          <Layout location={pageContext.name} appbar={<MicroEdAppbar location={pageContext.name} toc={pageContext.toc}/>} >
            <SEO title="Edition" lang={lang as "en" | "fr"} />
            <Ceteicean pageContext={pageContext} routes={routes} />
            {isPublished &&
              <Container component="div" maxWidth="sm" sx={{border: "1px solid Black"}}>
                A version of the text on this page was previously published in <a href="https://scholarlyediting.org/issues/40/selections-from-the-revue-des-colonies-july-1834-and-july-1835/">
                <em>Scholarly Editing</em>, vol 40</a>,
              under a <a
                  rel="license"
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                >
                  Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                  International License
                </a>
                . </Container> || <></>
            }
          </Layout>
        </NoteContext.Provider>
      </EntityContext.Provider>
    </DisplayContext.Provider>
  )

}

export default EditionCeteicean
