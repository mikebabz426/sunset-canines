import React from "react"
import Layout from "../components/Layout"
import ContactStyles from "../styles/Contact.module.scss"
import Seo from "../components/Seo"

const ContactPage = () => {
  return (
    <>
      <Seo title="Sunset Canines | Contact" />
      <Layout contrast="dark">
        <section className={ContactStyles.contactContainer}>
          <div className={ContactStyles.contactForm}>
            <form id="contact-form" method="POST" data-netlify="true">
              <div className={ContactStyles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className={ContactStyles.formControl}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className={ContactStyles.formGroup}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className={ContactStyles.formControl}
                  aria-describedby="emailHelp"
                  placeholder="john.doe@gmail.com"
                  required
                />
              </div>
              <div className={ContactStyles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  className={ContactStyles.formTextarea}
                  rows="5"
                  placeholder="Please enter your message here..."
                ></textarea>
              </div>
              <button className={ContactStyles.submitButton} type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className={ContactStyles.contactMap}></div>
        </section>
      </Layout>
    </>
  )
}

export default ContactPage
