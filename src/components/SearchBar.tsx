import React from "react"
import { TextField, Box } from "@mui/material"

interface SearchBarProps {
  query: string
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={query}
        onChange={onSearch}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            height: 40,
            padding: 0,
          },
          '& .MuiInputBase-input': {
            padding: "8px 14px",
            fontSize: "16px",
            lineHeight: 1.5,
          },
        }}
      />
    </Box>
  )
}

export default SearchBar
