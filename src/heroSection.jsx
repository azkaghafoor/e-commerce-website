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
    appendDots: (dots) => (
      <div style={{ bottom: "20px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="hero-slide">
          <div className="hero-container">
            <div className="hero-text">
              <div className="hero-brand">
                <i className="fa-brands fa-apple"></i>
                <span>iPhone 14 Series</span>
              </div>
              <h1>
                Up to 10% <br /> off Voucher
              </h1>
              <a href="#" className="hero-btn">
                Shop Now <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="hero-image">
              <img src="/images/iphone.png" alt="iphone" />
            </div>
          </div>
        </div>

        {/* Slide 2 (Duplicate for demo) */}
        <div className="hero-slide">
          <div className="hero-container">
            <div className="hero-text">
              <div className="hero-brand">
                <i className="fa-brands fa-apple"></i>
                <span>iPhone 14 Series</span>
              </div>
              <h1>
                Up to 10% <br /> off Voucher
              </h1>
              <a href="#" className="hero-btn">
                Shop Now <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
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
