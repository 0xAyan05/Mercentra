import React, { useRef } from "react";
import "./Testimonials.css";
import next_right from "../../assets/whitearrow.png";
import next_left from "../../assets/backarrow.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/u3.jpg";
import user4 from "../../assets/u4.jpg";

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }



  return (
    <div className="testimonials">
      <img src={next_right} className="next-btn" onClick={slideForward}/>
      <img src={next_left} className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} />
                <div>
                  <h3>Emerson Oliva</h3>
                  <span>Masbate, Philippines</span>
                </div>
              </div>
              <p>
                Choosing to puruse my degree at Divine Word College of Legazpi
                was one of the best decisions i've ever made. The supportive
                community, excellence have try exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} />
                <div>
                  <h3>Karen Joy Ligaya</h3>
                  <span>Gabarone,Botswana</span>
                </div>
              </div>
              <p>
                The environment were very good for me enabling me to showcase my
                talent and skills. The faculty was really good at teaching and
                also the institution itself is very competitive.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} />
                <div>
                  <h3>Manuel</h3>
                  <span>Masbate, Philippines</span>
                </div>
              </div>
              <p>
                Choosing to puruse my degree at Divine Word College of Legazpi
                was one of the best decisions i've ever made because it gives me
                energy and motivation for me to become a better version.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} />
                <div>
                  <h3>Mark Angelo Salle</h3>
                  <span>Washington, Albay</span>
                </div>
              </div>
              <p>
                I choose DWCL because this institution has a great reputation in
                producing quality graduates that is worldy competitive. DWCL one
                of the prominent school or institution here in province of
                albay.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
