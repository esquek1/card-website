import React, { useState } from "react";

import card_reena from "../assets/card_reena.png";
import card_rizzy from "../assets/card_rizzy.png";
import card_leandro from "../assets/card_leandro.png";
import card_julienne from "../assets/card_julienne.png";
import card_hya from "../assets/card_hya.png";
import card_kelly from "../assets/card_kelly.png";
import card_title from "../assets/trading_cards.png";
import "../css/Card.css";

function Cards() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    // Function to handle the click and set the active card index
    const handleClick = (index: number) => {
        setActiveCard(index);
    };
    return (
        <div className="card-container">
            <div className="card-content">
                <div
                    className="card"
                    style={{ "--position": -2 } as React.CSSProperties}>
                    <img src={card_kelly} alt="" />
                </div>
                <div
                    className="card"
                    style={{ "--position": -1 } as React.CSSProperties}>
                    <img src={card_julienne} alt="" />
                </div>
                <div
                    className="card"
                    style={{ "--position": 0 } as React.CSSProperties}>
                    <img src={card_hya} alt="" />
                </div>
                <div
                    className="card"
                    style={{ "--position": 1 } as React.CSSProperties}>
                    <img src={card_rizzy} alt="" />
                </div>
                <div
                    className="card"
                    style={{ "--position": 2 } as React.CSSProperties}>
                    <img src={card_leandro} alt="" />
                </div>
                <div
                    className="card"
                    style={{ "--position": 3 } as React.CSSProperties}>
                    <img src={card_reena} alt="" />
                </div>
            </div>
            <div className="card-text">
                <div className="card-title">
                    <img src={card_title} alt="Illustrative Trading Cards" />
                </div>
                <h2 className="card-subheading">
                    Aren't my friends
                    <br /> and i so cute?!
                </h2>
                <p className="card-description">
                    Each card represents each person's personality
                    <br /> and interests, best encapsulating who they are
                </p>
            </div>
        </div>
    );
}

export default Cards;
