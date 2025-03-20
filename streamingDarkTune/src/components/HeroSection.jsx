import React, { useEffect, useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import bgHero from "../assets/hero-section.jpg";
import panelHero from "../assets/panel-heroSection.png";

function HeroSection({ triggerAnimation }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (triggerAnimation) {
      setAnimate(false); // Reset
      setTimeout(() => setAnimate(true), 50); // Small delay to retrigger animation
    }
  }, [triggerAnimation]);

  useEffect(() => {
    // Trigger animation on mount (refresh)
    setAnimate(true);
  }, []);

  return (
    <section
      id="hero"
      className="group relative flex flex-col justify-center items-center bg-cover bg-center px-6 py-12 w-full min-h-screen text-white text-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Overlay */}
      <div className="z-0 absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <motion.div
        className="z-10 relative max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-6 font-heading text-4xl md:text-6xl">
          El ritmo oscuro que te define
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Descubre y conecta con los géneros musicales más underground y libres.
        </p>
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("hero")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-secondary hover:bg-accent px-6 py-3 rounded-lg text-white transition duration-300"
        >
          Explorar Géneros
        </a>
      </motion.div>

      {/* Panel Image */}
      <motion.img
        src={panelHero}
        alt="Panel Hero"
        className="right-0 bottom-0 z-10 absolute opacity-90 w-40 md:w-60 transition-transform group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] duration-500"
        initial={{ opacity: 0, rotate: -10, y: 50 }}
        animate={animate ? { opacity: 1, rotate: 0, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
}

export default HeroSection;
