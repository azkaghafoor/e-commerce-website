import React from "react";
import "./Features.css";

const Features = () => {
  const featuresData = [
    {
      icon: "fa-solid fa-truck-fast",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: "fa-solid fa-headset",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {featuresData.map((item, index) => (
          <div key={index} className="feature-item">
            <div className="icon-outer-circle">
              <div className="icon-inner-circle">
                <i className={item.icon}></i>
              </div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Back to top button */}
      <button
        className="scroll-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </section>
  );
};

export default Features;
