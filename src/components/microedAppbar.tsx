import React from "react"

import Container from "@mui/material/Container"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import useScrollTrigger from '@mui/material/useScrollTrigger'

import { navigate } from "gatsby-link"
import DisplayOptionsMenu from "./displayOptionsMenu"
import { DisplayContext } from "../gatsby-theme-ceteicean/components/Context"
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
  toc: {id: string, label: string}[]
}

export default function MicroedAppBar({location, toc}: Props) {
  // const isScreenSmall = useMediaQuery(theme.breakpoints.down('md'))
  const { contextOpts, setContextOpts } = React.useContext(DisplayContext)
  const lang = location.replace(/\w+-/, '')

  const tocs: {[key: string]: any} = {
    "RdCv1n1-fr": [
      {
        id: "prospectus",
        label: "Prospectus"
      },
      {
        id: "declaration",
        label: "Déclaration de principes"
      },
      {
        id: "regime",
        label: "Coup d'oeuil sur le régime colonial et ses effets"
      },
      {
        id: "affaire",
        label: "Affaire de la Grand'Anse"
      },
      {
        id: "discours",
        label: "Un mot sur le discours prononcé par M. Isambert dans la séance du 8 mai dernier"
      },
      {
        id: "instruction",
        label: "Nécessité de l'instruction aux colonies"
      },
      {
        id: "question",
        label: "Question électorale"
      },
      {
        id: "pourvoi",
        label: "Pourvoi d'un patroné"
      },
      {
        id: "traits",
        label: "Traits de cruauté"
      },
      {
        id: "france",
        label: "France"
      },
      {
        id: "coloniesfr",
        label: "Colonies françaises"
      },
      {
        id: "coloniesetr",
        label: "Colonies étrangères"
      },
      {
        id: "necrologie",
        label: "Nécrologie"
      },
    ],
    "RdCv1n1-en": [
      {
        id: "prospectus",
        label: "Prospectus"
      },
      {
        id: "declaration",
        label: "Declaration of principles"
      },
      {
        id: "regime",
        label: "A look at the colonial regime and its effects"
      },
            {
        id: "affair",
        label: "The Grand'Anse affair"
      },
      {
        id: "speech",
        label: "A word on the speech delivered by Mr. Isambert at the session of this past May 8th"
      },
      {
        id: "education",
        label: "The need for education in the colonies"
      },
      {
        id: "question",
        label: "The electoral question"
      },
      {
        id: "appeal",
        label: "A de facto freedman's appeal"
      },
      {
        id: "traits",
        label: "Traits of cruelty"
      },
      {
        id: "france",
        label: "France"
      },
      {
        id: "coloniesfr",
        label: "French colonies"
      },
      {
        id: "coloniesetr",
        label: "Foreign colonies"
      },
      {
        id: "necrology",
        label: "Necrology"
      },
    ],
    "RdCv2n1-fr": [
      {
        id: "abolition",
        label: "De l'abolition de l'esclavage par la Convention Nationale"
      },
      {
        id: "bill",
        label: "Projet de loi pour l'abolition de l'esclavage dans les colonies françaises"
      }
    ],
    "RdCv2n1-en": [
      {
        id: "abolition",
        label: "On the abolition of slavery by the National Convention"
      },
      {
        id: "bill",
        label: "Bill for the abolition of slavery in the French colonies"
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
    return <MenuItem onClick={() => handleNavClick(here, dest)} key={label}>
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
    <FormControlLabel control={<Switch onClick={handleSpelling} defaultChecked={contextOpts.originalSpelling as boolean}/>} label="Orthographe originale" />
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

  const sections = !toc || location.includes("synoptic") ? null :
    <DisplayOptionsMenu label="Sections" forceLabel closeOnClick>
      {toc.map((t: any) => (
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