import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>JOIN THE CAT IN THE RAVE</h1>
        <p>
        Let's turn up the volume on our MEME Coin journey and join us for the ultimate crypto rave.
        </p>
        <button className="btn">
          SEE YOU SOONEST! <img src={arrow} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
