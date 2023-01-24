import React from "react"
import { SafeUnchangedNode, TBehavior } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { DisplayContext } from "./Ceteicean"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

const Corr: TBehavior = (props: TEIProps) => {
  const { contextOpts } = React.useContext(DisplayContext)

  if (contextOpts.originalSpelling) {
    return <Behavior node={props.teiNode} />
  }
  
  return <SafeUnchangedNode {...props} />
}

export default Corr
