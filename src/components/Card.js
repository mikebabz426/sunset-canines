import React from "react"
import CardStyles from "./Card.module.scss"

const Card = ({ head }) => {
  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.icon}></div>
      <h2>{head}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est,
        voluptatibus totam accusamus repellendus at unde obcaecati sed velit
        tenetur dicta cupiditate autem illum excepturi.
      </p>
    </div>
  )
}

export default Card
