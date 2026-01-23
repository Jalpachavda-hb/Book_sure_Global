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
    title: "Schedule Your Payroll Consultation",
    desc: "Share your payroll frequency, team size, and system requirements.",
  },
  {
    id: 2,
    icon: SerIcon2,
    title: "Payroll Review & Compliance Setup",
    desc: "We assess compliance needs, workflows, and payroll regulations relevant to your region.",
  },
  {
    id: 3,
    icon: SerIcon3,
    title: "We set it up for you",
    desc: "Your payroll is managed by dedicated specialists for smooth, ongoing processing.",
  },

];
export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="team-detail-header">
          <h3>Accounting Services Process</h3>
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
