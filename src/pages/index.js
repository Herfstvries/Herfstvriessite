import React from "react"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import ProjectsV2 from "../components/ProjectsV2"
import SEO from "../components/SEO"
import Contact from "../components/Contact"
import Icons from "../components/Icons"
import About from "../components/About"
import Footer from "../components/Footer";

import getHomeData from "../queries/getHomeData";
import getProjects from "../queries/getProjects";
import getHighlights from "../queries/getHighlights";

export default props => {

    const { data: { frontmatter: data } } = getHomeData();
    const { projects: { edges: projects } } = getProjects();
    const { highlights: { edges: highlights } } = getHighlights();

    const { highlight1, highlight2, highlight3, highlight1Description, highlight2Description, highlight3Description } = highlights[0].node.frontmatter
    const highlightedProjects = [highlight1, highlight2, highlight3].map(highlight => projects.find( project => project.node.frontmatter.title === highlight));

    return (
        <>
        <SEO pageData={ data } />
        <Hero image={ data.backgroundImage.childImageSharp.fluid } />
        <About />
        <Projects projects={ highlightedProjects } descriptions={ [highlight1Description, highlight2Description, highlight3Description] } />
        <Icons />
        <ProjectsV2 projects={ projects } />
        <Contact />
        <Footer />
        </>
    )
};
