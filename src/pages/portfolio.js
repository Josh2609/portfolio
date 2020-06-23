import React from "react"
import { Link, graphql } from "gatsby"

export default function Portfolio({ data }) {
  return (
      <div>
        <h1>
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.totalCount} Posts</h4>
        {data.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
  )
}
