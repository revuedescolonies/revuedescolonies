import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { Box } from "@mui/material"

import umd from "../images/umd-logo.png"
import fme from "../images/fme.png"
import Schomburg from "../images/Schomburg.jpg"
import MITH from "../images/MITHgrayscale.png"
import BSA from "../images/BSA.png"
import Gallica from "../images/Gallica.png"

const styles = {
  footer: {
    backgroundColor: "#fff",
    padding: "2rem 0",
    borderTop: "2px solid #dadada",
    fontSize: "1rem"
  },
  logos: {
    display: "flex",
    justifyContent: "center",
    gap: "2em",
    flexFlow: "wrap"
  }
}

interface Props {
  repository: string
}

const Footer = ({repository} : Props) => (
  <Box component="footer" sx={styles.footer}>
    <Container maxWidth="md" sx={styles.logos}>
          <Box sx={{display: "flex", flexDirection: "column"}}>
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/3.0/"
            >
              <img
                alt="Creative Commons License"
                src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
              />
            </a>        
            <a href="https://www.bnf.fr/fr/gallica-la-bibliotheque-numerique-de-la-bnf-et-de-ses-partenaires">
              <img
                style={{maxWidth: "125px"}}
                src={`${Gallica}`}
                alt="Logo of Gallica, la Bibliothèque numérique de la BnF"
              />
            </a> 
          </Box> 
          <a href="https://umd.edu">
            <img
              width={65}
              src={`${umd}`}
              alt="Logo of the University of Maryland"
            />
          </a>
          <a href="https://mith.umd.edu/"> 
            <img
              width={65}
              src={`${MITH}`}
              alt="Logo of the Maryland Institute for Technology in the Humanities"
            />
          </a>
            <a href="https://bibsocamer.org/">
            <img
              width={65}
              src={`${BSA}`}
              alt="Logo of the Bibliographical Society of America"
            />
            </a>
            <a href="https://memoire-esclavage.org/fme">
            <img
              width={65}
              src={`${fme}`}
              alt="Logo of the FME"
            />
            </a>
            <a href="https://www.nypl.org/locations/schomburg">
              <img
                width={360}
                src={`${Schomburg}`}
                alt="Logo of the Schomburg Center"
              />
          </a>  
    </Container>
  </Box>
)

export default Footer