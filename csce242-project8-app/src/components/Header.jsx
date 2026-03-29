import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-title" to="/" onClick={closeMenu}>
          Explore Switzerland
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={toggleMenu}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`site-nav ${open ? "open" : ""}`}>
          <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
          <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
          <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
          <Link className="nav-link" to="/reviews" onClick={closeMenu}>Reviews</Link>
          <Link 
            className="nav-link start-journey" 
            to="/starting-journey" 
            onClick={closeMenu}
          >
            Start The Journey
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;