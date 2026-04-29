import React from "react"

import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

import { DisplayContext, NoteContext } from "./Context"

import theme from '../../theme'
import { TransitionProps } from "@mui/material/transitions/transition"
import Slide from "@mui/material/Slide"
import useMediaQuery from "@mui/material/useMediaQuery"
import IconButton from "@mui/material/IconButton"
import CloseIcon from '@mui/icons-material/Close';
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import Typography from "@mui/material/Typography"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import { SafeUnchangedNode } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import Chip from "@mui/material/Chip"
import TranslateIcon from '@mui/icons-material/Translate';
import Button from "@mui/material/Button"

import { Colors, IColors } from '../../displayOptions'
import { focusElementById, focusNextAfterTrigger } from "./focusUtils"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[],
  isSynoptic: boolean
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
});

export type NoteBehavior = (props: TEIProps) => JSX.Element | null

const Note: NoteBehavior = (props: TEIProps) => {
  const { note, setNote } = React.useContext(NoteContext)
  const { contextOpts } = React.useContext(DisplayContext)
  const [cardPosition, setCardPosition] = React.useState(350)
  const [cardLang, setCardLang] = React.useState(contextOpts.annosLang)

  const isScreenSmall = useMediaQuery(theme.breakpoints.down('lg'))

  React.useEffect(() => {
    const fromTop = document.documentElement.scrollTop > 150 ? document.documentElement.scrollTop + 100 : document.body.scrollTop
    setCardPosition(fromTop > 0 ? fromTop : 350)
  }, [note])
  
  const el = props.teiNode as Element
  const noteId = el.getAttribute('id')

  const makeLangLabel = () => {
    const label = cardLang === 'en' ? 'Français' : 'English'
    return <><TranslateIcon sx={{marginRight: ".5em"}} />{label}</>
  }

  if (note) {
    if (note.id === noteId) {
      let content: JSX.Element | undefined = undefined
      const noteContent = Array.from(el.children).filter(c => c.getAttribute('lang') === cardLang)[0]
      const noteType = noteContent.getAttribute('type')
      const type = noteType?.replace(/_+/, " ")
      const typeColor = Colors[noteType as keyof IColors]
      const panelId = `note-panel-${note.id}`
      const panelTitleId = `${panelId}-title`
      const panelDescriptionId = `${panelId}-description`
      const handleClose = () => {
        setNote(null)
        window.requestAnimationFrame(() => focusElementById(note.triggerId))
      }

      const langSwitch = noteType !== "translation_note"
        ? <Button size="small" onClick={() => {setCardLang(cardLang === 'en' ? 'fr' : 'en')}}>{makeLangLabel()}</Button>
        : null

      if (isScreenSmall || props.isSynoptic) {
        content = (
          <Dialog
            id={panelId}
            open={note.hasOwnProperty('id')}
            scroll="body"
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby={panelTitleId}
            aria-describedby={panelDescriptionId}
          >
            <DialogTitle id={panelTitleId} sx={{display: "flex",
      justifyContent: "space-between",
      alignItems: "center"}}>
              <Typography variant="h6">Note {note.n}<br/>
                <Chip size="small" label={type} />
              </Typography>              
              <IconButton aria-label="Close note" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText component="div" id={panelDescriptionId}>
                {langSwitch}
                <TEINodes 
                  teiNodes={[noteContent]}
                  {...props}/>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        )
      } else {
        content = (
          <Card style={{top: cardPosition}} sx={{
            maxWidth: "300px",
            position: "absolute",
            marginLeft: "1.5rem"
            }}
            id={panelId}
            role="region"
            tabIndex={0}
            aria-labelledby={panelTitleId}
            aria-describedby={panelDescriptionId}
            onKeyDown={(event) => {
              if (event.key === "Tab" && event.shiftKey && event.currentTarget === event.target) {
                event.preventDefault()
                focusElementById(note.triggerId)
              }
            }}
          >
            <CardHeader
              action={<IconButton aria-label="Close note" onClick={handleClose}>
                <CloseIcon />
              </IconButton>}
              title={<span id={panelTitleId}>Note {note.n}<br/><Chip size="small" label={type} sx={{
                backgroundColor: typeColor,
                color: "#fff"
              }}/></span>}
            />
            <CardContent id={panelDescriptionId}>
              {langSwitch}
              <TEINodes 
                teiNodes={[noteContent]}
                {...props}/>
              <span
                tabIndex={0}
                aria-label="Continue reading"
                onFocus={() => focusNextAfterTrigger(note.triggerId)}
                style={{
                  position: "absolute",
                  width: 1,
                  height: 1,
                  padding: 0,
                  margin: -1,
                  overflow: "hidden",
                  clip: "rect(0 0 0 0)",
                  whiteSpace: "nowrap",
                  border: 0,
                }}
              />
            </CardContent>
          </Card>
        )
      }

      return (
        <Behavior node={props.teiNode}>
          {content}
        </Behavior>
      )
    } else if (noteId?.endsWith("-notes")) {
      return <SafeUnchangedNode {...props} />
    }

  }
  return null
}

export default Note
