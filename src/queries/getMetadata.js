import { graphql, useStaticQuery } from "gatsby";

export default () => useStaticQuery(graphql`{
    settings: markdownRemark ( frontmatter: { type: { eq: "settings" } } ) {
        frontmatter {
            seoTitle
            seoDescription
            seoKeywords
            delimiter
        }
    }
}`);
