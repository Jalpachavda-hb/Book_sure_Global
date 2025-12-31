import React from "react";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <PageBanner title="Pricing Plan" bgImage={bannerImg} />

      <section className="pricing-section py-5">
        <div className="container">
          {/* <div className="text-center mb-5">
            <h2 className="fw-bold titlecolor">Our Pricing Models</h2>
            <p className="text-muted">
              Flexible pricing options tailored to your business needs
            </p>
          </div> */}
              <div className="hero-content-left animated-content position-relative z-index text-white mb-4">
           {/* <span className="section-tag">Leadership</span> */}
            <h3 className="page-tital mt-1">Our Pricing Models</h3>
            <p className="contain-colur">“  Flexible pricing options tailored to your business needs”</p>
          </div>

          <div className="row g-4 mt-5">
            {/* Pay As You Go */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card">
                <h5>Pay As You Go</h5>
                <p className="text-muted">
                  Ideal for short-term or flexible support
                </p>

                <ul className="list-unstyled mt-4">
                  <li>✔ Flexible Hours – Work as needed</li>
                  <li>✔ No Commitment – Pay only for used hours</li>
                  <li>✔ Scalable – Adjust usage anytime</li>
                </ul>

                <button className="btn btnplan w-100">
                  Get Started
                </button>
              </div>
            </div>

            {/* Monthly Plan */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card featured">
                <span className="popular-badge">Most Popular</span>

                <h5>Monthly Plan</h5>
                <p className="text-muted">
                  Dedicated support with predictable cost
                </p>

                <p className="mb-1">
                  <strong>Full-Time:</strong> 8 hrs/day
                </p>
                <p className="mb-3">
                  <strong>Part-Time:</strong> 4 hrs/day
                </p>

                <ul className="list-unstyled">
                  <li>✔ Dedicated Support Team</li>
                  <li>✔ Fixed Monthly Cost</li>
                  <li>✔ Consistent Workflow</li>
                </ul>

                <button className="btn btnplan gold w-100">
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Project Based */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card">
                <h5>Project Based</h5>
                <p className="text-muted">
                  Best suited for defined projects
                </p>

                <ul className="list-unstyled mt-4">
                  <li>✔ Tailored to Your Needs</li>
                  <li>✔ Defined Timeline</li>
                  <li>✔ Goal-Oriented Execution</li>
                </ul>

                <button className="btn btnplan w-100">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
