import React from "react"

import Nav from "./nav"

import banner from "../images/se-banner.jpg"
import theme from "../theme"

import styled from '@emotion/styled'

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
  backgroundImage: `url(${banner})`,
  backgroundPositionX: "-125px",
  filter: "opacity(80%)",
  paddingBottom: "1.45rem",
}))

const Wrapper = styled.header(() => ({
  background: theme.palette.secondary.main,
  marginBottom: "1.45rem",
}))

// Main Component

const Header = ({ location, menuLinks }: Props) => (
    <Wrapper>
      <Banner>
        <div style={{height:'150px'}}>{" "}</div>
      </Banner>
      <Nav location={location} menuLinks={menuLinks} />
    </Wrapper>
)

export default Header
