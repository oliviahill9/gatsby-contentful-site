import React from "react"

import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllReviews from "../components/AllReviews"
import Seo from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home " description="This is the home page" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/popcorn.jpg"
            alt="popcorn in bags at a stall"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Movie Stats</h1>
              <h4>Stats you can trust</h4>
            </div>
          </div>
        </header>
        <AllReviews />
      </main>
    </Layout>
  )
}
