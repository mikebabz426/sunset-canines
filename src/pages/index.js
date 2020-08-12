import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/index.scss"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../components/Button"
import SecondaryButton from "../components/SecondaryButton"

const HomePage = ({ data }) => {
  return (
    <>
      <BackgroundImage
        className="hero"
        fluid={data.indexImage.childImageSharp.fluid}
      >
        <Header contrast="light" />
        <h1>We provide proffessional training for your pets</h1>
        <div className="button-wrap">
          <Button className="call-to-action" />
          <SecondaryButton className="secondary-btn" />
        </div>
      </BackgroundImage>
      <main>
        <section className="affiliates">
          <h2>These are some of the companies we work with</h2>
        </section>
        <div className="dog-background"></div>
        <section className="testimonials">
          <h4>these are some reviews from our customers</h4>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage

export const query = graphql`
  {
    indexImage: file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
