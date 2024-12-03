import React from "react";
import capstone_bg_img1 from "../assets/capstone_1.png";
import capstone_bg_img2 from "../assets/capstone_2.png";
import capstone_boardimg1 from "../assets/skateboard1.png";
import capstone_boardimg2 from "../assets/skateboard2.png";
import capstone_boardimg3 from "../assets/skateboard3.png";

import "../css/Capstone.css";
function Capstone() {
    return (
        <div className="capstone-container">
            <div className="capstone-content">
                <div className="capstone-text">
                    <h1>IYO</h1>
                    <h3>
                        filipino-american inspired custom skateboards, zine and
                        stickers! something worth celebrating and riding along
                        on
                    </h3>
                </div>
                <div className="capstone-images">
                    <div className="capstone-background">
                        <img src={capstone_bg_img1} alt="" />
                        <img src={capstone_bg_img2} alt="" />
                    </div>
                    <div className="capstone-foreground">
                        <img src={capstone_boardimg1} alt="" />
                        <img src={capstone_boardimg2} alt="" />
                        <img src={capstone_boardimg3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Capstone;
