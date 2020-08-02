import React from 'react'
import "./portfolio.css"
import Img from "gatsby-image"
import { Link } from 'gatsby';

export default function Portfolio({ data }) {
  return (
      <section id="projects" className="section projects">
        <h2 className="text-center">PROJECTS</h2>
        <div className="section-content">
          <div className="project-list">
            {data.edges.map(({ node }) => (
              <Link 
                className="single-card"
                to={node.fields.slug}
                key={node.fields.slug}
              >
                <div className="card-img">
                  <Img
                    title={node.frontmatter.title}
                    alt="Screenshot of Project"
                    sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
                    className="card-img_src center-block"
                  />
                </div>
                <div className="card-divider" />
                <div className="card-info">
                  <h4 className="card-name">{node.frontmatter.title}</h4>
                  <p>{node.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
  )
}
