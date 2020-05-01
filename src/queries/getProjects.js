import { graphql, useStaticQuery } from "gatsby";

export default () => useStaticQuery(graphql`{
    projects: allMarkdownRemark ( filter: {frontmatter: { type: { eq: "project" } } } ) {
        edges {
            node {
                fields {
                    slug
                }
                html
                frontmatter {
                    title
                    shortTitle
                    description
                    backgroundImage {
                        childImageSharp {
                            fluid(maxWidth: 700, maxHeight:300, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
}`);

