import React from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Ceteicean, {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  TeiHeader,
  Ref,
  SafeUnchangedNode
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
import EntityLink from "./EntityLink"
import Graphic from './Graphic'
import Synoptic from './Synoptic'
import type {Lang} from '../../components/nav'
import { DisplayContext, EntityContext, NoteContext } from './Context'
import type { IOptions, TNote, TEntity } from "./Context"
import Q from "./Q"

interface Props {
  pageContext: {
    name: string
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

  const routes: Routes = {
    "tei-teiheader": TeiHeader,
    "tei-ptr": Ptr,
    "tei-ref": Ref,
    "tei-notegrp": (props) => <Note isSynoptic={isSynoptic} {...props}/>,
    "tei-person": (props) => <Entity isSynoptic={isSynoptic} entityType={"tei-persName"} {...props} curLang={lang}/>,
    "tei-place": (props) => <Entity isSynoptic={isSynoptic} entityType={"tei-placeName"} {...props} curLang={lang}/>,
    "tei-org": (props) => <Entity isSynoptic={isSynoptic} entityType={"tei-orgName"} {...props} curLang={lang}/>,
    "tei-bibl": (props) => {
      const el = props.teiNode as Element
      // Only deal with bibliography bibls.
      if (el.parentElement?.tagName.toLocaleLowerCase() !== "tei-listbibl") {
        return <SafeUnchangedNode {...props}/>
      }
      return <Entity isSynoptic={isSynoptic} entityType={"tei-title"} {...props} curLang={lang}/>
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

  // Match the location to the TEI filename
  return(
    <DisplayContext.Provider value={{
      contextOpts: displayOpts,
      setContextOpts: setDisplayOpts
    }}>
      <EntityContext.Provider value={{entity, setEntity}}>
        <NoteContext.Provider value={{note, setNote}}>
          <Layout location={pageContext.name} appbar={<MicroEdAppbar location={pageContext.name}/>} >
            <SEO title="Edition" lang={lang as "en" | "fr"} />
            <Ceteicean pageContext={pageContext} routes={routes} />
          </Layout>
        </NoteContext.Provider>
      </EntityContext.Provider>
    </DisplayContext.Provider>
  )

}

export default EditionCeteicean
