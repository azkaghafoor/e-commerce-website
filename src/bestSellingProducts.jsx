import React from "react";
import "./BestSellingProducts.css";

const BestSellingProducts = () => {
  return (
    <section className="best-wrapper">
      {/* HEADER */}
      <div className="best-top">
        <div className="best-left">
          <span className="best-tag"></span>
          <div>
            <small>This Month</small>
            <h2>Best Selling Products</h2>
          </div>
        </div>

        <button className="view-all-btn">View All</button>
      </div>

      {/* PRODUCTS */}
      <div className="best-products">
        {/* CARD 1 */}
        <div className="best-card">
          <div className="best-img">
            <img src="/images/Product 4.png" alt="coat" />
            <div className="card-actions">
              <button>♡</button>
              <button>👁</button>
            </div>
          </div>

          <h4>The north coat</h4>
          <div className="price">
            <span className="new">$260</span>
            <span className="old">$360</span>
          </div>
          <div className="rating">
            ★★★★★ <span>(65)</span>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="best-card">
          <div className="best-img">
            <img src="/images/Product 3.png" alt="bag" />
            <div className="card-actions">
              <button>♡</button>
              <button>👁</button>
            </div>
          </div>

          <h4>Gucci duffle bag</h4>
          <div className="price">
            <span className="new">$960</span>
            <span className="old">$1160</span>
          </div>
          <div className="rating">
            ★★★★★ <span>(65)</span>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="best-card">
          <div className="best-img">
            <img src="/images/Product 2.png" alt="cpu" />
            <div className="card-actions">
              <button>♡</button>
              <button>👁</button>
            </div>
          </div>

          <h4>RGB liquid CPU Cooler</h4>
          <div className="price">
            <span className="new">$160</span>
            <span className="old">$170</span>
          </div>
          <div className="rating">
            ★★★★★ <span>(65)</span>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="best-card">
          <div className="best-img">
            <img src="/images/Product 1.png" alt="table" />
            <div className="card-actions">
              <button>♡</button>
              <button>👁</button>
            </div>
          </div>

          <h4>Small BookSelf</h4>
          <div className="price">
            <span className="new">$360</span>
            <span className="old">$460</span>
          </div>
          <div className="rating">
            ★★★★★ <span>(65)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
