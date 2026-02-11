import {
  FaWhatsapp,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./fotter.css";
import { CiMail } from "react-icons/ci";
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
              <a
                href="https://wa.me/919313061960?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>

              {/* <a href="/">
                <CiMail />
              </a> */}

              {/* <a
              href="mailto:info@booksureglobal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiMail />
              </a> */}

              <a
                href="mailto:jalpachavda1211@gmail.com"
                onClick={(e) => {
                  if (window.innerWidth > 768) {
                    e.preventDefault();
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=jalpachavda1211@gmail.com",
                      "_blank",
                    );
                  }
                }}
              >
                <CiMail />
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
{/* 301 , Nobel Trade center , Opp B.D Rao Hall Bhuyangdev Cross Road , Ahmedabad - 380052 */}





               301 , Nobel Trade center , Opp B.D Rao Hall Bhuyangdev Cross Road<br />
                Ahmedabad - 380052
              </p>
            </div>
           

            <div className="footer-contact">
              <FaEnvelope />
            <a
                href="mailto:jalpachavda1211@gmail.com"
                className="text-white border-none"
                onClick={(e) => {
                  if (window.innerWidth > 768) {
                    e.preventDefault();
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=jalpachavda1211@gmail.com",
                      "_blank",
                    );
                  }
                }}
              >
              info@booksureglobal.com
              </a>
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
