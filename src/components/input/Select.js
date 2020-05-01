import React from "react";

export default props => {

    /*
     * Turns list of options into list of option elements, and sets a blank value is requested.
     */
    const getOptions = () => {
        let options = props.collection.map( x => <option key={ x.value } value={ x.value }>{ x.label }</option> )

        if (props.blank !== undefined)
            options.unshift( <option key="blank" value="">{ props.blank }</option> );

        return options;
    };

    return (
        <div className="form-group">
            <label htmlFor={ props.name }>{ props.label }</label>
            <select name={ props.name } id={ props.name } onChange={ props.handler } value={ props.value } >
                { getOptions() } 
            </select>
        </div>
    );
};
