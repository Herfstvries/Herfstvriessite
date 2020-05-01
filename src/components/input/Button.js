import React from "react";

export default props => (
    <button type={ props.type } className="btn btn-primary" name={ props.name } id={ props.name }>
        { props.value }
    </button>
);

