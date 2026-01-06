
import React from "react";

import heroImg from "../../assets/Images/Aboutus/banner3.webp"; // background image
import "./Aboutus.css";
import sign from "../../assets/Images/Aboutus/tjpc_logo.jpg";
const OurAssociate = () => {
  return (
    <section
      className="hero-finance mb-5"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="container position-relative">
        {/* CONTENT CARD */}
        <div className="hero-card">
          {/* LEFT BADGE */}

          

          {/* TEXT */}
          <div className="hero-content">
            {/* <span className="hero-subtitle">WE ARE EXPERT IN THIS FIELD</span> */}

            <h1 className="mission-title">OUR ASSOCIATE</h1>

            <p>
              Trupal J. Patel & Co., the backbone of Integrity, founded by
              Trupal Patel in 2003, is a leading Chartered Accountant firm. With
              over 20 years of expertise, they offer comprehensive financial and
              advisory services, including audit, taxation, and insolvency, to
              diverse industries. Their seasoned team delivers customized
              solutions, ensuring efficiency and precision. Committed to
              integrity and a client-first approach, they drive sustainable
              growth for businesses.
            </p>

            <div >
            <img className="ass_img" src={sign} alt="25 Years Experience" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAssociate;
