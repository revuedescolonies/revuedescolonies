import React from "react"

import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

import { DisplayContext, EntityContext } from "./Context"

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
import TranslateIcon from '@mui/icons-material/Translate';
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"
import { Box } from "@mui/material"
import { focusElementById, focusNextAfterTrigger } from "./focusUtils"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[],
  entityType: string,
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

export type EntityBehavior = (props: TEIProps) => JSX.Element | null

const EntitySimple: EntityBehavior = (props: TEIProps) => {
  const { entity, setEntity } = React.useContext(EntityContext)
  const { contextOpts } = React.useContext(DisplayContext)
  const [cardPosition, setCardPosition] = React.useState(350)
  const [cardLang, setCardLang] = React.useState(contextOpts.annosLang)

  const isScreenSmall = useMediaQuery(theme.breakpoints.down('lg'))

  React.useEffect(() => {
    setCardLang(contextOpts.annosLang)
    const fromTop = document.documentElement.scrollTop > 150 ? document.documentElement.scrollTop + 100 : document.body.scrollTop
    setCardPosition(fromTop > 0 ? fromTop : 350)
  }, [entity])
  
  const el = props.teiNode as Element
  const entityType = el.getAttribute('type')
  const entityId = el.getAttribute('id')
  const titleEl = el.getElementsByTagName(props.entityType)[0]
  const title = titleEl ? titleEl.textContent : ""

  const makeLangLabel = () => {
    const label = cardLang === 'en' ? 'Français' : 'English'
    return <><TranslateIcon sx={{marginRight: ".5em"}} />{label}</>
  }

  if (entity) {
    if (entity.id === entityId) {
      let content: JSX.Element | undefined = undefined
      const handleClose = () => {
        setEntity(null)
        window.requestAnimationFrame(() => focusElementById(entity.triggerId))
      }
      const closeNote = (<IconButton aria-label="close person info" onClick={handleClose}>
        <CloseIcon />
      </IconButton>)

      const entityContent = el.querySelector(`tei-note[lang=${cardLang}]`)

      if (!entityContent) return null;
      const panelId = `entity-panel-${entity.id}`
      const panelTitleId = `${panelId}-title`
      const panelDescriptionId = `${panelId}-description`
       
      const resp = entityContent.getAttribute("resp")
      let author: JSX.Element | undefined = undefined 
      if (resp) {
        const authorEl = entityContent.ownerDocument.getElementById(resp.replace("#", ""))
        if (authorEl) {
          author = <Box sx={{fontStyle: "italic", textAlign: "right", fontSize: "1rem"}}>{authorEl.textContent}</Box>
        }
      }

      const chip = entityType ? <><br/><Chip size="small" label={entityType} /></> : null

      if (isScreenSmall || props.isSynoptic) {
        content = (
          <Dialog
            id={panelId}
            open={entity.hasOwnProperty('id')}
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
              <Typography variant="h6">{title}
                {chip}
              </Typography>              
              <IconButton aria-label="close person info" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText component="div" id={panelDescriptionId}>
              <Button size="small" onClick={() => {setCardLang(cardLang === 'en' ? 'fr' : 'en')}}>{makeLangLabel()}</Button>
                <TEINodes 
                  teiNodes={[entityContent]}
                  {...props}/>
                {author}
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
                focusElementById(entity.triggerId)
              }
            }}
          >
            <CardHeader
              action={closeNote}
              title={<span id={panelTitleId}>{title}{chip}</span>}
            />
            <CardContent id={panelDescriptionId}>
              <Button size="small" onClick={() => {setCardLang(cardLang === 'en' ? 'fr' : 'en')}}>{makeLangLabel()}</Button>
              <TEINodes 
                teiNodes={[entityContent]}
                {...props}/>
              {author}
              <span
                tabIndex={0}
                aria-label="Continue reading"
                onFocus={() => focusNextAfterTrigger(entity.triggerId)}
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
    }

  }
  return null
}

export default EntitySimple
