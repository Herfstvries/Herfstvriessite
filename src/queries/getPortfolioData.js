import { graphql, useStaticQuery } from "gatsby";

export default () => useStaticQuery(graphql`{
    data: markdownRemark(frontmatter: { type: { eq: "page" }, page: {eq: "portfolio" } } ) {
        frontmatter {
            seoSubtitle
            seoDescription
            seoKeywords
            backgroundImage {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    }
}`);

