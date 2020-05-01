import React, { useState } from "react";
import NavigationOverlay from "./NavigationOverlay.js";
import N from "./N.js";

export default props => {

    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!open);
    };

    const closeNav = () => {
        setOpen(false);
    };

    return (
        <nav className="container-fluid" >
            <NavigationOverlay open={ open } closeNav={ closeNav } />
            <div className="menu-item logo-n float-left">
                <div className="circle"><N /></div>
            </div>
            <div className="menu-item hamburger-item float-right">
                <div className="circle"></div>
                <div onClick={ () => { toggleNav() } } className={ `hamburger${ open ? " open" : "" }` } >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};
