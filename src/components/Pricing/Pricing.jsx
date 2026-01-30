import React from "react";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import "./Pricing.css";
import InquiryForm from "./InquiryForm";

// Decorative Images
import shapeTop from "../../assets/Images/Services/blog_shape01.png";
import shapeBottom from "../../assets/Images/Services/blog_shape02.png";

const Pricing = () => {
  return (
    <>
      <PageBanner title="Pricing Plan" bgImage={bannerImg} />

      <section className="pricing-section-new">
        <img src={shapeTop} alt="shape" className="pricing-shape top-shape" />
        <img
          src={shapeBottom}
          alt="shape"
          className="pricing-shape bottom-shape"
        />

        <div className="container">
          {/* ✅ Heading */}
          <div className="pricing-heading text-center">
            <span className="pricing-tag">FLEXIBLE PRICING PLAN</span>
            <h2>
              We’ve Offered The Best <br /> Pricing For You
            </h2>
          </div>

          {/* ✅ Cards */}
          <div className="row justify-content-center g-4 mt-5">
            {/* ✅ Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card-ui">
                <span className="plan-label">PAY AS YOU GO</span>

                <h3 className="price">
                  $15.00 <span>/ Month</span>
                </h3>

                {/* ✅ Real Data */}
                <ul>
                  <li>
                    ✔ <strong>Flexible Hours</strong> – Engage our team only
                    when required, with no minimum commitment.
                  </li>
                  <li>
                    ✔ <strong>No Long-Term Obligation</strong> – Pay strictly
                    for the hours utilised.
                  </li>
                  <li>
                    ✔ <strong>Scalable Usage</strong> – Easily increase or
                    reduce support based on your workload.
                  </li>
                </ul>

                {/* ✅ Contact Line */}
                <p className="pricing-contact">
                  <strong>Contact us now for further enquiry.</strong>
                </p>

                {/* ✅ Button Same */}
                <button className="pricing-btn">GET THIS PLAN NOW →</button>
              </div>
            </div>

            {/* ✅ Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card-ui active">
                <span className="plan-label">MONTHLY PLAN</span>

                <h3 className="price">
                  $29.00 <span>/ Month</span>
                </h3>

                {/* ✅ Real Data */}
                <ul>
                  <li>
                    ✔ <strong>Dedicated Resources</strong> – Assigned
                    professionals working exclusively on your tasks.
                  </li>
                  <li>
                    ✔ <strong>Fixed Monthly Cost</strong> – Predictable
                    budgeting with transparent pricing.
                  </li>
                  <li>
                    ✔ <strong>Workflow Continuity</strong> – Consistent support
                    ensuring uninterrupted operations.
                  </li>
                </ul>

                {/* ✅ Contact Line */}
                <p className="pricing-contact">
                  <strong>Contact us now for further enquiry.</strong>
                </p>

                {/* ✅ Button Same */}
                <button className="pricing-btn active-btn">
                  GET THIS PLAN NOW →
                </button>
              </div>
            </div>

            {/* ✅ Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card-ui">
                <span className="plan-label">PROJECT BASED</span>

                <h3 className="price">
                  $89.00 <span>/ Month</span>
                </h3>

                {/* ✅ Real Data */}
                <ul>
                  <li>
                    ✔ <strong>Customized Scope</strong> – Services and pricing
                    aligned with your specific project needs.
                  </li>
                  <li>
                    ✔ <strong>Defined Timelines</strong> – Work delivered within
                    mutually agreed schedules.
                  </li>
                  <li>
                    ✔ <strong>Outcome Driven</strong> – Focused on achieving
                    clearly defined objectives and deliverables.
                  </li>
                </ul>

                {/* ✅ Contact Line */}
                <p className="pricing-contact">
                  <strong>Contact us now for further enquiry.</strong>
                </p>

                {/* ✅ Button Same */}
                <button className="pricing-btn">GET THIS PLAN NOW →</button>
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
