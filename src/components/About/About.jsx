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
        <h3>ABOUT CAN IN RAVE</h3>
        <h2>"Mixing beats and crypto vibes—join the rave revolution!"</h2>
        <p>
          {" "}
          Cat in Rave is more than just a project; it’s a vibrant community at
          the intersection of drugs, music, and camaraderie.
        </p>

        <p>
          We believe in creating experiences that transcend boundaries and
          amplify the spirit of exploration and connection.
        </p>

        <p>
          Our mission is to create a platform that embodies the spirit of the
          rave culture, blending the excitement of cryptocurrency with the
          vibrant energy of music festivals. Whether you’re a seasoned crypto
          trader, a music lover, or simply someone looking to be part of an
          innovative and inclusive community, Cat in Rave welcomes you with open
          arms.
        </p>
      </div>
    </div>
  );
};

export default About;
