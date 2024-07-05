import React from "react";
import "./Contact.css";
import smolcat from '../../assets/smolcat.png'
import sol from '../../assets/solana.jpg'
import tg from '../../assets/tg.png'
import pump from '../../assets/pump.jpg'
import xlogo from '../../assets/xlogo.png'
import whitearrow from '../../assets/whitearrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "93543694-cf04-473a-a36f-bbc375811a5a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={smolcat} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            {" "}
           
            <a href="https://t.me/+DVymnp7rTdxhYzBl?fbclid=IwZXh0bgNhZW0CMTEAAR2WTcFUDTM5tCZ7sKn0ESGkfvS6TGfIJL3_AJCX45hkLrOZvpUekvhUbIM_aem_MF9UKQ1oSwxMz9oZYoG2yw" target="_blank"> <img src={tg} alt="" /> </a>Cat in Rave Community
          </li>
          <li>
          <a href="https://x.com/ravecatdotsol?t=Zwj6yzpfkoGmfSRDSnxeUg&s=09&fbclid=IwZXh0bgNhZW0CMTEAAR1alV5cBSSa-_5cBxE_ZmGAMAwF4M3vmguQQXyKpo47FTJrGtRXfQU1p3U_aem_WDITNB4LSNAOmhSOUQ3DmA"> <img src={xlogo} alt="" /></a>Follow us on X
          </li>
          <li>
            {" "}
            <img src={sol} />
            Powered By SOLANA
          </li>
          <li>
            {" "}
            <img src={pump} />
            Partnered With PUMP
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn col-btn">
            Submit Now <img src={whitearrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
