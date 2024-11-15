import React from "react";
import headerBackground from "../assets/star.png";
import headerText from "../assets/header-text.png";
import "../css/Header.css";
function Header() {
    return (
        <div className="header-container">
            <img className="header-background" src={headerBackground} alt="" />
            <div className="header-content">
                <h1>HELLO! IM:</h1>
                <img className="header-text" src={headerText} alt="" />
            </div>
        </div>
    );
}

export default Header;
