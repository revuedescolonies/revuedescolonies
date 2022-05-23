import { Link } from "gatsby"
import React from "react"
import Container from "@mui/material/Container"

import Info from "./info"
import Nav from "./nav"

import titleImg from "../images/se-title.png"
import banner from "../images/se-banner.jpg"
import theme from "../theme"

import styled from '@emotion/styled'

interface Links {
  name: string
  link: string
}

interface Props {
  location: string
  siteTitle: string
  menuLinks: Links[]
  doi: string
  issue: {
    short: string
    path: string
  }
}

// Styled components

const Banner = styled.div(() => ({
  backgroundImage: `url(${banner})`,
  backgroundPositionY: "-588px",
  filter: "brightness(1.5) opacity(80%)",
  paddingBottom: "1.45rem",
}))

const Wrapper = styled.header(() => ({
  background: theme.palette.secondary.main,
  marginBottom: "1.45rem",
}))

const Logo = styled.div(() => ({
  padding: "1.45rem 0 0 0",
  marginLeft: "-24px",
  "& a": {
    textDecoration: "none",
  },
  "& img": {
    maxWidth: "300px",
    padding: "10px 20px 15px 20px",
  },
}))

const LogoBkgr = styled.span(() => ({
  height: "109px",
  position: "absolute",
  backgroundColor: "#fff",
  width: "200px",
  top: "18px",
  zIndex: -1,
  filter: "opacity(.5)",
}))

// Main Component

const Header = ({ location, menuLinks, doi, issue }: Props) => (
    <Wrapper>
      <Banner>
        <Container maxWidth="md">
          <Logo>
            <Link to="/">
              <LogoBkgr />
              <img src={titleImg} alt="Scholarly Editing Logo" width={200} />
            </Link>
          </Logo>
        </Container>
      </Banner>
      <Info doi={doi} issue={issue}/>
      <Nav location={location} menuLinks={menuLinks} />
    </Wrapper>
)

export default Header
