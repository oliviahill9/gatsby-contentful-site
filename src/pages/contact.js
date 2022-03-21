import React from "react"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ReviewsList from "../components/ReviewsList"
import Seo from "../components/SEO"

const Contact = ({ data }) => {
  const reviews = data.allContentfulReview.nodes
  return (
    <Layout>
      <Seo title="Contact " />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Gochujang tumeric helvetica wolf kombucha XOXO post-ironic fashion
              axe fanny pack pok pok retro selvage bushwick actually. Drinking
              vinegar glossier photo booth raclette ethical artisan direct
              trade.
            </p>
            <p>
              Poke sustainable franzen semiotics tofu cray intelligentsia vinyl
              VHS kogi hammock whatever hexagon woke pabst. Hella tumeric
              cold-pressed portland, thundercats hammock activated charcoal
              XOXO.
            </p>
            <p>
              Snackwave thundercats affogato taxidermy roof party hella. Air
              plant artisan yuccie marfa shabby chic thundercats, roof party
              kickstarter vaporware gluten-free chicharrones typewriter iceland
              heirloom.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mdobdjon"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email address</label>
                <input type="text" name="email" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">Your message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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

export default Contact
