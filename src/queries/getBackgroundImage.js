import { graphql, useStaticQuery } from "gatsby";

export default () => useStaticQuery(graphql`{
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}`);
