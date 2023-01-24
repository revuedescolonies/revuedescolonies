import React from "react"

import Container from "@mui/material/Container"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import useScrollTrigger from '@mui/material/useScrollTrigger'

import { navigate } from "gatsby-link"
import DisplayOptionsMenu from "./displayOptionsMenu"
import { DisplayContext } from "../gatsby-theme-ceteicean/components/Ceteicean"
import { Box, Divider, FormControlLabel, FormGroup, MenuItem, Radio, RadioGroup, Switch, Typography } from "@mui/material"

const styles = {
  appbarContent: {
    display: 'flex'
  },
  appbarTop: {
    marginTop: '-1.5rem',
    marginBottom: '2.5em'
  },
  appbarSpacer: {
    flex: '1 1 auto'
  },
  menuLabel: {
    padding: '6px 16px'
  }
}

function FixedScroll({children}: {children: JSX.Element}) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 250,
  })

  return React.cloneElement(children, {
    position: trigger ? 'fixed' : 'static',
    sx: trigger ? '' : styles.appbarTop
  })
}

type Props = {
  location: string
}

export default function MicroedAppBar({location}: Props) {
  // const isScreenSmall = useMediaQuery(theme.breakpoints.down('md'))
  const { contextOpts, setContextOpts } = React.useContext(DisplayContext)
  const lang = location.replace(/\w+-/, '')

  const tocs: {[key: string]: any} = {
    "RdCv1n1-fr": [
      {
        id: "prospectus",
        label: "Prospectus."
      },
      {
        id: "declaration",
        label: "DÉCLARATION DE PRINCIPES."
      },
      {
        id: "regime",
        label: "COUP D'OEIL SUR LE RÉGIME COLONIAL ET SES EFFETS."
      },
    ],
    "RdCv1n1-en": [
      {
        id: "prospectus",
        label: "Prospectus."
      },
      {
        id: "declaration",
        label: "DECLARATION OF PRINCIPLES."
      },
      {
        id: "regime",
        label: "A LOOK AT THE COLONIAL REGIME AND ITS EFFECTS."
      },
    ],
    "RdCv2n1-fr": [
      {
        id: "abolition",
        label: "DE L'ABOLITION DE L'ESCLAVAGE PAR LA CONVENTION NATIONALE. — PROJET DE LOI DE LA REVUE DES COLONIES."
      },
      {
        id: "bill",
        label: "PROJET DE LOI POUR L'ABOLITION DE L'ESCLAVAGE DANS LES COLONIES FRANCAISES."
      }
    ],
    "RdCv2n1-en": [
      {
        id: "abolition",
        label: "ON THE ABOLITION OF SLAVERY BY THE NATIONAL CONVENTION. — REVUE DES COLONIES BILL."
      },
      {
        id: "bill",
        label: "BILL FOR THE ABOLITION OF SLAVERY IN THE FRENCH COLONIES."
      }
    ]
  }

  const handleNavClick = (here: boolean, dest: string) => {
    if (here) {
      return null
    }
    navigate(`/${dest}`)
  }

  const makeMenuButton = (dest: string, label: string) => {
    const here = location.endsWith(dest)
    return <MenuItem onClick={() => handleNavClick(here, dest)}>
      {label}
    </MenuItem>
  }

  const handleAnnosLangChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const opts = Object.assign({}, contextOpts)
    opts.annosLang = target.value
    setContextOpts(opts)

    // Switch page if textLang is changed
    if (target.name == 'textLang') {
      const dest = location.replace(/\w{2}$/, target.value)
      navigate(`/${dest}`)
    }
  }

  const handleSpelling = () => {
    const opts = Object.assign({}, contextOpts)
    opts.originalSpelling = !opts.originalSpelling
    setContextOpts(opts)
  }

  const spelling = lang === "fr"
  ? <><FormGroup>
    <FormControlLabel control={<Switch onClick={handleSpelling}/>} label="Orthographe originale" />
  </FormGroup>
  <Divider /></>
  : null

  const options = (<>
    <Box sx={styles.appbarSpacer}/>
    <DisplayOptionsMenu label={lang === "fr" ? "Options d'affichage" : "Display options"}>
      <Box sx={{padding: ".5em 1em 0 1em"}}>
        {spelling}
        <Typography variant="body2">Annotations</Typography>
        <RadioGroup row name="annosLang" value={contextOpts.annosLang} onChange={handleAnnosLangChange}>
          <FormControlLabel value="fr" control={<Radio />} label="Français" />
          <FormControlLabel value="en" control={<Radio />} label="English" />
        </RadioGroup>
      </Box>
    </DisplayOptionsMenu>
  </>)

  const sections = !tocs[location] || location.includes("synoptic") ? null :
    <DisplayOptionsMenu label="Sections" forceLabel closeOnClick>
      {tocs[location].map((t: any) => (
        makeMenuButton(`${location}#${t.id}`, t.label) 
      ))}
    </DisplayOptionsMenu>

  return (<FixedScroll>
    <AppBar>
      <Toolbar>
        <Container maxWidth="md" sx={styles.appbarContent}>
        {sections}
        {options}
        </Container>
      </Toolbar>
    </AppBar>
  </FixedScroll>)
}