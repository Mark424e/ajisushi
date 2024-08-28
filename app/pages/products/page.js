"use client";

import React, { useRef} from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import {
  fadeInTextLetterByLetter,
} from "../../utils/gsapUtils";

export default function Products() {
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
            <h1 ref={headingRef}  className="mt-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Bestil online
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Online bestilling
          </h1>
        </div>
      </section>
      <Footer />
    </main>
  );
}
