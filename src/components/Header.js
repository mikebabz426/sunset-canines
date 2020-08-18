import React from "react"
import { Link } from "gatsby"
import HeaderStyles from "./Header.module.scss"
import Logo from "./Logo"

const Header = ({ contrast }) => {
  let textColor
  if (contrast === "light") {
    textColor = HeaderStyles.light
  } else {
    textColor = HeaderStyles.dark
  }

  return (
    <nav className={HeaderStyles.navContainer}>
      <div className={HeaderStyles.navbar}>
        <Logo contrast={contrast} />
        <ul className={HeaderStyles.navLinks}>
          <li>
            <Link
              to="/"
              className={textColor}
              activeClassName={HeaderStyles.active}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={textColor}
              activeClassName={HeaderStyles.active}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={textColor}
              activeClassName={HeaderStyles.active}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={textColor}
              activeClassName={HeaderStyles.active}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
