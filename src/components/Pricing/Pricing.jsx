import React from "react";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import "./Pricing.css";
import InquiryForm from "./InquiryForm";
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
            <p className="contain-colur">
              “ Flexible pricing options tailored to your business needs”
            </p>
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
                  <li>
                    ✔ <strong>Flexible Hours </strong> – Engage our team only
                    when required, with no minimum commitment
                  </li>
                  <li>
                    ✔ <strong>No Long-Term Obligation </strong> – Pay strictly
                    for the hours utilised.
                  </li>
                  <li>
                    ✔ <strong>Scalable Usage </strong> – Easily increase or
                    reduce support based on your workload.
                  </li>
                </ul>

                <button className="btn btnplan w-100">Get Started</button>
              </div>
            </div>

            {/* Monthly Plan */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card featured">
                <span className="popular-badge">Most Popular</span>

                <h5>Monthly retainer basis</h5>
                <p className="text-muted">
                  Dedicated support with predictable cost
                </p>

                <p className="mb-1">
                  ✔ <strong>Dedicated Resources </strong> Assigned professionals
                  working exclusively on your tasks.
                </p>
                <p className="mb-3">
                  ✔ <strong>Fixed Monthly Cost</strong> Predictable budgeting
                  with transparent pricing
                </p>
                <p className="mb-3">
                  ✔ <strong>Workflow Continuity</strong> Consistent support
                  ensuring uninterrupted operations.
                </p>

                <button className="btn btnplan gold w-100">Choose Plan</button>
              </div>
            </div>

            {/* Project Based */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card">
                <h5>Project based</h5>
                <p className="text-muted">Best suited for defined projects</p>

                <p className="mb-1">
                  ✔ <strong>Customized Scope</strong>Services and pricing
                  aligned with your specific project needs.
                </p>
                <p className="mb-1">
                  ✔ <strong>Defined Timelines </strong> Work delivered within
                  mutually agreed schedules
                </p>
                <p className="mb-1">
                  ✔ <strong>Outcome Driven </strong> Focused on achieving
                  clearly defined objectives and deliverables.
                </p>

                <button className="btn btnplan w-100">Request Quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InquiryForm />
    </>
  );  
};

export default Pricing;
