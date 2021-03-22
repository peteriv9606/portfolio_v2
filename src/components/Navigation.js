import React, { useEffect, useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import logo from "../logo512.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {
  var offset;
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);
  if (size < 992) {
    offset = -250;
  } else offset = -65;
  const dur = 1000;
  const smo = "easeOutExpo";
  const hideNav = () => {
    //mobile view -> hide navDropDown
    if (size < 922) {
      document.getElementById("togg").click();
    }
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        className="shadow"
        variant="light"
        bg="light"
        expand="lg"
        sticky="top"
        id="navigationBar"
        style={{ fontSize: "20px" }}
      >
        <Navbar.Brand onClick={scrollToTop}>
          <Image id="logoImg" src={logo} rounded fluid></Image>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          data-toggle="dropdown"
          //NAVBAR DOESNT CLOSE AFTER BUTTON CLICK DUE TO STUPID <Link /> COMPONENT
          id="togg"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              className="nav-link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={smo}
              offset={offset}
              duration={dur}
              eventkey="1"
              onClick={hideNav}
            >
              Projects
            </Link>

            <Link
              className="nav-link"
              activeClass="active"
              to="skillset"
              spy={true}
              smooth={smo}
              offset={offset}
              duration={dur}
              eventkey="2"
              onClick={hideNav}
            >
              Skillset
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={smo}
              offset={offset}
              duration={dur}
              eventkey="3"
              onClick={hideNav}
            >
              About
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={smo}
              offset={offset}
              duration={dur}
              eventkey="4"
              onClick={hideNav}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
