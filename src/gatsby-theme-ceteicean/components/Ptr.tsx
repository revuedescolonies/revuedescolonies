import React from "react"

import { TBehavior, SafeUnchangedNode } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"

import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"

import { NoteContext, TNote, EntityContext } from "./Context"

import { Colors, IColors } from '../../displayOptions'
import { Box } from "@mui/system"


type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

const Ptr: TBehavior = (props: TEIProps) => {

  const { setNote } = React.useContext(NoteContext)
  const { setEntity } = React.useContext(EntityContext)

  
  const el = props.teiNode as Element
  const n = el.getAttribute('n')
  const target = el.getAttribute('target')
  const id = target?.replace('#', '') || ''
  const noteGrp = el.ownerDocument.getElementById(id)
  const note = Array.from(noteGrp?.children || []).filter(c => c.getAttribute('lang') === 'en')[0]

  const type = note?.getAttribute('type') || ''
  const typeColor = Colors[type as keyof IColors]

  if (n && target) {
    const noteData: TNote = {
      id,
      n: parseInt(n)
    }

    return (
      <Behavior node={props.teiNode} key={n}>
        <Box onClick={() => {
          setEntity(null)
          setNote(noteData)
        }} component="sup" sx={{
          color: typeColor,
          fontSize: "80%",
          cursor: "pointer"
        }}>[{n}]</Box>
      </Behavior>
    )
  }
  return <SafeUnchangedNode {...props} />
}

export default Ptr
