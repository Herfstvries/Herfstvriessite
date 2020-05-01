import React from "react";

import ProjectV2 from "./ProjectV2";
import YourProjectHere from "./YourProjectHere";

export default props => {
    
    return (
        <section className="projects-v2">
            <div className="anchor" id="portfolio"></div>
            <div className="fullscreen-projects">
                <div className="row">
                    { props.projects.map( ( project, index) => <ProjectV2 key={ project.node.frontmatter.title } project={ project.node } index={ index } /> ) }
                    <YourProjectHere extraClass={ `col${ props.projects.length % 4 }` } />
                </div>
            </div>
        </section>
    );
};
