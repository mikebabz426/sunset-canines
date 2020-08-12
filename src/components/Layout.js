import React from "react"
import LayoutStyles from "./Layout.module.scss"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, contrast }) => {
  return (
    <div>
      <Header className={LayoutStyles.header} contrast={contrast} />
      <main className={LayoutStyles.main}>{children} </main>
      <Footer />
    </div>
  )
}

export default Layout
