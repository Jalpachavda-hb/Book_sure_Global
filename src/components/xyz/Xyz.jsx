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
import "./xyz.css";
 
export default function Xyz() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const isDesktop = window.innerWidth >= 992;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    {/* <Topbar />  */}
    <Navbar
      expand="lg"
      // fixed="top"
      className={`main-navbar ${scrolled ? "scrolled" : ""}`}
    >
      {/* LEFT WHITE STRIP (FULL HEIGHT) */}
      <div className="logo-strip">
        <Navbar.Brand as={NavLink} to="/" className="logo-brand">
          <div className="logo-wrapper">
            <img src={logo} alt="Book Sure Global" className="logo-img" />
          </div>
        </Navbar.Brand>
      </div>

      <Container>
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
              onMouseEnter={() => isDesktop && setAboutOpen(true)}
              onMouseLeave={() => isDesktop && setAboutOpen(false)}
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

            <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/team">
              Team
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">
              Pricing Plan
            </Nav.Link>
            <Nav.Link as={NavLink} to="/data">
              Data Security
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* MOBILE */}
        <Navbar.Offcanvas
          placement="end"
          show={show}
          onHide={() => setShow(false)}
          className="mobile-offcanvas d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <img src={logo} alt="logo" height="40" />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="mobile-nav">
              <Nav.Link as={NavLink} to="/" onClick={() => setShow(false)}>
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/company/about"
                onClick={() => setShow(false)}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/company/careers"
                onClick={() => setShow(false)}
              >
                Career
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/company/blog"
                onClick={() => setShow(false)}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/services"
                onClick={() => setShow(false)}
              >
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/team" onClick={() => setShow(false)}>
                Team
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/pricing"
                onClick={() => setShow(false)}
              >
                Pricing Plan
              </Nav.Link>
              <Nav.Link as={NavLink} to="/data" onClick={() => setShow(false)}>
                Data Security
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/team/gallery"
                onClick={() => setShow(false)}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                onClick={() => setShow(false)}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
  );
}
