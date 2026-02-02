import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import Dataimg from "../../assets/Images/Aboutus/Cybersecurity-768x386.png";
// import Logo1 from "../../assets/Images/Aboutus/Data_logo2.png";

import {
  // FaLock,
  FaShieldAlt,
  // FaUserCheck,
  // FaServer,
  // FaNetworkWired,
  // FaFireExtinguisher,
  // FaCamera,
  // FaUserShield,
} from "react-icons/fa";
import "./Data.css";
const Data = () => {
  return (
    <div>
      <PageBanner title="Data Security" bgImage={bannerImg} />
      <section className="data-security-section">
        <div className="container">
          {/* ROW 1 */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <span className="subtitle"> COMPLIANCE & DATA SECURITY</span>

              <h2 className="security-title">
                How We Prioritize <span>Data Security</span>
              </h2>

              <p className="security-desc">
                We follow strict compliance standards and secure processes to
                protect client financial data and ensure accurate,
                regulation-ready records across all regions we serve.
              </p>
              <p className="security-desc">
                Compliance and data security are at the core of our accounting
                and bookkeeping services. We follow strict regulatory standards
                and secure processes to protect client financial data while
                ensuring accurate, audit-ready, and regulation-compliant records
                across all regions we serve. From adhering to country-specific
                tax and reporting requirements in the USA, Australia, and UAE,
                to maintaining strong confidentiality through encrypted systems
                and controlled access, we prioritize complete data protection.
                Our standardized workflows include regular quality checks to
                minimize errors and maintain high accuracy, supported by secure
                cloud-based accounting platforms such as QuickBooks and Xero
                with controlled user permissions.
              </p>

              {/* <div className="security-highlight">
                <FaShieldAlt />
                <p>
                  <strong>Regulatory Compliance</strong> We adhere to
                  country-specific accounting standards, tax regulations, and
                  reporting requirements for the USA, Australia, and UAE to
                  maintain fully compliant books. .
                </p>
              </div> */}
            </div>

            <div className="col-lg-6 text-center">
              <div className="security-image-wrapper">
                <img
                  src={Dataimg}
                  alt="Data Security"
                  className="main-security-img"
                />

                {/* Two circular logos */}
              </div>
            </div>
          </div>
          <div className="security-highlight">
            <FaShieldAlt />
            <p>
              <strong>Regulatory Compliance</strong> We adhere to
              country-specific accounting standards, tax regulations, and
              reporting requirements for the USA, Australia, and UAE to maintain
              fully compliant books. .
            </p>
          </div>
          <div className="security-highlight">
            <FaShieldAlt />
            <p>
              <strong>Data Confidentiality & Security</strong> We adhere to
              country-specific accounting standards, tax regulations, and
              reporting requirements for the USA, Australia, and UAE to maintain
              fully compliant books. .
            </p>
          </div>
          <div className="security-highlight">
            <FaShieldAlt />
            <p>
              <strong>Standardized Procedures & Quality Checks</strong> We
              adhere to country-specific accounting standards, tax regulations,
              and reporting requirements for the USA, Australia, and UAE to
              maintain fully compliant books. .
            </p>
          </div>
          <div className="security-highlight">
            <FaShieldAlt />
            <p>
              <strong>Secure Cloud-Based Accounting Systems</strong> We adhere
              to country-specific accounting standards, tax regulations, and
              reporting requirements for the USA, Australia, and UAE to maintain
              fully compliant books. .
            </p>
          </div>
          {/* ROW 2 */}
          {/* <div className="row">
            <div className="col-lg-6">
              <h5 className="security-subtitle">
                How We Keep Your Data Secure
              </h5>
              <ul className="security-list">
                <li>
                  <FaUserCheck /> Controlled access to production areas
                </li>
                <li>
                  <FaServer /> Restricted server rooms with IT-only access
                </li>
                <li>
                  <FaLock /> Secure document storage
                </li>
                <li>
                  <FaUserShield /> Strict data permissions
                </li>
                <li>
                  <FaNetworkWired /> IP authentication protection
                </li>
                <li>
                  <FaShieldAlt /> Anti-virus and malware defense
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <h5 className="security-subtitle">
                Our Security Measures Include
              </h5>
              <ul className="security-list">
                <li>
                  <FaUserShield /> Authorized employee-only data access
                </li>
                <li>
                  <FaShieldAlt /> SonicWall firewall protection
                </li>
                <li>
                  <FaCamera /> Restricted doors with CCTV surveillance
                </li>
                <li>
                  <FaLock /> Clean desk policy
                </li>
                <li>
                  <FaLock /> No personal devices allowed
                </li>
                <li>
                  <FaNetworkWired /> Redundant Molex-certified LAN
                </li>
                <li>
                  <FaFireExtinguisher /> Advanced fire safety systems
                </li>
                <li>
                  <FaUserCheck /> Thorough HR screening
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Data;
