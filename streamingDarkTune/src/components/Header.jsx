import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center bg-secondary px-6 py-4 w-full text-white">
      <h1 className="font-heading text-2xl">Dark Tune</h1>
      <nav className="space-x-8 text-lg">
        <a href="#" className="hover:text-accent">
          Inicio
        </a>
        <a href="#" className="hover:text-accent">
          Géneros
        </a>
        <a href="#" className="hover:text-accent">
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Header;
