import React from "react";
import "./Contact.css";

const Expert = () => {
  return (
    <section className="experts-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <span className="experts-badge">
              Trusted Industry Professionals
            </span>

            <h2 className="experts-title mt-3">
              Get Assistance from a <br />
              <span>Team of Industry Experts</span>
            </h2>

            <p className="experts-desc mt-4">
              Integrity Data Services Pvt. Ltd. is a leading offshore
              outsourcing firm offering a wide range of professional financial
              services, including Accounting, Bookkeeping, Tax Preparation,
              Bankruptcy Support, Back-Office Support, and Corporate Research.
              <br />
              <br />
              We are committed to delivering reliable, efficient, and
              high-quality solutions that help businesses streamline operations
              and achieve sustainable growth.
            </p>

            <div className="experts-actions mt-4">
              <button className="btn btn-experts-primary">
                Get Free Consultation
              </button>

              <button className="btn btn-experts-outline">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expert;
