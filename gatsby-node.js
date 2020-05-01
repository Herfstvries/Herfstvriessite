const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    fmImagesToRelative(node);

    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: `projects` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });

        if (node.frontmatter.backgroundImage) {
            createNodeField({
                node,
                name: 'image',
                value: "src" + node.frontmatter.backgroundImage
            });
        }
    }
};

exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;
    const { data: { pages: { edges: pages } } } = await graphql(`query {
      pages: allMarkdownRemark ( filter: {frontmatter: { type: { eq: "project" } } } ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }`);

    pages.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/project-template.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    });
};
