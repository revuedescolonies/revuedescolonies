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
import Sic from "./Sic"
import Corr from "./Corr"
import Entity from "./Entity"
import EntityLink from "./EntityLink"
import Graphic from './Graphic'
import Synoptic from './Synoptic'
import type {Lang} from '../../components/nav'

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

export interface IOptions { [key: string]: string | boolean}

export type ContextType = {
  contextOpts: IOptions
  setContextOpts: React.Dispatch<React.SetStateAction<IOptions>>
}

export const DisplayContext = React.createContext<ContextType>({
  contextOpts: {},
  setContextOpts: () => console.warn('no DisplayContext options provider')
})

export type TNote = {
  id: string
  n: number
}

type NoteContextType = {
  note: TNote | null
  setNote: React.Dispatch<React.SetStateAction<TNote | null>>
}

export const NoteContext = React.createContext<NoteContextType>({
  note: null,
  setNote: () => console.warn('no note data provider')
})

export type TEntity = {
  id: string
}

type EntityContextType = {
  entity: TEntity | null
  setEntity: React.Dispatch<React.SetStateAction<TEntity | null>>
}

export const EntityContext = React.createContext<EntityContextType>({
  entity: null,
  setEntity: () => console.warn('no entity data provider')
})

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
    "tei-sic": Sic,
    "tei-corr": Corr
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
            {/* <div style={{padding: 0, paddingBottom: "55%", position: "relative",  display: "block", height: 0, width: "50%", margin: "0 auto"}}>
              <iframe style={{position: "absolute",  top: 0, bottom: 0, left: "0", width: "100%", height: "100%", border: 0}} 
                src="https://gallica.bnf.fr/ark:/12148/bpt6k999266f.mini">
              </iframe>
              </div> */}
            <Ceteicean pageContext={pageContext} routes={routes} />
          </Layout>
        </NoteContext.Provider>
      </EntityContext.Provider>
    </DisplayContext.Provider>
  )

}

export default EditionCeteicean
