import React from "react"
import FooterStyles from "../components/Footer.module.scss"

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <h2 className={FooterStyles.heading}>Follow us on social media!</h2>
      <div className={FooterStyles.socialIcons}>
        <a
          href="https://www.facebook.com/sunsetcanines/"
          className={FooterStyles.fbIcon}
          aria-label="link to facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
        </a>

        <a
          href="https://www.instagram.com/sunset.canines"
          className={FooterStyles.instaIcon}
          aria-label="link to instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
        </a>

        <a
          href="https://www.twitter.com/"
          className={FooterStyles.twiIcon}
          aria-label="link to twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
        </a>
      </div>
      <h4 className={FooterStyles.copyright}>
        Copyright Sunset Canines &copy;2020
      </h4>
    </div>
  )
}

export default Footer
