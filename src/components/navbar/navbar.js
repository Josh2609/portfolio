import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
import "./navbar.css"

export default function NavBar() {

  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseCollapse = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrolledDownEnough = bodyScrollTop > 75 ? true : false;
      setScrolledDownEnough(scrolledDownEnough);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDownEnough]);

  const whiteBackground = scrolledDownEnough
    ? "nav-scroll"
    : "nav-top";
  const fontColour = scrolledDownEnough ? "nav-text" : "nav-stext";

  return (
    <Navbar className={whiteBackground} fixed="top" expand="sm">
      <Navbar.Brand href="/">Josh Corps</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div>
            <NavItem><Scrollchor className={"nav-link " + fontColour} to="#">Home</Scrollchor></NavItem>
          </div>
          <NavItem><Scrollchor className="nav-link" to="#about">About</Scrollchor></NavItem>
          <NavItem><Scrollchor className="nav-link" to="#projects">Projects</Scrollchor></NavItem>
          <NavItem><Scrollchor className="nav-link" to="#contacts">Contacts</Scrollchor></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
