import React from "react"
import { graphql } from "gatsby"
import Cover from "../components/cover/cover"
import NavBar from "../components/navbar/navbar"
import "./index.css"
import Portfolio from "../components/portfolio/portfolio"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import CV from "../components/cv-download/cv-download"


export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <Cover data={data.coverImg} />
      <Container fluid>
        <NavBar />
        <Portfolio data={data.projectData}/>
        <CV />
      </Container>
    </div>
  )
}

export const query = graphql`
  query {
    coverImg: file(relativePath: { eq: "img2.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 6000) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    projectData: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 1500, maxHeight: 1500) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
