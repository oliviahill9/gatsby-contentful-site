import React from "react"
import { graphql } from "gatsby"
import ReviewsList from "../components/ReviewsList"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const reviews = data.allContentfulReview.nodes
  return (
    <Layout>
      <Seo title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <ReviewsList reviews={reviews} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulReview(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        release
        runTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
