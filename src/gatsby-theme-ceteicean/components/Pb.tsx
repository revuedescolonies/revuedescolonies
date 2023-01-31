import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image"
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Paper from '@mui/material/Paper'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'

import { Fac } from "./Ceteicean"
import { Box } from "@mui/system"

interface TEIProps {
  teiNode: Node,
  availableRoutes?: string[]
  facs: Fac[]
}

export type PbBehavior = (props: TEIProps) => JSX.Element | null

const Pb: PbBehavior = ({teiNode, facs}: TEIProps) => {
  const styles = {
    ease: {
      transition: 'all .5s ease-in-out',
    },
    background: {
      width: '100%',
      margin: '1em 0',
      gridArea: "1/1",
      height: '54px',
      opacity: .4,
      // overflow: 'clip',
      objectFit: "cover",
    },
    accordion: {
      width: '100%',
      margin: '1em 0',
      gridArea: "1/1",
      position: "relative",
      zIndex: 1,
      backgroundColor: 'transparent',
      '& .Mui-expanded': {
        width: '100%',
        margin: '0'
      },
    },
    side: {
      position: 'absolute',
      left: 'auto',
      width: '10em',
      marginTop: '-1em',
      marginLeft: '-12em'
    },
    paper: {
      padding: '.6em 1em'
    },
    empty: {
      position: 'static !important',
      marginBottom: '2em',
      left: 'auto',
      width: '10em',
      marginTop: '-1em',
      marginLeft: '-12em'
    }
  }

  const pb = teiNode as Element
  const n = pb.getAttribute('n') || ''
  const facRef = pb.getAttribute('facs') || ''

  const isRemote = facRef.startsWith('http')

  const img = facs.filter(f => f.name === facRef)[0]

  let page: JSX.Element | undefined = undefined

  const BackgroundImage = styled(GatsbyImage)<GatsbyImageProps>(() => ({
    ...styles.background,
    ...styles.ease
  }))

  if (img || isRemote) {

    const [expanded, setExpanded] = React.useState(false)
    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded)
    }

    let background: JSX.Element | undefined
    if (!expanded) {
      background = isRemote ? <img src={facRef} style={{...styles.background, ...styles.ease}} /> : <BackgroundImage
        image={img.childImageSharp.gatsbyImageData}
        alt=""/>
    }

    const mainImage = isRemote ? <img src={facRef} /> : <GatsbyImage
      image={img.childImageSharp.gatsbyImageData}
      alt={`Image of page ${n}`}/>

    page = (
      <Box sx={{display: "grid"}}>
        {background}
        <Accordion sx={styles.accordion} onChange={handleChange} expanded={expanded}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="pb-content"
            id="pb-header"
          >
            {n}
          </AccordionSummary>
          <AccordionDetails sx={{textAlign: "center"}}>
            {mainImage}
          </AccordionDetails>
        </Accordion>
      </Box>
    )

  } else if (n) {
    page = <Paper elevation={1} sx={{...styles.accordion, ...styles.paper}}>{n}</Paper>
  }

  if (n) {
    return (
      <Behavior node={teiNode}>
        {page}
      </Behavior>    
    )
  }
  return null
}

export default Pb
