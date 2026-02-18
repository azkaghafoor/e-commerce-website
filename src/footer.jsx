import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Exclusive Section */}
        <div className="footer-column">
          <h2 className="footer-logo">Exclusive</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Enter your email" />
            <button>
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="footer-column">
          <h3>Support</h3>
          <p>
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="footer-column">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="footer-column">
          <h3>Download App</h3>
          <p className="app-promo">Save $3 with App New User Only</p>
          <div className="download-container">
            <div className="qr-code">
              {/* Replace with your actual QR image path */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Example"
                alt="QR Code"
              />
            </div>
            <div className="app-buttons">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
              />
            </div>
          </div>
          <div className="social-links">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
