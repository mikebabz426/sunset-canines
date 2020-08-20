import React from "react"
import Layout from "../components/Layout"
import Service from "../components/Service"
import ServicesStyles from "../styles/Services.module.scss"
import Card from "../components/Card"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

const ServicesPage = ({ data }) => {
  const { nodes } = data.allFile

  return (
    <>
      <Seo title="Sunset Canines | Services" />
      <Layout contrast="dark">
        <section className={ServicesStyles.main}>
          <h1 className={ServicesStyles.heading}>
            We offer a full spectrum of services
          </h1>
          {nodes.map((item, i) => {
            let dir = i % 2 === 0 ? "left" : "right"
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
        </section>
        <div className={ServicesStyles.map}>
          <h3>We travel around the country with clients all over the US</h3>
        </div>
        <section className={ServicesStyles.additional}>
          <h3>Some of our additional services include</h3>
          <div className={ServicesStyles.cards}>
            <Card key="1" head="Scent Work" />
            <Card key="2" head="Sports Training" />
            <Card key="3" head="Bite Work" />
            <Card key="4" head="Day Care" />
            <Card key="5" head="Dock Diving Lessons" />
            <Card key="6" head="Vacation Stays" />
          </div>
        </section>
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
