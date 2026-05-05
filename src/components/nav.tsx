import React from "react"
import { navigate } from "gatsby"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormLabel from "@mui/material/FormLabel"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import Typography from "@mui/material/Typography"
import DisplayOptionsMenu from "./displayOptionsMenu"

import theme from "../theme"
import Box from "@mui/material/Box"
import type {Link} from './header'

interface Props {
  location: string
  menuLinks: {
    en: Link
    fr: Link
  }[]
}

const styles = {
  nav: {
    "& .MuiGrid-item": {
      padding: "0 1rem 0 0",
    },
  },
  navBtn: {
    borderBottom: "3px solid transparent",
    borderBottomColor: "transparent",
    borderRadius: 0,
    boxShadow: "none",
    "&:hover, &:focus": {
      backgroundColor: "transparent",
      borderBottomColor: theme.palette.primary.main,
    },
  },
  srOnly: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: 1
  }
}

const Nav = ({ location, menuLinks }: Props) => {
  const loc = decodeURIComponent(location)
  const isEdition = loc.replace(/\//g, '').startsWith("RdC")
  const isNews = loc.includes('/en/news') || loc.includes('/fr/nouvelles')
  let curLang: Lang = isEdition && loc.slice(-2) === "fr" ? "fr" : "en"
  if (!isEdition && loc !== "" && loc !== "/") {
   curLang = location.substring(1, 3) as Lang
  }

  const [draftLang, setDraftLang] = React.useState<Lang>(curLang)

  React.useEffect(() => {
    setDraftLang(curLang)
  }, [curLang])

  const applyTextLangChange = (chosenLang: Lang) => {
    if (isEdition) {
      const dest = loc.replace(/\w{2}$/, chosenLang)
      navigate(`/${dest}`)
    } else if (isNews) {
      // Special case to go from any post to the news toc in the other lang
      navigate(curLang === "en" ? "/fr/nouvelles" : "/en/news")
    } else {
      const curLoc = menuLinks.filter(ml => ml[curLang].link.replace(/\//g, '') === loc.replace(/\//g, ''))[0]
      if (curLoc) {
        navigate(curLoc[chosenLang].link)
      } else {
        navigate(location.replace(/\/(fr|en)\//, `/${chosenLang}/`))
      }
    }
  }

  const handleTextLangSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDraftLang(event.target.value as Lang)
  }

  const handleTextLangKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter") {
      return
    }

    event.preventDefault()

    if (draftLang !== curLang) {
      applyTextLangChange(draftLang)
    }
  }

  const options = (<>
    <Box sx={{flex: '1 1 auto'}}/>
    <DisplayOptionsMenu label={`${curLang === "fr" ? "Langues" : "Language"} (${curLang})`} color="default">
      <Box sx={{padding: ".5em 1em 0 1em"}}>
        <Typography id="site-language-label" component="span" sx={styles.srOnly}>
          {curLang === "fr" ? "Langue du site" : "Site language"}
        </Typography>
        <Typography id="site-language-help" component="span" sx={styles.srOnly}>
          {curLang === "fr"
            ? "Utilisez les flèches pour choisir une langue puis appuyez sur Entrée pour changer de langue."
            : "Use the arrow keys to choose a language, then press Enter to change the language."
          }
        </Typography>
        <FormControl component="fieldset" variant="standard">
          <RadioGroup
            row
            aria-labelledby="site-language-label"
            aria-describedby="site-language-help"
            name="textLang"
            value={draftLang}
            onChange={handleTextLangSelect}
            onKeyDown={handleTextLangKeyDown}
          >
            <FormControlLabel
              value="fr"
              control={<Radio inputProps={{ "aria-label": curLang === "fr" ? "Langue du site : francais" : "Site language: French" }} />}
              label="Français"
            />
            <FormControlLabel
              value="en"
              control={<Radio inputProps={{ "aria-label": curLang === "fr" ? "Langue du site : anglais" : "Site language: English" }} />}
              label="English"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </DisplayOptionsMenu>
  </>)

  return (
    <Container sx={{...styles.nav, maxWidth: curLang === "en" ? "960px !important" : "1100px !important" }}> 
      <Grid container={true} component="nav">
        {menuLinks.map(link => {
          const active = {
            borderBottomColor: (isNews && ["news", "nouvelles"].includes(link[curLang].name)) || loc.replace(/\//g, '') === link[curLang].link.replace(/\//g, '') || (isEdition && link[curLang].name.endsWith("dition"))
              ? theme.palette.primary.main
              : "transparent"
          }
          
          const buttonStyle = {...styles.navBtn, ...active}

          return (
            <Grid item={true} key={link[curLang].name} xs={6} sm="auto" md="auto">
              <Button
                color="default"
                size="large"
                sx={buttonStyle}
                onClick={() => navigate(link[curLang].link)}
              >
                {link[curLang].name}
              </Button>
            </Grid>
          )
        })}
        {options}
      </Grid>
    </Container>
  );
}

export default Nav
