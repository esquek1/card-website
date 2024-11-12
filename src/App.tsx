import React from "react";
import "./App.css";
import card_reena from "./assets/card_reena.png";
import card_rizzy from "./assets/card_rizzy.png";
import card_leandro from "./assets/card_leandro.png";
import card_julienne from "./assets/card_julienne.png";
import card_hya from "./assets/card_hya.png";
import card_kelly from "./assets/card_kelly.png";

function App() {
    return (
        <div className="banner">
            <div className="slider">
                <div className="card-item">
                    <img src={card_reena} alt="" />
                </div>
                <div className="card-item">
                    <img src={card_rizzy} alt="" />
                </div>
                <div className="card-item">
                    <img src={card_leandro} alt="" />
                </div>
                <div className="card-item">
                    <img src={card_julienne} alt="" />
                </div>
                <div className="card-item">
                    <img src={card_hya} alt="" />
                </div>
                <div className="card-item">
                    <img src={card_kelly} alt="" />
                </div>
            </div>
        </div>
    );
}

export default App;
