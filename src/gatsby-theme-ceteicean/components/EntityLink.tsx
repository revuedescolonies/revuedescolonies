import React from "react"

import { TBehavior, SafeUnchangedNode } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { EntityContext, NoteContext, DisplayContext } from "./Context"
import type { TEntity } from "./Context"
import { Button } from "@mui/material"
import { styled } from '@mui/material/styles'
import type {ButtonProps} from "@mui/material"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

const EntityButton = styled(Button)<ButtonProps>(({ theme }) => ({
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
  display: 'inline'
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

    const show = contextOpts.entitiesToShow as string[] | undefined
    const highlight = show && show.includes(id) ? {
      backgroundColor: "#E3DCD4",
    } : {}

    return (
      <Behavior node={props.teiNode}>
        <EntityButton component="a" color="default" variant="text" disableElevation size="small" onClick={() => {
          setNote(null)
          setEntity(entityData)
        }} sx={highlight}>
          <SafeUnchangedNode {...props} />
        </EntityButton>
      </Behavior>
    )
  }
  return <SafeUnchangedNode {...props} />
}

export default EntityLink
