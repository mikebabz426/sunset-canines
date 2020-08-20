import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, title, author }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          title
          description
        }
      }
    }
  `)

  const metaTitle = title || data.site.siteMetadata.title
  const metaAuthor = author || data.site.siteMetadata.author
  const metaDescription = description || data.site.siteMetadata.description

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: metaAuthor,
        },
        {
          name: `url`,
          content: metaUrl,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  )
}

export default Seo
