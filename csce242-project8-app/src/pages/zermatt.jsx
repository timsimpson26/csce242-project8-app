import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Destinations.css";

function Zermatt() {
  return (
    <>
      <Header />

      <main className="destination-page">
        <section className="sub-hero">
          <div className="sub-hero-inner">
            <h1>Explore Zermatt</h1>
            <p className="sub-lede">
              Zermatt is a charming, car-free alpine village at the foot of the iconic Matterhorn, renowned for its world-class skiing and mountaineering.
            </p>

            <div className="mini-nav">
              <Link className="home-bubble" to="/">
                Home
              </Link>
            </div>
          </div>
        </section>

        <img
          src={process.env.PUBLIC_URL + "/images/zermatt_hero.jpg"}
          alt="Zermatt village and Matterhorn"
          className="hero"
        />

        <div className="overview-box">
          <h2>Overview</h2>
          <p>
            It offers breathtaking mountain scenery year-round, with opportunities for hiking, glacier excursions, and panoramic train journeys like the Glacier Express.
          </p>
        </div>

        <div className="two-column">
          <div className="info-box">
            <h2>Activities</h2>
            <p>
              In Zermatt, you can ski or snowboard on year-round glaciers, hike scenic alpine trails, ride the Gornergrat Railway for Matterhorn views, and explore the Matterhorn Glacier Paradise.
            </p>
          </div>

          <div className="info-box">
            <h2>Travel Tips</h2>
            <p>
              Arrive by train since Zermatt is car-free, book accommodations well in advance during ski season, and check mountain weather conditions before planning outdoor activities.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Zermatt;