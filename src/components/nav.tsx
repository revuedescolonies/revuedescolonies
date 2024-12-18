import React from "react"
import { navigate } from "gatsby"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import DisplayOptionsMenu from "./displayOptionsMenu"

import theme from "../theme"
import useMediaQuery from "@mui/material/useMediaQuery"
import Box from "@mui/material/Box"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"
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
}

const Nav = ({ location, menuLinks }: Props) => {
  const loc = decodeURIComponent(location)
  const isEdition = loc.replace(/\//g, '').startsWith("RdC")
  const isNews = loc.includes('/en/news') || loc.includes('/fr/nouvelles')
  let curLang: Lang = isEdition && loc.slice(-2) === "fr" ? "fr" : "en"
  if (!isEdition && loc !== "" && loc !== "/") {
   curLang = location.substring(1, 3) as Lang
  }

  const isScreenSmall = useMediaQuery(theme.breakpoints.down('md'))

  const handleTextLangChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const chosenLang = event.target.value as Lang
    if (isEdition) {
      const dest = loc.replace(/\w{2}$/, event.target.value)
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
  const options = (<>
    <Box sx={{flex: '1 1 auto'}}/>
    <DisplayOptionsMenu label={`${curLang === "fr" ? "Langues" : "Language"} (${curLang})`} color="default">
      <Box sx={{padding: ".5em 1em 0 1em"}}> 
        <RadioGroup row name="textLang" value={curLang} onChange={handleTextLangChange}>
          <FormControlLabel value="fr" control={<Radio />} label="Français" />
          <FormControlLabel value="en" control={<Radio />} label="English" />
        </RadioGroup>
      </Box>
    </DisplayOptionsMenu>
  </>)

  return (
    <Container maxWidth="md" sx={styles.nav}>
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
