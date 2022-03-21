import React from "react"

import Layout from "../components/Layout"
import AllReviews from "../components/AllReviews"
import Seo from "../components/SEO"

const Reviews = () => {
  return (
    <Layout>
      <Seo title="Movies " />
      <main className="page">
        <AllReviews />
      </main>
    </Layout>
  )
}

export default Reviews
