import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import slugify from "slugify"

const ReviewTemplate = ({ data }) => {
  const {
    title,
    runTime,
    content,
    synopsis: { synopsis },
    rating,
    release,
    image,
  } = data.contentfulReview

  const pathToImage = getImage(image)
  const { tags, quotes, director, cast } = content
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article>
              <h2>{title}</h2>
              <p>{synopsis}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Runtime</h5>
                  <p>{runTime} mins</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Release</h5>
                  <p>{release}</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Rating</h5>
                  <p>{rating} / 10</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>Quotes</h4>
              {quotes.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>quote</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>Director</h4>
                {director.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>Cast</h4>
                {cast.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleReview($title: String) {
    contentfulReview(title: { eq: $title }) {
      title
      runTime
      content {
        tags
        cast
        director
        quotes
      }
      synopsis {
        synopsis
      }
      rating
      release
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default ReviewTemplate
