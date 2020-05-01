import React from "react";

import Project from "./Project";

export default props => (
    <section id="recent-projects" className="projects">
        <h2>Recent projects</h2>
        <div className="container">
            <div className="row">
                <Project key={ props.projects[0].node.frontmatter.title } description={ props.descriptions[0] } project={ props.projects[0].node } />
                <Project key={ props.projects[1].node.frontmatter.title } description={ props.descriptions[1] } project={ props.projects[1].node } />
                <Project key={ props.projects[2].node.frontmatter.title } description={ props.descriptions[2] } project={ props.projects[2].node } />
            </div>
        </div>
    </section>
);

