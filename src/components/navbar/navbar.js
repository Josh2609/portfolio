import React from "react"
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';

export default function NavBar() {
  return (
    <Navbar fixed="top" collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Josh Corps</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem><Scrollchor className="nav-link" to="">Home</Scrollchor></NavItem>
          <NavItem><Scrollchor className="nav-link" to="#about">About</Scrollchor></NavItem>
          <NavItem><Scrollchor className="nav-link" to="#projects">Projects</Scrollchor></NavItem>
          <NavItem><Scrollchor className="nav-link" to="#contacts">Contacts</Scrollchor></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
