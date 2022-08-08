import { createTheme } from "@mui/material/styles"

// Extend colors and allow extensions on Button

declare module '@mui/material/styles' {
  interface Palette {
    default: Palette['primary'];
  }
  interface PaletteOptions {
    default: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    default: true;
  }
}

const mainColor = "#002654"

// A custom theme for CETEIcean
// It is not intended to be comprehensive; add further rules as needed.
const theme = createTheme({
  typography: {
    fontFamily: "'PT Serif', serif",
    body1: {
      fontSize: "1.25rem",
      paddingBottom: "1.25rem",
    },
    body2: {
      fontSize: "1rem"
    },
    subtitle1: {
      fontSize: "1.4rem",
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": [
          {
            fontFamily: "EB Garamond",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 400,
            fontSize: "1.25rem",
          },
        ],
        "a, a:visited, a:hover, a:active": {
          color: mainColor,
        },
        "h1, h2, h3, h4, h5, h6": {
          color: "#333",
        },
        // "tei-choice tei-abbr + tei-expan:before, tei-choice tei-expan + tei-abbr:before, tei-choice tei-sic + tei-corr:before, tei-choice tei-corr + tei-sic:before, tei-choice tei-orig + tei-reg:before, tei-choice tei-reg + tei-orig:before": {
        //   content: `" ("`
        // },
        // "tei-choice tei-abbr + tei-expan:after, tei-choice tei-expan + tei-abbr:after, tei-choice tei-sic + tei-corr:after, tei-choice tei-corr + tei-sic:after, tei-choice tei-orig + tei-reg:after, tei-choice tei-reg + tei-orig:after": {
        //   content: `")"`
        // },
        "tei-choice tei-sic": { // TODO: show as popup
          display: "none",
        },
        "tei-choice tei-corr": {
          borderBottom: "2px solid Red",
          cursor: "pointer"
        },
        "tei-ab": {
          display: "block",
          marginTop: "1.25em",
          marginBottom: "1.25em",
        },
        "tei-emph": {
          fontStyle: "italic"
        },
        "tei-head": {
          display: "block",
          textAlign: "center"
        },
        "tei-body > tei-head": {
          fontSize: "180%",
        },
        "tei-lb:after": {
          content: "'\\a'",
          whiteSpace: "pre"
        },
        "tei-p": {
          display: "block",
          marginTop: "1.25em",
          marginBottom: "1.25em",
          textAlign: "justify",
          textIndent: "1rem"
        },
        "tei-q:before": {
          content: `"“"`
        },
        "tei-q:after": {
          content: `"”"`
        },
        "tei-div > tei-div": { // Make sure to only get div/div and no other div
          display: "block",
          marginTop: "1rem",
          paddingTop: "1rem",
          borderTop: "1px solid grey"
        },
        "tei-closer": {
          display: "block",
          textAlign: "right"
        },
        "tei-persName[ref]": { // Generate list of refs that should be rendered as annotations
          borderBottom: "4px solid darkred",
          cursor: "pointer"
        },
        "tei-placeName[ref='#MQ']": { // Generate list of refs that should be rendered as annotations
          borderBottom: "4px solid blue",
          cursor: "pointer"
        },
        "tei-rs[type=affaire]": { // Generate list of refs that should be rendered as annotations
          borderBottom: "4px solid purple",
          cursor: "pointer"
        }
      }
    },
  },
  palette: {
    default: {
      main: "#444",
    },
    text: {
      primary: "#444",
    },
    primary: {
      main: mainColor,
    },
    secondary: {
      main: "#E3DCD4",
    },
    background: {
      default: "#fff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1536,
    }
  }
})

export default theme
