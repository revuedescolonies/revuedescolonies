import React, { useState, useEffect } from "react"
import MiniSearch from "minisearch"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Container, Typography } from "@mui/material"
import { Lang } from "../components/nav"
import { navigate } from "gatsby"


interface Props {
  location: any
  data: {
    site: {
      siteMetadata: {
        menuLinks: {
          en: { name: string, link: string }
          fr: { name: string, link: string }
        }[];
        htmlTitle: { en: string; fr: string }
      }
    }
  }
  pageContext:{
    search_index : any
  }
}

const categoryColors: { [key: string]: string } = {
  "Journal Content": "#B48726",
  "Note": "#009FB1",
  "Miscellaneous": "#7A5C61",
  "Person": "#6A9A1F",
  "Place": "#D84B20",
  "Organization": "#3A6EA5",
  "Bibl": "#934D8B",
}
const languageColors: { [key: string]: string } = {
  "en": "#ad8e66",
  "fr": "#cfaa7a"
}

export default function PageTemplate({location, data, pageContext}: Props) {
  const categories = [
    "Journal Content",
    "Note",
    "Miscellaneous",
    "Person",
    "Place",
    "Organization",
    "Bibl"
  ]

  const loc = decodeURIComponent(location.pathname) 
  let curLang: Lang = "en" 
  
  for (const ml of data.site.siteMetadata.menuLinks) {
    if (ml["fr"].link === loc) curLang = "fr"
  }

  const homePageTitle = location.pathname === "/" || location.pathname.match(/fr\/?$/) ? <Typography variant="h3" component="h1" gutterBottom={false} dangerouslySetInnerHTML={
    {__html: data.site.siteMetadata.htmlTitle[curLang]}
  } /> : ""

  const languages = ["en", "fr"]

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categories)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(languages)

  const miniSearch = MiniSearch.loadJSON(pageContext.search_index, {
    fields: ["title", "heading", "content"],
    storeFields: ["title", "heading", "content", "type", "language"], 
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
    }
  })

  function searchWithHeadings(searchQuery: string){
    const results = miniSearch.search(searchQuery, {
      filter: (result) => selectedCategories.includes(result.type) && selectedLanguages.includes(result.language)
    })
    const newResults: { score: number; path: any; title: any; language: any; type: any; heading: any; content: any; }[] = []
    results.forEach(result =>{
      let newTitle = ""
      let filePathMatch = result.title.match(/v(\d+)n(\d+)/)
      let path = ""
      if(filePathMatch){
        const volume = filePathMatch[1]
        const issue = filePathMatch[2]
        newTitle = `Volume ${volume}, Issue ${issue}`

        if(result.title.indexOf("notes") !== -1){
          newTitle+=" Notes"
        }

        path = result.title
      }else{
        newTitle = result.title
        path = `${result.language}/${result.title.toLowerCase()}`
        if(result.title === ""){
          newTitle = "Home"
          path = ``
        }
      }
      newResults.push({
        score: result.score,
        path: path,
        title: newTitle,
        language: result.language,
        type: result.type,
        heading: result.heading,
        content: result.content
      })
    })
    return newResults
  }

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchWithHeadings(query)
      setResults(searchResults)
    } else {
      setResults([])
    }
  }, [query, selectedCategories, selectedLanguages])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    )
  }

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((item) => item !== language)
        : [...prevSelected, language]
    )
  }

  return (
    <Layout location={location.pathname}>
      <SEO title="Search Results" lang={curLang} />

      <Container component="main" maxWidth="md">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 4}}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleSearch}
              style={{ width: "100%", padding: "7px", fontSize: "16px" }}
            />
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 3fr", gridGap: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column"}}>
              <Box
                  sx={{
                    padding: "10px 12px",
                    border: "1px dotted #d8d8d8",
                    backgroundColor: "#fff",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#333333",
                      fontSize: "13px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    Filter by Categories:
                  </Typography>
                  
                  {categories.map((category) => (
                    <Box
                      key={category}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "25px 7fr 1fr",
                        gridColumnGap: "0.25rem",
                        gridRowGap: "1rem",
                        padding: "4px 0",
                        fontSize: "9pt",
                        borderBottom: "1px solid #dedede",
                      }}
                    >
                      <input
                        type="checkbox"
                        value={category}
                        onChange={handleCategoryChange}
                        checked={selectedCategories.includes(category)}
                        style={{ justifySelf: "start" }}
                      />
                      <label
                        style={{
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          fontSize: "15px"
                        }}
                      >
                        {category}
                      </label>
                    </Box>
                  ))}
              </Box>
              
              <Box
                  sx={{
                    padding: "10px 12px",
                    border: "1px dotted #d8d8d8",
                    backgroundColor: "#fff",
                    marginTop: "8px"
                  }}
                >
                  <Typography
                    sx={{
                      color: "#333333",
                      fontSize: "13px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    Filter by Languages:
                  </Typography>
                  
                  {languages.map((language) => (
                    <Box
                      key={language}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "25px 7fr 1fr",
                        gridColumnGap: "0.25rem",
                        gridRowGap: "1rem",
                        padding: "4px 0",
                        fontSize: "9pt",
                        borderBottom: "1px solid #dedede",
                      }}
                    >
                      <input
                        type="checkbox"
                        value={language}
                        onChange={handleLanguageChange}
                        checked={selectedLanguages.includes(language)}
                        style={{ justifySelf: "start" }}
                      />
                      <label
                        style={{
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          fontSize: "15px"
                        }}
                      >
                        {language}
                      </label>
                    </Box>
                  ))}
              </Box>
            </Box>

            <Box 
              sx={{
                    backgroundColor: "#fff"
                  }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {results.map((result, index) => {
                  let highlightedContent = ""
                  const snippetLength = 60
                  const queryLower = query.toLowerCase()
                  const contentLower = result.content.toLowerCase()
                  let currentIndex = 0
                  
                  if(query.length > 0){
                      while (currentIndex < result.content.length) {
                        const chunk = contentLower.substring(currentIndex, currentIndex + snippetLength)
                        const queryIndex = chunk.indexOf(queryLower)
            
                        if (queryIndex !== -1) {
                          const start = Math.max(currentIndex + queryIndex - snippetLength, 0)
                          const end = Math.min(currentIndex + queryIndex + query.length + snippetLength, result.content.length)
                          const snippet = result.content.substring(start, end)
            
                          highlightedContent += snippet.replace(
                            new RegExp(`(${query})`, "gi"),
                            (match: any) => `<span style="background-color: #ffd50047; color: #000">${match}</span>`
                          )
            
                          if (end < result.content.length) {
                            highlightedContent += "...";
                          }
            
                          currentIndex = end;
                        } else {
                          currentIndex += snippetLength;
                        }
                      }
            
          
                    return (
                      <Box
                        key={index}
                        sx={{
                          padding: "15px",
                          border: "1px solid #ececec",
                          fontSize: "15px",
                          lineHeight: "1.5",
                        }}
                      >
                        
                        <span
                          style={{
                            display: "inline-block",
                            padding: ".2em .6em .3em",
                            marginBottom: "10px",
                            borderRadius: ".25em",
                            fontSize: "75%",
                            fontWeight: "bold",
                            lineHeight: "1",
                            textTransform: "uppercase",
                            color: "#fff",
                            backgroundColor: categoryColors[result.type] || "#000",
                          }}
                        >
                          {result.type}
                        </span>
                        <span
                          style={{
                            display: "inline-block",
                            padding: ".2em .6em .3em",
                            marginBottom: "10px",
                            marginLeft: "3px",
                            borderRadius: ".25em",
                            fontSize: "75%",
                            fontWeight: "bold",
                            lineHeight: "1",
                            textTransform: "uppercase",
                            color: "#fff",
                            backgroundColor: languageColors[result.language] || "#000",
                          }}
                        >
                          {result.language}
                        </span>
                        <span style={{ display: "block", fontWeight: 600, textDecoration: "underline", cursor: "pointer"}} onClick={() => navigate(`/${result.path}`)}>{result.title}</span>
                        <p style={{ fontSize: "13px", fontWeight: 300, fontStyle: "italic"}}>{result.heading}</p>
                        <p
                          style={{ fontSize: "13px"}}
                          dangerouslySetInnerHTML={{ __html: highlightedContent }}
                        ></p>
                      </Box>
                    )
                  }
                  })}
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        menuLinks {
          en {
            link
          }
          fr {
            link
          }
        }
        htmlTitle {
          en
          fr
        }
      }
    }
  }
`
