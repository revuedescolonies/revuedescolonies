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
          
          const regex = new RegExp(query, 'gi');
          let match: RegExpExecArray | null;
          const snippets: string[] = [];
          let lastIndex = 0;

          while ((match = regex.exec(result.content)) !== null) {
              const matchStart = match.index;
              const matchEnd = regex.lastIndex;

              // Determine snippet start and end positions, keeping the desired snippet length
              const snippetStart = Math.max(0, matchStart - Math.floor(snippetLength / 2));
              const snippetEnd = Math.min(result.content.length, matchEnd + Math.floor(snippetLength / 2));

              // Add "..." between snippets if needed
              if (lastIndex < snippetStart) {
                  snippets.push("...");
              }

              // Extract the snippet and wrap the matched word
              const snippet = result.content.substring(snippetStart, snippetEnd).replace(
                new RegExp(query, 'gi'),
                (match) => `<span style="background-color: #ffd50047; color: #000">${match}</span>`
              );
              snippets.push(snippet);

              lastIndex = snippetEnd;
          }

          // If there's remaining text after the last snippet, add "..." at the end
          if (lastIndex < result.content.length) {
              snippets.push("...");
          }

          // Join all snippets together
          const highlightedContent = snippets.join("");

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
