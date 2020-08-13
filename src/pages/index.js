import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/index.scss"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../components/Button"
import SecondaryButton from "../components/SecondaryButton"
import Card from "../components/Card"

const HomePage = ({ data }) => {
  return (
    <>
      <BackgroundImage
        className="hero"
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
      >
        <Header contrast="light" />
        <h1>We provide proffessional training for your pets</h1>
        <div className="button-wrap">
          <Button className="call-to-action" />
          <SecondaryButton className="secondary-btn" />
        </div>
      </BackgroundImage>
      <main>
        <section className="showcase">
          <div className="showcase-heading">
            <h2>Get Expert Help Training Your Dog or Puppy</h2>
            <h3>What we can do for you</h3>
          </div>
          <div className="card-container">
            <Card head="Off Leash" />
            <Card head="Search and Rescue" />
            <Card head="Behavioral Issues" />
          </div>
          <div className="showcase-footer">
            <h3>For a full overview of our services</h3>
            <button className="showcase-btn">Click Here</button>
          </div>
        </section>
        <BackgroundImage
          className="dog-background"
          fluid={data.allFile.nodes[2].childImageSharp.fluid}
        ></BackgroundImage>
        <section className="testimonials">
          <h3>Some of the dog parents we've had the pleasure of helping</h3>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const query = graphql`
  {
    allFile {
      nodes {
        childImageSharp {
          fluid(jpegQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default HomePage
