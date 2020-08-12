import React from "react"
import Layout from "./../components/Layout"
import "../styles/index.scss"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../components/Button"
import SecondaryButton from "../components/SecondaryButton"

const HomePage = ({ data }) => {
  return (
    <BackgroundImage
      className="hero"
      fluid={data.indexImage.childImageSharp.fluid}
    >
      <Layout>
        <h1>Our impressive headline goes here</h1>
        <Button />
        <SecondaryButton />
      </Layout>
    </BackgroundImage>
  )
}

export default HomePage

export const query = graphql`
  {
    indexImage: file(relativePath: { eq: "hero2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
