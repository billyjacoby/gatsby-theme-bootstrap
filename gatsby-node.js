/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const PageTemplate = require.resolve("./src/templates/pageWithLayout.js")

//   return graphql(`
//     query {
//       pages: allSitePage {
//         edges {
//           node {
//             path
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     const Pages = result.data.pages.edges
//     Pages.forEach(page => {
//       createPage({
//         path: `/${page.node.path}`,
//         component: PageTemplate,
//         context: {
//           stuff: "andThings",
//         },
//       })
//     })
//   })
// }
