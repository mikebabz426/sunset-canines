import React from "react"
import Layout from "../components/Layout"
import Service from "../components/Service"

const ServicesPage = ({ data }) => {
  const { nodes } = data.allFile

  return (
    <>
      <Layout contrast="dark">
        {nodes.map((item, i) => {
          let dir = i % 2 === 0 ? "left" : "right"
          console.log(dir)
          let name
          if (item.name === "offleash") {
            name = "Off Leash Training"
          } else if (item.name === "sar") {
            name = "Search and Rescue"
          } else if (item.name === "tricks") {
            name = "Tricks Training"
          } else if (item.name === "belgian") {
            name = "Belgian Malinois Breeding"
          } else if (item.name === "servicedog") {
            name = "Service Dog Training"
          }
          return (
            <Service
              name={name}
              direction={dir}
              src={item.childImageSharp.fluid}
              key={i}
            />
          )
        })}
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allFile(
      filter: {
        dir: {
          eq: "C:/Users/Mike Babz/Desktop/SunsetCanines/sunset-canines/src/serviceImages"
        }
      }
    ) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
    }
  }
`

export default ServicesPage
