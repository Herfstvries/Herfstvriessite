import React from "react";
import { Link } from "gatsby";

export default props => (
    <div className={ `navigation${ props.open ? " visible": "" }` } >
        <ul className="navigation__list">
            <li><Link onClick={ props.closeNav } title="Home" to="/">Home</Link></li>
            <li><Link onClick={ props.closeNav } title="About us" to="/#about">About us</Link></li>
            <li><Link onClick={ props.closeNav } title="Portfolio" to="/#portfolio">Portfolio</Link></li>
            <li><Link onClick={ props.closeNav } title="Contact" to="/#contact">Contact</Link></li>
        </ul>
    </div>
);
