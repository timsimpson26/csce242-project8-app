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
    <>
      {/* Overlay — clicking it closes the nav */}
      {open && (
        <div className="nav-overlay" onClick={closeMenu} aria-hidden="true" />
      )}
 
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="site-title" to="/" onClick={closeMenu}>
            Explore Switzerland
          </Link>
 
          {/* Only visible on small screens */}
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={toggleMenu}
          >
            ☰
          </button>
 
          <nav className={`site-nav ${open ? "open" : ""}`}>
            {/* Close button inside the drawer — small only */}
            <button
              type="button"
              className="nav-close"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              ✕
            </button>
 
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
    </>
  );
}
 
export default Header;