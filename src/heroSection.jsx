import React from "react";
import Slider from "react-slick";
const HeroSection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        {/* SLIDE 1 */}
        <div className="hero-slide">
          <div className="hero-content">
            {/* LEFT TEXT */}
            <div className="hero-text">
              <span className="hero-brand">
                <i className="fa-brands fa-apple"></i>
                iPhone 14 Series
              </span>

              <h1>
                Up to 10% <br /> off Voucher
              </h1>

              <a href="#" className="hero-btn">
                Shop Now →
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hero-image">
              <img src="/images/iphone.png" alt="iphone" />
            </div>
          </div>
        </div>
        {/* SLIDE 1 */}
        <div className="hero-slide">
          <div className="hero-content">
            {/* LEFT TEXT */}
            <div className="hero-text">
              <span className="hero-brand">
                <i className="fa-brands fa-apple"></i>
                iPhone 14 Series
              </span>

              <h1>
                Up to 10% <br /> off Voucher
              </h1>

              <a href="#" className="hero-btn">
                Shop Now →
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hero-image">
              <img src="/images/iphone.png" alt="iphone" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;
