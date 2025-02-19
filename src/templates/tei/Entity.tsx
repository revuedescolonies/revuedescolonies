import React from "react"
import { TEINodes } from "react-teirouter"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { Box } from "@mui/material"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
  lang: Lang
  authors: {[key: string]: string}
}

export type EntityBehavior = (props: TEIProps) => JSX.Element | null

const Entity: EntityBehavior = (props: TEIProps) => {
  const el = props.teiNode as Element
  // Apparently this needs basic XML DOM functions at build time.
  const entityContent = Array.from(el.getElementsByTagName('tei-note')).filter(e => e.getAttribute("lang") === props.lang)[0]
  const resp = entityContent?.getAttribute("resp")
  const authors = resp?.split(" ") || []
  const authorsData = authors.reduce<string[]>((acc, a) => {
    if (a && a !== "#other") {
      acc.push(props.authors[a.replace("#", "")])
    }
    return acc
  }, [])
  const author = authorsData.length > 0 ? <Box sx={{ fontStyle: "italic", textAlign: "right", fontSize: "1rem" }}>{authorsData.join(", ")}</Box> : null
  return (<Behavior node={props.teiNode}><>
    <TEINodes 
        teiNodes={props.teiNode.childNodes}
        {...props}/>
    {author}
  </></Behavior>)
}

export default Entity
