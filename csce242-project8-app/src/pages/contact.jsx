import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Contact.css";

function Contact() {
  return (
    <>
      <Header />

      <div className="contact-page">
        <header className="contact-header">
          <div className="contact-header-inner">
            <div className="spacer"></div>

            <h1 className="contact-title">Contact Us!</h1>
          </div>
        </header>

        <img
          className="contact-banner"
          src={`${process.env.PUBLIC_URL}/images/contact_banner.jpg`}
          alt="Swiss Mountains banner"
        />

        <main className="contact-main">
          <h2 className="contact-heading">Get in Touch!</h2>

          <p className="contact-blurb">
            Leave us an email or give us a call for a fast, friendly response.
          </p>

          <div className="contact-info-wrapper">
            <ul className="contact-list">
              <li>
                <strong>Email:</strong> switzerlandtravelscape@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> 111-222-3333
              </li>
            </ul>

          <img
            src={`${process.env.PUBLIC_URL}/images/swiss_flag_small.jpg`}
            alt="Swiss flag"
            className="contact-flag"
          />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Contact;