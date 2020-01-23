/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const workshopTemplate = path.resolve(`src/templates/workshop.tsx`)

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/workshops/*.md" } }
        sort: { fields: [fileAbsolutePath] }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors
  }

  for (const edge of result.data.allMarkdownRemark.edges) {
    createPage({
      path: `${edge.node.frontmatter.slug}`,
      component: workshopTemplate,
      context: {
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
      },
    })
  }
}
