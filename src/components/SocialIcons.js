import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default props => (
    <div className="social-icons">
        <div className="flex-container">
            <div className="icon-holder">
                <a title="Facebook" href="https://www.facebook.com/NozemAudio/?ref=bookmarks">
                    <FontAwesomeIcon icon={ faFacebook } className="icon" />
                </a>
            </div>
            <div className="icon-holder">
                <a title="Soundcloud" href="https://soundcloud.com/user-402228982">
                    <FontAwesomeIcon icon={ faSoundcloud } className="icon" />
                </a>
            </div>
            <div className="icon-holder">
                <a title="Instagram" href="https://www.instagram.com/nozemaudio/">
                    <FontAwesomeIcon icon={ faInstagram } className="icon" />
                </a>
            </div>
        </div>
    </div>
);
