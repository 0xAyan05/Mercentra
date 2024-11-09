import React from "react";
import "./Contact.css";
import cart from "../../assets/cart.png";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import whitearrow from "../../assets/whitearrow.png";

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
          Send us a message <img src={cart} alt="" />
        </h3>
        <p>
          Have questions, feedback, or need more information? Reach out to us
          through the contact form or find our contact details below. We're here
          to help with any inquiries and look forward to supporting your
          business growth with effective digital marketing and eCommerce
          solutions. Your success is our priority, and we’re excited to be part
          of your journey.
        </p>
        <ul>
          <li>
            {" "}
            <a
              href="https://www.instagram.com/mercentra.group/"
              target="_blank"
            >
              {" "}
              <img src={ig} alt="" />{" "}
            </a>
            Instagram
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61567940548953"
              target="_blank"
            >
              {" "}
              <img src={fb} alt="" />
            </a>
            Follow us on Facebook
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
