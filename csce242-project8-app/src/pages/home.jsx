import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Items from "../components/Items";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Home.css";

const heroSlides = [
  `${process.env.PUBLIC_URL}/images/hero.jpg`,
  `${process.env.PUBLIC_URL}/images/card_1.jpg`,
  `${process.env.PUBLIC_URL}/images/card_2.jpg`,
];

const facts = [
  "Switzerland has 4 national languages: German, French, Italian and Romansh.",
  "Switzerland has the highest number of mountain peaks over 4,000 m in the Alps.",
  "Switzerland is home to over 1,500 lakes — you're never more than 16 km from one.",
  "The Swiss Confederation was founded on August 1, 1291.",
  "Switzerland produces over 450 varieties of cheese.",
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
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("");
    setContactError("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
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
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setContactError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setContactError("Could not send your message right now. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <div id="page-wrap">

        <header id="hero">
          <img className="hero-img" src={heroSlides[slideIndex]} alt="Swiss Alps" />
          <div className="hero-copy">
            <h1>Explore Switzerland</h1>
            <h2>Lakes, Alps, Culture, and an Unforgettable Experience</h2>
            <Link className="hero-cta" to="/starting-journey">Plan Your Trip →</Link>
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
                    <li>🏔️ Stunning Alpine Landscapes</li>
                    <li>🎭 Rich Cultural Heritage</li>
                    <li>🚵 Endless Adventure</li>
                    <li>🚂 World-Class Rail Network</li>
                    <li>🧀 Iconic Swiss Cuisine</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="fact-marquee-wrap" aria-label="Switzerland facts">
            <div className="fact-marquee">
              <div className="fact-marquee-track">
                {[...facts, ...facts].map((fact, i) => (
                  <span key={i} className="fact-item">
                    {fact}
                    <span className="fact-dot" aria-hidden="true">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <section id="destinations">
            <h2 className="dest-title">Top Destinations</h2>
            <div className="cards">
              <div className="card">
                <img src={`${process.env.PUBLIC_URL}/images/card_1.jpg`} alt="Zermatt" />
                <h3>Zermatt</h3>
                <p>Home to the iconic Matterhorn, Zermatt is a car-free village perfect for skiing, hiking, and mountaineering.</p>
                <Link className="learn" to="/zermatt">Learn More</Link>
              </div>
              <div className="card">
                <img src={`${process.env.PUBLIC_URL}/images/card_2.jpg`} alt="Lucerne" />
                <h3>Lucerne</h3>
                <p>A charming city known for its medieval Chapel Bridge and stunning mountain views.</p>
                <Link className="learn" to="/lucerne">Learn More</Link>
              </div>
              <div className="card">
                <img src={`${process.env.PUBLIC_URL}/images/card_3.jpg`} alt="Interlaken" />
                <h3>Interlaken</h3>
                <p>Nestled between two lakes, Interlaken is an adventure capital and gateway to the Jungfraujoch region.</p>
                <Link className="learn" to="/interlaken">Learn More</Link>
              </div>
            </div>
          </section>

          <section id="swiss-items">
            <h2 className="dest-title">Swiss Items</h2>
            <Items />
          </section>

          <section id="travel-tips">
            <h2 className="dest-title">Travel Tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon">🚆</div>
                <h3>Swiss Travel Pass</h3>
                <p>Get unlimited travel on trains, buses, and boats. Covers most mountain railways and museums too.</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">❄️</div>
                <h3>Best Time to Visit</h3>
                <p>June–September for hiking and outdoor activities. December–March for world-class skiing.</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">💱</div>
                <h3>Currency</h3>
                <p>Switzerland uses the Swiss Franc (CHF). Cards are widely accepted, but keep some cash handy.</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🌐</div>
                <h3>Languages</h3>
                <p>German, French, Italian, and Romansh are spoken across different regions — English is widely understood.</p>
              </div>
            </div>
          </section>

          <section id="testimonials">
            <h2 className="dest-title">What Travelers Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p className="testimonial-text">"Switzerland was absolutely breathtaking. Every view from the train felt like a painting."</p>
                <p className="testimonial-author">— Maria L., New York</p>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">"Zermatt was the highlight of our whole trip. The Matterhorn is even more impressive in person!"</p>
                <p className="testimonial-author">— James T., London</p>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">"The Swiss Travel Pass was worth every franc. Seamless travel across the whole country."</p>
                <p className="testimonial-author">— Yuki N., Tokyo</p>
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