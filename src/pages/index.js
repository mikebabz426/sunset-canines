import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/index.scss"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../components/Button"
import SecondaryButton from "../components/SecondaryButton"
import Card from "../components/Card"
import TestimonialContainer from "./../components/TestimonialContainer"

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
        {/* showcase starts here */}
        <section className="showcase">
          <div className="showcase-heading">
            <h2>Get Expert Help Training Your Dog or Puppy</h2>
            <h3>What we can do for you</h3>
          </div>
          <div className="card-container">
            <Card key="1" head="Off Leash" />
            <Card key="2" head="Search and Rescue" />
            <Card key="3" head="Behavioral Issues" />
          </div>
          <div className="showcase-footer">
            <h3>For a full overview of our services</h3>
            <button className="showcase-btn">Click Here</button>
          </div>
        </section>
        {/* Showcase end */}
        <BackgroundImage
          className="dog-background"
          fluid={data.allFile.nodes[3].childImageSharp.fluid}
        ></BackgroundImage>
        <TestimonialContainer />
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
