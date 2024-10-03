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

export const mainColor = "#002654"

// A custom theme for CETEIcean
// It is not intended to be comprehensive; add further rules as needed.
const theme = createTheme({
  typography: {
    fontFamily: "EB Garamond, serif",
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
        "html": {
          scrollPaddingTop: "75px"
        },
        "a, a:visited, a:hover, a:active": {
          color: mainColor,
        },
        "h1, h2, h3, h4, h5, h6": {
          color: "#333",
        },
        "blockquote": {
          fontWeight: "600",
        },
        "blockquote .footnote-ref": {
          fontWeight: "400",
        },
        "tei-choice tei-orig": {
          borderBottom: "2px solid #A9A9A9",
          borderBottomStyle: "dashed",
          cursor: "pointer"
        },
        "tei-ab": {
          display: "block",
          marginTop: "1.25em",
          marginBottom: "1.25em",
        },
        "tei-emph, tei-foreign": {
          fontStyle: "italic"
        },
        "tei-head": {
          display: "block",
          textAlign: "center",
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
        "tei-div": { // Make sure to only get div/div and no other div
          display: "block",
          marginTop: "1rem",
          paddingTop: "1rem"
        },
        "tei-div > tei-div, tei-body > tei-div": {
          borderTop: "1px solid grey"
        },
        "tei-floatingText tei-body > tei-div": {
          borderTop: "none"
        },
        "tei-closer": {
          display: "block",
          textAlign: "right"
        },
        "tei-titlePage": {
          display: "block",
          textAlign: "center"
        },
        "tei-title": {
          fontStyle: "italic"
        },
        // "tei-back": {
        //   flex: "1"
        // },
        "tei-note tei-bibl:nth-of-type(1)": {
          borderTop: "1px solid grey",
          paddingTop: "1rem"
        },
        "tei-note tei-bibl": {
          display: "block",
          fontSize: "1rem",
          marginBottom: "1rem",
        },
        "tei-figdesc": {
          display: "block",
          textAlign: "center",
          lineHeight: "1.66",
          padding: "0 1em"
        },
        "tei-note tei-figdesc": {
          fontSize: "0.75rem",
        },
        "#synoptic": {
          wordBreak: "break-word"
        },
        "tei-titlepart": {
          display: "block",
          marginBottom: "2em"
        },
        "tei-byline": {
          display: "block",
          marginBottom: "2em"
        },
        "tei-docedition": {
          display: "block",
          marginBottom: "2em"
        },
        "tei-docimprint": {
          display: "block",
          marginBottom: "2em"
        },
        "#RdCv1n1-en tei-titlepart[type=main] tei-seg:nth-of-type(1), #RdCv1n1-fr tei-titlepart[type=main] tei-seg:nth-of-type(1), #RdCv2n1-en tei-titlepart[type=main] tei-seg:nth-of-type(1), #RdCv2n1-fr tei-titlepart[type=main] tei-seg:nth-of-type(1)": {
          fontSize: "2.5em"
        },
        "#RdCv1n1-en tei-titlepart[type=main] tei-seg:nth-of-type(2), #RdCv1n1-fr tei-titlepart[type=main] tei-seg:nth-of-type(2)": {
          fontSize: "3.5em",
          fontWeight: "500"
        },
        "#RdCv2n1-en tei-titlepart[type=main] tei-seg:nth-of-type(2), #RdCv2n1-fr tei-titlepart[type=main] tei-seg:nth-of-type(2)": {
          fontSize: "4em",
        },
        "tei-byline tei-persname, tei-settlement": {
          fontWeight: "600"
        },
        "#RdCv1n1-en tei-byline:nth-of-type(2), #RdCv1n1-fr tei-byline:nth-of-type(2)": {
          fontWeight: "600"
        },
        "*[rend=bold]": {
          fontWeight: "600"
        },
        "tei-front tei-figure": {
          display: "block",
          marginBottom: "1em"
        },
        "#RdCv2n1-en tei-body > tei-div tei-head:nth-of-type(1), #RdCv2n1-fr tei-body > tei-div tei-head:nth-of-type(1)": {
          fontSize: "1.5em"
        },
        "#RdCv1n1-en tei-body > tei-div tei-head:nth-of-type(1) tei-seg:nth-of-type(1), #RdCv1n1-fr tei-body > tei-div tei-head:nth-of-type(1) tei-seg:nth-of-type(1)": {
          fontSize: "1.5em"
        },
        "#RdCv1n1-en tei-body > tei-div tei-head:nth-of-type(1) tei-seg:nth-of-type(2), #RdCv1n1-fr tei-body > tei-div tei-head:nth-of-type(1) tei-seg:nth-of-type(2)": {
          fontSize: "2.5em"
        },
        "tei-note tei-p": {
          textIndent: "0",
          textAlign: "left",
        },
        "#synoptic #RdCv1n1-fr tei-front, #synoptic #RdCv1n1-en tei-front": {
          display: "block",
          minHeight: "48.5em"
        },
        "#synoptic #RdCv1n1-fr #prospectus": {
          display: "block",
          minHeight: "214em"
        },
        "#synoptic #RdCv1n1-en #prospectus": {
          display: "block",
          minHeight: "203em"
        },
        "tei-note": {
          fontSize: "1rem",
          color: "rgba(0, 0, 0, 0.54)"
        },
        ".RdCcontent > #entities": {
          margin: "0 auto",
          width: "60%"
        },
        ".RdCcontent > #entities tei-persName, .RdCcontent > #entities tei-placeName, .RdCcontent > #entities tei-orgName, .RdCcontent > #entities tei-listbibl > tei-bibl > tei-title": {
          display: "block",
        },
        ".RdCcontent > #entities tei-person, .RdCcontent > #entities tei-place, .RdCcontent > #entities tei-org, .RdCcontent > #entities tei-listbibl > tei-bibl": {
          display: "block",
          border: "1px solid grey",
          padding: "1.5em",
          margin: "1em 0"
        },
        ".RdCcontent > #entities tei-listperson::before": {
          content: "'People'"
        },
        ".RdCcontent > #entities tei-listplace::before": {
          content: "'Places'"
        },
        ".RdCcontent > #entities tei-listorg::before": {
          content: "'Organizations'"
        },
        ".RdCcontent > #entities tei-listbibl::before": {
          content: "'Bibliographical entities'"
        },
        ".RdCcontent > #entities *[lang=en]::before": {
          content: "'(EN)'"
        },
        ".RdCcontent > #entities *[lang=fr]::before": {
          content: "'(FR)'"
        },
        ".RdCcontent > #entities tei-graphic": {
          display: "block"
        },
        "tei-table": {
          display: "block",
          marginTop: "2em",
          marginBottom: "2em",
          fontSize: "12pt"
        },
        "tei-table > tei-head": {
          fontSize: "120%",
          fontWeight: "bold",
          padding: "2px",
          textAlign: "center"
        },
        "tei-row": {
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "1fr"
        },
        "tei-cell": {
          padding: "2px",
        },
        "tei-cell[role=label]": {
          fontWeight: "bold"
        },
        "tei-location": {
          display: "none"
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
      default: "#fcf9f8",
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
