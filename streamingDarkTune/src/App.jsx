import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-primary min-h-screen font-sans text-white">
        <h1 className="mb-4 font-heading text-secondary text-4xl">
          Bienvenido a Dark Tune
        </h1>
        <p className="mb-6 text-gray-300 text-lg">
          Descubre tu género musical favorito
        </p>
        <button className="bg-secondary hover:bg-accentHover px-6 py-3 rounded-lg font-semibold text-white transition">
          Explorar
        </button>
      </div>
    </>
  );
}

export default App;
