import { graphql, useStaticQuery } from "gatsby";

export default () => useStaticQuery(graphql`{
    image: file(relativePath: { eq: "nozem-white-N.png" }) {
        childImageSharp {
            fluid(maxHeight: 80) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
}`);

