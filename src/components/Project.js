import React from "react";
import Image from "gatsby-image";
import Link from "gatsby-plugin-transition-link/AniLink";

import { accentColor } from "../constants/constants";

export default props => (
    <div className="col-lg-4 col-12">
        <div className="project-card">
            <Link title={ props.project.frontmatter.title } cover bg={ accentColor } to={ props.project.fields.slug } >
                <div className="image-wrapper">
                    <div className="overlay" />
                    <Image className="project" fluid={ props.project.frontmatter.backgroundImage.childImageSharp.fluid } />
                </div>
            </Link>
            <div className="project-card__content">
                <div className="project-card__description">
                    <h3>{ props.project.frontmatter.title }</h3>
                    <p>{ props.description }</p>
                </div>
                <div className="project-card__link">
                    <Link title={ props.project.frontmatter.title } cover bg={ accentColor } to={ props.project.fields.slug } >
                        <p>Learn more &raquo;</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);
