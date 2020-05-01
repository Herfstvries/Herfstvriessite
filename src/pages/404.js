import React from "react"
import NotFound from "../components/NotFound"
import SmallHero from "../components/SmallHero"
import Footer from "../components/Footer";
import getBackgroundImage from "../queries/getBackgroundImage";

export default props => {
    const { backgroundImage: { childImageSharp: { fluid: image } } } = getBackgroundImage();

    return (
        <>
        <SmallHero title="404" image={ image } />
        <NotFound />
        <Footer />
        </>
    );
};
