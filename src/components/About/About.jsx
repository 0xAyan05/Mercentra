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
        <h3>ABOUT COLLEGE</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          {" "}
          Embark on a transfromative educational journey with our college's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower studentes with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>

        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impack in classrooms, schools and communities.
        </p>

        <p>
          Whether you aspire to become a nurse,business analyst, hospitality
          manager, teacher, counselor or educational leader, our diverse range
          of programs offers the perfect pathway to achieve your goals and
          unlock your full potential in shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
