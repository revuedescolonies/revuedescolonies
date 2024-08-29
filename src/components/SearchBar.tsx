import React from "react"

interface SearchBarProps {
  query: string
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={onSearch}
      style={{ width: "100%", padding: "7px", fontSize: "16px" }}
    />
  )
}

export default SearchBar
