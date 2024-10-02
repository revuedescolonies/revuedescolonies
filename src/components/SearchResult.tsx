import React from "react"
import { Box, Chip, Typography } from "@mui/material"
import { navigate } from "gatsby"

interface SearchResultProps {
  results: {
    score: number
    path: string
    title: string
    language: string
    type: string
    heading: string
    content: string
  }[]
  query: string
  categoryColors: { [key: string]: string }
  languageColors: { [key: string]: string }
  categoryTranslation?: { [key: string]: string }
}

const SearchResult: React.FC<SearchResultProps> = ({
  results,
  query,
  categoryColors,
  languageColors,
  categoryTranslation
}) => {
  const snippetLength = 60

  return (
    <Box sx={{ backgroundColor: "#fff", marginTop: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {results.map((result, index) => {
          
          // Make sure this isn't a false positive
          // if (result.content.search(new RegExp(`(${query})`, "gi")) === -1) return null;

          let highlightedContent = ""
          const queryLower = query.toLowerCase()
          const contentLower = result.content.toLowerCase()
          let currentIndex = 0

          while (currentIndex < result.content.length && highlightedContent.length < 3000) {
            const chunk = contentLower.substring(currentIndex, currentIndex + snippetLength)
            const queryIndex = chunk.indexOf(queryLower)

            if (queryIndex !== -1) {              
              const start = Math.max(currentIndex + queryIndex - snippetLength, 0)
              const end = Math.min(currentIndex + queryIndex + query.length + snippetLength, result.content.length)
              const snippet = result.content.substring(start, end)

              highlightedContent += snippet.replace(
                new RegExp(`(${query})`, "gi"),
                (match) => `<span style="background-color: #ffd50047; color: #000">${match}</span>`
              )

              if (end < result.content.length) {
                highlightedContent += "..."
              }

              currentIndex = end
            } else {
              currentIndex += snippetLength
            }
          }

          return (
            <Box
              key={index}
              sx={{
                padding: 2,
                border: "1px solid #ececec",
                fontSize: "15px",
                lineHeight: 1.5,
                backgroundColor: "#f9f9f9",
                borderRadius: 1,
              }}
            >
              <Box sx={{ display: "flex", gap: 1, marginBottom: 1 }}>
                <Chip
                  label={categoryTranslation ? categoryTranslation[result.type] : result.type}
                  sx={{
                    backgroundColor: categoryColors[result.type] || "#000",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                  size="small"
                />
                <Chip
                  label={result.language}
                  sx={{
                    backgroundColor: languageColors[result.language] || "#000",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                  size="small"
                />
              </Box>
              <Typography
                fontSize={"18px"}
                component="div"
                sx={{
                  fontWeight: 600,
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginBottom: -2.5
                }}
                onClick={() => {
                  if (result.path !== `entities`) {
                    navigate(`/${result.path}`)
                  }
                }}
              >
                {result.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "0.875rem", fontStyle: "italic", fontWeight: 300}}
              >
                {result.heading}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "0.875rem" }}
                dangerouslySetInnerHTML={{ __html: highlightedContent }}
              ></Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default SearchResult
