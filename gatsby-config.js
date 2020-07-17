const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.join(__dirname, `src`, `projects`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-paginated-collection',
      options: {
        pageSize: 1,
        name: 'blog-posts',
        query: `
          {
            allMarkdownRemark {
              nodes {
                id
                frontmatter {
                  path
                  title
                  excerpt
                  date(formatString: "DD MMMM, YYYY")
                  featuredImage {
                    absolutePath
                  }
                }
                fields {
                  slug
                }
              }
            }
          }
        `,
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            url: `/blog/${node.frontmatter.path}`,
            title: node.frontmatter.title,
            imagePath: node.frontmatter.featuredImage.absolutePath,
            excerpt: node.frontmatter.excerpt,
          })),
      },
    },
  ],
}
