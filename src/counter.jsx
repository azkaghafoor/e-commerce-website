import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <h1 className="logo">Exclusive</h1>

        {/* Center: Links (Responsive class added) */}
        <ul className={`nav-links ${isMobileMenuOpen ? "nav-active" : ""}`}>
          <li>
            <a
              href="#"
              className="active"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
              Sign Up
            </a>
          </li>
        </ul>

        {/* Right: Search + Icons */}
        <div className="nav-actions">
          <div className="search-box">
            <input type="text" placeholder="What are you looking for?" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="icons-group">
            <i className="fa-regular fa-heart icon"></i>
            <i className="fa-solid fa-cart-shopping icon"></i>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="hamburger" onClick={toggleMenu}>
            <i
              className={
                isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              }
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
