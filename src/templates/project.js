import React from "react"
import { graphql } from "gatsby"
import "./project.css"
import NavBar from "../components/navbar/navbar"
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Project({ data }) {
  const post = data.markdownRemark
  return (
      <Container fluid className="main">
        <NavBar />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`