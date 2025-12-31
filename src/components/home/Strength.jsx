import React from "react";
import "./Hero.css";
import teamImg from "../../assets/Images/Aboutus/service.jpg";
import dotsImg from "../../assets/Images/Aboutus/bgimageabout.webp";

import { BsClockHistory } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { FaChartBar, FaHandsHelping } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
const Strength = () => {
  return (
    <section className="why-choose-area">
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* TITLE */}
          <div className="hero-content-left animated-content position-relative z-index text-white mb-4">
            <h3 className="page-tital mt-1">Why Choose Us</h3>
            <p className="contain-colur">“EXPERIENCE THE DIFFERENCE”</p>
          </div>

          {/* LEFT IMAGE */}
          <div className="col-lg-5 mt-4">
            <div className="image-wrapper">
              <img src={teamImg} alt="Team" className="team-img" />

              <img
                src={dotsImg}
                alt="dots"
                className="dots-img dots-left"
                height={100}
              />
              <img
                src={dotsImg}
                alt="dots"
                className="dots-img dots-right"
                height={100}
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7">
            <div className="strength-content">
              <h2 className="strength-heading">
                Your Trusted Partner for <span>Smarter Growth</span>
              </h2>

              <p className="strength-text">
                We are more than just another billing service. Advanta-Wise is
                your dedicated partner in financial success. With years of
                hands-on experience across healthcare organizations of all
                sizes, we help you overcome operational challenges, improve
                efficiency, and drive consistent growth.
              </p>

              {/* HIGHLIGHT POINTS */}
              <ul className="strength-list">
                <li>
                  <FaCheckCircle /> Industry-compliant processes with proven
                  results
                </li>
                <li>
                  <FaCheckCircle /> Scalable outsourcing tailored to your
                  business needs
                </li>
                <li>
                  <FaCheckCircle /> Technology-driven insights for smarter
                  decisions
                </li>
                <li>
                  <FaCheckCircle /> Dedicated teams focused on long-term success
                </li>
              </ul>

              {/* STATS */}
              <div className="strength-stats">
                <div>
                  <h4>25+</h4>
                  <span>Years Experience</span>
                </div>
                <div>
                  <h4>99%</h4>
                  <span>Client Satisfaction</span>
                </div>
                <div>
                  <h4>24/7</h4>
                  <span>Operational Support</span>
                </div>
              </div>

              {/* CTA */}
              <button className="btn  strength-btn">Get Started With Us</button>
            </div>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="row g-4 justify-content-center strength-cards">
          <div className="col-lg-3 col-md-6">
            <div className="strength-card">
              <div className="icon-wrap">
                <BsClockHistory className="icon" />
              </div>
              <h5>Deep Industry Expertise</h5>
              <p>
                Our team includes certified coders, experienced billers, AR
                specialists, and revenue cycle consultants who understand U.S.
                healthcare billing and compliance.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="strength-card">
              <div className="icon-wrap">
                <FaChartLine className="icon" />
              </div>
              <h5>Tailored Solutions</h5>
              <p>
                Every healthcare provider has different needs. We develop
                customized strategies aligned with your specific goals.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="strength-card">
              <div className="icon-wrap">
                <FaChartBar className="icon" />
              </div>
              <h5>Actionable Insights</h5>
              <p>
                We don’t just tell you what’s wrong — we provide clear insights
                that help you make better decisions.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="strength-card">
              <div className="icon-wrap">
                <FaHandsHelping className="icon" />
              </div>
              <h5>Proactive Support</h5>
              <p>
                We go beyond problem-solving by identifying opportunities for
                improvement and providing proactive solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strength;
