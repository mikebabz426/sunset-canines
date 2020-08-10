import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div>
      <h1>OOPS... Sorry, something went wrong!</h1>
      <Link to="/">Back to Home Page</Link>
    </div>
  )
}

export default NotFoundPage