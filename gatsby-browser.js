import React from "react";
import Layout from "./src/components/Layout";

// Wrap with Layout component.
export const wrapPageElement = props => (
    <Layout>
        { props.element }
    </Layout>
);

// Polyfill IntersectionObserver.
export const onClientEntry = () => {
    if (typeof window.IntersectionObserver === `undefined`) {
        import(`intersection-observer`);
    }
};
