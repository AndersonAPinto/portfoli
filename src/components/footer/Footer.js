import React, { useState } from "react";
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
    const [isUnder, setIsUnder] = useState();

    const mouseIn = () => {
        setIsUnder(true);
    };

    const mouseOut = () => {
        setIsUnder(false);
    }

    return (
        <footer>
            <div className="containerfooter">
                <div className="menufooter" >
                   <p>AASP - 2024</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;