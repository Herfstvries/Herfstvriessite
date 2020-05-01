import React from "react";
import { Link } from "gatsby";

export default props => (
    <div className={ `your-project-here ${props.extraClass}` }>
        <div className="your-project-here__content">
            <h3>Your project here?</h3>
            <p>Please <Link title="Contact" to="/#contact">contact us</Link> and we'll see what we can do for you!</p>
        </div>
    </div>
);
