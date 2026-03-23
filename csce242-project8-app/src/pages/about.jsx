import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/About.css";

function About() {
  return (
    <>
      <Header />

      <main id="main" className="about-main">
        <section className="about-section">
          <div className="about-container">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                Explore Switzerland exists to make planning your Swiss trip simple, inspiring,
                and stress-free. We provide practical advice, curated destinations, and helpful
                travel insights so you can focus on enjoying the journey.
              </p>

              <h2>What We Share</h2>
              <ul>
                <li>Top destinations and hidden gems</li>
                <li>Seasonal travel tips</li>
                <li>Local culture and traditions</li>
                <li>Itinerary inspiration and transport advice</li>
              </ul>

              <h2>Our Goal</h2>
              <p>
                To help you create unforgettable memories across Switzerland —
                from the Matterhorn to Lake Lucerne.
              </p>
            </div>

            <div className="about-image">
              <img
                src="/images/swiss_story_panorama.jpg"
                alt="Swiss scenic panorama"
              />
            </div>
          </div>
        </section>

        <section className="team-box">
          <h2>Our Values</h2>
          <div className="values-list">
            <div className="value">
              <h3>Clarity</h3>
              <p>Simple, direct guidance you can use immediately.</p>
            </div>

            <div className="value">
              <h3>Accuracy</h3>
              <p>Reliable recommendations based on real travel insight.</p>
            </div>

            <div className="value">
              <h3>Respect</h3>
              <p>Encouraging sustainable and culturally mindful travel.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;