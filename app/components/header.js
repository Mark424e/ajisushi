"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Socials } from "./socials";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // If user scrolls past 100px, hide the topbar
      setScrolled(scrollY > 100);

      // Make the navmenu sticky when user scrolls past 29px
      setIsSticky(scrollY > 29);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle menu open/closed state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Menu (Topbar + Navmenu together) */}
      <div className="absolute w-full transition-transform duration-500 ease-in-out z-50">
        {/* Topbar */}
        <div className="hidden md:block bg-secondary border-b border-gray-100/25 py-1">
          <div className="container mx-auto">
            <div className="flex items-center justify-end md:justify-between text-sm">
              <div className="hidden lg:block">
                <ul className="flex items-center">
                  <li className="border-x border-gray-100/25 px-4">
                    Algade 26, 4000 Roskilde
                  </li>
                  <li className="border-e border-gray-100/25 px-4">
                    <a href="tel:73708800">73 70 88 00</a>
                  </li>
                  <li className="border-e border-gray-100/25 px-4">
                    <a href="mailto:info@ajisushi4000.dk">
                      info@ajisushi4000.dk
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Socials />
              </div>
            </div>
          </div>
        </div>

        {/* Navmenu */}
        <div
          className={`bg-gradient-to-b from-black via-black/75 to-transparent transition-transform duration-500 ${
            isSticky ? "fixed top-0 left-0 w-full" : ""
          }`}
        >
          <div className="container mx-auto">
            {/* Mobile Menu */}
            <div
              className={`absolute left-0 w-full bg-gradient-to-b from-black via-black/75 to-transparent md:hidden transition-transform duration-500 -z-40 ${
                isMenuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <div className="container mx-auto py-20">
                <ul className="nav-menu flex flex-col items-center gap-5">
                  <li>
                    <Link href="/pages/booking">Booking</Link>
                  </li>
                  <li>
                    <Link href="/pages/products">Online Bestilling</Link>
                  </li>
                  <li>
                    <Link href="/pages/contact">Kontakt</Link>
                  </li>
                  <li>
                    <Link href="/pages/about">Om Os</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center py-5">
              <div className="transition hover:scale-105">
                <Link href="/">
                  <Image
                    className="flex"
                    src="/logo_full.svg"
                    width={200}
                    height={200}
                    alt="Picture of logo"
                  />
                </Link>
              </div>

              {/* Burger Icon for Mobile */}
              <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>

              {/* Nav Menu Items */}
              <div className="hidden md:flex">
                <ul className="nav-menu flex gap-10">
                  <li>
                    <Link href="/pages/booking">Booking</Link>
                  </li>
                  <li>
                    <Link href="/pages/products">Online Bestilling</Link>
                  </li>
                  <li>
                    <Link href="/pages/contact">Kontakt</Link>
                  </li>
                  <li>
                    <Link href="/pages/about">Om Os</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
