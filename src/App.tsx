import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header.tsx";
import AboutPage from "./pages/about.tsx";
import Cards from "./pages/card.tsx";
function App() {
    return (
        <div className="app">
            <Header />
            <AboutPage />
            <Cards />
        </div>
    );
}

export default App;
