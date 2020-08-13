import React from "react"
import FooterStyles from "../components/Footer.module.scss"

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <h2 className={FooterStyles.heading}>Follow us on social media!</h2>
      <div className={FooterStyles.socialIcons}>
        <div className={FooterStyles.fbIcon}></div>

        <div className={FooterStyles.instaIcon}></div>

        <div className={FooterStyles.twiIcon}></div>
      </div>
      <h4 className={FooterStyles.copyright}>
        Copyright Sunset Canines &copy;2020
      </h4>
    </div>
  )
}

export default Footer
