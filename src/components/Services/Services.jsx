// import React from "react";
// import PageBanner from "../PageBanner/PageBanner";
// import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
// import Testimonial from "../../components/home/Testimonial";
// import Servicedatasection from "./Servicedatasection";
// const Services = () => {
//   return (
//     <div>
//       <PageBanner title="Services" bgImage={bannerImg} />
//       <Servicedatasection />
//       <Testimonial />
//     </div>
//   );
// };

// export default Services;

import  { useState } from "react";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
// import Testimonial from "../../components/home/Testimonial";
import { FaCalculator } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import "./services.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const servicesData = [
  {
    id: 1,
    slug: "bookkeeping",
    icon: <FaBookAtlas />,
    title: "Bookkeeping Services",
    description:
      "Accurate, organised and audit-ready books — every period, without stress.",
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
    slug: "accounting",
    icon: <FaCalculator />,
    title: "Accounting Services",
    description:
      "End-to-end accounting support to keep your financial records accurate and compliant.",
    features: [
      "Financial Statements",
      "Profit & Loss Reports",
      "Accrual Accounting",
      "Ledger Review",
      "Audit-Ready Schedules",
      "CPA Coordination",
    ],
  },
];

const Services = () => {
  const [_active, setActive] = useState(1);

  const scrollToSection = (slug, id) => {
    setActive(id);

    const element = document.getElementById(slug);
    if (!element) return;

    const navbar = document.querySelector(".main-navbar"); // your fixed navbar
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = elementPosition - navbarHeight - 20; // extra spacing

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <PageBanner title="Services" bgImage={bannerImg} />

      {/* ================= MAIN SERVICE TABS ================= */}
      <section
        className="split-services-section"
        style={{
          backgroundImage: `url(${require("../../assets/Images/Services/about_shape02.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="split-overlay">
          <div className="container">
            {/* HEADER */}
            <div className=" mb-5 hero-content-left animated-content position-relative z-index text-white mb-4">
              <h3 className="page-tital mt-1">Our Services</h3>
              <p className="contain-colur">“What We Provide”</p>
            </div>

            {/* SERVICES */}
            <div className="split-services-grid mt-5">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  className={`split-item ${index % 2 === 0 ? "left" : "right"}`}
                  onClick={() => scrollToSection(service.slug, service.id)}
                >
                  <div className="split-icon">{service.icon}</div>

                  <div className="split-content ">
                    <h4>{service.title}</h4>
                    <span className="split-line"></span>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILS SECTION ================= */}
      <section className="service-details">
        <div className="container">
          {servicesData.map((service) => (
            <div key={service.id} id={service.slug} className="service-block">
              <h2 className="service-heading">{service.title}</h2>
              <p className="service-desc">{service.description}</p>

              <div className="service-card-grid">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="service-card-new"
                    // onClick={() => goToFeaturePage(service.slug, feature)}
                  >
                    <div className="card-icon-new">{service.icon}</div>

                    <h4 className="card-title">{feature}</h4>

                    <p className="card-text">
                      Professional {feature.toLowerCase()} support tailored to
                      your business needs.
                    </p>

                    <div className="card-footer">
                      <span className="line"></span>
                      <Link to="/services/detail" className="more">
                        Find out more
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
