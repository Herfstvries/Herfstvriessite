import React from "react";

export default props => (
    <div className="form-group">
        <label htmlFor={ props.name }>{ props.label }</label>
        <input
            value={ props.value }
            type={ props.type }
            onChange={ props.handler }
            placeholder={ props.placeholder }
            className="form-control"
            name={ props.name }
            id={ props.name } />
    </div>
);

