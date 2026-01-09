import React from "react";
import { FaCalendarCheck, FaFolderOpen } from "react-icons/fa";

import mainimg from "../../../assets/Images/Aboutus/service.jpg";
import ghraph from "../../../assets/Images/Aboutus/service-d-1-5.jpg";
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
                src={mainimg}
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
                src={ghraph}
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
             Professional Accounting, Payroll & Tax Support
            </span>

            <h1 className="discover fw-bold display-6  mb-3">
          Global Accounting Services
            </h1>

            <p className="text-secondary">
              Booksure Global is a professional accounting outsourcing firm
              delivering reliable bookkeeping, accounting, payroll and tax
              support services to growing businesses. Our team includes
              qualified Chartered Accountants and CPA Australia and other
              qualified professionals with strong global tax and compliance
              knowledge.
            </p>

            <p className="text-secondary">
              With a process-driven approach and a strong focus on accuracy,
              confidentiality and timely delivery, we help organisations
              maintain clean financial records, produce reliable reports and
              stay compliant with diverse regulatory frameworks. Our clients
              rely on us to manage their numbers with precision, allowing them
              to focus on building and scaling their business.
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
                    <p className="mb-0 text-muted">Data Security</p>
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
