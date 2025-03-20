import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

function HomePage({ onNext }) {
  return (
    <section className="flex flex-col justify-center items-center p-10 min-h-screen text-center">
      <h2 className="mb-4 font-heading text-secondary text-4xl md:text-6xl">
        Bienvenidos a Dark Tune
      </h2>
      <p className="mb-6 text-gray-300 text-xl md:text-xl">
        La plataforma donde el beat es oscuro y libre.
      </p>
      <button
        onClick={onNext}
        className="bg-secondary hover:bg-accentHover px-6 py-3 rounded-lg font-semibold text-white transition"
      >
        Siguiente
      </button>
    </section>
  );
}

export default HomePage;
