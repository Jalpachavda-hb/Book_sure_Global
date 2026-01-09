import React from "react";
import { FaBullseye } from "react-icons/fa";
import "./Aboutus.css";

const Ourmission = () => {
  return (
    <>
      <section className="mission-section">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-4">
              <span className="subtitle">OUR MISSION</span>
              <h3 className="mission-title">
                To provide accurate, secure and cost-effective accounting
                solutions powered by global expertise
              </h3>
            </div>

            {/* RIGHT CARD */}
            <div className="col-lg-8">
              <div className="mission-card">
                <FaBullseye className="mission-icon_left" />
                <p>
                  At <strong>Book Sure Global</strong>,Our mission is to deliver
                  precise and compliant accounting services supported by
                  qualified professionals and strong global expertise. We focus
                  on safeguarding financial data and ensuring clarity at every
                  stage.
                </p>

                <p>
                  By offering secure, accurate and cost-effective solutions, we
                  enable businesses to scale confidently and stay compliant. Our
                  commitment is to enhance decision-making through reliable
                  financial reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-8">
              <div className="mission-card">
                <FaBullseye className="mission-icon_right" />
                <p>
                  At <strong>Book Sure Global</strong>,Our vision is to become a
                  trusted global partner in delivering accounting excellence and
                  financial clarity. We aspire to empower businesses with
                  accurate reporting, strategic insights and secure compliance,
                  enabling them to grow with confidence and transparency.
                </p>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="col-lg-4">
              <span className="subtitle">OUR VISION</span>
              <h3 className="mission-title">
                To be a trusted global partner for accounting excellence.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourmission;
