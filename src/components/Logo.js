import React from "react"
import LogoStyles from "./Logo.module.scss"

const Logo = ({ contrast }) => {
  let logoClass
  if (contrast === "light") {
    logoClass = LogoStyles.lightLogo
  } else {
    logoClass = LogoStyles.darkLogo
  }
  return <div className={logoClass}></div>
}

export default Logo
