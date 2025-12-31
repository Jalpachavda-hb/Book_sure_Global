import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./services.css";
import Serimg1 from "../../assets/Images/Aboutus/services1.jpg";
import Serimg2 from "../../assets/Images/Aboutus/Serimg2.jpg";
import Serimg3 from "../../assets/Images/Aboutus/serimg3.jpeg";
import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaCalculator, FaBalanceScale, FaCogs } from "react-icons/fa";
const Servicedata = [
  {
    id: 1,
    icon: <FaCalculator />,
    title: "Financial & Accounting Services",
    description:
      "Explore our savings, quality care and wellness solutions to craft the perfect plan for your business.",
    image: Serimg1,
    features: [
      "Accounting Services",
      "Bookkeeping Services",
      "Tax Filing Services",
      "Payroll Management Services",
      "Audit Support Services",
    ],
  },
  {
    id: 2,
    icon: <FaBalanceScale />,
    title: "Insolvency Support Services",
    description:
      "Our Insolvency Support Services are tailored to meet the specific needs of insolvency professionals and organizations through each phase of the process.",
    image: Serimg2,
    features: [],
  },
  {
    id: 3,
    icon: <FaCogs />,
    title: "Back-Office Support Services",
    description:
      "Protect your vehicles and drive worry-free with our vehicle insurance policies.",
    image: Serimg3,
    features: [
      "Corporate Research",
      "Data Analytics",
      "Due Diligence",
      "Operational Management Support",
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
