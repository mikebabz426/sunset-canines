import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const NotFoundPage = () => {
  return (
    <>
      <Seo title="Sunset Canines | 404" />
      <div>
        <h1>OOPS... Sorry, something went wrong!</h1>
        <Link to="/">Back to Home Page</Link>
      </div>
    </>
  )
}

export default NotFoundPage
