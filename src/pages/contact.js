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
            <form
              id="contact-form"
              name="contact"
              method="POST"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className={ContactStyles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  className={ContactStyles.formControl}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className={ContactStyles.formGroup}>
                <label htmlFor="email">Email address</label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  className={ContactStyles.formControl}
                  aria-describedby="emailHelp"
                  placeholder="john.doe@gmail.com"
                  required
                />
              </div>
              <div className={ContactStyles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className={ContactStyles.formTextarea}
                  rows="5"
                  placeholder="Please enter your message here..."
                ></textarea>
              </div>
              <input
                className={ContactStyles.submitButton}
                value="Send Message"
                type="submit"
                name="submit"
              />
            </form>
          </div>
          <div className={ContactStyles.contactMap}></div>
        </section>
      </Layout>
    </>
  )
}

export default ContactPage
