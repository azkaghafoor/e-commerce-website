import React from "react";
import "./FlashSales.css";

const FlashSales = () => {
  return (
    <section className="flash-wrapper">
      {/* HEADER */}
      <div className="flash-top">
        <div className="flash-left">
          <span className="today-tag"></span>
          <div>
            <small>Today's</small>
            <h2>Flash Sales</h2>
          </div>
        </div>

        <div className="flash-center">
          <div>
            <span>Days</span>
            <strong>03</strong>
          </div>
          <span className="colon">:</span>
          <div>
            <span>Hours</span>
            <strong>23</strong>
          </div>
          <span className="colon">:</span>
          <div>
            <span>Minutes</span>
            <strong>19</strong>
          </div>
          <span className="colon">:</span>
          <div>
            <span>Seconds</span>
            <strong>56</strong>
          </div>
        </div>

        <div className="flash-arrows">
          <button>←</button>
          <button>→</button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="flash-products">
        {/* CARD */}
        <div className="product-card active">
          <span className="discount">-40%</span>

          <div className="card-actions">
            <button>♡</button>
            <button>👁</button>
          </div>

          <div className="product-img">
            <img src="/images/gamepad.png" alt="gamepad" />
          </div>

          <button className="cart-btn">Add To Cart</button>

          <h4>HAVIT HV-G92 Gamepad</h4>

          <div className="price">
            <span className="new">$120</span>
            <span className="old">$160</span>
          </div>

          <div className="rating">
            ★★★★★ <span>(88)</span>
          </div>
        </div>

        <div className="product-card">
          <span className="discount">-35%</span>

          <div className="card-actions">
            <button>♡</button>
            <button>👁</button>
          </div>

          <div className="product-img">
            <img src="/images/keyboard.png" alt="keyboard" />
          </div>

          <button className="cart-btn">Add To Cart</button>

          <h4>AK-900 Wired Keyboard</h4>

          <div className="price">
            <span className="new">$960</span>
            <span className="old">$1160</span>
          </div>

          <div className="rating">
            ★★★★☆ <span>(75)</span>
          </div>
        </div>

        <div className="product-card">
          <span className="discount">-30%</span>

          <div className="card-actions">
            <button>♡</button>
            <button>👁</button>
          </div>

          <div className="product-img">
            <img src="/images/monitor.png" alt="monitor" />
          </div>

          <button className="cart-btn">Add To Cart</button>

          <h4>IPS LCD Gaming Monitor</h4>

          <div className="price">
            <span className="new">$370</span>
            <span className="old">$400</span>
          </div>

          <div className="rating">
            ★★★★★ <span>(99)</span>
          </div>
        </div>
      </div>

      {/* VIEW ALL */}
      <div className="view-all">
        <button>View All Products</button>
      </div>
    </section>
  );
};

export default FlashSales;
