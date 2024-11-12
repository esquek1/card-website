import React from "react";
import "./App.css";
import card_reena from "./assets/card_reena.png";
import card_rizzy from "./assets/card_rizzy.png";
import card_leandro from "./assets/card_leandro.png";
import card_julienne from "./assets/card_julienne.png";
import card_hya from "./assets/card_hya.png";
import card_kelly from "./assets/card_kelly.png";
import backgroundImg from "./assets/background.jpg";

function App() {
    return (
        <div className="banner">
            <div
                className="slider"
                style={{ "--quantity": 6 } as React.CSSProperties}>
                <div
                    className="card-item"
                    style={{ "--position": 1 } as React.CSSProperties}>
                    <img src={card_reena} alt="" />
                </div>
                <div
                    className="card-item"
                    style={{ "--position": 2 } as React.CSSProperties}>
                    <img src={card_rizzy} alt="" />
                </div>
                <div
                    className="card-item"
                    style={{ "--position": 3 } as React.CSSProperties}>
                    <img src={card_leandro} alt="" />
                </div>
                <div
                    className="card-item"
                    style={{ "--position": 4 } as React.CSSProperties}>
                    <img src={card_julienne} alt="" />
                </div>
                <div
                    className="card-item"
                    style={{ "--position": 5 } as React.CSSProperties}>
                    <img src={card_hya} alt="" />
                </div>
                <div
                    className="card-item"
                    style={{ "--position": 6 } as React.CSSProperties}>
                    <img src={card_kelly} alt="" />
                </div>
            </div>

            <div className="content">
                <h1>CARD DESIGN</h1>
                <div className="designer">
                    <h2>R. CASTILLO</h2>
                    <p>
                        <b>Web Design</b>
                    </p>
                </div>
            </div>
            <div className="model">
                <img src={backgroundImg} />
            </div>
        </div>
    );
}

export default App;
