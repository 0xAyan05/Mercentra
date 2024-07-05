import React from "react";
import "./About.css";
import about from "../../assets/dancecat.gif";
import play from "../../assets/playicon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} className="about-img" />
        <img src={play} className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT CAT IN RAVE</h3>
        <h2>"Mixing beats and crypto vibes—join the rave revolution!"</h2>
        <p>
          {" "}
          Cat in Rave is more than just a project; it’s a vibrant community at
          the intersection of drugs, music, and camaraderie.
        </p>

        <p>
        We’re all about breaking barriers and turning up the fun, creating a space where you can explore and connect.
        </p>

        <p>
        Join the rave culture with Cat in Rave, where the excitement ties up with the electric energy of music festivals. Whether you're a crypto whiz, a music junkie, or just here for the vibrant community, our dancing cat welcomes you to the party.
        </p>
      </div>
    </div>
  );
};

export default About;
