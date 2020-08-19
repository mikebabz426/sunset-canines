import React, { useState } from "react"
import { Link } from "gatsby"
import HeaderStyles from "./Header.module.scss"
import Logo from "./Logo"
import styled from "styled-components"

const MobileIcon = styled.button`
  @media (max-width: 768px) {
    outline: none;
    position: fixed;
    top: 2rem;
    right: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 2;
  }

  @media (max-width: 375px) {
    position: fixed;
    top: 2rem;
    right: 1.8rem;
  }

  display: none;
  div {
    width: 1.5rem;
    height: 0.2rem;
    border-radius: 3px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
      background-color: ${({ nav }) => (nav ? "#f4f4f4" : "#333")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
      background-color: ${({ nav }) => (nav ? "#f4f4f4" : "#333")};
    }

    :last-child {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
      background-color: ${({ nav }) => (nav ? "#f4f4f4" : "#333")};
    }
  }
`

const MobileLinks = styled.nav`
  background-color: #333;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  transition: transform 800ms;
  transform: ${({ nav }) => (nav ? "translateX(0%)" : "translateX(100%)")};

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-top: 1rem;
    }

    a {
      text-decoration: none;
      color: #f4f4f4;
      font-size: 1.5rem;
      transition: color 300ms;

      :hover {
        color: #ff3366;
      }
    }
  }
`

const MenuLinks = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = () => {
  const [nav, showNav] = useState(false)

  return (
    <div className={HeaderStyles.navWrap}>
      <header className={HeaderStyles.navbar}>
        <Logo contrast="dark" />
        <MobileIcon nav={nav} onClick={() => showNav(!nav)}>
          <div />
          <div />
          <div />
        </MobileIcon>
        <MobileLinks nav={nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </MobileLinks>
        <MenuLinks>
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
        </MenuLinks>
      </header>
    </div>
  )
}

export default Header
