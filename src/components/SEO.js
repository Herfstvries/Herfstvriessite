import React from "react";
import { Helmet } from "react-helmet";
import getMetadata from "../queries/getMetadata";

export default props => {
    const { settings: { frontmatter: base } } = getMetadata();

    const title = `${base.seoTitle} ${base.delimiter} ${props.pageData.seoSubtitle}`;
    const description = props.pageData.seoDescription || base.seoDescription;
    const baseKeywords = base.seoKeywords.join(", ");
    const additionalKeywords = props.pageData.seoKeywords ? props.pageData.seoKeywords.join(", ") : [];
    const keywords = [baseKeywords, additionalKeywords].join(", ");
    const url = "https://www.nozemaudio.com";

    return (
        <Helmet>
            <title>{ title }</title>
            <meta name="description" content={ description } />
            <meta name="keywords" content={ keywords } />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:url" content={ url } />}
            <meta property="og:title" content={ title } />}
            <meta property="og:description" content={ description } />
            <meta name="twitter:title" content={ title } />
            <meta name="twitter:description" content={ description } />
            <html lang="en" />
        </Helmet>
    );
};
