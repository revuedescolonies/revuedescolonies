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

interface Link {
  name: string
  link: string
}

interface Props {
  location: string
  menuLinks: Link[]
}

const styles = {
  nav: {
    "& .MuiGrid-item": {
      padding: "0 2.1rem 0 0",
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
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('md'))
  const lang = location.replace(/\w+-/, '')

  const handleTextLangChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    if (target.name == 'textLang') {
      const dest = location.replace("introduction-", "").replace(/\w{2}$/, target.value)
      navigate(`/${dest == "en" ? "" : dest}`)
    }
  }
  const options = (<>
    <Box sx={{flex: '1 1 auto'}}/>
    <DisplayOptionsMenu label={`Language (${lang})`} color="default">
      <Box sx={{padding: ".5em 1em 0 1em"}}> 
        <RadioGroup row name="textLang" value={lang} onChange={handleTextLangChange}>
          <FormControlLabel value="fr" control={<Radio />} label="Français" />
          <FormControlLabel value="en" control={<Radio />} label="English" />
        </RadioGroup>
      </Box>
    </DisplayOptionsMenu>
  </>)

  const isEdition = location.startsWith("RdC")

  return (
    <Container maxWidth="md" sx={styles.nav}>
      <Grid container={true} component="nav">
        {menuLinks.map(link => {
          console.log(location, link.link)
          const active = {
            borderBottomColor: location === link.link || (isEdition && link.name == "edition")
              ? theme.palette.primary.main
              : "transparent"
          }
          
          const buttonStyle = {...styles.navBtn, ...active}

          return (
            <Grid item={true} key={link.name} xs={6} sm="auto" md="auto">
              <Button
                color="default"
                size="large"
                sx={buttonStyle}
                onClick={() => navigate(link.link)}
              >
                {link.name}
              </Button>
            </Grid>
          )
        })}
        {isEdition ? options : null}
      </Grid>
    </Container>
  );
}

export default Nav
