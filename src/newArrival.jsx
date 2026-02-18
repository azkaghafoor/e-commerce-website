import React from "react";
import "./NewArrival.css";

const NewArrival = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="featured-badge">
          <div className="red-box"></div>
          <span>Featured</span>
        </div>
        <h1>New Arrival</h1>
      </div>

      <div className="product-grid">
        {/* PlayStation Section */}
        <div className="grid-item ps5">
          <div className="content">
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <a href="#">Shop Now</a>
          </div>
          <img
            src="/images/ps5-slim-goedkope-playstation_large 1.png"
            alt="PS5"
          />
        </div>

        {/* Women's Collection Section */}
        <div className="grid-item womens">
          <div className="content">
            <h2>Women's Collections</h2>
            <p>Featured woman collections that give you another vibe.</p>
            <a href="#">Shop Now</a>
          </div>
          <img
            src="/images/attractive-woman-wearing-hat-posing-black-background 1.png"
            alt="Women's Collection"
          />
        </div>

        {/* Speakers Section */}
        <div className="grid-item speakers">
          <div className="content">
            <h2>Speakers</h2>
            <p>Amazon wireless speakers</p>
            <a href="#">Shop Now</a>
          </div>
          <img src="/images/Frame 707.png" alt="Speakers" />
        </div>

        {/* Perfume Section */}
        <div className="grid-item perfume">
          <div className="content">
            <h2>Perfume</h2>
            <p>GUCCI INTENSE OUD EDP</p>
            <a href="#">Shop Now</a>
          </div>
          <img src="/images/Frame 706.png" alt="Perfume" />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
