import React from "react";
import "./MusicBanner.css";

const MusicBanner = () => {
  return (
    <section className="music-banner">
      <div className="banner-content">
        {/* LEFT */}
        <div className="banner-left">
          <span className="category-text">Categories</span>

          <h1>
            Enhance Your <br /> Music Experience
          </h1>

          <div className="time-boxes">
            <div className="time-circle">
              <strong>23</strong>
              <span>Hours</span>
            </div>
            <div className="time-circle">
              <strong>05</strong>
              <span>Days</span>
            </div>
            <div className="time-circle">
              <strong>59</strong>
              <span>Minutes</span>
            </div>
            <div className="time-circle">
              <strong>35</strong>
              <span>Seconds</span>
            </div>
          </div>

          <button className="buy-btn">Buy Now!</button>
        </div>

        {/* RIGHT */}
        <div className="banner-right">
          <img src="/images/Speaker Product.png" alt="speaker" />
        </div>
      </div>
    </section>
  );
};

export default MusicBanner;
