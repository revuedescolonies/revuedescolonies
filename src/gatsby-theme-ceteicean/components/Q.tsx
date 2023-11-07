import React from "react"

import { TBehavior, SafeUnchangedNode, forwardAttributes } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { TEINodes } from "react-teirouter"
import type { Lang } from "../../components/nav"


type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[],
  curLang: Lang
}

export type FTBehavior = (props: TEIProps) => JSX.Element | null

const FloatingText: FTBehavior = (props: TEIProps) => {

  const quotes = {
    en: ["“", "”"],
    fr: ["« ", " »"]
  }

  const el = props.teiNode.cloneNode(true) as Element
  
  const ps = el.getElementsByTagName("tei-p")
  const pFirst = ps[0]
  const pLast = ps[ps.length - 1]
  if (pFirst && pLast) {
    ps[0].prepend(el.ownerDocument.createTextNode(
      quotes[props.curLang][0]
    ))
    ps[ps.length - 1].append(el.ownerDocument.createTextNode(
      quotes[props.curLang][1]
    ))
    return (
      React.createElement(
        el.localName,
        {...forwardAttributes(el.attributes)},
        <TEINodes teiNodes={el.childNodes} availableRoutes={props.availableRoutes} />)
    )
  } 

  return <> {quotes[props.curLang][0]}<SafeUnchangedNode {...props}/>quotes[props.curLang][1] </>

}

export default FloatingText
