import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg text-white transition-all duration-300 ${
        isVisible
          ? "opacity-100 bg-secondary hover:bg-accent"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
}

export default ScrollToTopButton;
