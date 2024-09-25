import React from "react"
import Fab from "@mui/material/Fab"

import Download from "./Download"
import { DisplayContext } from "../gatsby-theme-ceteicean/components/Context"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const styles = {
  allFab: {
    position: 'fixed',
    right: "1em",
    zIndex: 99999,
    padding: "10px",
  },
  teiFab: {
    bottom: "1em",
    "& svg": {
      maxHeight: "60px",
    }
  },
  topFab: {
    bottom: "6em",
  },
  searchFab: {
    position: 'fixed',
    bottom: "11em",
  },
  stopFab: {
    bottom: "150px"
  }
}

interface Props {
  repository: string
  children: JSX.Element | JSX.Element[]
}

const EditionFooter = ({children, repository}: Props) => {
  const footerRef = React.useRef<HTMLElement>(null)
  const [stopFab, setStopFab] = React.useState(false)
  const [showToTop, setShowToTop] = React.useState(false)
  const { contextOpts, setContextOpts } = React.useContext(DisplayContext)
  const { entitiesToShow, ...cleanContextOpts } = contextOpts;
  const hasSearch = contextOpts.entitiesToShow;

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY
      const windowSize     = window.innerHeight
      const bodyHeight     = document.body.offsetHeight

      if (scrollPosition > 250) {
        setShowToTop(true)
      } else {
        setShowToTop(false)
      }

      const footerEl = footerRef.current
      const threshold = footerEl ? footerEl.getBoundingClientRect().height : 100

      if (Math.max(bodyHeight - (scrollPosition + windowSize), 0) < threshold) {
        setStopFab(true)
      } else {
        setStopFab(false)
      }
    })
  }, [footerRef])

  const [open, setOpen] = React.useState(false)

  return (<div {...{ ref: footerRef } as any}>
    <Download open={open} close={() => setOpen(false)} repository={repository}/>
    {showToTop && 
      <Fab size="large" color="secondary" aria-label="Back to top" 
          sx={{
            ...styles.topFab,
            ...styles.allFab,
            ...(stopFab && styles.stopFab)
          }}
          onClick={() => window.scroll({top: 0, behavior: "smooth"})}>
        <KeyboardDoubleArrowUpIcon />
      </Fab>
    }
    <Fab size="large" color="secondary" aria-label="Show TEI" 
        sx={{
          ...styles.teiFab,
          ...styles.allFab,
          ...(stopFab && styles.stopFab)
        }}
        onClick={() => setOpen(true)}>
      <svg height="661" viewBox="0 0 627 661" width="627">
        <path
          fill="#c9b23e"
          d="M 332,19 368,84 558.3,198.4 557.6,415.6 593,480 V 211 l -28.1,-48.7 z"
          id="path142" />
        <path
          fill="#f3d448"
          d="M 332,19 365,0 599,143 565,162 Z"
          id="path144" />
        <path
          fill="#ffe14d"
          d="m 627,194 -28,-51 -34,19 28,49 z"
          id="path146" />
        <path
          fill="#e5c944"
          d="M 627,461 V 194 l -34,17 v 269 z"
          id="path148" />
        <path
          d="m 113,238 h 146.5 v 44.2 H 210.4 V 417 H 162.2 V 282.2 H 113 Z"
          id="path150" />
        <path
          d="m 282,238 h 129.3 v 38.2 h -80.9 v 28.5 h 75.1 v 36.5 h -75.1 v 35.3 h 83.3 V 417 H 282 Z"
          id="path152" />
        <path
          d="m 441,238 h 52.3 V 417 H 441 Z"
          id="path154" />
        <path
          fill="#c9b23e"
          d="M 0,200 V 469 L 29,519 262,661 226,597 36,481 V 264 Z"
          id="path156" />
        <path
          fill="#ffe14d"
          d="M 33,181 69,247 36,264 0,200 Z"
          id="path158" />
        <path
          fill="#e5c944"
          d="M 69,463 V 247 l -33,17 v 217 z"
          id="path160" />
        <path
          fill="#f3d448"
          d="M 259,577 69,463 36,481 226,597 Z"
          id="path162" />
        <path
          fill="#ffe14d"
          d="m 295,641 -36,-64 -33,20 36,64 z"
          id="path164" />
      </svg>
    </Fab>
    {hasSearch && <Fab size="large" color="secondary" aria-label="Show TEI" variant="extended"
        sx={{
          ...styles.searchFab,
          ...styles.allFab,
          ...(stopFab && styles.stopFab)
        }}
        onClick={() => setContextOpts(cleanContextOpts)}>
      Clear search results
    </Fab>}
    {children}
  </div>)
}

export default EditionFooter