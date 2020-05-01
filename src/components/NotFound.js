import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink";

export default props => (
    <section className="not-found">
        <div className="container">
            <h1>Page not found...</h1>
            <p>The page you requested couln't be found! Please check the link for any typo's, or click&nbsp;
                <Link fade to="/">
                    here
                </Link>
                &nbsp;to go back to the home page!
            </p>
        </div>
    </section>
);
