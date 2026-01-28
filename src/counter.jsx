import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <h1 className="logo">Exclusive</h1>

        {/* Center: Links */}
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>

        {/* Right: Search + Icons */}
        <div className="nav-actions">
          <div className="search-box">
            <input type="text" placeholder="What are you looking for?" />

            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          <i className="fa-regular fa-heart icon"></i>
          <i className="fa-solid fa-cart-shopping icon"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
