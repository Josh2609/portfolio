import React from "react"
import { Link, graphql } from "gatsby"
import "./portfolio.css"
import { Card, CardDeck } from "react-bootstrap"

export default function Portfolio({ data }) {
  return (
    <div className="wrapper">
      <CardDeck>
      {data.edges.map(({ node }) => (
        <Card key={node.id}  className="mb-2">
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Link to={node.fields.slug} class="stretched-link" />
            <Card.Title>{node.frontmatter.title} </Card.Title>
            <Card.Text>{node.excerpt}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      </CardDeck>
      <div className="row">
          <div className=" col-12 col-md-4 col-lg-4 offset-lg-1">
            <div className="box">
              <h5>Toolbox</h5>
              <p>
                <b>Languages and Frameworks:</b> Javascript, HTML5, CSS3, React,
                Bootstrap, Node, Express, MongoDB, Rails, Postgres, Jest
                <br />
                <b>IDE:</b> Microsoft VS Code
                <br />
                <b>VCS:</b> Git/Github
                <br />
                <b>PMS:</b> Trello
                <br />
                <b>Debugger:</b> Chrome DevTools
                <br />
              </p>
            </div>
          </div>
          </div>
      <div className="container">
        <h1>Amazing Pandas Eating Things</h1>
        <h4>{data.totalCount} Posts</h4>
        {data.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
