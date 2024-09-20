import React from "react"
import { TBehavior } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { TEINodes } from "react-teirouter"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import { DisplayContext } from "./Context"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

const Popup = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    opacity: ".9",
    fontSize: "1.25rem",
  },
}));

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
