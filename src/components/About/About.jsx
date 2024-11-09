import React from "react";
import "./About.css";
import about from "../../assets/mg.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} className="about-img" alt="Mercentra Group" />
      </div>
      <div className="about-right">
        <h3>ABOUT MERCENTRA GROUP</h3>
        <h2>"Driving Business Growth with Digital Marketing and Shopify Expertise"</h2>
        <p>
          Mercentra Group helps businesses grow online by providing effective digital marketing solutions tailored to each client’s needs.
        </p>

        <p>
          Specializing in Shopify eCommerce, we know what it takes to create a strong, conversion-focused online presence. From store setup and optimization to targeted marketing strategies, we’re here to help you succeed in a competitive market.
        </p>

        <p>
          Whether you’re new to eCommerce or looking to scale, Mercentra Group offers the tools and support to boost traffic, engage customers, and increase sales. Let's work together to take your business to the next level.
        </p>
      </div>
    </div>
  );
};

export default About;
