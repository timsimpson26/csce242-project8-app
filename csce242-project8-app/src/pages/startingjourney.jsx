import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/StartingJourney.css";

function StartingJourney() {
  return (
    <>
      <Header />

      <div className="starting-page">
        <header className="starting-header">
          <h1 className="starting-title">Starting the Journey</h1>
        </header>

        <section className="starting-hero">
          <div className="starting-overlay"></div>

          <div className="starting-text-card">
            <p>
              Switzerland offers breathtaking landscapes, rich cultural experiences,
              and endless outdoor adventures. This guide helps you explore destinations,
              plan activities, and prepare for your journey.
            </p>
          </div>

          <div className="starting-itinerary">
            <img
              src="/images/itn.jpg"
              alt="7 Day Switzerland Itinerary"
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default StartingJourney;