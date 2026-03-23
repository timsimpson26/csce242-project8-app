import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Reviews.css";

function Reviews() {
  return (
    <>
      <Header />

      <div id="page-wrap">
        <header className="sub-hero">
          <div className="sub-hero-inner">
            <h1>Traveler Reviews</h1>
            <p className="sub-lede">
              Real experiences from travelers exploring Switzerland.
            </p>
          </div>
        </header>

        <img
          src="/images/traveler_experiences_banner.jpg"
          alt="Travel experiences in Switzerland"
          style={{ width: "100%", display: "block", borderRadius: "0 0 8px 8px" }}
        />

        <main id="main" className="reviews-main">
          <section className="reviews-section">
            <div className="reviews-intro">
              <h2>Share Your Experience</h2>
              <p>
                Tell us about your Swiss adventure — what did you love most?
              </p>
            </div>

            <div className="review-form-card">
              <form className="review-form">
                <label>
                  Your Name
                  <input type="text" name="reviewer" required />
                </label>

                <label>
                  Rating
                  <select name="rating" required>
                    <option>★★★★★ 5</option>
                    <option>★★★★ 4</option>
                    <option>★★★ 3</option>
                    <option>★★ 2</option>
                    <option>★ 1</option>
                  </select>
                </label>

                <label>
                  Your Review
                  <textarea name="review-text" rows="4" required></textarea>
                </label>

                <button type="submit" className="cta small">
                  Submit Review
                </button>
              </form>
            </div>

            <section className="reviews-list">
              <article className="review-card">
                <header>
                  <strong>Emily R.</strong>
                  <span className="review-rating">★★★★★</span>
                </header>

                <p className="review-text">
                  The views in Interlaken were absolutely breathtaking.
                  The train rides alone were worth the trip!
                </p>

                <small className="review-date">March 2026</small>
              </article>
            </section>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Reviews;