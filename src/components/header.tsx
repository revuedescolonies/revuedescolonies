import React from "react"

import Nav from "./nav"

import bannerBkg from "../images/banner-bk.jpg"
import theme from "../theme"

import styled from '@emotion/styled'
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "@mui/material"

export interface Link {
  name: string
  link: string
}

interface Props {
  location: string
  siteTitle: string
  menuLinks: {
    en: Link
    fr: Link
  }[]
}

// Styled components

const Banner = styled.div(() => ({
  backgroundImage: `url(${bannerBkg})`,
  backgroundSize: "cover",
  // backgroundPosition: "center",
  filter: "opacity(80%)",
  padding: "1.45rem 0",
  backgroundRepeat: "no-repeat",
}))

const Wrapper = styled.header(() => ({
  background: theme.palette.secondary.main,
  marginBottom: "1.45rem",
}))

// Main Component

const Header = ({ location, menuLinks }: Props) => (
    <Wrapper>
      <Banner>
        <Container maxWidth="md">
          <StaticImage
            src="../images/banner-title.png"
            alt="Revue des Colonies: a Digital Scholarly Edition and Translation"
            placeholder="none" />
        </Container>
      </Banner>
      {location !== "404" && <Nav location={location} menuLinks={menuLinks} />}
    </Wrapper>
)

export default Header
