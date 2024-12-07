import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header.tsx";
import AboutPage from "./pages/about.tsx";
import Cards from "./pages/card.tsx";
import Capstone from "./pages/capstone.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <div className="app">
            <Header />
            <AboutPage />
            <Capstone />
            <Cards />
            <Footer />
        </div>
    );
}

export default App;
