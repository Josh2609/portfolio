import React from "react"
import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope,
  faFileDownload,
  faBlog,
} from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col } from "react-bootstrap"

export default function Contact() {
  const iconColor = "#9370db"
  const iconSize = "3x"
  
  return (
    <section id="contacts" className="section CV">
      <div className="text-center section-content">
        <h2>Contact</h2>
        <Container>
          <Row>
            <Col className="contact-item" sm={2}>
              <a href="cv.pdf" target="_blank">
                <FontAwesomeIcon
                  icon={faFileDownload}
                  color={iconColor}
                  size={iconSize}
                />
              </a>
            </Col>
            <Col className="contact-item" sm={2}>
              <a
                href="https://github.com/Josh2609"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  color={iconColor}
                  size={iconSize}
                />
              </a>
            </Col>
            <Col className="contact-item" sm={2}>
              <a
                href="https://www.linkedin.com/in/josh-corps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  color={iconColor}
                  size={iconSize}
                />
              </a>
            </Col>
            <Col className="contact-item" sm={2}>
              <a
                href="https://www.instagram.com/joshcorps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  color={iconColor}
                  size={iconSize}
                />
              </a>
            </Col>
            <Col className="contact-item" sm={2}>
              <a href="mailto:contact@josh.wf">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={iconColor}
                  size={iconSize}
                />
              </a>
            </Col>
            <Col className="contact-item" sm={2}>
              <FontAwesomeIcon
                icon={faBlog}
                color={iconColor}
                size={iconSize}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}
