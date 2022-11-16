import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";

import theme from "../theme"
import Header from "./header"
import Footer from "./footer"
import EditionFooter from "./editionFooter"

import styled from '@emotion/styled'
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Rotate90DegreesCcwIcon from '@mui/icons-material/Rotate90DegreesCcw';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

type Children = JSX.Element | JSX.Element[]

interface Props {
  location?: string
  appbar?: JSX.Element
  children?: Children
}

const Main = styled.div(() => ({
  paddingBottom: '1.45rem',
  minHeight: "60vh",
  "& h2, & h3": {
    paddingBottom: '1rem'
  }
}))

const Layout = ({ location, appbar, children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
          title
          repository
        }
      }
    }
  `)
  
  const {repository, title, menuLinks} = data.site.siteMetadata

  let footer = <Footer repository={repository}/>
  if (location?.startsWith("RdC")) {
    footer = <EditionFooter repository={repository}>{footer}</EditionFooter>
  }

  const styles = {
    Body: {
      "&& ::selection": { 
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main
      }
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
    },
    backdropText: {
      backgroundColor: '#fff',
      padding: '2em'
    },
    backdropIcon: {
      display: 'block',
      fontSize: "150%"
    }
  }

  const [open, setOpen] = React.useState(true)
  let backdrop: JSX.Element | undefined
  
  if (location?.startsWith('synoptic') && useMediaQuery('(max-width:500px)')) {
    backdrop = <Backdrop sx={styles.backdrop} open={open} onClick={() => setOpen(false)}>
      <Typography component="mark" variant="h4" sx={styles.backdropText}>
        <Rotate90DegreesCcwIcon sx={styles.backdropIcon} />
        Rotate your device to a landscape (horizontal) position for the Synoptic view 
        <br/><br/>
        <em>Tap to dismiss</em>
      </Typography>
    </Backdrop>
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={styles.Body}>
          <Header
            menuLinks={menuLinks}
            location={location || ''}
            siteTitle={title}
          />
          {appbar}
          {backdrop}
          <Main>
            {children}
          </Main>
          {footer}
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Layout
