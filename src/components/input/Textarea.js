import React from "react";

export default props => (
    <div className="form-group">
        <label htmlFor={ props.name }>{ props.label }</label>
        <textarea
            value={ props.value }
            onChange={ props.handler }
            type={ props.type }
            placeholder={ props.placeholder }
            className="form-control"
            name={ props.name }
            id={ props.name }
            rows={ props.rows }
        >
        </textarea>
    </div>
);

