import ConsultationSection from "./ConsultationSection";
import Stepdesign from "../Services/Stepdesign";
import { FaCheckCircle } from "react-icons/fa";
import pageimg from "../../assets/Images/Services/accounting-removebg-preview.png";

const Accounting = () => {
  return (
    <>
      <section className="team-detail-page">
        <div className="container">
          {/* Header */}
          <div
            className="team-detail-header"
            style={{
              backgroundImage: `url(${require("../../assets/Images/Aboutus/flat-design-polygonal-background_23-2148901857.avif")})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
              backgroundSize: "cover",
            }}
          >
            <h1 className="mt-5">Accounting Services</h1>
            <span>Accounts Receivable & Accounts Payable</span>

            <p className="services-intro mt-5">
              We specialize in delivering precise and reliable accounting
              services tailored to your specific financial needs. Our team of
              experts ensures that all aspects of your accounting are handled
              with the utmost accuracy and attention to detail, allowing you to
              maintain financial clarity and compliance.
            </p>
          </div>

          {/* Payroll Section */}
          <section className="payroll-page">
            <div className="payroll-hero">
              {/* LEFT */}
              <div className="payroll-hero-content">
                <h2>
                  We Simplify Your Accounts Receivable
                  <span> & Payable Management</span>
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
                    <FaCheckCircle   style={{color: "#cc952b"}} /> Accurate and timely accounts receivable & payable processing
                  </li>
                  <li>
                    <FaCheckCircle  style={{color: "#cc952b"}} />Improved cash flow through proactive invoicing and collections
                  </li>
                  <li>
                    <FaCheckCircle  style={{color: "#cc952b"}} />On-time vendor payments and expense control
                  </li>
                  <li>
                    <FaCheckCircle  style={{color: "#cc952b"}} /> Secure handling of financial data with full transparency
                  </li>
                  <li>
                    <FaCheckCircle  style={{color: "#cc952b"}} /> Scalable AR/AP outsourcing support for growing businesses
                  </li>
                </ul>
              </div>

              {/* RIGHT */}
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

export default Accounting;
