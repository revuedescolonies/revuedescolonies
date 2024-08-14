import React from "react"

interface Props {
  pageContext: {
    search_index: any
  }
}

export default function PageTemplate({ pageContext }: Props) {
  console.log(pageContext.search_index)
}
