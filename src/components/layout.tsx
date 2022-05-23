import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";

import theme from "../theme"
import Header from "./header"
import Footer from "./footer"
import EditionFooter from "./editionFooter"

import styled from '@emotion/styled'


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

type Children = JSX.Element | JSX.Element[]

interface Props {
  location?: string
  children?: Children
}

const Main = styled.div(() => ({
  paddingBottom: '1.45rem',
  minHeight: "60vh",
  "& h2, & h3": {
    paddingBottom: '1rem'
  }
}))

const Layout = ({ location, children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          doi
          issue {
            short
            path
          }
          repository
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  
  const {repository, title, menuLinks, doi, issue} = data.site.siteMetadata

  let footer = <Footer repository={repository}/>
  if (location === "example") {
    footer = <EditionFooter repository={repository}>{footer}</EditionFooter>
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          issue={issue}
          location={location || ''}
          siteTitle={title}
          menuLinks={menuLinks}
          doi={doi}
        />
        <Main>{children}</Main>
        {footer}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Layout
