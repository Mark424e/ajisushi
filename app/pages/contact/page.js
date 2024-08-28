"use client";

import React, { useRef } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import {
  fadeInTextLetterByLetter,
} from "../../utils/gsapUtils";

export default function Contact() {
  const headingRef = useRef(null);

  useGSAP(() => {
    fadeInTextLetterByLetter(headingRef.current);
  }, []);
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
            <h1 ref={headingRef} className="mt-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Kontakt os
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-background py-20">
          <div className="container mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-3 items-center justify-center text-center md:text-start leading-7 gap-16">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-text">
                  Få fat på os her
                </h2>
                <div className="w-[60px] border border-accent my-5 mx-auto md:mx-0"></div>
                <p>Vores døre er altid åben for en god tid og lækker sushi.</p>
              </div>
              <div className="col-span-2 relative grid lg:grid-cols-2 gap-16 justify-center bg-secondary p-16 rounded-3xl shadow-xl">
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 dark:text-text mb-4">
                    Åbningstider
                  </h3>
                  <div className="grid grid-cols-2 gap-8 justify-between">
                    <ul className="text-start">
                      <li>Man. - Tors.:</li>
                      <li>Fre. - Lør.:</li>
                      <li>Søn.:</li>
                    </ul>
                    <ul className="text-end">
                      <li>11:00 - 21:30</li>
                      <li>11:00 - 22:00</li>
                      <li>13:00 - 21:30</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 dark:text-text mb-4">
                    Kontaktinformation
                  </h3>
                  <div>
                    <p>Algade 26, 4000 Roskilde</p>
                    <p className="nav-menu">
                      Tlf.: <a href="tel:73708800">73 70 88 00</a>
                    </p>
                    <p className="nav-menu">
                      Mail:{" "}
                      <a href="mailto:info@ajisushi4000.dk">
                        info@ajisushi4000.dk
                      </a>
                    </p>
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
