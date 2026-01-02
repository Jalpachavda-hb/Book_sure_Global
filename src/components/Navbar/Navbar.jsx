
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../../assets/Images/Hero/logo.png";
import "./navbar.css";
import "../Media.css";
import Topbar from "./Topbar";
import { useState, useEffect } from "react";

export default function MainNavbar() {
  const [show, setShow] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
     { name: "Team", path: "/team" },
    { name: "Pricing Plan", path: "/pricing" },
    { name: "Data Security", path: "/data" },
    { name: "Contact Us", path: "/contact" },
  ];
const [scrolled, setScrolled] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <Topbar />

      <div className="navbar-wrapper">
        <Navbar expand="lg"   className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
          <Container>
            <Navbar.Brand as={NavLink} to="/">
              <img src={logo} alt="Book Sure Global" className="logo" />
            </Navbar.Brand>

            <Navbar.Toggle onClick={handleShow} />

            <Navbar.Offcanvas
              placement="end"
              show={show}
              onHide={handleClose}
              className="mobile-offcanvas"
            >
              <Offcanvas.Header closeButton>
                <img  alt="logo"src={logo} height="40" />
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="mobile-nav">
                  {menuItems.map((item) => (
                    <Nav.Link
                      key={item.path}
                      as={NavLink}
                      to={item.path}
                      onClick={handleClose}
                    >
                      {item.name}
                    </Nav.Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
