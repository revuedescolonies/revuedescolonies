import React from "react"

import { TBehavior, SafeUnchangedNode } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"

import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"

import { NoteContext, TNote, EntityContext } from "./Ceteicean"
import Badge, { BadgeProps } from "@mui/material/Badge"
import { styled } from '@mui/material/styles'
import estyled from '@emotion/styled'

import { Colors, IColors } from '../../displayOptions'


type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

const Spacer = estyled.div((props: {length: string}) => ({
  width: props.length
}))

const Footnote = styled(Badge)<BadgeProps & {length: string, typeColor: string}>(({ theme, length, typeColor }) => ({
  '& .MuiBadge-badge': {
    top: '-.5em',
    right: length,
    backgroundColor: typeColor,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    cursor: 'pointer',
    textIndent: 0,
  },
}));

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

    let spacerlength: string
    switch (n.length) {
      case 1:
        spacerlength = `1.5rem`
      case 3:
        spacerlength = `2rem`
      default:
        spacerlength = `${n.length}rem`
    }

    let fnlength: string
    switch (n.length) {
      case 1:
        fnlength = `.75rem`
      case 3:
        fnlength = `.75rem`
      default:
        fnlength = `${n.length/2}rem`
    }

    return (
      <Behavior node={props.teiNode} key={n}>
        <Footnote length={fnlength} badgeContent={n} color="primary" max={999} typeColor={typeColor} onClick={() => {
          setEntity(null)
          setNote(noteData)
        }} sx={{wordBreak: "normal"}}>
          <Spacer length={spacerlength}/>
        </Footnote>
      </Behavior>
    )
  }
  return <SafeUnchangedNode {...props} />
}

export default Ptr
