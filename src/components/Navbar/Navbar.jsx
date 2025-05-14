import React, { useEffect, useState, useRef } from "react";
// import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/Images/Smart-Box-File.png";
import "./navbar.css";
import { HashLink as Link } from "react-router-hash-link";
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

  const navbarCollapseRef = useRef(null);

  const handleLinkClick = () => {
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

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
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                id="about-link"
                className="nav-link text-nowrap"
                onClick={handleLinkClick}
                smooth
                to="#about"
              >
                {" "}
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleLinkClick}
                className="nav-link text-nowrap"
                smooth
                to="#features"
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                
                  onClick={handleLinkClick}
                className="nav-link text-nowrap"
                smooth
                to="#screenshorts"
              >
                ScreenShorts
              </Link>
            </li>
            <li className="nav-item">
            
              <Link className="nav-link text-nowrap"
                onClick={handleLinkClick}
               smooth to="/#contact">
                Contact Us
              </Link>
           
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
