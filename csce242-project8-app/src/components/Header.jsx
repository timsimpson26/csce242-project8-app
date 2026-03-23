import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-title" to="/">
          Explore Switzerland
        </Link>

        <nav className="site-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/reviews">
            Reviews
          </Link>
          <Link className="nav-link" to="/starting-journey">
            Start The Journey
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;