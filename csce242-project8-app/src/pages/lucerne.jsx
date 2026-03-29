import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Destinations.css";

function Lucerne() {
  return (
    <>
      <Header />

      <main className="destination-page">

        <section className="sub-hero">
          <div className="sub-hero-inner">
            <h1>Visit Lucerne</h1>
            <p className="sub-lede">
              Come and see the marvelous lake town known for its charming medieval architecture and stunning mountain backdrop.
            </p>

            <div className="mini-nav">
              <Link className="home-bubble" to="/">
                Home
              </Link>
            </div>
          </div>
        </section>

        <img
          src={process.env.PUBLIC_URL + "/images/lucerne_hero.jpg"}
          alt="Lucerne Chapel Bridge and lake"
          className="hero"
        />

        <div className="overview-box">
          <h2>Overview</h2>
          <p>
            Lucerne is a picturesque Swiss city on the shores of Lake Lucerne, known for its well-preserved medieval architecture, iconic Chapel Bridge, and stunning alpine backdrop.
          </p>
        </div>

        <div className="two-column">
          <div className="info-box">
            <h2>Activities</h2>
            <p>
              In Lucerne, you can cruise across Lake Lucerne, explore Mount Pilatus or Rigi, stroll the medieval Old Town, and visit landmarks like the Chapel Bridge and Lion Monument.
            </p>
          </div>

          <div className="info-box">
            <h2>Travel Tips</h2>
            <p>
              Use the efficient Swiss public transport system, consider a Swiss Travel Pass for savings, and visit early or late in the day to avoid peak tourist crowds.
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

export default Lucerne;