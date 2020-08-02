import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
import "./navbar.css"

export default function NavBar() {

  const [scrolled, setScrolled] = useState(false);
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
      const scrolled = bodyScrollTop > 200 ? true : false;
      setScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navColour = scrolled
    ? "nav-scroll"
    : "nav-top";
  const fontColour = scrolled ? "nav-text" : "nav-stext";

  return (
    <Navbar className={navColour} fixed="top" expand="sm">
      <Navbar.Brand className={fontColour} href="/">Josh Corps</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem><Scrollchor className={"nav-link " + fontColour} to="#">Home</Scrollchor></NavItem>
          <NavItem><Scrollchor className={"nav-link " + fontColour} to="#about">About</Scrollchor></NavItem>
          <NavItem><Scrollchor className={"nav-link " + fontColour} to="#projects">Projects</Scrollchor></NavItem>
          <NavItem><Scrollchor className={"nav-link " + fontColour} to="#contacts">Contacts</Scrollchor></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
