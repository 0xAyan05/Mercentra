import React from "react";
import "./Programs.css";
import pic1 from '../../assets/shopify.jpg'
import pic2 from '../../assets/ads.jpg'
import pic3 from '../../assets/seo.jpg'
import icon1 from '../../assets/seos.png'
import icon2 from '../../assets/marketing.png'
import icon3 from '../../assets/megaphone.png'

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={pic1}  alt="program"/>
        <div className="caption">
            <img src={icon1} />
            <p>Shopify SEO & Content Marketing</p>
        </div>
      </div>
      <div className="program">
        <img src={pic2}  alt="program"/>
        <div className="caption">
            <img src={icon2} />
            <p>Paid Ads & Social Media Campaigns</p>
        </div>
      </div>
      <div className="program">
        <img src={pic3}  alt="program"/>
        <div className="caption">
            <img src={icon3} />
            <p> Conversion Rate Optimization & Retention</p>
        </div>
      </div>

    </div>
  );
};

export default Programs;
