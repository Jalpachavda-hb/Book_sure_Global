// import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

// import logo from "../../assets/Images/Hero/logo.png";
// import "./navbar.css";
// import "../Media.css";
// import Topbar from "./Topbar";
// import { useState, useEffect } from "react";

// export default function MainNavbar() {
//   const [show, setShow] = useState(false);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services" },
//      { name: "Team", path: "/team" },
//     { name: "Pricing Plan", path: "/pricing" },
//     { name: "Data Security", path: "/data" },
//     { name: "Contact Us", path: "/contact" },
//   ];
// const [scrolled, setScrolled] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
// useEffect(() => {
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 50);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   return (
//     <>
//       <Topbar />

//       <div className="navbar-wrapper">
//         <Navbar expand="lg"   className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
//           <Container>
//             <Navbar.Brand as={NavLink} to="/">
//               <img src={logo} alt="Book Sure Global" className="logo" />
//             </Navbar.Brand>

//             <Navbar.Toggle onClick={handleShow} />

//             <Navbar.Offcanvas
//               placement="end"
//               show={show}
//               onHide={handleClose}
//               className="mobile-offcanvas"
//             >
//               <Offcanvas.Header closeButton>
//                 <img  alt="logo"src={logo} height="40" />
//               </Offcanvas.Header>

//               <Offcanvas.Body>
//                 <Nav className="mobile-nav">
//                   {menuItems.map((item) => (
//                     <Nav.Link
//                       key={item.path}
//                       as={NavLink}
//                       to={item.path}
//                       onClick={handleClose}
//                     >
//                       {item.name}
//                     </Nav.Link>
//                   ))}
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       </div>
//     </>
//   );
// }

// import {
//   Navbar,
//   Nav,
//   Container,
//   Offcanvas,
//   NavDropdown,
// } from "react-bootstrap";
// import { NavLink, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// import logo from "../../assets/Images/Hero/logo.png";
// import "./navbar.css";
// import "../Media.css";
// import Topbar from "./Topbar";

// export default function MainNavbar() {
//   const [show, setShow] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const location = useLocation();

//   const handleClose = () => {
//     setShow(false);
//     setMobileAboutOpen(false);
//   };
//   const isDesktop = window.innerWidth >= 992;
//   const handleShow = () => setShow(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <Topbar />

//       <div className="navbar-wrapper">
//         <Navbar
//           expand="lg"
//           className={`main-navbar ${scrolled ? "scrolled" : ""}`}
//         >
//           <Container>
//             <Navbar.Brand as={NavLink} to="/">
//               <img src={logo} alt="Book Sure Global" className="logo" />
//             </Navbar.Brand>

//             <Navbar.Toggle onClick={handleShow} />

//             {/* ================= DESKTOP MENU ================= */}
//             <Navbar.Collapse className="d-none d-lg-block">
//               <Nav className="ms-auto align-items-center">
//                 <Nav.Link as={NavLink} to="/">
//                   Home
//                 </Nav.Link>

//                 {/* 🔥 HOVER DROPDOWN */}
//                 <NavDropdown
//                   title="Company"
//                   id="about-dropdown"
//                   show={aboutOpen}
//                   onMouseEnter={() => isDesktop && setAboutOpen(true)}
//                   onMouseLeave={() => isDesktop && setAboutOpen(false)}
//                 >
//                   <NavDropdown.Item as={NavLink} to="/about">
//                     About Us
//                   </NavDropdown.Item>
//                   <NavDropdown.Item as={NavLink} to="/careers">
//                     Career
//                   </NavDropdown.Item>
//                   <NavDropdown.Item as={NavLink} to="/blog">
//                     Blog
//                   </NavDropdown.Item>
//                   <NavDropdown.Item as={NavLink} to="/team/gallery">
//                     Gallery
//                   </NavDropdown.Item>
//                 </NavDropdown>

//                 <Nav.Link as={NavLink} to="/services">
//                   Services
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/team">
//                   Team
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/pricing">
//                   Pricing Plan
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/data">
//                   Data Security
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/contact">
//                   Contact Us
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>

//             {/* ================= MOBILE OFFCANVAS ================= */}

//             <Navbar.Offcanvas
//               placement="end"
//               show={show}
//               onHide={handleClose}
//               className="mobile-offcanvas d-lg-none"
//             >
//               <Offcanvas.Header closeButton>
//                 <img src={logo} alt="logo" height="40" />
//               </Offcanvas.Header>

//               <Offcanvas.Body>
//                 <Nav className="mobile-nav">
//                   {/* Home */}
//                   <Nav.Link as={NavLink} to="/" onClick={handleClose}>
//                     Home
//                   </Nav.Link>

//                   {/* About Us (Dropdown) */}
//                   <div className="mobile-dropdown">
//                     <button
//                       className="mobile-dropdown-toggle"
//                       onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
//                     >
//                       Company
//                       <span
//                         className={`arrow ${mobileAboutOpen ? "open" : ""}`}
//                       >
//                         ▾
//                       </span>
//                     </button>

//                     {mobileAboutOpen && (
//                       <div className="mobile-submenu">
//                         <NavLink to="/about" onClick={handleClose}>
//                           About Us
//                         </NavLink>
//                         <NavLink to="/careers" onClick={handleClose}>
//                           Career
//                         </NavLink>
//                         <NavLink to="/blog" onClick={handleClose}>
//                           Blog
//                         </NavLink>
//                         <NavLink to="/team/gallery" onClick={handleClose}>
//                           Gallery
//                         </NavLink>
//                       </div>
//                     )}
//                   </div>

//                   {/* Other Links */}
//                   <Nav.Link as={NavLink} to="/services" onClick={handleClose}>
//                     Services
//                   </Nav.Link>
//                   <Nav.Link as={NavLink} to="/team" onClick={handleClose}>
//                     Team
//                   </Nav.Link>
//                   <Nav.Link as={NavLink} to="/pricing" onClick={handleClose}>
//                     Pricing Plan
//                   </Nav.Link>
//                   <Nav.Link as={NavLink} to="/data" onClick={handleClose}>
//                     Data Security
//                   </Nav.Link>
//                   <Nav.Link as={NavLink} to="/contact" onClick={handleClose}>
//                     Contact Us
//                   </Nav.Link>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       </div>
//     </>
//   );
// }

import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/Images/Hero/logo.png";
import "./navbar.css";

export default function Xyz() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setShow(false);

  return (
    <Navbar expand="lg" fixed="top" className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
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
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="d-lg-none mobile-logo"
        >
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

            <NavDropdown
              title="Company"
              show={aboutOpen}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <NavDropdown.Item as={NavLink} to="/company/about">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/company/careers">
                Career
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/company/blog">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/team/gallery">
                Gallery
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/team">Team</Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">Pricing Plan</Nav.Link>
            <Nav.Link as={NavLink} to="/data">Data Security</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* MOBILE OFFCANVAS */}
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
              <Nav.Link as={NavLink} to="/" onClick={closeMenu}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/company/about" onClick={closeMenu}>About Us</Nav.Link>
              <Nav.Link as={NavLink} to="/company/careers" onClick={closeMenu}>Career</Nav.Link>
              <Nav.Link as={NavLink} to="/company/blog" onClick={closeMenu}>Blog</Nav.Link>
              <Nav.Link as={NavLink} to="/services" onClick={closeMenu}>Services</Nav.Link>
              <Nav.Link as={NavLink} to="/team" onClick={closeMenu}>Team</Nav.Link>
              <Nav.Link as={NavLink} to="/pricing" onClick={closeMenu}>Pricing Plan</Nav.Link>
              <Nav.Link as={NavLink} to="/data" onClick={closeMenu}>Data Security</Nav.Link>
              <Nav.Link as={NavLink} to="/team/gallery" onClick={closeMenu}>Gallery</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" onClick={closeMenu}>Contact Us</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

