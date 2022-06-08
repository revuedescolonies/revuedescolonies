import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  location: any
}

const NotFoundPage = ({ location }: Props) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
  </Layout>
)

export default NotFoundPage
