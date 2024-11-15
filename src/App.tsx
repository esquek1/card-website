import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header.tsx";
import AboutPage from "./pages/about.tsx";

function App() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    // Function to handle the click and set the active card index
    const handleClick = (index: number) => {
        setActiveCard(index);
    };

    return (
        <div className="app">
            <Header />
            <AboutPage />
        </div>
    );
}

export default App;
