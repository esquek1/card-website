import React, { useState } from "react";
import "./App.css";
import card_reena from "./assets/card_reena.png";
import card_rizzy from "./assets/card_rizzy.png";
import card_leandro from "./assets/card_leandro.png";
import card_julienne from "./assets/card_julienne.png";
import card_hya from "./assets/card_hya.png";
import card_kelly from "./assets/card_kelly.png";
import backgroundImg from "./assets/background.jpg";

function App() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    // Function to handle the click and set the active card index
    const handleClick = (index: number) => {
        setActiveCard(index);
    };
    const cards = [
        card_reena,
        card_rizzy,
        card_leandro,
        card_julienne,
        card_hya,
        card_kelly,
    ];

    return (
        <div className="banner">
            <div
                className="slider"
                style={{ "--quantity": cards.length } as React.CSSProperties}>
                {cards.map((card, index) => {
                    const isActive = activeCard === index;
                    return (
                        <div
                            key={index}
                            className={`card-item ${
                                isActive ? "slide-fwd active" : ""
                            }`}
                            style={
                                {
                                    "--position": index + 1,
                                } as React.CSSProperties
                            }
                            onClick={() => handleClick(index)}>
                            <img src={card} alt={`card-${index + 1}`} />
                        </div>
                    );
                })}
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
