import { graphql, useStaticQuery } from "gatsby";

export default () => useStaticQuery(graphql`{
    image: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
            fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
}`);
