import React from "react";
import { FaCalendarCheck, FaFolderOpen } from "react-icons/fa";

import doctor from "../../../assets/Images/Aboutus/service.jpg";
import laptop from "../../../assets/Images/Aboutus/service-d-1-5.jpg";
import bgpara from "../../../assets/Images/Aboutus/bgimageabout.webp";
import shape from "../../../assets/Images/Aboutus/h4_banner_shape02.webp";

import "./About.css";

export default function About() {
  return (
    <section className="py-5 py-lg-5 bg-white position-relative overflow-hidden container">
      {/* === Decorative Backgrounds (desktop only) === */}
      <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block pointer-events-none">
        <div
          className="position-absolute animate-float"
          style={{ bottom: "150px", left: "20px", width: "100px" }}
        >
          <img src={bgpara} alt="Background pattern" className="img-fluid" />
        </div>

        <div
          className="position-absolute"
          style={{ top: "40px", left: "450px", width: "150px" }}
        >
          <img src={shape} alt="Decorative shape" className="img-fluid" />
        </div>
      </div>

      {/* === Main Content === */}
      <div className="container px-3 px-sm-4 px-lg-5">
        <div className="row align-items-center g-5">
          {/* === LEFT IMAGE SECTION === */}
          <div className="col-lg-6 order-2 order-lg-1 d-flex justify-content-center justify-content-lg-start position-relative">
            {/* Doctor Image */}
            <div
              className="overflow-hidden shadow"
              style={{
                width: "450px",
                maxWidth: "100%",
                borderTopLeftRadius: "120px",
              }}
            >
              <img
                src={doctor}
                alt="Doctor at desk"
                className="img-fluid w-100"
              />
            </div>

            {/* Laptop Image (hide below md) */}
            <div
              className="d-none d-md-block position-absolute shadow border border-white"
              style={{
                bottom: "-60px",
                right: "0",
                width: "250px",
                borderTopRightRadius: "20px",
                borderWidth: "10px",
                zIndex: 10,
              }}
            >
              <img
                src={laptop}
                alt="Laptop analytics"
                className="img-fluid w-100"
              />
            </div>

            {/* Experience Box */}
            <div
              className="position-absolute text-white shadow"
              style={{
                bottom: "-100px",
                left: "-50px",
                backgroundColor: "#CC952B",
                borderTopLeftRadius: "25px",
                padding: "24px",
                width: "450px",
                maxWidth: "100%",
                zIndex: 0,
              }}
            >
              <h3 className="fw-bold display-6 mb-1">25</h3>
              <p className="small mb-0">
                Years of Expertise in <br /> Revenue Cycle Management
              </p>
            </div>
          </div>

          {/* === RIGHT SIDE TEXT === */}
          <div className="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
            <span className="sub-title text-uppercase fw-semibold small bg-light px-3 px-sm-4 py-1 rounded-pill d-inline-block mb-3">
              Pioneers in Innovative Solutions and Business Support
            </span>

            <h2 className="discover fw-bold display-6  mb-3">
              Discover Integrity Data Services
            </h2>

            <p className="text-secondary">
              Integrity Data Services is a trusted outsourcing and offshore
              staffing consulting firm, founded by industry professionals with
              over 25 years of experience in delivering high-quality financial,
              accounting, taxation, corporate research, and back-office support
              services.
            </p>

            <p className="text-secondary">
              We partner with businesses across the globe to streamline
              operations, reduce costs, and enhance productivity through
              reliable, scalable, and technology-driven solutions. Our team
              combines deep domain knowledge with modern tools to ensure
              accuracy, compliance, and efficiency at every stage of service
              delivery.
            </p>

            {/* === Stats Row === */}
            <div className="row g-4 mt-4 justify-content-center justify-content-lg-start">
              <div className="col-sm-6">
                <div className="d-flex align-items-center justify-content-center justify-content-sm-start gap-3 p-4 border rounded-3 bg-light">
                  <FaCalendarCheck size={32} color="#CC952B" />
                  <div>
                    <h4 className="fw-bold mb-0">25+</h4>
                    <p className="mb-0 text-muted">Years of Experience</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center justify-content-center justify-content-sm-start gap-3 p-4 border rounded-3 bg-light">
                  <FaFolderOpen size={32} color="#CC952B" />
                  <div>
                    <h4 className="fw-bold mb-0">100%</h4>
                    <p className="mb-0 text-muted">
                      Data Security 
                    </p>
                    <p className="mb-0 text-muted"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
