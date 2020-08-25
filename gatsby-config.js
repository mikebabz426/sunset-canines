// Plugin Configuration File
module.exports = {
  siteMetadata: {
    title: "Sunset Canines",
    description:
      "Main website for Sunset Canines, proffessional dog trainers, built with Gatsby",
    url: "http://sunsetcanines.com",
    author: "Mike Babetchki",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `serviceImages`,
        path: `${__dirname}/src/serviceImages/`,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
}
