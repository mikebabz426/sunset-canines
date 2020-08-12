import React from "react"
import LayoutStyles from "./Layout.module.scss"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header className={LayoutStyles.header} />
      <main className={LayoutStyles.main}>{children} </main>
      <Footer />
    </div>
  )
}

export default Layout
