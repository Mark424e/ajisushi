"use client";

import { useState } from "react";
import axios from "axios";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    reservationDate: "",
    reservationTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/booking", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(res.data.message);
    } catch (error) {
      console.error("Fejl ved afsendelse af formular:", error);
      alert(
        error.response.data.message ||
          "Der opstod en fejl ved afsendelse af formularen."
      );
    }
  };

  return (
    <main>
      <Header />
      <section>
        <div className="flex items-center justify-center min-h-screen">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-950 p-8 rounded-lg shadow-md w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Book en reservation
            </h2>
            <div className="mb-4">
              <label className="block">Navn</label>
              <input
                type="text"
                name="name"
                placeholder="Navn"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-gray-950 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-gray-950 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Telefonnummer</label>
              <input
                type="text"
                name="phone"
                placeholder="Telefonnummer"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-gray-950 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Antal gæster</label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-gray-950 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Dato for reservation</label>
              <input
                type="date"
                name="reservationDate"
                value={formData.reservationDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-gray-950 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Tidspunkt for reservation</label>
              <input
                type="time"
                name="reservationTime"
                value={formData.reservationTime}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-gray-950 rounded mt-1"
                required
              />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Indsend reservation
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
