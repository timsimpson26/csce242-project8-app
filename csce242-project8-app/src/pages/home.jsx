import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Home.css";

const heroSlides = [
  `${process.env.PUBLIC_URL}/images/hero.jpg`,
  `${process.env.PUBLIC_URL}/images/card_1.jpg`,
  `${process.env.PUBLIC_URL}/images/card_2.jpg`,
];

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState("");
  const [contactError, setContactError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("");
    setContactError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4eec9ca3-f2f1-4aca-9dc2-f8adca98373d",
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
          subject: "New message from Explore Switzerland",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setContactStatus("Thanks! Your message was sent successfully.");
        setContactForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setContactError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setContactError("Could not send your message right now. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <div id="page-wrap">
        <header id="hero">
          <img
            className="hero-img"
            src={heroSlides[slideIndex]}
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
                  <img
                    src={`${process.env.PUBLIC_URL}/images/why.jpg`}
                    alt="Swiss Mountains"
                  />
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
            <div className="fact-rotator" tabIndex="0">
              <span className="fact-text">
                Switzerland has 4 national languages: German, French, Italian and Romansh.
              </span>
            </div>
          </div>

          <section id="destinations">
            <h2 className="dest-title">Top Destinations</h2>

            <div className="cards">
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/images/card_1.jpg`}
                  alt="Zermatt"
                />
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
                <img
                  src={`${process.env.PUBLIC_URL}/images/card_2.jpg`}
                  alt="Lucerne"
                />
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
                <img
                  src={`${process.env.PUBLIC_URL}/images/card_3.jpg`}
                  alt="Interlaken"
                />
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
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/images/card_1.jpg`}
                  alt="Swiss mountain item"
                />
                <h3>Mountain Pass</h3>
                <p>Plan scenic rail trips and alpine adventures across Switzerland.</p>
              </div>

              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/images/card_2.jpg`}
                  alt="Swiss lake item"
                />
                <h3>Lake Cruise</h3>
                <p>Enjoy peaceful views from Switzerland’s famous lakes and towns.</p>
              </div>

              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/images/card_3.jpg`}
                  alt="Swiss village item"
                />
                <h3>Village Guide</h3>
                <p>Find the best charming alpine villages to add to your itinerary.</p>
              </div>
            </div>
          </section>

          <section id="contact-inline">
            <h2 className="dest-title">Contact Us</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={contactForm.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={contactForm.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your message..."
                value={contactForm.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Send Message</button>

              {contactStatus && <p className="form-success">{contactStatus}</p>}
              {contactError && <p className="form-error">{contactError}</p>}
            </form>
          </section>

          <section id="map-section">
            <h2 className="dest-title">Map — Matterhorn / Zermatt</h2>

            <div className="iframe-wrapper iframe-centered">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.7%2C45.94%2C7.95%2C46.02&layer=mapnik&marker=45.98%2C7.82"
                loading="lazy"
                title="Matterhorn location"
              />
            </div>

            <p className="map-link">
              <small>
                <a
                  href="https://www.openstreetmap.org/?mlat=45.98&mlon=7.82#map=13/45.98/7.82"
                  target="_blank"
                  rel="noreferrer"
                >
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