import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/Images/Smart-Box-File.png";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Combine all classes here
  const navbarClasses = [
    "navbar",
    "navbar-expand-lg",
    "navbarbag",
    "container-fluid",
    scrolled ? "scrolled" : "",
    isHomePage ? "home-page" : "other-page",
  ].join(" ");

  return (
    <nav className={navbarClasses}>
      <div className="container bgwhite">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a id="about-link" className="nav-link text-nowrap" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a id="features-link" className="nav-link text-nowrap" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a id="contact-link" className="nav-link text-nowrap" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
