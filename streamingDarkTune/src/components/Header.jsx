import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/assets/icon-logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [animateClose, setAnimateClose] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      setAnimateClose(true);

      setTimeout(() => {
        setIsOpen(false);
        setAnimateClose(false);
      }, 200);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header className="relative flex justify-between items-center bg-secondary px-6 py-4 w-full text-white">
      {/* Name web big screens */}
      <h1 className="hidden md:block font-heading text-2xl">Dark Tune</h1>

      {/* Icon for mobiles */}
      <img src={logo} alt="" className="md:hidden block w-10 h-10" />

      {/* Nav links- Desktop */}
      <nav className="hidden md:flex space-x-8 text-lg">
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

      {/* Menu Icon - Mobile */}
      <div className="md:hidden">
        <button
          onClick={handleToggle}
          className={`transform transition-transform duration-300 ease-in-out ${
            isOpen ? "animate-spin-open" : "animate-spin-close"
          }`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Icon - Mobile */}
      {(isOpen || animateClose) && (
        <div
          className={`md:hidden top-16 left-0 absolute flex flex-col items-center space-y-4 bg-secondary py-4 w-full ${
            animateClose ? "animate-menu-close" : "animate-menu-open"
          }`}
        >
          <a href="#" className="hover:text-accent" onClick={handleToggle}>
            Inicio
          </a>
          <a href="#" className="hover:text-accent" onClick={handleToggle}>
            Géneros
          </a>
          <a href="#" className="hover:text-accent" onClick={handleToggle}>
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
