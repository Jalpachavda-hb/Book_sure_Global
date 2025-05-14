import React from "react";
// import './Home.css';
import "./Hero.css";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import shape from "../../assets/Images/hero-shape.svg";
import bgImage from "../../assets/Images/home-bg2.jpg";
import homefigma from "../../assets/Images/home_figma.png";
const About = () => {
  return (
    <>
     <nav className="navbar navbar-light" ></nav>
    <section    
      className="hero-equal-height  gradient-overlay"
      style={{
        background: `url(${bgImage}) no-repeat top center / cover`,
        
      }}
    >
    
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-6">
            <div className="hero-content-left  animated-content position-relative z-index text-white">
              <img
                src={homefigma}
                alt="home-figma"
                className="img-fluid home_img mb-5"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="hero-content-left position-relative z-index  text-white">
              <h1 className="text-white animated-content text-start">
                “Digitally Organize Your Files in Style”
              </h1>
              <p className="lead animated-content homecontain text-start">
                "Smart Box File is more than just a digital file organizer—it's
                a personal, customizable filing system that mirrors the classic
                box files you grew up with. Choose from a variety of traditional
                themes and effortlessly store, manage, and categorize your
                important documents. Stay organized while enjoying a modern
                twist on nostalgia."
              </p>
              <div className="hero-btns mt-4">
                <button className="btn solid-white-btn animated-down mr-lg-3 mb-5 ">
                  Exploar More
                  <span className="btn-icon">
                    <MdKeyboardDoubleArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-bottom">
        <img src={shape} alt="shape" className="bottom-shape img-fluid" />
      </div>
    </section>
    </>
  );
};

export default About;

