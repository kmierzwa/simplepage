import React from 'react';
import Fade from  'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue"> Simple Page</div>
                <div className="footer_copyright">
                    SP
                </div>
            </Fade>


        </footer>
    );
};

export default Footer;