import React from "react"

import { TBehavior, SafeUnchangedNode } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { EntityContext, NoteContext, DisplayContext } from "./Context"
import type { TEntity } from "./Context"
import { Button } from "@mui/material"
import { styled } from '@mui/material/styles'
import type {ButtonProps} from "@mui/material"
import Popup from "./Popup"
import { EntityColors, IColors } from "../../displayOptions"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

type EntityButtonProps = ButtonProps & {
  entityType: keyof IColors,
  available: boolean
}

const EntityButton = styled(Button)<EntityButtonProps>(({ theme, entityType, available }) => ({
  boxShadow: 'none',
  fontSize: 'inherit',
  fontFamily: theme.typography.body1.fontFamily,
  verticalAlign: "unset",
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: "unset",
  padding: 0,
  color: theme.palette.default.main,
  textTransform: "none",
  backgroundColor: "transparent",
  minWidth: "unset",
  display: 'inline',
  borderRadius: 0,
  borderBottom: `2px ${available ? 'solid' : 'dashed'} ${EntityColors[entityType]}`,
}));


const EntityLink: TBehavior = (props: TEIProps) => {

  const { setEntity } = React.useContext(EntityContext)
  const { setNote } = React.useContext(NoteContext)
  const { contextOpts } = React.useContext(DisplayContext)

  const el = props.teiNode as Element
  const target = el.getAttribute('ref')
  const id = target?.replace('#', '') || ''

  if (target) {
    const entityData: TEntity = { id }
    const entityType: keyof IColors = el.tagName.toLowerCase().replace("tei-", "")
    const commentaryExists = Boolean(el.ownerDocument.getElementById(id))

    const handleClick = () => {
      if (commentaryExists) {
        setNote(null)
        setEntity(entityData)
      }
    }

    const show = contextOpts.entitiesToShow as string[] | undefined
    const highlight = show && show.includes(id) ? {
      backgroundColor: "#E3DCD4",
    } : {}

    const content = <EntityButton component="a" entityType={entityType} color="default" variant="text"
      available={commentaryExists}
      disableElevation size="small" onClick={handleClick} sx={highlight}>
      <SafeUnchangedNode {...props} />
    </EntityButton>

    const popup = !commentaryExists ? <Popup title="Entity note not yet available" placement="top" arrow enterTouchDelay={0}> 
      {content}
    </Popup> : <></>;

    return (
      <Behavior node={props.teiNode}>
        {commentaryExists ? content : popup}
      </Behavior>
    )
  }
  return <SafeUnchangedNode {...props} />
}

export default EntityLink
