import React from "react"

export interface IOptions { [key: string]: string | boolean | string[]}

export type ContextType = {
  contextOpts: IOptions
  setContextOpts: React.Dispatch<React.SetStateAction<IOptions>>
}

export const DisplayContext = React.createContext<ContextType>({
  contextOpts: {},
  setContextOpts: () => console.warn('no DisplayContext options provider')
})

export type TNote = {
  id: string
  n: number
}

type NoteContextType = {
  note: TNote | null
  setNote: React.Dispatch<React.SetStateAction<TNote | null>>
}

export const NoteContext = React.createContext<NoteContextType>({
  note: null,
  setNote: () => console.warn('no note data provider')
})

export type TEntity = {
  id: string
}

type EntityContextType = {
  entity: TEntity | null
  setEntity: React.Dispatch<React.SetStateAction<TEntity | null>>
}

export const EntityContext = React.createContext<EntityContextType>({
  entity: null,
  setEntity: () => console.warn('no entity data provider')
})