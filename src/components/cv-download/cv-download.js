import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import './cv-download.css'

export default function CV() {
  return (
    <section className="CV">
      <h2 className="text-center">tess</h2>
      <button className="btn"><i className="fa fa-download"></i>Download CV</button>
    </section>
  )
}
