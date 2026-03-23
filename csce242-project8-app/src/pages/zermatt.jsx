import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Destination.css";

function Zermatt() {
  return (
    <>
      <Header />

      <div className="destination-page">
        <header className="page-header">
          <h1 className="page-title">Explore Zermatt</h1>

          <Link className="home-bubble" to="/">
            Home
          </Link>
        </header>

        <p className="intro">
          Zermatt is a charming, car-free alpine village at the foot of the iconic Matterhorn, renowned for its world-class skiing and mountaineering.
        </p>

        <img
          src="/images/zermatt_hero.jpg"
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
      </div>

      <Footer />
    </>
  );
}

export default Zermatt;