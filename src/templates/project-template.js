import React from "react";
import ProjectDisplay from "../components/ProjectDisplay";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import Footer from "../components/Footer";

export const data = graphql`query ($slug: String!) {
    project: markdownRemark (fields: { slug: { eq: $slug} } ) {
        html
        frontmatter {
            title
            shortTitle
            description
            backgroundImage {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    }
}`

export default props => {
    const { title: seoSubtitle, description: seoDescription } = props.data.project.frontmatter;

    return (
        <>
        <SEO pageData={ {seoSubtitle, seoDescription} } />
        <ProjectDisplay project={ props.data.project } />
        <Footer />
        </>
    );
};
