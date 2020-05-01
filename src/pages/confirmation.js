import React from "react";

import SmallHero from "../components/SmallHero"
import Footer from "../components/Footer";
import Confirmation from "../components/Confirmation"
import getBackgroundImage from "../queries/getBackgroundImage";

export default props => {
    const { backgroundImage: { childImageSharp: { fluid: image } } } = getBackgroundImage();

    return (
        <>
        <SmallHero title="Thank you for your message!" image={ image } />
        <Confirmation />
        <Footer />
        </>
    );
};
