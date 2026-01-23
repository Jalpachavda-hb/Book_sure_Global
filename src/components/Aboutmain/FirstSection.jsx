import React from "react";
import "./Aboutus.css";
import ceo from "../../assets/Images/Aboutus/team.jpg";
import mainImg from "../../assets/Images/Aboutus/aboutf.jpg";
import starImg from "../../assets/Images/Aboutus/round.png";
import { FaPhoneVolume } from "react-icons/fa6";
import card from "../../assets/Images/Aboutus/98img.jpg";
const FirstSection = () => {
  return (
    <section className="about-section">
      {/* Decorative rotating image */}
      <img src={starImg} alt="decor" className="bg-star" />

      <div className="container">
        <div className="about-grid">
          {/* LEFT IMAGE */}
          <div className="about-image animate-up">
            <img src={mainImg} alt="Consulting" />

            {/* BADGE */}
            <div className="miniimg">
              <img src={card} alt="Consulting" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <span className="subtitle">ABOUT OUR COMPANY</span>

            <h1 className="mission-title">
              Providing Expert Advice On Business Consulting, Planning & Success
            </h1>

            <p className="about-text">
              Mauris ut enim sit amet lacus ornare ullamcorper. Praesent
              placerat neque eu purus rhoncus, vel tincidunt odio ultrices.
            </p>

            <div className="experience-wrapper">
              {/* LEFT CARD */}
              <div className="experience-card">
                <h2>25</h2>
                <div className="exp-text">
                  <span>YEARS</span>
                  <span>EXPERIENCE</span>
                  <span>IN CONSULTING</span>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="experience-divider"></div>

              {/* RIGHT LIST */}
              <ul className="experience-list">
                <li>
                  <span className="arrow">➜</span>
                  Business Growth
                </li>
                <li>
                  <span className="arrow">➜</span>
                  Analysis & Research
                </li>
                <li>
                  <span className="arrow">➜</span>
                  100% Secure
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-4 contact-wrapper mt-4">
              {/* LEFT – PROFILE */}
              <div className="d-flex align-items-center gap-3">
                <img
                  src={ceo}
                  alt="CEO"
                  className="rounded-circle"
                  width="55"
                  height="55"
                />

                <div>
                  <div className="signature-name">Martinaze.</div>
                  <div className="fw-semibold text-primary">Martinaze, CEO</div>
                </div>
              </div>

              {/* RIGHT – HOTLINE */}
              <div className="d-flex align-items-center gap-3">
                <div className="phone-icon">
                  <FaPhoneVolume />
                </div>

                <div>
                  <div className="text-muted small">Hot Line Number</div>
                  <a
                    href="tel:+1238989444"
                    className="fw-bold text-primary text-decoration-none"
                  >
                    +123 8989 444
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
