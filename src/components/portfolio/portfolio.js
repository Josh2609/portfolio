import React, { useState, useCallback } from 'react'
import { Link, graphql, withPrefix } from 'gatsby'
import "./portfolio.css"
import Img from "gatsby-image"

export default function Portfolio({ data, pages }) {
  console.log(pages)
  const initialPage = pages
  const [latestPage, setLatestPage] = useState(initialPage)
  const [blogPosts, setBlogPosts] = useState(initialPage.nodes)

  const loadNextPage = useCallback(async () => {
    if (!latestPage.hasNextPage) return
 
    const collectionId = latestPage.collection.id
    const nextPageId = latestPage.nextPage.id
    const path = withPrefix(
      `/paginated-data/${collectionId}/${nextPageId}.json`,
    )
 
    const res = await fetch(path)
    const json = await res.json()
 
    setBlogPosts(state => [...state, ...json.nodes])
    setLatestPage(json)
  }, [latestPage])

  return (
    <div>
      <section id="projects" className="section projects">
        <h2 className="text-center">PROJECTS</h2>
        <div className="section-content">
          <div className="project-list">

          {blogPosts.map(blogPost => (
            <a
            className="single-card"
            href={blogPost.url}
            key={blogPost.id}
          >
            <div className="card-img">
                  <img src={blogPost.imagePath}/>
                </div>
                <div className="blue-divider" />
                <div className="card-info">
                  <h4 className="card-name">{blogPost.title}</h4>
                  <p>{blogPost.excerpt}</p>
                </div>
            </a>

         
       ))}

{latestPage.hasNextPage && (
       <button className="blog-posts__load-more" onClick={loadNextPage}>
         Load more
       </button>
     )}
            {data.edges.map(({ node }) => (
              <a
                className="single-card"
                href={node.fields.slug}
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
                <div className="blue-divider" />
                <div className="card-info">
                  <h4 className="card-name">{node.frontmatter.title}</h4>
                  <p>{node.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
