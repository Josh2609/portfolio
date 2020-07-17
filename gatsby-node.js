const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fs = require('fs')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// exports.createPages = async gatsbyContext => {
//   const { graphql } = gatsbyContext
 
//   const queryResult = await graphql(`
//     {
//       paginatedCollection(name: { eq: "blog-posts" }) {
//         id
//         pages {
//           id
//           nodes
//           hasNextPage
//           nextPage {
//             id
//           }
//         }
//       }
//     }
//   `)
 
//   const collection = queryResult.data.paginatedCollection
//   const dir = path.join(__dirname, 'public', 'paginated-data', collection.id)
//   fs.mkdirSync(dir, { recursive: true })
 
//   for (const page of collection.pages)
//     fs.writeFileSync(
//       path.resolve(dir, `${page.id}.json`),
//       JSON.stringify(page),
//     )
//  }
 
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.path}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const queryResult = await graphql(`
    {
      paginatedCollection(name: { eq: "blog-posts" }) {
        id
        pages {
          id
          nodes
          hasNextPage
          nextPage {
            id
          }
        }
      }
    }
  `)
  
  const collection = queryResult.data.paginatedCollection
  const dir = path.join(__dirname, 'public', 'paginated-data', collection.id)
  fs.mkdirSync(dir, { recursive: true })
 
  for (const page of collection.pages)
    fs.writeFileSync(
      path.resolve(dir, `${page.id}.json`),
      JSON.stringify(page),
    )

}