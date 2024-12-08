import React from "react";
import QR_background from "../assets/QR_background.png";
import QR from "../assets/QR.png";
import "../css/Footer.css";
function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-background">
                <img src={QR_background} alt="QR background" />
            </div>
            <div className="qr">
                <img src={QR} alt="QR" />
            </div>
        </div>
    );
}

export default Footer;
