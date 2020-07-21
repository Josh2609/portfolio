import React from "react"
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function NavBar() {
  return (
    <Navbar fixed="top" collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Josh Corps</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <AnchorLink className="nav-link" to="/" title="Home" />
          <AnchorLink className="nav-link" to="/#about" title="About" />
          <AnchorLink className="nav-link" to="/#projects" title="Projects" />
          <AnchorLink className="nav-link" to="/#contacts" title="Contacts" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
