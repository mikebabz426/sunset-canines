import React from "react"
import LogoStyles from "./Logo.module.scss"
import { Link } from "gatsby"

const Logo = ({ contrast }) => {
  let logoClass
  if (contrast === "light") {
    logoClass = LogoStyles.lightLogo
  } else {
    logoClass = LogoStyles.darkLogo
  }
  return (
    <Link to="/">
      <div className={logoClass}></div>
    </Link>
  )
}

export default Logo
