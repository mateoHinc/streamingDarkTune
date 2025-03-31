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
    <section className="bg-primary px-4 py-16 min-h-screen text-white text-center">
      <h2 className="mb-10 font-bold text-3xl md:text-4xl">Contáctanos</h2>
      <form
        action=""
        onSubmit={handleSubmit}
        className="space-y-4 bg-secondary shadow-lg mx-auto p-6 rounded-lg max-w-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre Completo"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded w-full text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded w-full text-black"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="p-3 rounded w-full text-black resize-none"
        />
        <button
          type="submit"
          className="bg-accent hover:bg-accentHover px-6 py-3 rounded font-semibold transition duration-300"
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}

export default ContactUs;
