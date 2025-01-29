import React from "react"
import { TBehavior } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { TEINodes } from "react-teirouter"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

const Birth: TBehavior = (props: TEIProps) => {
  return (<Behavior node={props.teiNode}><>
    <TEINodes 
        teiNodes={props.teiNode.childNodes}
        {...props}/>{' – '}
  </></Behavior>)
}

export default Birth
