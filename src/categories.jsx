import React from "react";
import Slider from "react-slick";
import "./Categories.css";

const Categories = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="category-wrapper">
      {/* HEADER */}
      <div className="category-top">
        <div className="category-left">
          <span className="category-bar"></span>
          <small>Categories</small>
        </div>

        <h2>Browse By Category</h2>
      </div>

      {/* SLIDER */}
      <Slider {...settings} className="category-slider">
        <div className="category-card">
          <img src="/images/Category-CellPhone.svg" alt="Phones" />
          <p>Phones</p>
        </div>

        <div className="category-card">
          <img src="/images/Category-Computer.svg" alt="Computers" />
          <p>Computers</p>
        </div>

        <div className="category-card">
          <img src="/images/Category-SmartWatch.svg" alt="SmartWatch" />
          <p>SmartWatch</p>
        </div>

        {/* ACTIVE */}
        <div className="category-card active">
          <img src="/images/Category-Camera.svg" alt="Camera" />
          <p>Camera</p>
        </div>

        <div className="category-card">
          <img src="/images/Category-Headphone.svg" alt="HeadPhones" />
          <p>HeadPhones</p>
        </div>

        <div className="category-card">
          <img src="/images/Category-Gamepad.svg" alt="Gaming" />
          <p>Gaming</p>
        </div>
      </Slider>
    </section>
  );
};

export default Categories;
