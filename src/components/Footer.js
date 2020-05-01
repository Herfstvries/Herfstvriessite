import React from "react"
import SocialIcons from "./SocialIcons";
import { Link } from "gatsby";
import Obfuscate from "react-obfuscate";
import Logo from "./Logo";

export default props => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="flexbox">
                    <div className="logo large">
                    <Logo />
                        <SocialIcons />
                    </div>
                    <div className="footer__contact">
                        <p>Oudegracht 245</p>
                        <p>3511 NL Utrecht</p>
                        <p>Tel: +31 0648124041</p>
                        <Obfuscate element="p" email="&#105;&#110;&#102;&#111;&#64;&#110;&#111;&#122;&#101;&#109;&#97;&#117;&#100;&#105;&#111;&#46;&#99;&#111;&#109;" />
                    </div>
                    <div className="logo small">
                        <Logo />
                        <SocialIcons />
                    </div>
                    <div className="footer__links">
                        <Link title="Home" to="/#">Home</Link>
                        <Link title="Portfolio" to="/#portfolio">Portfolio</Link>
                        <Link title="About us" to="/#about">About us</Link>
                        <Link title="Contact" to="/#contact">Contact</Link>
                    </div>
                </div>
            </div>
            <div className="copyright" align="center">
                <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><span className="separator-large">&nbsp;&nbsp;|&nbsp;&nbsp;</span><br className="separator-small" />Website by <a href="https://bttrcode.nl" title="bttrcode.nl" >bttrcode.nl</a></p>
            </div>
        </footer>
    );
};
