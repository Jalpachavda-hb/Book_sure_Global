import React from "react";
import { Link } from "react-router-dom";
import "./PageBanner.css";

const PageBanner = ({ title, bgImage }) => {
  return (
    <section
      className="page-banner mt-5"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="page-banner-overlay"></div>

      <div className="page-banner-content">
        <h1>{title}</h1>

        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="breadcrumb" >{title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
