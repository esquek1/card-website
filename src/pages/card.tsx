import card_reena from "./assets/card_reena.png";
import card_rizzy from "./assets/card_rizzy.png";
import card_leandro from "./assets/card_leandro.png";
import card_julienne from "./assets/card_julienne.png";
import card_hya from "./assets/card_hya.png";
import card_kelly from "./assets/card_kelly.png";

<div className="banner">
    <div className="container">
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
    <div className="artist-content"></div>
    <div className="content">
        <h1>ILLUSTRATIVE TRADING CARDS!</h1>
        <div className="designer">
            <h2>R. CASTILLO</h2>
            <p>
                <b>Web Design</b>
            </p>
        </div>
    </div>
</div>;
