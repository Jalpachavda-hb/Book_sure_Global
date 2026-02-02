import React from "react";
import ConsultationSection from "./ConsultationSection";

import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import bookkeepingImg from "../../assets/Images/Services/accounting-removebg-preview.png";
import cleanupImg from "../../assets/Images/Services/payroll.jpg";
// import taxImg from "../../assets/Images/Services/tax.png";
import "./DemoServices.css";
import { FaBookAtlas, FaCalculator } from "react-icons/fa6";

const Bookkeeping = () => {
  return (
    <>
      {/* ✅ Banner */}
      <PageBanner title="Bookkeeping Services" bgImage={bannerImg} />

      {/* ✅ Services Section */}
      <section className="service-detail-page">
        <div className="container">
          {/* ✅ Heading */}

          {/* ✅ Alternating Layout Wrapper */}
          <div className="service-alt-wrapper">
            {/* ✅ 1. Ongoing Bookkeeping */}
            <div className="service-alt-row">
              <div className="service-alt-content">
                <div className="service-title">
                  <FaBookAtlas className="service-icon" />
                  <h3>Ongoing Bookkeeping</h3>
                </div>

                <p>
                  Continuous day-to-day bookkeeping support to keep your
                  financial records accurate, updated, and audit-ready.
                </p>
                <ul>
                  <li>Transaction posting & categorisation</li>
                  <li>Bank, card & payment gateway reconciliations</li>
                  <li>General ledger maintenance</li>
                  <li>Monthly closing</li>
                  <li>Profit & Loss and Balance Sheet</li>
                </ul>
              </div>

              <div className="service-alt-img">
                <img src={bookkeepingImg} alt="Ongoing Bookkeeping" />
              </div>
            </div>

            {/* ✅ 2. Cleanup Bookkeeping */}
            <div className="service-alt-row reverse">
              <div className="service-alt-content">
                <div className="service-title">
                  <FaCalculator className="service-icon" />
                  <h3>Cleanup Bookkeeping</h3>
                </div>

                <p>
                  We identify and correct past bookkeeping errors to ensure your
                  accounts are clean, organised, and compliant.
                </p>
                <ul>
                  <li>Error identification & correction</li>
                  <li>Fixing misclassified or duplicate entries</li>
                  <li>Opening balance corrections</li>
                  <li>Reconciliations of unreconciled accounts</li>
                  <li>Clean financial statements</li>
                </ul>
              </div>

              <div className="service-alt-img">
                <img src={cleanupImg} alt="Cleanup Bookkeeping" />
              </div>
            </div>

            {/* ✅ 3. Catch-Up Bookkeeping */}
            <div className="service-alt-row">
              <div className="service-alt-content">
                <div className="service-title">
                  <FaBookAtlas className="service-icon" />
                  <h3>Catch-Up Bookkeeping</h3>
                </div>

                <p>
                  Perfect for overdue books — we update and complete missing
                  financial records for previous months or years.
                </p>
                <ul>
                  <li>Posting of past-period transactions</li>
                  <li>Multi-month / multi-year reconciliations</li>
                  <li>Reconstruction of missing records</li>
                  <li>Tax-ready financials for all pending periods</li>
                </ul>
              </div>

              <div className="service-alt-img">
                <img src={bookkeepingImg} alt="Catch-Up Bookkeeping" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConsultationSection />
    </>
  );
};

export default Bookkeeping;

