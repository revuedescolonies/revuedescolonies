import React from "react"
import { TBehavior } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { TEINodes } from "react-teirouter"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { DisplayContext } from "./Context"
import Popup from "./Popup"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

const Orig: TBehavior = (props: TEIProps) => {
  const el = props.teiNode as Element
  const reg = el.parentElement?.getElementsByTagName("tei-reg") || []
  const { contextOpts } = React.useContext(DisplayContext)

  const title = reg[0] ? (reg[0].textContent || "") : ""
  const content = contextOpts.originalSpelling
  ? (<Popup title={title} placement="top" arrow enterTouchDelay={0}> 
    <span><TEINodes 
        teiNodes={props.teiNode.childNodes}
        {...props}/></span>
  </Popup>)
  : undefined

  return (<Behavior node={props.teiNode}>
    {content}
  </Behavior>)
}

export default Orig
