import React from "react";
import Slider from "react-slick";
import "./ExploreProducts.css";

const ExploreProducts = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className="explore">
      {/* HEADER */}
      <div className="explore-header">
        <div>
          <span className="section-tag">Our Products</span>
          <h2>Explore Our Products</h2>
        </div>
      </div>

      {/* SLIDER */}
      <Slider {...settings} className="explore-slider">
        {/* 1 */}
        <div className="product-card">
          <div className="product-img">
            <span className="badge green">NEW</span>
            <div className="icons">
              <span>♡</span>
              <span>👁</span>
            </div>
            <img src="/images/Frame 604.png" alt="" />
            <div className="add-cart">Add To Cart</div>
          </div>
          <h4>Breed Dry Dog Food</h4>
          <div className="price">
            <span className="new">$100</span>
            <div className="stars">
              ★★★★★ <small>(35)</small>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="product-card">
          <div className="product-img">
            <div className="icons">
              <span>♡</span>
              <span>👁</span>
            </div>
            <img src="/images/Frame 604 (1).png" alt="" />
            <div className="add-cart">Add To Cart</div>
          </div>
          <h4>CANON EOS DSLR Camera</h4>
          <div className="price">
            <span className="new">$360</span>
            <div className="stars">
              ★★★★★ <small>(95)</small>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="product-card">
          <div className="product-img">
            <span className="badge green">NEW</span>
            <div className="icons">
              <span>♡</span>
              <span>👁</span>
            </div>
            <img src="/images/Frame 604 (2).png" alt="" />
            <div className="add-cart">Add To Cart</div>
          </div>
          <h4>ASUS FHD Gaming Laptop</h4>
          <div className="price">
            <span className="new">$700</span>
            <div className="stars">
              ★★★★★ <small>(325)</small>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="product-card">
          <div className="product-img">
            <div className="icons">
              <span>♡</span>
              <span>👁</span>
            </div>
            <img src="/images/Frame 608.png" alt="" />
            <div className="add-cart">Add To Cart</div>
          </div>
          <h4>Curology Product Set</h4>
          <div className="price">
            <span className="new">$500</span>
            <div className="stars">
              ★★★★★ <small>(145)</small>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="product-card">
          <div className="product-img">
            <span className="badge green">NEW</span>
            <div className="icons">
              <span>♡</span>
              <span>👁</span>
            </div>
            <img src="/images/Frame 608.png" alt="" />
            <div className="add-cart">Add To Cart</div>
          </div>
          <h4>Kids Electric Car</h4>
          <div className="price">
            <span className="new">$960</span>
            <div className="stars">
              ★★★★★ <small>(65)</small>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="product-card">
          <div className="product-img">
            <div className="icons">
              <span>♡</span>
              <span>👁</span>
            </div>
            <img src="/images/Frame 608 (1).png" alt="" />
            <div className="add-cart">Add To Cart</div>
          </div>
          <h4>Jr. Zoom Soccer Cleats</h4>
          <div className="price">
            <span className="new">$116</span>
            <div className="stars">
              ★★★★★ <small>(35)</small>
            </div>
          </div>
        </div>

        {/* 7 */}
        <div className="product-card">
          <div className="product-img">
            <span className="badge green">NEW</span>
            <div className="icons">
              <span>♡</span>
              <span>👁</span>
            </div>
            <img src="/images/Frame 608 (2).png" alt="" />
            <div className="add-cart">Add To Cart</div>
          </div>
          <h4>GP11 Shooter USB Gamepad</h4>
          <div className="price">
            <span className="new">$660</span>
            <div className="stars">
              ★★★★★ <small>(55)</small>
            </div>
          </div>
        </div>

        {/* 8 */}
        <div className="product-card">
          <div className="product-img">
            <div className="icons">
              <span>♡</span>
              <span>👁</span>
            </div>
            <img src="/images/Frame 608 (3).png" alt="" />
            <div className="add-cart">Add To Cart</div>
          </div>
          <h4>Quilted Satin Jacket</h4>
          <div className="price">
            <span className="new">$660</span>
            <div className="stars">
              ★★★★★ <small>(55)</small>
            </div>
          </div>
        </div>
      </Slider>

      {/* VIEW ALL */}
      <div className="view-all">
        <button>View All Products</button>
      </div>
    </section>
  );
};

export default ExploreProducts;
