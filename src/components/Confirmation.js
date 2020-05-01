import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink";

export default props => (
    <section className="confirmation">
        <div className="container">
            <h1>We will get back to you ASAP!</h1>
            <p>
                Thanks for contacting us! We'll get back to you as soon as we can! You can click&nbsp;
                <Link fade to="/">
                    here
                </Link>
                &nbsp;to go back to the home page!
            </p>
        </div>
    </section>
);
