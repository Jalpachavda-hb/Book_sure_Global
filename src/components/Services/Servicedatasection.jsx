import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./services.css";
import Serimg1 from "../../assets/Images/Aboutus/services1.jpg";
import Serimg2 from "../../assets/Images/Aboutus/Serimg2.jpg";
import Serimg3 from "../../assets/Images/Aboutus/serimg3.jpeg";
import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaCalculator, FaCogs } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { FaBookAtlas } from "react-icons/fa6";
const Servicedata = [
  {
    id: 1,
    icon: <FaBookAtlas />,
    title: "Bookkeeping Services",
    description:
      "Accurate, organised and audit-ready books — every period, without stress.",

    image: Serimg1,
    features: [
      "Ongoing Bookkeeping",
      "Cleanup Bookkeeping",
      "Catch-Up Bookkeeping",
      "Reconciliations",
      "AR & AP Support",
      "Chart of Accounts Optimization",
    ],
  },
  {
    id: 2,
    icon: <FaCalculator />,
    title: "Accounting Services",
    description:
      "We provide end-to-end accounting support to keep your financial records accurate, compliant and report-ready.",
    image: Serimg2,
    features: [
      "Monthly, quarterly & annual financial statements",
      "Profit & Loss, Balance Sheet & Cash Flow reports",
      "Accrual accounting & period-end adjustments",
      "Ledger review, reconciliations & error correction",
      "Management reports & performance analysis",
      "Year-end closing & audit-ready schedules",
      "Coordination with your external CPA or tax advisor",
    ],
  },
  {
    id: 3,
    icon: <FaCogs />,
    title: "Payroll Processing Services",
    description:
      "We manage your payroll accurately and on time, ensuring smooth salary processing and compliance support.",
    image: Serimg3,
    features: [
      "Payroll calculation & processing",
      "Payslip preparation",
      "Payroll journal entries",
      "Statutory deduction tracking",
    ],
  },

  {
    id: 4,
    icon: <MdOutlineSupport />,
    title: "Tax Support Services",
    description:
      "We prepare your financial data in line with diverse regulatory frameworks so your tax filings remain accurate across different compliance environments.",
    image: Serimg3,
    features: [
      "Tax-ready financial statements",
      "Indirect tax reconciliation support (VAT / GST / sales tax equivalents)",
      "Preparation of jurisdiction-specific tax schedules",
      "Multi-compliance reporting assistance",
      "Coordination with your external tax advisor or CPA",
    ],
  },
];

const Servicedatasection = () => {
  const [active, setActive] = useState(1); // Default active: Fire Insurance

  const currentData = Servicedata.find((item) => item.id === active);
  return (
    <>
      <section className="insurance-section">
        <div className="container">
          <div className="hero-content-left animated-content position-relative z-index text-white mb-4">
            <h3 className="page-tital mt-1">Our Services</h3>
            <p className="contain-colur">“What We Provide”</p>
          </div>
          <div className="insurance-wrapper">
            <div className="tabs">
              {Servicedata.map((item) => (
                <div
                  key={item.id}
                  className={`tab-item mb-1 ${
                    active === item.id ? "active" : ""
                  }`}
                  onClick={() => setActive(item.id)}
                >
                  <span className="tab-icon">{item.icon}</span>
                  <span>{item.title}</span>
                  <FaArrowRight />
                </div>
              ))}
            </div>

            <div className="content">
              <div className="image-wrapper">
                <img
                  src={currentData.image}
                  alt={currentData.title}
                  className="hover-shadow"
                />
              </div>
              <div className="text-content ">
                <h3>{currentData.title}</h3>
                <p>{currentData.description}</p>
                <ul className="feature-list">
                  {currentData.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <Link
                        to={`/services/details`}
                        state={{ feature, service: currentData.title }}
                        className="feature-link"
                      >
                        <span className="icon">
                          <FiLink />
                        </span>
                        {feature}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicedatasection;
