

import React from "react";
import { FaBullseye } from "react-icons/fa";
import "./Aboutus.css";

const Ourmission = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-4">
            <span className="subtitle">OUR MISSION</span>
            <h2 className="mission-title">
              Empowering Growth <br />
              Through Trusted <br />
              Partnerships
            </h2>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-8">
            <div className="mission-card">
              <FaBullseye className="mission-icon" />
              <p>
                At <strong>Integrity Data Services</strong>, our mission is to
                deliver reliable, high-quality Knowledge Process Outsourcing
                solutions that help businesses operate smarter and grow faster.
              </p>

              <p>
                We focus on building long-term partnerships rooted in trust,
                transparency, and innovation—ensuring our clients always have a
                dependable partner driving their success forward.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ourmission;
