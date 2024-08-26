import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full mb-20 fixed z-50">
      <div className="backdrop-blur-sm backdrop-brightness-[.25]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-10">
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
            <div>
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
    </header>
  );
};
