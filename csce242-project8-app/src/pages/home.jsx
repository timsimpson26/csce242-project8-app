import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Home.css";

function Home() {
  return (
    <>
      <Header />

      <div id="page-wrap">
        <header id="hero">
          <img
            className="hero-img"
            src="/images/hero.jpg"
            alt="Swiss Alps"
          />
          <div className="hero-copy">
            <h1>Explore Switzerland</h1>
            <h2>Lakes, Alps, Culture, and an Unforgettable Experience</h2>
          </div>
        </header>

        <main id="main">
          <section id="why">
            <div className="why-inner">
              <h2 className="why-title">Why Switzerland?</h2>

              <div className="why-content">
                <div className="why-left">
                  <img src="/images/why.jpg" alt="Swiss Mountains" />
                </div>

                <div className="why-right">
                  <ul>
                    <li>Stunning Alpine Landscapes</li>
                    <li>Rich Cultural Heritage</li>
                    <li>Endless Adventure</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="fact-rotator-wrap">
            <div className="fact-rotator">
              <span className="fact-text">
                Switzerland has 4 national languages: German, French, Italian and Romansh.
              </span>
            </div>
          </div>

          <section id="destinations">
            <h2 className="dest-title">Top Destinations</h2>

            <div className="cards">
              <div className="card">
                <img src="/images/card_1.jpg" alt="Zermatt" />
                <h3>Zermatt</h3>
                <p>
                  Home to the iconic Matterhorn, Zermatt is a car-free village
                  perfect for skiing, hiking, and mountaineering.
                </p>
                <Link className="learn" to="/zermatt">
                  Learn More
                </Link>
              </div>

              <div className="card">
                <img src="/images/card_2.jpg" alt="Lucerne" />
                <h3>Lucerne</h3>
                <p>
                  A charming city known for its medieval Chapel Bridge
                  and stunning mountain views.
                </p>
                <Link className="learn" to="/lucerne">
                  Learn More
                </Link>
              </div>

              <div className="card">
                <img src="/images/card_3.jpg" alt="Interlaken" />
                <h3>Interlaken</h3>
                <p>
                  Nestled between two lakes, Interlaken is an adventure capital
                  and gateway to the Jungfraujoch region.
                </p>
                <Link className="learn" to="/interlaken">
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          <section id="swiss-items">
            <h2 className="dest-title">Swiss Items</h2>
            <div className="cards-grid">
              Loading items…
            </div>
          </section>

          <section id="contact-inline">
            <h2 className="dest-title">Contact Us</h2>

            <form className="contact-form">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>

              <label>
                Email
                <input type="email" placeholder="your@email.com" />
              </label>

              <label>
                Message
                <textarea rows="5" placeholder="Your message..."></textarea>
              </label>

              <button type="submit">Send Message</button>
            </form>
          </section>

          <section id="map-section">
            <h2 className="dest-title">Map — Matterhorn / Zermatt</h2>

            <div className="iframe-wrapper iframe-centered">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.7%2C45.94%2C7.95%2C46.02&layer=mapnik&marker=45.98%2C7.82"
                loading="lazy"
                title="Matterhorn location"
              ></iframe>
            </div>

            <p className="map-link">
              <small>
                <a href="https://www.openstreetmap.org/?mlat=45.98&mlon=7.82#map=13/45.98/7.82">
                  View larger map on OpenStreetMap
                </a>
              </small>
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Home;