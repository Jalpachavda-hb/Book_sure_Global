import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { FiPlus, FiMinus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/Images/Hero/logo.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
export default function Xyz() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setShow(false);
    setMobileServiceOpen(false);
  };

  const navigate = useNavigate();
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`main-navbar ${scrolled ? "scrolled" : ""}`}
    >
      {/* LEFT WHITE LOGO STRIP (DESKTOP ONLY) */}
      <div className="logo-strip d-none d-lg-flex">
        <Navbar.Brand as={NavLink} to="/" className="logo-brand">
          <div className="logo-wrapper">
            <img src={logo} alt="Book Sure Global" className="logo-img" />
          </div>
        </Navbar.Brand>
      </div>

      <Container>
        {/* MOBILE LOGO */}
        <Navbar.Brand as={NavLink} to="/" className="d-lg-none mobile-logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        {/* HAMBURGER */}
        <Navbar.Toggle onClick={() => setShow(true)} />

        {/* DESKTOP MENU */}
        <Navbar.Collapse className="d-none d-lg-block">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link> */}

            <NavDropdown
              className="custom-dropdown"
              show={aboutOpen}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
              title={
                <span
                  onClick={(e) => {
                    e.preventDefault(); // stop dropdown toggle
                    navigate("/services"); // redirect page
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Services 
                </span>
              }
            >
             
              <NavDropdown.Item
                as={NavLink}
                to="/services/bookkeepingservices"
              >
                Bookkeeping Services
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/accountingservices">
                Accounting Services
              </NavDropdown.Item>
            </NavDropdown>
 <Nav.Link as={NavLink} to="/pricing">
                Pricing Plan
              </Nav.Link>
            <Nav.Link as={NavLink} to="/careers">
              Careers
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Offcanvas
          placement="end"
          show={show}
          onHide={closeMenu}
          className="mobile-offcanvas d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <img src={logo} alt="logo" />
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="mobile-nav">
              <Nav.Link as={NavLink} to="/" onClick={closeMenu}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={closeMenu}>
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/careers" onClick={closeMenu}>
                Career
              </Nav.Link>

              {/* <Nav.Link as={NavLink} to="/services" onClick={closeMenu}>
                Services
              </Nav.Link> */}

              <div className="mobile-dropdown">
                <button
                  className="mobile-dropdown-btn"
                  onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                >
                  Services
                  {mobileServiceOpen ? <FiMinus /> : <FiPlus />}
                </button>
                <div
                  className={`mobile-dropdown-menu ${
                    mobileServiceOpen ? "open" : ""
                  }`}
                >
                  <NavLink
                    to="/services/bookkeepingservices"
                    onClick={closeMenu}
                  >
                    Bookkeeping Services
                  </NavLink>
                  <NavLink
                    to="/services/accountingservices"
                    onClick={closeMenu}
                  >
                    Accounting Services
                  </NavLink>
                </div>{" "}
              </div>
              <Nav.Link as={NavLink} to="/pricing" onClick={closeMenu}>
                Pricing Plan
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" onClick={closeMenu}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

// import {
//   Navbar,
//   Nav,
//   Container,
//   Offcanvas,
//   NavDropdown,
// } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { FiPlus, FiMinus } from "react-icons/fi";
// import logo from "../../assets/Images/Hero/logo.png";
// import "./navbar.css";

// export default function Xyz() {
// const [show, setShow] = useState(false);
// const [scrolled, setScrolled] = useState(false);
// const [aboutOpen, setAboutOpen] = useState(false);
// const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

// useEffect(() => {
//   const onScroll = () => setScrolled(window.scrollY > 80);
//   window.addEventListener("scroll", onScroll);
//   return () => window.removeEventListener("scroll", onScroll);
// }, []);

// const closeMenu = () => {
//   setShow(false);
//   setMobileServiceOpen(false);
// };

//   return (
//     <Navbar
//       expand="lg"
//       fixed="top"
//       className={`main-navbar ${scrolled ? "scrolled" : ""}`}
//     >
//       {/* DESKTOP LOGO STRIP */}
//       <div className="logo-strip d-none d-lg-flex">
//         <Navbar.Brand as={NavLink} to="/" className="logo-brand">
//           <img src={logo} alt="Book Sure Global" className="logo-img" />
//         </Navbar.Brand>
//       </div>

//       <Container>
//         {/* MOBILE LOGO */}
//         <Navbar.Brand as={NavLink} to="/" className="d-lg-none mobile-logo">
//           <img src={logo} alt="logo" />
//         </Navbar.Brand>

//         <Navbar.Toggle onClick={() => setShow(true)} />

//         {/* ================= DESKTOP MENU ================= */}
//         <Navbar.Collapse className="d-none d-lg-block">
//           <Nav className="ms-auto align-items-center">
//             <Nav.Link as={NavLink} to="/">
//               Home
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/about">
//               About Us
//             </Nav.Link>

//             {/* DESKTOP DROPDOWN */}
//             <NavDropdown
//               title="Services"
//               className="custom-dropdown"
//               show={aboutOpen}
//               onMouseEnter={() => setAboutOpen(true)}
//               onMouseLeave={() => setAboutOpen(false)}
//             >
//               <NavDropdown.Item as={NavLink} to="/services">
//                 Bookkeeping Services
//               </NavDropdown.Item>
//               <NavDropdown.Item as={NavLink} to="/services/accounting">
//                 Accounting Services
//               </NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Link as={NavLink} to="/careers">
//               Careers
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/contact">
//               Contact Us
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>

//         {/* ================= MOBILE OFFCANVAS ================= */}
//         <Navbar.Offcanvas
//           placement="end"
//           show={show}
//           onHide={closeMenu}
//           className="mobile-offcanvas d-lg-none"
//         >
//           <Offcanvas.Header closeButton>
//             <img src={logo} alt="logo" />
//           </Offcanvas.Header>

//           <Offcanvas.Body>
//             <Nav className="mobile-nav">
//               <Nav.Link as={NavLink} to="/" onClick={closeMenu}>
//                 Home
//               </Nav.Link>
//               <Nav.Link as={NavLink} to="/about" onClick={closeMenu}>
//                 About Us
//               </Nav.Link>

//               {/* MOBILE DROPDOWN */}
// <div className="mobile-dropdown">
//   <button
//     className="mobile-dropdown-btn"
//     onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
//   >
//     Services
//     {mobileServiceOpen ? <FiMinus /> : <FiPlus />}
//   </button>

//   <div
//     className={`mobile-dropdown-menu ${
//       mobileServiceOpen ? "open" : ""
//     }`}
//   >
//     <NavLink to="/services/bookkeeping" onClick={closeMenu}>
//       Bookkeeping Services
//     </NavLink>
//     <NavLink to="/services/accounting" onClick={closeMenu}>
//       Accounting Services
//     </NavLink>
//   </div>
//               </div>

//               <Nav.Link as={NavLink} to="/careers" onClick={closeMenu}>
//                 Careers
//               </Nav.Link>
//               <Nav.Link as={NavLink} to="/contact" onClick={closeMenu}>
//                 Contact Us
//               </Nav.Link>
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// }
