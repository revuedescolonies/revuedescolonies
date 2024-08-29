import React from "react"
import { Box, Typography } from "@mui/material"

interface FilterProps {
  title: string
  items: string[]
  selectedItems: string[]
  onItemChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Filter: React.FC<FilterProps> = ({ title, items, selectedItems, onItemChange }) => {
  return (
    <Box
      sx={{
        padding: "10px 12px",
        border: "1px dotted #d8d8d8",
        backgroundColor: "#fff",
        marginTop: "8px",
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
        {title}
      </Typography>
      {items.map((item) => (
        <Box
          key={item}
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
            value={item}
            onChange={onItemChange}
            checked={selectedItems.includes(item)}
            style={{ justifySelf: "start" }}
          />
          <label
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "15px",
            }}
          >
            {item}
          </label>
        </Box>
      ))}
    </Box>
  )
}

export default Filter
