import React from "react";
import "../Styles/navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarLinks = () => {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="brandName">
            the old book store
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="responsiveIcon"
          >
            {" "}
            <img src="Icons/hamburger-menu-icon.svg" alt="hh" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navLinks">
              <Container className="navLinkWord">
                <Nav.Link href="/" className="navLink">
                  Home
                </Nav.Link>
                <Nav.Link href="/books" className="navLink">
                  books
                </Nav.Link>
                <Nav.Link href="/otherProducts" className="navLink">
                  by-products
                </Nav.Link>
                <Nav.Link href="/contact" className="navLink">
                  contact
                </Nav.Link>
              </Container>
              <Container className="navIcons">
                <Nav.Link href="/shoppingCart">
                  <img
                    src="Icons/shopping-icon.svg"
                    className="svgIcon"
                    alt=""
                  />
                  <i>(0)</i>
                </Nav.Link>
                <Nav.Link href="/likedItems">
                  <img
                    className="svgIcon"
                    src="Icons/heart-thin-icon.svg"
                    alt="ff"
                  />
                  <i>(0)</i>
                </Nav.Link>
                <Nav.Link href="/login" className="">
                  {" "}
                  <img
                    src="Icons/user-check-icon.svg"
                    className="svgIcon"
                    alt="ff"
                  />
                </Nav.Link>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarLinks;
