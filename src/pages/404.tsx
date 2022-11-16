import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout location="404">
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
  </Layout>
)

export default NotFoundPage
