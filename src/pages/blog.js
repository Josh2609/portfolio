// src/pages/blog.js

import React, { useState, useCallback } from 'react'
import { Link, graphql, withPrefix } from 'gatsby'

const BlogPage = ({ data }) => {
 const initialPage = data.paginatedCollectionPage
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
   <div className="blog-posts">
     <ul className="blog-posts__list">
       {blogPosts.map(blogPost => (
         <li key={blogPost.id} className="blog-posts__list__post">
           <Link to={blogPost.url}>{blogPost.title}</Link>
         </li>
       ))}
     </ul>
     {latestPage.hasNextPage && (
       <button class="blog-posts__load-more" onClick={loadNextPage}>
         Load more
       </button>
     )}
   </div>
 )
}

export default BlogPage

export const query = graphql`
 {
   paginatedCollectionPage(
     collection: { name: { eq: "blog-posts" } }
     index: { eq: 0 }
   ) {
     nodes
     hasNextPage
     nextPage {
       id
     }
     collection {
       id
     }
   }
 }
`