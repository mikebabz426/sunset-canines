import React from "react"
import Layout from "../components/Layout"
import AboutStyles from "../styles/About.module.scss"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

const AboutPage = ({ data }) => {
  const source = data.allFile.nodes[0].childImageSharp.fluid

  return (
    <>
      <Seo title="Sunset Canines | About" />
      <Layout contrast="dark">
        <section className={AboutStyles.main}>
          <div className={AboutStyles.container}>
            <Image fluid={source} className={AboutStyles.image} />
            <div className={AboutStyles.textArea}>
              <h2>
                About <span>Us</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                autem in ex numquam! Laborum, iste optio. A eligendi tempore
                corporis, repellendus at recusandae aliquam odit voluptatum
                dolorum eum nostrum, alias temporibus sunt neque accusantium ut
                magni delectus numquam quo facilis quam laborum quod. Veritatis
                voluptatum voluptates minima incidunt consequuntur aperiam eos,
                accusantium ea error culpa, autem repudiandae ipsa repellat
                laboriosam, cupiditate soluta ab architecto aliquam at
                assumenda! Sed totam dicta sit quo autem eum temporibus,
                ratione, excepturi ipsum neque exercitationem delectus commodi
                porro dolorem minus possimus. Illo nobis, nulla sed natus
                quibusdam distinctio. Vitae voluptate, assumenda recusandae
                velit modi vero.Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allFile(filter: { relativePath: { eq: "about.jpeg" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default AboutPage
