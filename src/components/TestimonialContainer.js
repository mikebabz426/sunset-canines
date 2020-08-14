import React from "react"
import Testimonial from "../components/Testimonial"
import TestimonialContainerStyles from "../components/TestimonialContainer.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const TestimonialContainer = () => {
  const data = useStaticQuery(graphql`
    {
      allImageSharp {
        nodes {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { nodes } = data.allImageSharp

  return (
    <section className={TestimonialContainerStyles.testimonials}>
      <h3>Some of the dog parents we've had the pleasure of helping</h3>
      <Testimonial name="John Doe" source={nodes[6].fluid} key="1" />
      <Testimonial name="John Doe" source={nodes[2].fluid} key="2" />
      <Testimonial name="Jane Doe" source={nodes[4].fluid} key="3" />
    </section>
  )
}

export default TestimonialContainer
