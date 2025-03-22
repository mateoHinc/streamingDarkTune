import "./App.css";
import "./styles/styles.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HomePage from "./components/HomePage";
import Footer from "./components/footer";
import CarruselGenreSection from "./components/CarruselGenreSection";

import React, { useState, useEffect } from "react";

function App() {
  const [triggerHero, setTriggerHero] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#hero") {
      setTriggerHero(true);
    }
  }, []);

  const handleNext = () => {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      setTriggerHero(true);
    }, 300);
  };

  return (
    <div className="flex flex-col bg-primary min-h-screen text-white">
      <Header />
      <main className="flex flex-grow justify-center items-center">
        <HomePage onNext={handleNext} />
      </main>
      <HeroSection triggerAnimation={triggerHero} />
      <CarruselGenreSection />
      <Footer />
    </div>
  );
}

export default App;
