'use client';

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "./ui/clock";
import { Socials } from "./socials";
import { useGSAP } from "@gsap/react";
import {
  setupFadeInEffect,
} from "./../utils/gsapUtils";

export const Footer = () => {

  useGSAP(() => {
    setupFadeInEffect();
  }, []);
  return (
    <footer>
      <div className="bg-background border-t border-gray-100/25">
        <div className="container mx-auto">
          <div className="fade-in grid lg:grid-cols-2 justify-center items-end md:justify-between py-20 gap-20 text-center md:text-start">
            <div className="order-2 md:order-1">
              <div className="flex md:grid flex-col items-center space-y-8">
                <div>
                  <Link href="/">
                    <Image
                      src="/logo_full.svg"
                      width={400}
                      height={400}
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div>
                  <p className="text-lg text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    adipisci modi, fugiat nobis pariatur fuga vel vero incidunt
                    quis dolore! Soluta nam voluptatum non laudantium odit
                    exercitationem maxime dolor dolorum?
                  </p>
                </div>
                <div>
                  <Socials/>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 grid md:grid-cols-2 gap-20 lg:gap-0">
              <div>
                <h2 className="text-2xl font-extrabold mb-6">Links</h2>
                <ul className="grid gap-4 text-lg text-gray-400">
                  <li className="nav-menu">
                    <Link href="/pages/booking">Booking</Link>
                  </li>
                  <li className="nav-menu">
                    <Link href="/pages/products">Online Bestilling</Link>
                  </li>
                  <li className="nav-menu">
                    <Link href="/pages/contact">Kontakt</Link>
                  </li>
                  <li className="nav-menu">
                    <Link href="/pages/about">Om Os</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold mb-6">Kontakt</h2>
                <ul className="grid gap-4 text-lg text-gray-400">
                  <li className="nav-menu">Algade 26, 4000 Roskilde</li>
                  <li className="nav-menu">
                    Tlf.: <a href="tel:73708800">73 70 88 00</a>
                  </li>
                  <li className="nav-menu">
                    Mail:{" "}
                    <a href="mailto:info@ajisushi4000.dk">
                      info@ajisushi4000.dk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pb-16">
            <div className="py-8 flex justify-center items-center">
              <div className="flex gap-2 items-center w-full">
                <div className="h-[1px] w-full bg-gray-100/25 me-4"></div>
                <Link href="/">
                  <Image
                    src="/logo_square.svg"
                    width={100}
                    height={100}
                    alt="Logo"
                  />
                </Link>
                <div className="h-[1px] w-full bg-gray-100/25 ms-4"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="text-xs text-white/50 text-center space-y-2">
                <p>&copy; 2024 Mark Thomassen</p>
                <p>Powered by Vercel, Next.js, and Github.</p>
                <Clock timeZone="Europe/Copenhagen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
