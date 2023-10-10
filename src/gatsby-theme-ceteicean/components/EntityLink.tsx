import React from "react"

import { TBehavior, SafeUnchangedNode } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { EntityContext, TEntity, NoteContext } from "./Context"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}


const EntityLink: TBehavior = (props: TEIProps) => {

  const { setEntity } = React.useContext(EntityContext)
  const { setNote } = React.useContext(NoteContext)

  const el = props.teiNode as Element
  const target = el.getAttribute('ref')
  const id = target?.replace('#', '') || ''

  if (target) {
    const noteData: TEntity = {
      id
    }

    return (
      <Behavior node={props.teiNode}>
        <span onClick={() => {
          setNote(null)
          setEntity(noteData)
        }}>
          <SafeUnchangedNode {...props} />
        </span>
      </Behavior>
    )
  }
  return <SafeUnchangedNode {...props} />
}

export default EntityLink
