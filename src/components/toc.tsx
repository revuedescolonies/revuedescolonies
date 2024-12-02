import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

interface TocData {
  allTocJson: {
    nodes: {
      hideFromToc?: boolean
      title: {
        en: string
        fr: string
      },
      teiBasePath: string
    }[]
  }
}

interface TocProps {
  lang: Lang
}



const Toc = ({lang}: TocProps) => {
  const tocData: TocData = useStaticQuery(graphql`
    query TocQuery {
      allTocJson {
        nodes {
          hideFromToc
          title {
            en
            fr
          }
          teiBasePath
        }
      }
    }
  `)
  const entries = tocData.allTocJson.nodes.filter(e => {
    console.log(e.hideFromToc, Boolean(e.hideFromToc))
    return Boolean(e.hideFromToc) === false
  })

  console.log(entries)

  const i18n = (en: string) => {
    const i18nMap = new Map<string, string>([
      ["Annotated original", "Original annoté"],
      ["Annotated English translation", "Traduction anglaise annotée"]
    ])
    return lang === "en" ? en : i18nMap.get(en);
  }

  return <Grid container spacing={2}>
    <Grid size={6}>
      <Typography component="h2" variant="h2">
        {i18n("Annotated original")}
      </Typography>
    </Grid>
    <Grid size={6}>
      <Typography component="h2" variant="h2">{i18n("Annotated English translation")}</Typography>
    </Grid>
    {entries.map(entry => (<React.Fragment key={entry.teiBasePath}>{}
      <Grid size={6}>
        <Link to={`/${entry.teiBasePath}-fr`}>{entry.title.fr}</Link>
      </Grid>
      <Grid size={6}>
        <Link to={`/${entry.teiBasePath}-en`}>{entry.title.en}</Link>
      </Grid>
    </React.Fragment>))}
  </Grid>
}

export default Toc