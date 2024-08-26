"use client";

import { useState } from "react";
import axios from "axios";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Image from "next/image";

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
        <div className="relative h-[50vh] mb-20">
          <div className="-z-10">
            <Image
              priority
              src={"/hero.webp"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Hero image"
            />
          </div>
          <div className="absolute w-full bottom-0 h-full bg-gradient-to-t from-background via-background/25 to-transparent"></div>
          <div className="relative h-full flex flex-col items-center justify-center">
            <h1 className="mt-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Book en reservation
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center">
          <div className="flex justify-center shadow-lg lg:w-1/3 py-20">
            <form
              onSubmit={handleSubmit}
              className="bg-background border border-gray-100/25 p-8 rounded-lg w-full max-w-md transition hover:shadow-accent hover:shadow-md hover:border-accent/25"
            >
              <div className="mb-4">
                <label className="block">Navn</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Navn"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 text-gray-950 mt-1 block px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
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
                  className="w-full p-2 border border-gray-300 text-gray-950 mt-1 block px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
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
                  className="w-full p-2 border border-gray-300 text-gray-950 mt-1 block px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
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
                  className="w-full p-2 border border-gray-300 text-gray-950 mt-1 block px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
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
                  className="w-full p-2 border border-gray-300 text-gray-950 mt-1 block px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
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
                  className="w-full p-2 border border-gray-300 text-gray-950 mt-1 block px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  required
                />
              </div>
              <button className="w-full mt-6 bg-secondary text-white p-2 rounded transition hover:bg-secondary/70 hover:-translate-y-1">
                Indsend reservation
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
