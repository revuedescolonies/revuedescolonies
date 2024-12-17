import React, { useState, useEffect } from "react"
import MiniSearch from "minisearch"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Container, Pagination } from "@mui/material"
import SearchBar from "../components/SearchBar"
import Filter from "../components/Filter"
import SearchResult from "../components/SearchResult"
import { slugify } from "../utils/slugify"

interface Props {
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
    language: Lang
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

const filterLabels = {
  en: {
    category: "Filter by Categories",
    language: "Filter by Languages",
  },
  fr: {
    category: "Filtrer par catégories",
    language: "Filtrer par langues",
  },
}

const categoryTranslation = {
  "Journal Content": "Contenu du Journal",
  //"Note": "Note",
  "Miscellaneous": "Divers",
  "Person": "Personne",
  "Place": "Lieu",
  "Organization": "Organisation",
  "Bibl": "Bibl",
}


export default function PageTemplate({ pageContext }: Props) {
  const categories = [
    "Journal Content",
    // "Note",
    "Miscellaneous",
    "Person",
    "Place",
    "Organization",
    "Bibl",
  ]

  const languages = ["en", "fr"]

  const curLang: Lang = pageContext.language

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categories)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(languages)
  const [currentPage, setCurrentPage] = useState(1)
  const [resultsPerPage] = useState(10)

  const miniSearch = MiniSearch.loadJSON(pageContext.search_index, {
    fields: ["title", "heading", "content"],
    storeFields: ["title", "heading", "content", "type", "language"],
    searchOptions: {
      prefix: true,
      fuzzy: 0.05,
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
          path = `${result.language}/${slugify(newTitle)}`
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

  function getPaginatedResults(results: any[]) {
    const startIndex = (currentPage - 1) * resultsPerPage
    const endIndex = startIndex + resultsPerPage
    return results.slice(startIndex, endIndex)
  }

  const paginatedResults = getPaginatedResults(results)

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

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const totalPages = Math.ceil(results.length / resultsPerPage)

  const title = curLang === "en" ? "Search" : "Rechercher"

  return (
    <Layout location={`/${curLang}/${title.toLowerCase()}`}>
      <SEO title="Search Results" lang={curLang} />
      <Container component="main" maxWidth="md">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <SearchBar query={query} onSearch={handleSearch} />
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 3fr", gridGap: 8 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Filter
                title={filterLabels[curLang].category}
                items={categories}
                selectedItems={selectedCategories}
                onItemChange={handleFilterChange("category")}
                categoryTranslation={curLang === "fr" ? categoryTranslation : undefined}
              />
              <Filter
                title={filterLabels[curLang].language}
                items={languages}
                selectedItems={selectedLanguages}
                onItemChange={handleFilterChange("language")}
              />
            </Box>
            <Box>
              <SearchResult
                results={paginatedResults}
                query={query}
                categoryColors={categoryColors}
                languageColors={languageColors}
                categoryTranslation={curLang === "fr" ? categoryTranslation : undefined}
              />
              {results.length > 0 && (
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    showFirstButton 
                    showLastButton
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

