import React, { useRef, useEffect, useState, useContext, Fragment } from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import { DisplayContext, EntityContext } from "./Context"
import theme from '../../theme'
import { TransitionProps } from "@mui/material/transitions/transition"
import Slide from "@mui/material/Slide"
import useMediaQuery from "@mui/material/useMediaQuery"
import IconButton from "@mui/material/IconButton"
import CloseIcon from '@mui/icons-material/Close'
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import Typography from "@mui/material/Typography"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"
import { SafeUnchangedNode } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { Box, Card, CardContent, CardHeader } from "@mui/material"
import TranslateIcon from '@mui/icons-material/Translate'

/*************
 * 
 * TODO: Reorganize together with EntitySimple.tsx. Code is heavily duplicated.
 * 
 ************** */

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[],
  entityType: string,
  isSynoptic: boolean
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const elementMap = new Map([
  ["tei-person", "tei-persName"],
  ["tei-place", "tei-placeName"],
  ["tei-org", "tei-orgName"],
  ["tei-bibl", "tei-title"]
]);

export type EntityBehavior = (props: TEIProps) => JSX.Element | null

const Entity: EntityBehavior = (props: TEIProps) => {
  const { entity, setEntity } = useContext(EntityContext)
  const { contextOpts } = useContext(DisplayContext)
  const [cardLang, setCardLang] = useState(contextOpts.annosLang)
  const [boxOpen, setBoxOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [tabIndex, setTabIndex] = useState(10)

  const boxRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef(null)
  const [boxDimensions, setBoxDimensions] = useState({ width: 0, height: 0 })
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('lg'))

  const [cardPosition, setCardPosition] = React.useState(350)
  

  const el = props.teiNode as Element
  const entityType = el.getAttribute('type')
  const entityId = el.getAttribute('id')
  const titleEl = el.getElementsByTagName(props.entityType)[0]
  const title = titleEl ? titleEl.textContent : ""

  const corresp = el.getAttribute('corresp')
  const correspEl = corresp?.split(' ') || []

  const [relatedTitles, setRelatedTitles] = useState<string[]>([])
  const [relatedIDs, setRelatedIDs] = useState<string[]>([])

  useEffect(() => {
    setCardLang(contextOpts.annosLang)
    const fromTop = document.documentElement.scrollTop > 150 ? document.documentElement.scrollTop + 100 : document.body.scrollTop
    setCardPosition(fromTop > 0 ? fromTop : 350)
  }, [entity])

  useEffect(() => {
    const titles: string[] = []
    const ids: string[] = []

    correspEl.forEach(correspId => {
      const relatedID = correspId.replace("#", "")
      const relatedElement = el.ownerDocument.getElementById(relatedID)
      const tagName = relatedElement?.nodeName && elementMap.get(relatedElement.nodeName)

      if (!tagName) {
        return
      }

      const titleElement = relatedElement?.getElementsByTagName(tagName)[0]
      const title = titleElement ? titleElement.textContent : null

      if (title) {
        titles.push(title)
        ids.push(relatedID)
      }
    })

    setRelatedTitles(titles)
    setRelatedIDs(ids)
  }, [entity])

  useEffect(() => {
    if (entity?.id === el.getAttribute('id')) {
      setBoxOpen(true)
      setDialogOpen(false)
      setCardLang(contextOpts.annosLang)
    }
    if (entity?.fromRelation){
      setBoxOpen(false)
      setDialogOpen(true)
      setCardLang(contextOpts.annosLang)
    }
  }, [entity, contextOpts.annosLang])

  const makeLangLabel = () => {
    return <><TranslateIcon sx={{ marginRight: ".5em" }} />{cardLang === 'en' ? 'Français' : 'English'}</>
  }

  useEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect()
      setBoxDimensions({ width, height })
    }
  }, [boxOpen])

  const handleBoxClick = () => {
    setDialogOpen(true)
    setBoxOpen(false)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)

  }

  const handleBoxClose = () => setBoxOpen(false)

  const handleRelatedClick = (newEntityID: string) => {
    setEntity({
      id: newEntityID,
      position: entity?.position,
      fromRelation: true
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent, action: Function) => {
    if (e.key === 'Enter') {
      action()
    }
    if(e.key === 'Tab'){
      if(document.activeElement === closeButtonRef.current){
        boxRef.current?.focus()
      }
    }
  }
  

  if (entity && entity.id === entityId) {
    const entityContent = el.querySelector(`tei-note[lang=${cardLang}]`)
    if (!entityContent) return null
    let content: JSX.Element | undefined = undefined
    const closeNote = (<IconButton aria-label="close person info" onClick={() => handleDialogClose}>
        <CloseIcon />
      </IconButton>)

    const resp = entityContent?.getAttribute("resp")
    const authors = resp?.split(" ") || []
    const authorsData = authors.reduce<string[]>((acc, a) => {
      if (a && a !== "#other") {
        const authorEl = entityContent.ownerDocument.getElementById(a.replace("#", ""))
        if (authorEl) {
          acc.push(authorEl.textContent || "")
        }
      }
      return acc
    }, [])
    const author = authorsData.length > 0 ? <Box sx={{ fontStyle: "italic", textAlign: "right", fontSize: "1rem" }}>{authorsData.join(", ")}</Box> : null

    const chip = entityType ? <><br /><Chip size="small" label={entityType} /></> : null

    if(isScreenSmall || props.isSynoptic){
      content = (
        <><>
          {boxOpen && (
            <>
              <Box
                ref={boxRef}
                onClick={handleBoxClick}
                onKeyDown={(e) => handleKeyDown(e, () => {
                  setDialogOpen(true)
                  setBoxOpen(false)
                })}
                sx={{
                  position: 'absolute',
                  top: entity.position?.bottom,
                  left: entity.position?.left,
                  backgroundColor: "#0C3769",
                  color: "white",
                  borderRadius: 70,
                  boxShadow: theme.shadows[1],
                  padding: 2,
                  textTransform: 'none',
                  '&:hover': {
                    cursor: 'pointer'
                  },
                }}
                tabIndex={9}
              >
                {title}
              </Box>
              <IconButton
                ref={closeButtonRef}
                onClick={handleBoxClose}
                onKeyDown={(e) => handleKeyDown(e, handleBoxClose)}
                sx={{ position: 'absolute', top: (entity.position?.top || 0) - boxDimensions.height / 2, left: (entity.position?.left || 0) + boxDimensions.width / 2 - 15, color: "white", backgroundColor: "#0C3769" }}
                size="small"
                tabIndex={10 + relatedIDs.length}
              >
                <CloseIcon/>
              </IconButton>

              {relatedTitles.map((relatedTitle, index) => {
                const centerX = (entity.position?.left || 0) + boxDimensions.width / 2
                const centerY = (entity.position?.bottom || 0) + boxDimensions.height

                const relatedTitleX = centerX
                const relatedTitleY = centerY + 20 + index * 70

                const lineEndX = relatedTitleX
                const lineEndY = relatedTitleY

                return (
                  <Fragment key={index}>
                    {index == 0 && (
                      <Box
                      sx={{
                        position: 'absolute',
                        top: centerY,
                        left: centerX,
                        width: '2px',
                        height: 70,
                        backgroundColor: 'black',
                      }}
                    />
                    )}
                    {index < relatedTitles.length - 1 && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: lineEndY + 50,
                          left: lineEndX - 1,
                          width: '2px',
                          height: 70,
                          backgroundColor: 'black',
                        }}
                      />
                    )}
                    <Box
                      onClick={() => handleRelatedClick(relatedIDs[index])}
                      onKeyDown={(e) => handleKeyDown(e, () => handleRelatedClick(relatedIDs[index]))}
                      sx={{
                        position: 'absolute',
                        top: relatedTitleY,
                        left: relatedTitleX,
                        transform: 'translateX(-50%)',
                        backgroundColor: "#0C3769",
                        color: "white",
                        borderRadius: 60,
                        height: 50,
                        width: 100,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: theme.shadows[1],
                        border: '3px solid black',
                        textTransform: 'none',
                        padding: 2,
                        fontSize: '0.8rem',
                        lineHeight: '1.1',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                      tabIndex={tabIndex + 1}
                    >
                      {relatedTitle}
                    </Box>

                    
                  </Fragment>
                )
              })}
            </>
          )}
        </><Dialog
          open={dialogOpen}
          scroll="body"
          TransitionComponent={Transition}
          keepMounted
          onClose={handleDialogClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6">{title}{chip}</Typography>
              <IconButton aria-label="close dialog" onClick={handleDialogClose} onKeyDown={(e) => handleKeyDown(e, handleBoxClose)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText component="div" id="alert-dialog-slide-description">
                <Button size="small" onClick={() => setCardLang(cardLang === 'en' ? 'fr' : 'en')}>{makeLangLabel()}</Button>
                <TEINodes teiNodes={[entityContent]} {...props} />
                {author}
              </DialogContentText>
            </DialogContent>
          </Dialog></>
      )
    }
    else{
      content = (
        <><>
          {boxOpen && (
            <>
              <Box
                ref={boxRef}
                onClick={handleBoxClick}
                onKeyDown={(e) => handleKeyDown(e, () => {
                  setDialogOpen(true)
                  setBoxOpen(false)
                })}
                sx={{
                  position: 'absolute',
                  top: entity.position?.bottom,
                  left: entity.position?.left,
                  backgroundColor: "#0C3769",
                  color: "white",
                  borderRadius: 70,
                  boxShadow: theme.shadows[1],
                  padding: 2,
                  textTransform: 'none',
                  '&:hover': {
                    cursor: 'pointer'
                  },
                }}
                tabIndex={100 }
              >
                {title}
              </Box>
              <IconButton
                ref={closeButtonRef}
                onClick={handleBoxClose}
                onKeyDown={(e) => handleKeyDown(e, handleBoxClose)}
                sx={{ position: 'absolute', top: (entity.position?.top || 0) - boxDimensions.height / 2, left: (entity.position?.left || 0) + boxDimensions.width / 2 - 15, color: "white", backgroundColor: "#0C3769" }}
                size="small"
                tabIndex={10+relatedIDs.length}
              >
                <CloseIcon />
              </IconButton>

              {relatedTitles.map((relatedTitle, index) => {
                const centerX = (entity.position?.left || 0) + boxDimensions.width / 2
                const centerY = (entity.position?.bottom || 0) + boxDimensions.height

                const relatedTitleX = (entity.position?.left || 0) + boxDimensions.width / 2 + (index - (relatedTitles.length - 1) / 2) * 140
                const relatedTitleY = centerY + 50

                return (
                  <>
                    <Box
                      key={index}
                      onClick={() => handleRelatedClick(relatedIDs[index])}
                      onKeyDown={(e) => handleKeyDown(e, () => handleRelatedClick(relatedIDs[index]))}
                      sx={{
                        position: 'absolute',
                        top: relatedTitleY,
                        left: relatedTitleX,
                        transform: 'translateX(-50%)',
                        backgroundColor: "#0C3769",
                        color: "white",
                        borderRadius: '50%',
                        width: 90,
                        height: 90,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: theme.shadows[1],
                        border: '3px solid black',
                        textTransform: 'none',
                        padding: 2,
                        fontSize: '0.8rem',
                        lineHeight: '1.1',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                      tabIndex={tabIndex+1}
                    >
                      {relatedTitle}
                    </Box>
                  </>
                )
              })}



            </>
          )}
        </>
        {dialogOpen && (
          <Card
            style={{top: cardPosition}}
            sx={{
              maxWidth: "300px",
              position: "absolute",
              marginLeft: "1.5rem"
            }}
          >
            <CardHeader
              title={title}
              action={
                <IconButton onClick={handleDialogClose}>
                  <CloseIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Button size="small" onClick={() => {setCardLang(cardLang === 'en' ? 'fr' : 'en')}}>{makeLangLabel()}</Button>
              <TEINodes 
                teiNodes={[entityContent]}
                {...props}/>
              {author}
            </CardContent>
          </Card>
        )}

        </>
      )
    }


    return (
      <Behavior node={props.teiNode}>
        {content}
      </Behavior>
    )
  } else if (el.ownerDocument.getElementsByTagName("tei-text").length === 0) {
    return <SafeUnchangedNode {...props} />
  }

  return null
}

export default Entity
