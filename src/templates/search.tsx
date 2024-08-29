import React, { useState, useEffect } from "react"
import MiniSearch from "minisearch"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Container, Typography } from "@mui/material"
import { Lang } from "../components/nav"
import SearchBar from "../components/SearchBar"
import Filter from "../components/Filter"
import SearchResult from "../components/SearchResult"

interface Props {
  location: any
  data: {
    site: {
      siteMetadata: {
        menuLinks: {
          en: { name: string; link: string }
          fr: { name: string; link: string }
        }[];
        htmlTitle: { en: string; fr: string }
      }
    }
  }
  pageContext: {
    search_index: any
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
  "fr": "#cfaa7a",
}

export default function PageTemplate({ location, data, pageContext }: Props) {
  const categories = [
    "Journal Content",
    "Note",
    "Miscellaneous",
    "Person",
    "Place",
    "Organization",
    "Bibl",
  ]

  const languages = ["en", "fr"]

  const loc = decodeURIComponent(location.pathname)
  let curLang: Lang = "en"

  for (const ml of data.site.siteMetadata.menuLinks) {
    if (ml["fr"].link === loc) curLang = "fr"
  }

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
    },
  })

  function searchWithHeadings(searchQuery: string) {
    const results = miniSearch.search(searchQuery, {
      filter: (result) => selectedCategories.includes(result.type) && selectedLanguages.includes(result.language),
    })

    const newResults = results.map((result) => {
      let newTitle = ""
      let path = ""

      const filePathMatch = result.title.match(/v(\d+)n(\d+)/)
      if (filePathMatch) {
        const volume = filePathMatch[1]
        const issue = filePathMatch[2]
        newTitle = `Volume ${volume}, Issue ${issue}`
        if (result.title.indexOf("notes") !== -1) {
          newTitle += " Notes"
        }
        path = result.title
      } else {
        newTitle = result.title
        path = `${result.language}/${result.title.toLowerCase()}`
        if (result.title === "") {
          newTitle = "Home"
          path = ``
        }
        if (result.title === "entities") {
          newTitle = result.heading
          result.heading = ""
          path = `entities`
        }
      }
      return {
        score: result.score,
        path: path,
        title: newTitle,
        language: result.language,
        type: result.type,
        heading: result.heading,
        content: result.content,
      }
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

  const handleFilterChange = (type: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (type === "category") {
      setSelectedCategories((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : [...prevSelected, value]
      )
    } else if (type === "language") {
      setSelectedLanguages((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : [...prevSelected, value]
      )
    }
  }

  return (
    <Layout location={location.pathname}>
      <SEO title="Search Results" lang={curLang} />
      <Container component="main" maxWidth="md">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <SearchBar query={query} onSearch={handleSearch} />
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 3fr", gridGap: 8 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Filter
                title="Filter by Categories:"
                items={categories}
                selectedItems={selectedCategories}
                onItemChange={handleFilterChange("category")}
              />
              <Filter
                title="Filter by Languages:"
                items={languages}
                selectedItems={selectedLanguages}
                onItemChange={handleFilterChange("language")}
              />
            </Box>
            <SearchResult
              results={results}
              query={query}
              categoryColors={categoryColors}
              languageColors={languageColors}
            />
          </Box>
        </Box>
      </Container>
    </Layout>
  )
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
