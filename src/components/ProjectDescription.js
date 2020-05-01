import React from "react";

export default props => (
    <section className="description">
        <div className="container">
            <h3>{ props.project.frontmatter.description }</h3>
            <div
                className="html-content"
                dangerouslySetInnerHTML={ { __html: props.project.html } }
            />
        </div>
    </section>
);

