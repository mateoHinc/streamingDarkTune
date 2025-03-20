import "./App.css";
import "./styles/styles.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HomePage from "./components/HomePage";
import Footer from "./components/footer";

import React, { useState, useEffect } from "react";

function App() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#hero") {
      setShowHero(true);
    }
  }, []);

  const handleNext = () => {
    setShowHero(true);
    window.location.hash = "#hero";
    setTimeout(() => {
      document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="flex flex-col bg-primary min-h-screen text-white">
      <Header />
      <main className="flex flex-grow justify-center items-center">
        <HomePage onNext={handleNext} />
      </main>
      <HeroSection triggerAnimation={true} />
      <Footer />
    </div>
  );
}

export default App;
