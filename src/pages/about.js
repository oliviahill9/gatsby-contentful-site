import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import ReviewsList from "../components/ReviewsList"

const About = ({
  data: {
    allContentfulReview: { nodes: reviews },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Welcome to Simply Movie Stats</h2>
            <p>
              Kombucha 3 wolf moon gastropub everyday carry beard +1. Raw denim
              four dollar toast man bun everyday carry, post-ironic cardigan
              squid jean shorts paleo.
            </p>
            <p>
              Disrupt mustache flexitarian affogato, shoreditch helvetica umami
              fixie crucifix sartorial narwhal next level. Flexitarian affogato
              crucifix, authentic unicorn kombucha hoodie.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/the-batman-riddler.jpg"
            alt="the riddler's question mark coffee cup"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Check out these movies!</h5>
          <ReviewsList reviews={reviews} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulReview(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        runTime
        release
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
