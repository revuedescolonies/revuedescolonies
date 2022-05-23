import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

import theme from "../theme"

import styled from '@emotion/styled'

interface Props {
  issue: {
    short: string
    path: string
  }
  doi: string
}

const Wrapper = styled.div(() => ({
  backgroundColor: '#fff'
}))

// Main Component

const styles = {
  navBtn: {
    borderRadius: 0,
    boxShadow: "none",
    "&:hover, &:focus": {
      backgroundColor: "transparent",
      textDecorationLine: "underline",
      textDecorationColor: theme.palette.primary.main,
      textDecorationThickness: "3px",
      textUnderlineOffset: "2px"
    },
  },
  info: {
    fontSize: "0.875rem",
    lineHeight: "1.75",
    borderRadius: "4px",
    textTransform: "uppercase",
    paddingTop: "10px !important",
    textAlign: "right",
    "& a": {
      color: theme.palette.text.primary
    }
  }
}

const Info = ({doi, issue}: Props) => (
  <Wrapper>
    <Container maxWidth="md">
      <Grid container={true}>
        <Grid item={true} xs={4}>
          <Button
            color="default"
            size="large"
            sx={styles.navBtn}
            onClick={() => location.href = issue.path}
          >
            <ChevronLeftIcon/> {issue.short}
          </Button>
        </Grid>
        <Grid item={true} xs={8} sx={styles.info}>
          Micro-Edition | DOI: <a href={`https://doi.org/${doi}`}>{doi}</a>
        </Grid>
      </Grid>
    </Container>
  </Wrapper>
)


export default Info
