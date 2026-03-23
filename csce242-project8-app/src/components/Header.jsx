import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <h1 className="site-title">Explore Switzerland</h1>

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
        </nav>
      </div>
    </header>
  );
}

export default Header;