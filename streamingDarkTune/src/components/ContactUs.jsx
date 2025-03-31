import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.fullName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje registrado!");
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative bg-primary px-4 py-16 min-h-screen text-white text-center"
    >
      <div className="mx-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl">
        <h2 className="mb-10 font-bold text-3xl md:text-4xl">Contáctanos</h2>
        <form
          action=""
          onSubmit={handleSubmit}
          className="space-y-6 bg-secondary shadow-lg p-6 rounded-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-primary px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-accent w-full text-white text-sm sm:text-base placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-primary px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-accent w-full text-white text-sm sm:text-base placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="bg-primary px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-accent w-full h-32 text-white text-sm sm:text-base resize-none placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="bg-accent hover:bg-secondary px-6 py-3 rounded-lg font-semibold text-white text-sm sm:text-base transition duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
