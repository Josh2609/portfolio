import React, { useState, useEffect } from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import "./navbar.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  const handleCloseCollapse = () => {
    if (isOpen) {
      setIsOpen(!isOpen)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      const scrolled = bodyScrollTop > 200 ? true : false
      setScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])


  let navColour = scrolled ? "nav-scroll" : "nav-top"
  let fontColour = scrolled ? "nav-scrolled-text" : "nav-text"

  if (url !== "/") {
     navColour = "nav-scroll"
     fontColour = "nav-scrolled-text"
  }

  return (
    <Navbar className={navColour} fixed="top" expand="sm">
      <Navbar.Brand>
        <AnchorLink
          className={"nav-brand " + fontColour}
          to="/"
          title="JoshWF"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem>
            <AnchorLink
              className={"nav-link " + fontColour}
              to="/#about"
              title="About"
            />
          </NavItem>
          <NavItem>
            <AnchorLink
              className={"nav-link " + fontColour}
              to="/#projects"
              title="Projects"
            />
          </NavItem>
          <NavItem>
            <AnchorLink
              className={"nav-link " + fontColour}
              to="/#contacts"
              title="Contacts"
            />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
