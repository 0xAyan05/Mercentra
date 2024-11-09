import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Mercentra Group</h1>
        <p>
          Boost your Shopify store's growth with our expert digital marketing strategies, designed to drive traffic, increase conversions, and maximize revenue.
        </p>
        <button className="btn">
          LET'S GET STARTED <img src={arrow} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
