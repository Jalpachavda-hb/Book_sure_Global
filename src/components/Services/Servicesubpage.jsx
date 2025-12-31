import React from "react";
import Stepdesign from "./Stepdesign";
import Faq from "../Contactus/Faq";

import accountingImg from "../../assets/Images/Services/Account-ser.jpg";
const Servicesubpage = () => {
  return (
    <>
      <section className="team-detail-page">
        <div className="container">
          {/* Header */}
          <div className="team-detail-header">
            <h1>Accounting Services</h1>
            <span>FINANCIAL & ACCOUNTING SERVICES</span>

            <p className="services-intro mt-5">
              We specialize in delivering precise and reliable accounting
              services tailored to your specific financial needs. Our team of
              experts ensures that all aspects of your accounting are handled
              with the utmost accuracy and attention to detail, allowing you to
              maintain financial clarity and compliance.
            </p>
          </div>

          <Stepdesign />
          <section className="accounting-cta">
            <div className="container">
              <div className="cta-grid">
                {/* LEFT CONTENT */}
                <div className="cta-content">
                  <p className="cta-text">
                    <strong>Integrity Data Services</strong> commits to deliver
                    precise accounting services that streamline your financial
                    operations and help you maintain a solid foundation for
                    decision-making.
                  </p>

                  <p className="cta-subtext">
                    <strong>Get in touch today</strong> to discuss how our
                    accounting services can benefit your business.
                  </p>

                  <button className="cta-btn">Get in Touch!</button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="cta-image">
                  <img src={accountingImg} alt="Accounting Services" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Servicesubpage;
