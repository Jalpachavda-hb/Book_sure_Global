import React from "react";
import "./Contact.css";

const Faq = () => {
  return (
    <section className="faq-section py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="faq-subtitle">◀ OUR FAQ US ▶</span>
          <h2 className="faq-title mt-3">
            Most Asked Questions How Can <br />
            I contact Customer Support?
          </h2>
        </div>

        <div className="row g-4">
          {/* LEFT COLUMN */}
          <div className="col-lg-6">
            <div className="accordion" id="faqLeft">

              {[
                {
                  id: "faq1",
                  q: "What Is A Business Plan & Why Is It Important?",
                  a: "A business plan outlines your company’s goals, financial projections, and growth strategy. For a CA firm, it helps clients plan compliance, taxation, and long-term financial stability effectively."
                },
                {
                  id: "faq2",
                  q: "How Often Should I Inspect My Business Accounts?",
                  a: "Monthly and quarterly reviews are recommended. Regular inspection helps ensure GST filings, income tax returns, and audits are accurate and compliant."
                },
                {
                  id: "faq3",
                  q: "How Do I Register My Business?",
                  a: "A CA firm assists with company incorporation, GST registration, PAN/TAN application, and statutory registrations based on your business type."
                },
                {
                  id: "faq4",
                  q: "How Do I Create A Marketing Strategy?",
                  a: "A strong marketing strategy includes budgeting, tax-saving promotions, financial planning, and growth forecasting aligned with your business goals."
                }
              ].map((item, index) => (
                <div className="faq-item" key={item.id}>
                  <button
                    className="faq-question collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.id}`}
                  >
                    <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="faq-text">{item.q}</span>
                  </button>

                  <div
                    id={item.id}
                    className={`collapse ${index === 0 ? "show" : ""} faq-answer`}
                    data-bs-parent="#faqLeft"
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6">
            <div className="accordion" id="faqRight">

              {[
                {
                  id: "faq5",
                  q: "Why Hire A Chartered Accountant?",
                  a: "Hiring a CA ensures legal compliance, optimized taxation, accurate audits, and expert financial guidance for individuals and businesses."
                },
                {
                  id: "faq6",
                  q: "How To Plan A Budget?",
                  a: "Budget planning involves income analysis, expense control, tax-saving investments, and long-term financial planning advised by a CA firm."
                },
                {
                  id: "faq7",
                  q: "Ways To Grow A Business?",
                  a: "Business growth includes financial restructuring, investment planning, tax optimization, and compliance management with CA expertise."
                },
                {
                  id: "faq8",
                  q: "How Can I Contact Customer Support?",
                  a: "You can contact our CA firm via phone, email, or office visit. Our support team is available Monday–Saturday to assist with taxation, audits, and financial consultation."
                }
              ].map((item, index) => (
                <div className="faq-item" key={item.id}>
                  <button
                    className="faq-question collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.id}`}
                  >
                    <span className="faq-number">{String(index + 5).padStart(2, "0")}</span>
                    <span className="faq-text">{item.q}</span>
                  </button>

                  <div
                    id={item.id}
                    className="collapse faq-answer"
                    data-bs-parent="#faqRight"
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
