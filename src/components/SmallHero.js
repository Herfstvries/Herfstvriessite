import React from "react";
import Image from "gatsby-image";

export default props =>  (
    <div className="small-hero">
        <header className="hero">
            <div className="container">
                <div className="hero__content">
                    <h1>{ props.title }</h1>
                </div>
            </div>
            <div className="hero__overlay" />
            <div className="hero__image">
                <Image style={{ height: '100%' }} fluid={ props.image } />
            </div>
        </header>
    </div>
);
