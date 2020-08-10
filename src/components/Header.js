import React from "react"
import { Link } from "gatsby"
import HeaderStyles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={HeaderStyles.navbar}>
      <h2 className={HeaderStyles.logo}>Logo Here</h2>
      <ul className={HeaderStyles.navLinks}>
        <li>
          <Link to="/" activeClassName={HeaderStyles.active}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName={HeaderStyles.active}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" activeClassName={HeaderStyles.active}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName={HeaderStyles.active}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
