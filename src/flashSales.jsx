import React from "react";
import Slider from "react-slick";
import "./FlashSales.css";

const FlashSales = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Laptop/Tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet/Large Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Mobile par arrows ki jagah swipe behtar hai
          dots: true, // Mobile par navigation ke liye dots de sakte hain
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      img: "/images/Frame 611.png",
      name: "HAVIT HV-G92 Gamepad",
      disc: "-40%",
      new: "$120",
      old: "$160",
      rate: "★★★★★",
      count: "88",
    },
    {
      id: 2,
      img: "/images/Frame 612.png",
      name: "AK-900 Wired Keyboard",
      disc: "-35%",
      new: "$960",
      old: "$1160",
      rate: "★★★★☆",
      count: "75",
    },
    {
      id: 3,
      img: "/images/Frame 613.png",
      name: "IPS LCD Gaming Monitor",
      disc: "-30%",
      new: "$370",
      old: "$400",
      rate: "★★★★★",
      count: "99",
    },
    {
      id: 4,
      img: "/images/Frame 614.png",
      name: "S-Series Comfort Chair",
      disc: "-25%",
      new: "$375",
      old: "$400",
      rate: "★★★★★",
      count: "99",
    },
    {
      id: 5,
      img: "/images/Frame 611.png",
      name: "Gaming Headset Pro",
      disc: "-20%",
      new: "$120",
      old: "$150",
      rate: "★★★★★",
      count: "120",
    },
  ];

  return (
    <section className="flash-wrapper">
      <div className="flash-top">
        <div className="flash-left">
          <div className="today-tag-box">
            <span className="today-tag"></span>
            <small>Today's</small>
          </div>
          <h2>Flash Sales</h2>
        </div>
      </div>

      <Slider {...settings} className="flash-slider">
        {products.map((p) => (
          <div key={p.id} className="card-container">
            <div className="product-card">
              <div className="product-img">
                <img src={p.img} alt={p.name} />
                <span className="discount">{p.disc}</span>
                <button className="cart-btn">Add To Cart</button>
              </div>
              <div className="product-info">
                <h4>{p.name}</h4>
                <div className="price">
                  <span className="new">{p.new}</span>
                  <span className="old">{p.old}</span>
                </div>
                <div className="rating">
                  <span className="stars">{p.rate}</span>
                  <span className="count">({p.count})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="view-all">
        <button>View All Products</button>
      </div>
    </section>
  );
};

export default FlashSales;
