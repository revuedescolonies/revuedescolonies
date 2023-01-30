import React from "react"

import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

import { EntityContext } from "./Ceteicean"

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
import { SafeUnchangedNode } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import type {Lang} from '../../components/nav'

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[],
  entityType: string,
  isSynoptic: boolean,
  curLang: Lang
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

const Entity: EntityBehavior = (props: TEIProps) => {
  const { entity, setEntity } = React.useContext(EntityContext)
  const [cardPosition, setCardPosition] = React.useState(350)
  const [cardLang, setCardLang] = React.useState(props.curLang)

  const isScreenSmall = useMediaQuery(theme.breakpoints.down('lg'))

  React.useEffect(() => {
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
      const closeNote = (<IconButton aria-label="close person info" onClick={() => setEntity(null)}>
        <CloseIcon />
      </IconButton>)

      const entityContent = Array.from(el.children).filter(c => c.getAttribute('lang') === cardLang)[0]
      const chip = entityType ? <><br/><Chip size="small" label={entityType} /></> : null

      if (isScreenSmall || props.isSynoptic) {
        content = (
          <Dialog
            open={entity.hasOwnProperty('id')}
            scroll="body"
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setEntity(null)}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title" sx={{display: "flex",
      justifyContent: "space-between",
      alignItems: "center"}}>
              <Typography variant="h6">{title}
                {chip}
              </Typography>              
              <IconButton aria-label="close person info" onClick={() => setEntity(null)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText component="div" id="alert-dialog-slide-description">
              <Button size="small" onClick={() => {setCardLang(cardLang === 'en' ? 'fr' : 'en')}}>{makeLangLabel()}</Button>
                <TEINodes 
                  teiNodes={[entityContent]}
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
            }}>
            <CardHeader
              action={closeNote}
              title={<>{title}{chip}</>}
            />
            <CardContent>
              <Button size="small" onClick={() => {setCardLang(cardLang === 'en' ? 'fr' : 'en')}}>{makeLangLabel()}</Button>
              <TEINodes 
                teiNodes={[entityContent]}
                {...props}/>
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

  } else if (el.ownerDocument.getElementsByTagName("tei-text").length === 0) {
    // Show entities on proofing page.
    return <SafeUnchangedNode {...props}/>
  }
  return null
}

export default Entity
