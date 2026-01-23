import React from "react";
import ConsultationSection from "./ConsultationSection";
import Stepdesign from "../Services/Stepdesign";
import { FaCheckCircle } from "react-icons/fa";
import pageimg from "../../assets/Images/Services/innerpageserv.png";

const Bookkeeping = () => {
  return (
    <>
      <section className="team-detail-page">
        <div className="container">
          {/* Header */}
          <div
            className="team-detail-header"
            style={{
              backgroundImage: `url(${require("../../assets/Images/contactmain.jpg")})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
              backgroundSize: "cover",
            }}
          >
            <h1 className="mt-5">BookKeeping Services</h1>
            <span>FINANCIAL &BOOKKEEPING SERVICES</span>

            <p className="services-intro mt-5">
              We specialize in delivering precise and reliable accounting
              services tailored to your specific financial needs. Our team of
              experts ensures that all aspects of your accounting are handled
              with the utmost accuracy and attention to detail, allowing you to
              maintain financial clarity and compliance.
            </p>
          </div>
          <section className="payroll-page">
            <div className="payroll-hero">
              {/* LEFT CONTENT */}
              <div className="payroll-hero-content">
                <h2>
                  Outsourced Payroll Services That Are
                  <span> Accurate, Compliant & Scalable</span>
                </h2>

                <p>
                  Our payroll outsourcing services help businesses manage
                  payroll accurately and compliantly without the administrative
                  burden or compliance risk. Our experienced payroll
                  professionals handle everything from employee onboarding to
                  statutory filings.
                </p>

                <p>
                  Whether you operate in <strong>Australia, USA</strong> or
                  across multiple regions, we deliver secure and scalable
                  payroll solutions tailored to your business needs.
                </p>

                <ul className="hero-points">
                  <li>
                    <FaCheckCircle style={{ color: "#cc952b" }} /> End-to-end
                    payroll outsourcing services
                  </li>
                  <li>
                    <FaCheckCircle style={{ color: "#cc952b" }} /> Compliance
                    with US, Australian & regional laws
                  </li>
                  <li>
                    <FaCheckCircle style={{ color: "#cc952b" }} /> Experienced
                    payroll specialists
                  </li>
                  <li>
                    <FaCheckCircle style={{ color: "#cc952b" }} /> Seamless
                    payroll & accounting integration
                  </li>
                  <li>
                    <FaCheckCircle style={{ color: "#cc952b" }} /> Transparent
                    pricing with predictable costs
                  </li>
                </ul>
              </div>

              {/* RIGHT VISUAL */}
              <div className="payroll-hero-visual">
                <img
                  src={pageimg}
                  alt="Payroll service illustration"
                  className="service-hero-image"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
      <Stepdesign />
      <ConsultationSection />
    </>
  );
};

export default Bookkeeping;
