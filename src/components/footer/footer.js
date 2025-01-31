import React, { useState } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-display">
                <div className="footer-description">
                    <div className="footer-desc-left">
                        <h1><u>Developers Contact</u></h1>
                        <p>This website is designed and developed by ABCDEF for Dr. Shailesh Kumar Samal.</p>
                        <p><a href=""><i className="fab fa-instagram"></i> Kreet_0308</a></p>
                        <p><a href="#"><i className="fab fa-linkedin"></i> Kreet_0308</a></p>
                        <p><a href="#"><i className="fa fa-globe"></i> www.kreetrout.com</a></p>

                    </div>
                    <div className="footer-desc-right"> To connect with Dr. Shailesh Kumar samal <Link to="/Dr_Sailesh_Samal_Portfolio/contact">Click Here!</Link> </div>
                </div>
                <div className="copyright">
                    <p>© 2025 Kreet Rout | All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;