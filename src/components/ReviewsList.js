import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const ReviewsList = ({ reviews = [] }) => {
  return (
    <div className="recipes-list">
      {reviews.map(review => {
        const { id, title, image, release, runTime } = review
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Released : {release} | Runtime : {runTime} mins
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default ReviewsList
