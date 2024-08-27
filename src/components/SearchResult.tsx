import React from "react"
import { Box } from "@mui/material"
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
}

const SearchResult: React.FC<SearchResultProps> = ({
  results,
  query,
  categoryColors,
  languageColors,
}) => {
  const snippetLength = 60

  return (
    <Box sx={{ backgroundColor: "#fff", marginTop: 1}}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {results.map((result, index) => {
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
              );

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
              <span
                style={{
                  display: "block",
                  fontWeight: 600,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => {if(result.path !== `entities`){navigate(`/${result.path}`)}}}
              >
                {result.title}
              </span>
              <p style={{ fontSize: "13px", fontWeight: 300, fontStyle: "italic" }}>
                {result.heading}
              </p>
              <p style={{ fontSize: "13px" }} dangerouslySetInnerHTML={{ __html: highlightedContent }}></p>
            </Box>
          )
        })}
      </div>
    </Box>
  )
}

export default SearchResult
