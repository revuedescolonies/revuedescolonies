import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { Box } from "@mui/material"

const styles = {
  footer: {
    backgroundColor: "#efefef",
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
        <Grid item={true} xs={9}>
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
          <br /> The open source code for this micro-edition is available at <a href={repository}>{repository}</a>.
          <br /> © {new Date().getFullYear()} Scholarly Editing.
          <br /> ISSN 2167-1257 | DOI <a href="https://doi.org/10.55520/6ZH06EW2">10.55520/6ZH06EW2</a>
        </Grid>
        <Grid item={true} xs={3} sx={styles.logo}>
          <a href="http://www.documentaryediting.org">
            <img
              src="https://scholarlyediting.reclaim.hosting/se-archive/template_images/adelogo.png"
              alt="Logo of the Association for Documentary Editing"
            />
          </a>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Footer