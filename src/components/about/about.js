import React from "react"
import "./about.css"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faNodeJs,
  faJava,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faCode, faGlobe } from "@fortawesome/free-solid-svg-icons"

export default function About() {
  const iconColor = "#9370db"
  const iconSize = "1x"

  return (
    <section id="about" className="section about">
      <h2 className="text-center">ABOUT ME</h2>
      <div className="section-content">
        <Container>
          <Row>
            <Col md={6} className="about-container">
            <h2 className="text-center">Introduction</h2>
              <p>
                Hi, my name is Josh Corps. I'm a full-stack software developer
                based in the UK. I'm passionate about ...
              </p>
              <p>My work includes</p>
            </Col>
            <Col md={6} className="skills-container">
              <h2 className="text-center">Toolbox</h2>
              <h4>
                <FontAwesomeIcon
                  icon={faCode}
                  color={iconColor}
                  size={iconSize}
                />{" "}
                Languages
              </h4>
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
              </ul>
              <h4>
                <FontAwesomeIcon
                  icon={faDatabase}
                  color={iconColor}
                  size={iconSize}
                />{" "}
                Databases
              </h4>
              <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>SQLite</li>
              </ul>
              <h4>
                <FontAwesomeIcon
                  icon={faGlobe}
                  color={iconColor}
                  size={iconSize}
                />{" "}
                Web
              </h4>
              <p>React, Node.js, Gatsby, </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}
