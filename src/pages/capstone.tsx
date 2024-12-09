import React from "react";
import capstone_bg_img1 from "../assets/capstone_1.png";
import capstone_bg_img2 from "../assets/capstone_2.png";
import capstone_boarding1 from "../assets/skateboard1.png";
import capstone_boarding2 from "../assets/skateboard2.png";
import capstone_boarding3 from "../assets/skateboard3.png";

import "../css/Capstone.css";
function Capstone() {
    return (
        <div className="capstone-container">
            <div className="capstone-background">
                <div className="capstone-text">
                    <div className="capstone-title">
                        <h1>IYO</h1>
                    </div>
                    <div className="capstone-description">
                        <p>
                            filipino-american inspired custom skateboards,
                            <br />
                            zine and stickers! something worth celebrating
                            <br />
                            and riding along on
                        </p>
                    </div>
                </div>
                <div className="capstone-background-images">
                    <img src={capstone_bg_img1} alt="" />
                    <img src={capstone_bg_img2} alt="" />
                </div>
            </div>

            <div className="capstone-foreground">
                <div className="board" id="board1">
                    <img src={capstone_boarding1} alt="OHMYGULAY Skateboard" />
                </div>
                <div className="board" id="board2">
                    <img
                        src={capstone_boarding2}
                        alt="White Rabbit Skateboard"
                    />
                </div>
                <div className="board" id="board3">
                    <img
                        src={capstone_boarding3}
                        alt="Lahat Para Sa Iyo Skateboard"
                    />
                </div>
            </div>

            {/* <div className="capstone-content">
                <div className="capstone-text">
                    <div className="capstone-title">
                        <h1>IYO</h1>
                    </div>
                    <div className="capstone-description">
                        <p>
                            filipino-american inspired custom skateboards,
                            <br />
                            zine and stickers! something worth celebrating
                            <br />
                            and riding along on
                        </p>
                    </div>
                </div>
                <div className="capstone-images">
                    <div className="capstone-background">
                        <img src={capstone_bg_img1} alt="" />
                        <img src={capstone_bg_img2} alt="" />
                    </div>
                    <div className="capstone-foreground">
                        <div className="board" id="board1">
                            <img src={capstone_boarding1} alt="" />
                        </div>
                        <div className="board" id="board2">
                            <img src={capstone_boarding2} alt="" />
                        </div>
                        <div className="board" id="board3">
                            <img src={capstone_boarding3} alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Capstone;
