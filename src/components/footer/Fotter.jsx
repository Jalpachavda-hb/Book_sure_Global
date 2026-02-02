import {
  FaFacebookF,
  // FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  // FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./fotter.css";

const Footer = () => {
  return (
    <footer className="footer-main text-light">
      {/* MAIN CONTENT */}
      <div className="container py-5">
        <div className="row g-4">
          {/* ABOUT */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">About</h5>
            <p className="footer-text">
              Booksure Global is a professional accounting outsourcing firm
              delivering reliable bookkeeping, accounting, payroll and tax
              support services to growing businesses. Our team includes
              qualified Chartered Accountants and CPA Australia and other
              qualified professionals with strong global tax and compliance
              knowledge.
            </p>

            {/* SOCIAL ICONS */}
            <div className="footer-social mt-4">
              <a href="/">
                <FaFacebookF />
              </a>

              <a href="/">
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/booksureglobal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              {/* <a href="/">
                <FaYoutube />
              </a> */}
            </div>
          </div>

          {/* QUICK LINKS & SERVICES */}
          <div className="col-lg-6 col-md-6">
            <div className="row">
              {/* QUICK LINKS */}
              <div className="col-sm-6">
                <h5 className="footer-title">Quick Links</h5>
                <ul className="footer-links">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>

                  <li>
                    <a href="/pricing">Pricing Plan</a>
                  </li>
                  <li>
                    <a href="/data">Data Security</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>

              {/* SERVICES */}
              <div className="col-sm-6">
                <h5 className="footer-title">RESOURCES</h5>
                <ul className="footer-links">
                  <li>
                    <a href="/services/bookkeepingservices">
                      Bookkeeping Services
                    </a>
                  </li>
                  <li>
                    <a href="/services/accountingservices">
                      Accounting Services
                    </a>
                  </li>
                  <li>
                    <a href="/careers">Career</a>
                  </li>
                  <li>
                    <a href="/contact">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Contact</h5>

            <div className="footer-contact">
              <FaMapMarkerAlt />
              <p>
                1309 Coffeen Avenue STE 1200 <br />
                Sheridan, Wyoming 82801
              </p>
            </div>
            <div className="footer-contact">
              <FaMapMarkerAlt />
              <p>
                1309 Coffeen Avenue STE 1200 <br />
                Sheridan,Canada 82801
              </p>
            </div>

            <div className="footer-contact">
              <FaEnvelope />
              <p>info@booksureglobal.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* BORDER */}
      <div className="footer-divider"></div>

      {/* COPYRIGHT */}
      <div className="container py-3">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6">
            <p className="mb-0 footer-copy">
              © 2026 Book Sure Global | All Rights Reserved
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="/" className="footer-policy">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="/" className="footer-policy">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
