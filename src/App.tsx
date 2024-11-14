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

    return (
        <div className="app">
            <h1>HELLO! IM:</h1>
            <h2>REENA CASTILLO</h2>
            <h3>SENIOR DESIGN STUDENT</h3>
            <div className="about">
                I’m a queer Filipino native
                <br /> to Los Angeles, and
                <br />
                illustrations are my jam.
                <br /> I’m always looking for
                <br />
                ways to infuse that
                <br />
                creative spark into my
                <br />
                work. When I’m not
                <br />
                designing, you’ll find me
                <br />
                hanging out with animals
                <br />
                (specifically my cats),
                <br />
                cooking up new recipes,
                <br />
                listening to new music,
                <br />
                sampling delicious foods,
                <br />
                getting competitive in
                <br />
                first-person shooter
                <br />
                games, or losing myself
                <br />
                in a good puzzle. Life’s too
                <br />
                short for boring hobbies!
            </div>
            <div className="banner">
                <div className="model">
                    <img src={backgroundImg} />
                </div>
                <div className="container">
                    <div className="card-title">
                        <h1>ILLUSTRATIVE TRADING CARDS!</h1>
                    </div>
                    <div
                        className="card"
                        style={{ "--position": -4 } as React.CSSProperties}>
                        <img src={card_reena} alt="" />
                    </div>
                    <div
                        className="card"
                        style={{ "--position": -3 } as React.CSSProperties}>
                        <img src={card_reena} alt="" />
                    </div>
                    <div
                        className="card"
                        style={{ "--position": -2 } as React.CSSProperties}>
                        <img src={card_leandro} alt="" />
                    </div>
                    <div
                        className="card"
                        style={{ "--position": -1 } as React.CSSProperties}>
                        <img src={card_leandro} alt="" />
                    </div>
                    <div
                        className="card"
                        style={{ "--position": 0 } as React.CSSProperties}>
                        <img src={card_hya} alt="" />
                    </div>
                    <div
                        className="card"
                        style={{ "--position": 1 } as React.CSSProperties}>
                        <img src={card_hya} alt="" />
                    </div>
                    <div
                        className="card"
                        style={{ "--position": 2 } as React.CSSProperties}>
                        <img src={card_rizzy} alt="" />
                    </div>
                    <div
                        className="card"
                        style={{ "--position": 3 } as React.CSSProperties}>
                        <img src={card_kelly} alt="" />
                    </div>
                    <div
                        className="card"
                        style={{ "--position": 4 } as React.CSSProperties}>
                        <img src={card_julienne} alt="" />
                    </div>
                </div>

                <div className="content">
                    <h1>TRADING CARDS </h1>
                    <div className="designer">
                        <h2>R. CASTILLO</h2>
                        <p>
                            <b>Web Design</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
