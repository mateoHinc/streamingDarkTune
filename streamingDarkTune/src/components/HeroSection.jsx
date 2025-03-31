import React, { useEffect, useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import bgHero from "/assets/hero-section.jpg";
import panelHero from "/assets/panel-heroSection.png";

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
      className="group relative flex flex-col justify-center items-center bg-cover bg-center px-4 sm:px-6 md:px-10 py-16 w-full min-h-screen text-white text-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Overlay */}
      <div className="z-0 absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <motion.div
        className="z-10 relative px-4 max-w-xl sm:max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-6 font-heading text-3xl sm:text-4xl md:text-6xl">
          El ritmo oscuro que te define
        </h2>
        <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl">
          Descubre y conecta con los géneros musicales más underground y libres.
        </p>
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("genres")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-secondary hover:bg-accent px-5 sm:px-6 py-3 rounded-lg text-white text-sm sm:text-base transition duration-300"
        >
          Explorar Géneros
        </a>
      </motion.div>

      {/* Panel Image */}
      <motion.img
        src={panelHero}
        alt="Panel Hero"
        className="right-2 xs:right-1/2 sm:right-6 md:right-0 bottom-0 sm:bottom-0 left-1/2 md:left-auto z-10 absolute opacity-90 w-60 sm:w-50 md:w-72 lg:w-80 xl:w-96 transition-transform -translate-x-1/2 xs:translate-x-1/2 md:translate-x-0 group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] duration-500 xs:30"
        initial={{ opacity: 0, rotate: -10, y: 50 }}
        animate={animate ? { opacity: 1, rotate: 0, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
}

export default HeroSection;
