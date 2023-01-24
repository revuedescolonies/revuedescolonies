import React from "react"
import { SafeUnchangedNode, TBehavior } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { TEINodes } from "react-teirouter"
import { Grid, useMediaQuery } from "@mui/material"
import Container from "@mui/system/Container"

import theme from "../../theme"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

const Text: TBehavior = (props: TEIProps) => {
  // Wrap tei-body adn tei-front in a div to facilitate column layout
  // We don't use CETEIcean's Behavior component to avoid duplication of content.
  // The default Behavior always includes the unchanged original node and we don't need that here.
  const children = Array.from(props.teiNode.childNodes).filter((n) => n.nodeType === 1)
  const el = props.teiNode as Element

  const isScreenSmall = useMediaQuery(theme.breakpoints.down('lg'))

  if (isScreenSmall) {
    return <Container maxWidth="md" component="main">
      {/* <TEINodes 
        teiNodes={props.teiNode.childNodes}
        {...props}/> */}
      <SafeUnchangedNode {...props} />
    </Container>
    
  }

  return React.createElement(
    el.tagName,
    {},
    <Grid container spacing={1}>
      <Grid item xs={3}/>
      <Grid item xs={6}>
        <Container maxWidth="md" component="main">
          <TEINodes 
              teiNodes={children.slice(0, 2)}
              {...props}/>
        </Container>
      </Grid>
      <Grid item xs={3}>
        <TEINodes 
            teiNodes={children.slice(2)}
            {...props}/>
      </Grid>
    </Grid>
  )
}

export default Text
