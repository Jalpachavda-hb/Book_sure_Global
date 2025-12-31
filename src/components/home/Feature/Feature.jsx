import React from "react";
import "./feature.css";
import { GiFiles } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiOutlineSelect } from "react-icons/ai";
import { RiHomeOfficeFill } from "react-icons/ri";

import { RiCustomerService2Fill } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Feature = () => {
  const features = [
    {
      id: 1,
      title: "Financial & Accounting Services",

      icon: <RiMoneyDollarCircleLine />,
    },
    {
      id: 2,
      title: "Insolvency Support Services",

      icon: <RiCustomerService2Fill />,
    },
    {
      id: 3,
      title: "Back-Office Support Services",

      icon: <RiHomeOfficeFill />,
    },
  ];

  return (
    <>
      <section className="features-section">
        <div className="container mt-5">
          <div className="row align-items-center  ">
            <div className="hero-content-left  animated-content position-relative z-index text-white">
              <h3 className="page-tital mt-1 ">What We Give</h3>
              <p className="contain-colur">
                “Efficient Services To Alleviate Your Tasks”
              </p>
            </div>
          </div>
          <div className="features-wrapper shadow-sm">
            <div className="row justify-content-center g-4">
              {features.map((feature) => (
                <div key={feature.id} className="col-12 col-sm-6 col-lg-4">
                  <div className="feature-card d-flex align-items-center">
                    {/* ICON */}
                    <div className="icon-flip-box">
                      <div className="icon-inner">
                        <div className="icon-front">
                          <span className="feature-icon">{feature.icon}</span>
                        </div>

                        <div className="icon-back">
                          <span className="feature-icon">{feature.icon}</span>
                        </div>
                      </div>
                    </div>

                    {/* TEXT */}
                    <div className="ms-4">
                      <h5 className="mb-1">{feature.title}</h5>
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="target-audience" className="advertisers-service-sec">
        <div className="container">
          <div className="row  row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            <div className="col-lg-4 col-md-6 col-12" id="col-service-product">
              <div className="service-card">
                <div className="icon-wrapper">
                  <RiMoneyDollarCircleLine />
                </div>
                <h3>Financial & Accounting Services</h3>
                <p>
                  We deliver accurate and timely accounting solutions including
                  bookkeeping, financial reporting, MIS preparation, and
                  compliance support to help businesses maintain clarity,
                  control, and confidence in their financial operations.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12" id="col-service-product">
              <div className="service-card">
                <div className="icon-wrapper">
                  {/* <img src={card} alt="card" className="card-img" /> */}
                  <RiCustomerService2Fill />
                </div>
                <h3>Insolvency Support Services</h3>
                <p>
                  Our insolvency support services assist professionals and
                  organizations with documentation, compliance, claim
                  verification, and process management, ensuring smooth
                  execution under IBC and related regulatory frameworks.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12" id="col-service-product">
              <div className="service-card">
                <div className="icon-wrapper">
                  {/* <img src={card} alt="card" className="card-img" /> */}
                  <RiHomeOfficeFill />
                </div>
                <h3>Back-Office Support Services</h3>
                <p>
                  We provide reliable back-office assistance including data
                  management, payroll support, documentation, and process
                  coordination, enabling firms to focus on core operations while
                  we manage the backend efficiently.4
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
