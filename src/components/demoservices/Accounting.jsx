import React from "react";
import ConsultationSection from "./ConsultationSection";
import Tax from "../../assets/Images/Services/tax.png";
import pageimg from "../../assets/Images/Services/accounting-removebg-preview.png";
import payroll from "../../assets/Images/Services/payroll.jpg";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import { FaCalculator } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";

const Bookkeeping = () => {
  return (
    <>
      {/* ✅ Banner */}
      <PageBanner title="Accounting Services" bgImage={bannerImg} />

      {/* ✅ Hero CTA Section */}
      <section>
        <div className="container">
          {/* <div className="cta-grid hero-bg">
          
          {/* ✅ Vertical Services Section */}
          <div className="service-alt-wrapper">
            {/* ✅ Row 1 */}
            <div className="service-alt-row ">
              <div className="service-alt-content">
                <div className="service-title">
                  <FaCalculator className="service-icon" />
                  <h3>Account Reconciliation</h3>
                </div>

                <p>
                  Matching bank, credit card, and other financial accounts with
                  bookkeeping records to ensure correct balances and complete
                  transactions.
                </p>

                <ul>
                  <li>Monthly, quarterly & annual financial statements</li>
                  <li>Profit & Loss, Balance Sheet & Cash Flow reports</li>
                  <li>Accrual accounting & period-end adjustments</li>
                  <li>Ledger review & reconciliations</li>
                </ul>
              </div>

              <div className="service-alt-img">
                <img src={pageimg} alt="Accounting Services" />
              </div>
            </div>

            {/* ✅ Row 2 */}
            <div className="service-alt-row  reverse">
              <div className="service-alt-content">
                <div className="service-title">
                  <FaBookAtlas className="service-icon" />
                  <h3>Financial Statement Preparation</h3>
                </div>

                <p>
                  Preparation of Profit & Loss Statements, Balance Sheets, and
                  Cash Flow Reports to provide clear insights into business
                  performance.
                </p>

                <ul>
                  <li>Payroll calculation & processing</li>
                  <li>Payslip preparation</li>
                  <li>Payroll journal entries</li>
                  <li>Statutory deduction tracking</li>
                </ul>
              </div>

              <div className="service-alt-img">
                <img src={payroll} alt="Payroll Processing" />
              </div>
            </div>

            {/* ✅ Row 3 */}
            <div className="service-alt-row ">
              <div className="service-alt-content">
                <div className="service-title">
                  <FaCalculator className="service-icon" />
                  <h3>Month-End & Year-End Closing</h3>
                </div>

                <p>
                  Review and finalization of accounts with adjustments to ensure
                  accurate monthly and annual financial reporting.
                </p>

                <ul>
                  <li>Indirect tax reconciliation (VAT / GST)</li>
                  <li>Jurisdiction-specific tax schedules</li>
                  <li>Multi-compliance reporting assistance</li>
                  <li>Coordination with CPA / tax advisor</li>
                </ul>
              </div>

              <div className="service-alt-img w-20 h-10">
                <img src={Tax} alt="Tax Support Services" />
              </div>
            </div>
            <div className="service-alt-row  reverse">
              <div className="service-alt-content">
                <div className="service-title">
                  <FaBookAtlas className="service-icon" />
                  <h3>Fixed Asset Accounting</h3>
                </div>

                <p>
                  Tracking and depreciation of business assets to maintain
                  accurate long-term financial records.
                </p>

                <ul>
                  <li>Payroll calculation & processing</li>
                  <li>Payslip preparation</li>
                  <li>Payroll journal entries</li>
                  <li>Statutory deduction tracking</li>
                </ul>
              </div>

              <div className="service-alt-img">
                <img src={payroll} alt="Payroll Processing" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Extra Sections */}

      <ConsultationSection />
    </>
  );
};

export default Bookkeeping;
