import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "./ui/clock";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-background border-t border-gray-100/25">
        <div className="container mx-auto">
          <div className="grid md:flex justify-center md:justify-between py-20 gap-20 text-center md:text-start">
            <div>
              <h2 className="text-4xl font-extrabold mb-6">Genveje</h2>
              <ul className="grid md:flex gap-4 md:gap-16 text-xl">
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
              <h2 className="text-4xl font-extrabold mb-6">Kontakt</h2>
              <p>Algade 26, 4000 Roskilde</p>
              <p className="nav-menu">
                Tlf.: <a href="tel:73708800">73 70 88 00</a>
              </p>
              <p className="nav-menu">
                Mail:{" "}
                <a href="mailto:info@ajisushi4000.dk">info@ajisushi4000.dk</a>
              </p>
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
