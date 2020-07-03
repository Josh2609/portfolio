import React from "react"
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar fixed="top" collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Navbar.Brand to="/">Josh Corps</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home"><NavItem>Home</NavItem></Nav.Link>
          <Nav.Link href="#about"><NavItem>About Me</NavItem></Nav.Link>
          <Nav.Link href="#portfolio"><NavItem>Portfolio</NavItem></Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
