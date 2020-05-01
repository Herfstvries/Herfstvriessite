import React from "react";
import Image from "gatsby-image";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

export default props => (
    <div className="homepage">
        <header className="hero">
            <div className="container">
                <div className="hero__content">
                    <Logo />
                    <h3 className="top">music and sound for</h3>
                    <h3 className="bottom">immersive experiences</h3>
                </div>
                <SocialIcons />
            </div>
            <div className="hero__overlay" />
            <div className="hero__image">
                <Image style={{ height: '100%' }} fluid={ props.image } />
            </div>
        </header>
    </div>
);
