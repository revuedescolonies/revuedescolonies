import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import ImageIcon from '@mui/icons-material/Image';
import { slugify } from "../utils/slugify";
import { Link } from "gatsby";

interface Occurrence {
  pageName: string,
  pageLink: string,
  repeats: number
}

interface indexData {
  bibl: objData[]
  org: objData[]
  places: objData[]
  persons: objData[]
} 

interface objData {
  id:string,
  name:string,
  occurrences: Occurrence[]
}[]

interface Occurrence {
  pageName: string,
  pageLink: string,
  repeats: number
}

interface Props {
  pageContext: {
    data: indexData
    language: Lang
  }
}

const placeHolders=['Persons', 'Places', 'Organization', 'Title']

const renderIndexData = (data: indexData, language: Lang): JSX.Element => {
  const personObj = data.persons;
  const biblObj = data.bibl;
  const placesObj = data.places;
  const orgObj = data.org;
  return (
    <div>
    {placeHolders.map((ele)=>(
      <div>
      <h3>{ele}</h3>
      {ele === "Persons" ? renderNames(personObj, language) : null}
      {ele === "Places" ? renderNames(placesObj, language) : null}
      {ele === "Organization" ? renderNames(orgObj, language) : null}
      {ele === "Title" ? renderNames(biblObj, language) : null}
      </div>
    ))}
    </div>
  )
}

const renderNames = (data: objData[], language: Lang): JSX.Element => {
  return <List sx={{ width: '100%' }}>
    {data.sort((a,b) => a.name.trim().localeCompare(b.name.trim())).map((obj)=> (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
          <Link to={`/${language}/${slugify(obj.name)}`}>{obj.name}</Link>
        } secondary={`${obj.occurrences.reduce((sum, occurrence) => sum + occurrence.repeats, 0)} occurrences in ${obj.occurrences.length} documents.`} sx={{"& .MuiListItemText-primary": {paddingBottom: 0}}}/>
      </ListItem>
    ))}
  </List>
}

export default function IndexPage({pageContext}: Props) {
  const {data, language} = pageContext; 
  return (
    <Layout location={`/${language}/index`}>
    <SEO title={"Indices"} lang={language}/>
    <Container component="main" maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom={false} sx={{
          marginBottom: "2rem"
        }}>{language === "en" ? "Indices" : "Index"}</Typography>
      {renderIndexData(data, language)}
    </Container>
    </Layout>
  )

}