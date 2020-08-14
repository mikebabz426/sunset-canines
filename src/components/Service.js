import React from "react"
import Image from "gatsby-image"
import ServiceStyle from "./Service.module.scss"

const Service = ({ direction, name, src }) => {
  let layout
  if (direction === "left") {
    layout = (
      <>
        <Image fluid={src} className={ServiceStyle.image} />
        <div className={ServiceStyle.textArea}>
          <h2>{name}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            blanditiis numquam ipsa! Earum at, distinctio in, consectetur vel
            molestias officia libero quidem, suscipit ut quae delectus eius
            praesentium quaerat nostrum.
          </p>
        </div>
      </>
    )
  } else if (direction === "right") {
    layout = (
      <>
        <div className={ServiceStyle.textArea}>
          <h2>{name}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            blanditiis numquam ipsa! Earum at, distinctio in, consectetur vel
            molestias officia libero quidem, suscipit ut quae delectus eius
            praesentium quaerat nostrum.
          </p>
        </div>
        <Image fluid={src} className={ServiceStyle.image} />
      </>
    )
  }

  return <section className={ServiceStyle.service}>{layout}</section>
}

export default Service
