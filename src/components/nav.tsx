import React from "react"
import { navigate } from "gatsby"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"

import theme from "../theme"

interface Links {
  name: string
  link: string
}

interface Props {
  location: string
  menuLinks: Links[]
}

const styles = {
  nav: {
    "& div": {
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

const Layout = ({ location, menuLinks }: Props) => {
  const isHome = location === "intro"

  return (
    <Container maxWidth="md" sx={styles.nav}>
      <Grid container={true} component="nav">
        {menuLinks.map(link => {
          const active = {
            borderBottomColor: (isHome && link.link === "/") || location === link.link.replace(/\/+/, "")
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
      </Grid>
    </Container>
  );
}

export default Layout
