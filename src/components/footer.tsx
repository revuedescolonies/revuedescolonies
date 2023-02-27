import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { Box } from "@mui/material"

import umd from "../images/umd-logo.png"
import fme from "../images/fme.png"
import Schomburg from "../images/Schomburg.jpg"

const styles = {
  footer: {
    backgroundColor: "#f6f4f2",
    padding: "1rem 0",
    borderTop: "1px solid #dadada",
    fontSize: "1rem"
  },
  logo: {
    textAlign: "right",
  }
}

interface Props {
  repository: string
}

const Footer = ({repository} : Props) => (
  <Box component="footer" sx={styles.footer}>
    <Container maxWidth="lg">
      <Grid container={true}>
        <Grid item={true} xs={8}>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/3.0/"
          >
            <img
              alt="Creative Commons License"
              src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
            />
          </a>
          <br />
          This work is licensed under a{" "}
          <a
            rel="license"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            Creative Commons Attribution-NonCommercial-ShareAlike 4.0
            International License
          </a>
          . 
          <br /> The open source code for this edition is available at <a href={repository}>{repository}</a>.
          <br /> © {new Date().getFullYear()} University of Maryland.
        </Grid>
        <Grid item={true} xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <a href="https://www.nypl.org/locations/schomburg" style={{ marginRight: "1rem" }}>
            <img
              width={280}
              src={`${Schomburg}`}
              alt="Logo of the Schomburg Center"
            />
          </a>
  <a href="https://memoire-esclavage.org/fme" style={{ marginRight: "1rem" }}>
            <img
              width={90}
              src={`${fme}`}
              alt="Logo of the FME"
            />
            </a>
          <a href="https://umd.edu">
            <img
              width={90}
              src={`${umd}`}
              alt="Logo of the University of Maryland"
            />
          </a>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Footer