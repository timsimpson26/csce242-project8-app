import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Destinations.css";

function Interlaken() {
  return (
    <>
      <Header />

      <div className="destination-page">
        <header className="page-header">
          <h1 className="page-title">Experience Interlaken</h1>

          <Link className="home-bubble" to="/">
            Home
          </Link>
        </header>

        <p className="intro">
          Discover the beauty of the land between lakes.
        </p>

        <img
          src="/images/interlaken_hero.jpg"
          alt="Interlaken lake and mountains"
          className="hero"
        />

        <div className="overview-box">
          <h2>Overview</h2>
          <p>
            Interlaken is a great city for outdoor activities and parks as it is known as the land between lakes!
          </p>
        </div>

        <div className="two-column">
          <div className="info-box">
            <h2>Activities</h2>
            <p>
              Walk around town, have lunch by the lake. Shop around the village and relax because you are in Interlaken!
            </p>
          </div>

          <div className="info-box">
            <h2>Travel Tips</h2>
            <p>
              Interlaken is a popular spot because it is located in the central area of Switzerland so many options are doable!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Interlaken;