import React from "react"
import FooterStyles from "../components/Footer.module.scss"
import { a } from "gatsby"
import InstaIcon from "../images/social/instagram.svg"
import FaceIcon from "../images/social/facebook.svg"
import TwittIcon from "../images/social/twitter.svg"

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <h2 className={FooterStyles.heading}>Follow us on social media!</h2>
      <div className={FooterStyles.socialIcons}>
        <a to="https://facebook.com">
          <img src={FaceIcon} alt="facebook icon" />
        </a>
        <a to="https://instagram.com/sunset.canines/">
          <img src={InstaIcon} alt="instagram icon" />
        </a>
        <a to="https://twitter.com">
          <img src={TwittIcon} alt="twitter icon" />
        </a>
      </div>
      <h4 className={FooterStyles.copyright}>
        Copyright Sunset Canines &copy;2020
      </h4>
    </div>
  )
}

export default Footer
