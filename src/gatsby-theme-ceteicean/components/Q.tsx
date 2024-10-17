import React from "react"

import { TBehavior, SafeUnchangedNode, forwardAttributes } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { TEINodes } from "react-teirouter"


type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[],
  curLang: Lang
}

export type FTBehavior = (props: TEIProps) => JSX.Element | null

const FloatingText: FTBehavior = (props: TEIProps) => {

  const lang = props.curLang == "fr" ? "fr" : "en" // This is strangely needed. Investigate

  const quotes = {
    en: ["“", "”"],
    fr: ["« ", " »"]
  }

  const el = props.teiNode.cloneNode(true) as Element
  
  const ps = el.getElementsByTagName("tei-p")
  const pFirst = ps[0]
  const pLast = ps[ps.length - 1]
  if (pFirst && pLast) {
    const pFirstChildNode = pFirst.childNodes[0]
    if (pFirstChildNode) {
      pFirst.insertBefore(el.ownerDocument.createTextNode(
        quotes[lang][0]
      ), pFirstChildNode)
    } else {
      pFirst.textContent = quotes[lang][0]
    }
    ps[ps.length - 1].appendChild(el.ownerDocument.createTextNode(
      quotes[lang][1]
    ))
    return (
      React.createElement(
        el.localName,
        {...forwardAttributes(el.attributes)},
        <TEINodes teiNodes={el.childNodes} availableRoutes={props.availableRoutes} />)
    )
  }

  return <> {quotes[lang][0]}<SafeUnchangedNode {...props}/>{quotes[lang][1]} </>

}

export default FloatingText
