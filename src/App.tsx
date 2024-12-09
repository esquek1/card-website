import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header.tsx";
import AboutPage from "./pages/about.tsx";
import Cards from "./pages/card.tsx";
import Capstone from "./pages/capstone.tsx";
import Footer from "./components/Footer.tsx";

// Stickers
import sticker_arrow from "./assets/arrow.png";
import sticker_sinta from "./assets/sinta.png";
import sticker_fish from "./assets/fish.png";
import sticker_avocado from "./assets/sticker_avocado.png";
import sticker_bread from "./assets/sticker_bread.png";
import sticker_cheese from "./assets/sticker_cheese.png";
import sticker_mayo from "./assets/sticker_mayo.png";
import sticker_mustard from "./assets/sticker_mustard.png";
import sticker_onion from "./assets/sticker_onion.png";
import sticker_tomato from "./assets/sticker_tomato.png";

function App() {
    return (
        <div className="app">
            <div className="app-stickers">
                <img id="pink_arrow" src={sticker_arrow} alt="Pink arrow" />
            </div>
            <div className="app-pages">
                <Header />
                <AboutPage />
                <Capstone />
                <Cards />
                <Footer />
            </div>
        </div>
    );
}

export default App;
