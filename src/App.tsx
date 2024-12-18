import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header.tsx";
import AboutPage from "./pages/about.tsx";
import Cards from "./pages/card.tsx";
import Capstone from "./pages/capstone.tsx";
import Footer from "./components/Footer.tsx";
import ImageSlider from "./components/ImageSlider.tsx";
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
// Posters
import Poster1 from "./assets/posters_1.jpg";
import Poster2 from "./assets/posters_2.jpg";
import Poster3 from "./assets/posters_3.jpg";

// Define the Poster type
type Poster = {
    url: string;
    title: string;
};

const POSTERIMAGES: Poster[] = [
    {
        url: Poster1,
        title: "Conceited, Lola Young Lyrical Poster, 2024 Part 1",
    },
    {
        url: Poster2,
        title: "Conceited, Lola Young Lyrical Poster, 2024 Part 2",
    },
    {
        url: Poster3,
        title: "Conceited, Lola Young Lyrical Poster, 2024 Part 3",
    },
];

function App() {
    return (
        <div className="app">
            {/* <div className="app-stickers">
                <img id="pink_arrow" src={sticker_arrow} alt="Arrow sticker" />
                <img id="sinta" src={sticker_sinta} alt="SINTA sticker" />
                <img id="fish" src={sticker_fish} alt="Fish sticker" />
                <img id="avocado" src={sticker_avocado} alt="Avocado sticker" />
                <img id="bread" src={sticker_bread} alt="Bread sticker" />
                <img id="onion" src={sticker_onion} alt="Onion sticker" />
                <img id="cheese" src={sticker_cheese} alt="Cheese sticker" />
                <img id="tomato" src={sticker_tomato} alt="Tomato sticker" />
                <img id="mayo" src={sticker_mayo} alt="Mayo sticker" />
                <img id="mustard" src={sticker_mustard} alt="Mustard sticker" />
            </div> */}
            <div className="app-pages">
                <Header />
                <AboutPage />
                <Capstone />
                <Cards />
                <ImageSlider posters={POSTERIMAGES} />
                <Footer />
            </div>
        </div>
    );
}

export default App;
