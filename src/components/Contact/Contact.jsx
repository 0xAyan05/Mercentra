import React from "react";
import "./Contact.css";
import msg from "../../assets/msg.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import loc from "../../assets/loc.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg} alt="" />
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
            <img src={mail} alt="" />
            dwclinfo@dwc-legazpi.edu
          </li>
          <li>
            <img src={phone} />+63 52 742 7966{" "}
          </li>
          <li>
            {" "}
            <img src={loc} />Washington Drive, Legazpi City 4500 Philippines
          </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;
