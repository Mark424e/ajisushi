"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { useGSAP } from "@gsap/react";
import {
  animateImagePosition,
  setupParallaxEffect,
  setupFadeInEffect,
  fadeInTextLetterByLetter,
} from "../../utils/gsapUtils";

export default function Booking() {
  const imagePosRef = useRef(null);
  const imageNegRef = useRef(null);
  const imageParallaxRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    animateImagePosition(imagePosRef, imageNegRef);
    setupParallaxEffect(imageParallaxRef);
    setupFadeInEffect();
    fadeInTextLetterByLetter(headingRef.current);
  }, []);
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
              src={"/4b4.webp"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Hero image"
            />
          </div>
          <div className="absolute w-full bottom-0 h-full bg-gradient-to-t from-background via-background/25 to-transparent"></div>
          <div className="relative h-full flex flex-col items-center justify-center">
            <h1
              ref={headingRef}
              className="fade-in mt-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            >
              Book en reservation
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-background py-10 md:py-10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="fade-in shadow-lg flex-1 lg:flex-none md:min-w-80 lg:min-w-96">
                <form
                  onSubmit={handleSubmit}
                  className="bg-background border border-gray-100/25 p-8 rounded-lg w-full transition hover:shadow-accent hover:shadow-md hover:border-accent/25"
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
                  <Button type="submit">Indsend reservation</Button>
                </form>
              </div>
              <div className="fade-in shadow-lg flex-1 lg:flex-none md:min-w-80 lg:min-w-96">
                <div className="bg-background border border-gray-100/25 p-8 rounded-lg min-h-full w-full md:max-w-96">
                  <h2 className="text-center md:text-start text-3xl font-semibold leading-none tracking-tight text-gray-900 dark:text-text">
                    Vores priser
                  </h2>
                  <div className="w-[60px] border border-accent my-5 mx-auto md:mx-0"></div>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">
                      Frokost: <span className="text-accent">199,-kr</span>
                    </h3>
                    <div className="flex justify-between mb-1 pb-1 border-b border-gray-100/50">
                      <p>Man. - Lør.:</p>
                      <p>11:00 - 15.00</p>
                    </div>
                    <div className="flex justify-between mb-1 pb-1 border-b border-gray-100/50">
                      <p>Søn.:</p>
                      <p>13:00 - 15:00</p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">
                      Aften: <span className="text-accent">239,-kr</span>
                    </h3>
                    <div className="flex justify-between mb-1 pb-1 border-b border-gray-100/50">
                      <p>Man. - Tors.:</p>
                      <p>15:00 - 21:00</p>
                    </div>
                    <div className="flex justify-between mb-1 pb-1 border-b border-gray-100/50">
                      <p>Søn.:</p>
                      <p>15:00 - 21:00</p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">
                      Aften: <span className="text-accent">259,-kr</span>
                    </h3>
                    <div className="flex justify-between mb-1 pb-1 border-b border-gray-100/50">
                      <p>Fre. - Lør.:</p>
                      <p>15:00 - 21:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
