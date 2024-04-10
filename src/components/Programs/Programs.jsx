import React from "react";
import "./Programs.css";
import program1 from '../../assets/Program1.jpg'
import program2 from '../../assets/Program2.jpg'
import program3 from '../../assets/Program3.jpg'
import icon from '../../assets/gradicon.png'
const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1}  alt="program"/>
        <div className="caption">
            <img src={icon} />
            <p>Hospitality Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2}  alt="program"/>
        <div className="caption">
            <img src={icon} />
            <p>Nursing Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3}  alt="program"/>
        <div className="caption">
            <img src={icon} />
            <p>Business Degree</p>
        </div>
      </div>

    </div>
  );
};

export default Programs;
