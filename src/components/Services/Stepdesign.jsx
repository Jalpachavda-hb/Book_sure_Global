import React from "react";
import "./services.css";

// import SerIcon1 from "../../assets/Images/Services/General-Accounting.png";
// import SerIcon2 from "../../assets/Images/Services/Account-Reconciliation.png";
// import SerIcon3 from "../../assets/Images/Services/Financial-Statement-Preparation.png";
// import SerIcon4 from "../../assets/Images/Services/Closing-Report.png";
// import SerIcon5 from "../../assets/Images/Services/Fixed-Asset-Accounting.png";
import icon6 from "../../assets/Images/Services/pngtree-comic-style-workflow-process-icon-with-gear-cog-wheel-vector-png-image_48652004.jpg";
const servicesData = [
  {
    id: 1,
    icon: icon6,
    title: "Client Onboarding & Understanding",
    desc: "We collect business details, accounting software access, and compliance requirements to fully understand your operations and expectations",
  },
  {
    id: 2,
    icon: icon6,
    title: "Review & Setup",
    desc: "We review existing records, clean up issues if needed, and structure accounts properly as per regulatory and reporting standards",
  },
  {
    id: 3,
    icon: icon6,
    title: "Execution & Ongoing Management",
    desc: "We perform bookkeeping, reconciliations, accounting tasks, and closing processes on a regular basis as agreed",
  },
  {
    id: icon6,
    icon: icon6,
    title: "Reporting & Quality Control",
    desc: "We deliver accurate financial reports, conduct internal reviews, and ensure books are compliant and ready for audits or tax filing.",
  },
];
export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="associate-header">
          <h2>Our Process</h2>
          <p>Transparent & Efficient Process.</p>
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
