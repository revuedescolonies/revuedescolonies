import React from "react"
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material"

interface FilterProps {
  title: string
  items: string[]
  selectedItems: string[]
  onItemChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  categoryTranslation?: { [key: string]: string }
}

const Filter: React.FC<FilterProps> = ({ title, items, selectedItems, onItemChange, categoryTranslation }) => {
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
          textTransform: "uppercase"
        }}
      >
        {title}
      </Typography>
      {items.map((item, index) => (
        <Box
          key={item}
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridColumnGap: "0.25rem",
            gridRowGap: "1rem",
            padding: "4px 0",
            borderBottom: index != items.length-1 ? "solid #dedede" : ""
          }}
        >
          <FormControlLabel
            control={<Checkbox
              value={item}
              checked={selectedItems.includes(item)}
              onChange={onItemChange} />}
              slotProps={{
                typography:{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                  marginBottom:-2
                }
              }}
              label={categoryTranslation ? categoryTranslation[item] : item}          
          />

        </Box>
      ))}
    </Box>
  )
}

export default Filter
