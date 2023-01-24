import React from "react"
import { SafeUnchangedNode, TBehavior } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { TEINodes } from "react-teirouter"
import { Grid } from "@mui/material"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

const Synoptic: TBehavior = (props: TEIProps) => {
  // Wrap tei-body adn tei-front in a div to facilitate column layout
  // We don't use CETEIcean's Behavior component to avoid duplication of content.
  // The default Behavior always includes the unchanged original node and we don't need that here.
  const children = Array.from(props.teiNode.childNodes).filter((n) => n.nodeType === 1)
  const el = props.teiNode as Element

  const forwardTeiAttributes = () => {
    return Array.from(el.attributes).reduce((acc: {[key: string]: string}, att) => {
      switch (att.name) {
        case 'ref':
          acc['Ref'] = att.value
          break
        default:
          acc[att.name] = att.value
      }
      return acc
    }, {})
  }

  if (el.getAttribute('id') === 'synoptic') {
    return React.createElement(
      el.tagName,
      {...forwardTeiAttributes()},
      <Grid container spacing={2}>
        <Grid item xs={2}/>
        <Grid item xs={4}>
            <TEINodes 
              teiNodes={children.slice(0, 1)}
              {...props}/>
        </Grid>
        <Grid item xs={4}>
            <TEINodes 
                teiNodes={children.slice(1, 2)}
                {...props}/>
        </Grid>
        <Grid item xs={2}>
          <TEINodes 
              teiNodes={children.slice(2)}
              {...props}/>
        </Grid>
      </Grid>
    )

  }

  return <SafeUnchangedNode {...props} />
  
}

export default Synoptic
