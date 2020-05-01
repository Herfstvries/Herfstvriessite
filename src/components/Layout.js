import "../scss/main.scss";
import React from "react";
import NavBar from "./NavBar";

export default props => (
    <>
    <NavBar fold={ props.fold } />
    { props.children }
    </>
);
