import React from "react";
import "./services.css";

import SerIcon1 from "../../assets/Images/Services/General-Accounting.png";
import SerIcon2 from "../../assets/Images/Services/Account-Reconciliation.png";
import SerIcon3 from "../../assets/Images/Services/Financial-Statement-Preparation.png";
import SerIcon4 from "../../assets/Images/Services/Closing-Report.png";
import SerIcon5 from "../../assets/Images/Services/Fixed-Asset-Accounting.png";

const servicesData = [
  {
    id: 1,
    icon: SerIcon1,
    title: "General Accounting",
    desc: " Comprehensive management of daily financial transactions, including recording, classifying, and reconciling accounts.",
  },
  {
    id: 2,
    icon: SerIcon2,
    title: "Account Reconciliation",
    desc: " Regular reconciliation of bank accounts, credit cards, and other financial records to ensure accuracy and consistency in your books.",
  },
  {
    id: 3,
    icon: SerIcon3,
    title: "Financial Statement Preparation",
    desc: "Accurate preparation of balance sheets, income statements, and cash flow statements, providing clear insights into your financial position",
  },
  {
    id: 4,
    icon: SerIcon4,
    title: "Month-End & Year-End Closing Report",
    desc: "Thorough closing processes to finalize your financial records at the end of each month and fiscal year, ensuring proper reporting and tax compliance.",
  },
  {
    id: 5,
    icon: SerIcon5,
    title: "Fixed Asset Accounting",
    desc: "Managing and tracking depreciation, acquisitions, disposals, and other asset-related transactions",
  },
];
export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="team-detail-header">
          <h3>Our Services Include</h3>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-item">
              <div className="icon-wrapper">
                <span className="outer-circle"></span>
                <img src={service.icon} alt={service.title} />
              </div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
