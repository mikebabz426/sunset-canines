import React from "react"
import TestimonialStyles from "./Testimonials.module.scss"
import Image from "gatsby-image"

const Testimonial = ({ name, source }) => {
  var date = new Date()
  return (
    <div className={TestimonialStyles.testimonial}>
      <Image className={TestimonialStyles.image} fluid={source} />
      <div className={TestimonialStyles.textContainer}>
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquid
          illo eos eveniet assumenda esse. Odit, consequuntur quibusdam. Earum
          dicta, porro, ex, velit sequi reprehenderit neque debitis maxime
          ratione vitae facere magni illo. Mollitia minus inventore dolorum
          eveniet sed nulla.
        </h4>
        <h5>
          - {name} - {date.toDateString()}
        </h5>
      </div>
    </div>
  )
}

export default Testimonial
