import React from "react";
import Image from "gatsby-image";
import Link from "gatsby-plugin-transition-link/AniLink";
import { accentColor } from "../constants/constants";

export default props => (
    <Link title={ props.project.frontmatter.title } cover bg={ accentColor } tag="div" to={ props.project.fields.slug } className="project-card">
        <div className="project-card__content">
            <h3>{ props.project.frontmatter.shortTitle }</h3>
        </div>
        <div className="project-card__hidden-content">
            <h3>{ props.project.frontmatter.title }</h3>
            <p>{ props.project.frontmatter.description }</p>
        </div>
        <div className="overlay" />
        <Image className="project" fluid={ props.project.frontmatter.backgroundImage.childImageSharp.fluid } />
    </Link>
);
