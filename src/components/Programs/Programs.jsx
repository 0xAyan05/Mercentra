import React from "react";
import "./Programs.css";
import pic1 from '../../assets/drugs.jpg'
import pic2 from '../../assets/music.jpg'
import pic3 from '../../assets/rave.jpg'
import icon1 from '../../assets/pill.png'
import icon2 from '../../assets/musics.png'
import icon3 from '../../assets/grp.png'

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={pic1}  alt="program"/>
        <div className="caption">
            <img src={icon1} />
            <p>Party Drugs</p>
        </div>
      </div>
      <div className="program">
        <img src={pic2}  alt="program"/>
        <div className="caption">
            <img src={icon2} />
            <p>Lit Music</p>
        </div>
      </div>
      <div className="program">
        <img src={pic3}  alt="program"/>
        <div className="caption">
            <img src={icon3} />
            <p>Super Community</p>
        </div>
      </div>

    </div>
  );
};

export default Programs;
