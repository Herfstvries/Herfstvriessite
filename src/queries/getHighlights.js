import { graphql, useStaticQuery } from "gatsby";

export default () => useStaticQuery(graphql`{
    highlights: allMarkdownRemark (filter: { frontmatter: { type: { eq: "highlights" } } } ) {
        edges {
            node {
                frontmatter {
                    highlight1
                    highlight1Description
                    highlight2
                    highlight2Description
                    highlight3
                    highlight3Description
                }
            }
        }
    }
}`);

