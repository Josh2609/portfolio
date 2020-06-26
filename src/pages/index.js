import React from "react"
import { graphql } from "gatsby"
import Cover from "../components/cover/cover"
import NavBar from "../components/navbar/navbar"
import "./index.css"
import Portfolio from "../components/portfolio/portfolio"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <Cover data={data.coverImg} />
      <NavBar />
      <Portfolio data={data.projectData} />
    </div>
  )
}

export const query = graphql`
  query {
    coverImg: file(relativePath: { eq: "changsha.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 6000) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    projectData: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
