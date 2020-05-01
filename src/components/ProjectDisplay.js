import React from "react";
import SmallHero from "./SmallHero";
import ProjectDescription from "./ProjectDescription";

export default props => (
    <div className="project-page">
        <SmallHero title={ props.project.frontmatter.title } image={ props.project.frontmatter.backgroundImage.childImageSharp.fluid } />
        <ProjectDescription project={ props.project } />
    </div>
);


