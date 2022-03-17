import React from "react"
import TagsList from "./TagsList"
import ReviewsList from "./ReviewsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulReview(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        runTime
        release
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllReviews = () => {
  const data = useStaticQuery(query)
  const reviews = data.allContentfulReview.nodes
  console.log(reviews)

  return (
    <section className="recipes-container">
      <TagsList reviews={reviews} />
      <ReviewsList reviews={reviews} />
    </section>
  )
}

export default AllReviews
