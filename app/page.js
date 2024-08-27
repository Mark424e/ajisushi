"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { useGSAP } from "@gsap/react";
import {
  animateImagePosition,
  setupParallaxEffect,
  setupFadeInEffect,
} from "./utils/gsapUtils";

export default function Home() {
  const imagePosRef = useRef(null);
  const imageNegRef = useRef(null);
  const imageParallaxRef = useRef(null);

  useGSAP(() => {
    // Initialize GSAP animations
    animateImagePosition(imagePosRef, imageNegRef);
    setupParallaxEffect(imageParallaxRef);
    setupFadeInEffect();
  }, []);

  return (
    <main>
      <Header />
      <section>
        <div className="relative h-[100vh]">
          <div className="-z-10 fixed h-full w-full">
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
            <h1 className="fade-in mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Velkommen til Aji sushi
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-background py-10 md:py-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 items-center text-center md:text-start leading-7 gap-8">
              <div className="fade-in">
                <h2 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-text">
                  En unik sushioplevelse
                </h2>
                <div className="w-[60px] border border-accent my-5 mx-auto md:mx-0"></div>
                <p>
                  Vi er stolte af at tilbyde dig en unik sushioplevelse. Hos os
                  kan du nyde frisklavet sushi af højeste kvalitet, tilpasset
                  dine ønsker. Uanset om du vælger at spise i vores restaurant
                  eller bestille takeaway, kan du altid forvente lækre retter,
                  der er tilberedt med de bedste råvarer.
                </p>
              </div>
              <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center mt-20 md:mt-0">
                <Image
                  ref={imagePosRef}
                  className="translate-y-8 h-56 w-64 object-cover shadow-md"
                  src={"/1wf.webp"}
                  width={400}
                  height={200}
                  alt="Picture of delicious sushi"
                />
                <Image
                  className="hidden sm:block md:hidden lg:block h-56 w-64 object-cover shadow-md"
                  src={"/3r6.webp"}
                  width={400}
                  height={200}
                  alt="Picture of delicious sushi"
                />
                <Image
                  ref={imageNegRef}
                  className="-translate-y-8 h-56 w-64 object-cover shadow-md"
                  src={"/fe3.webp"}
                  width={400}
                  height={200}
                  alt="Picture of delicious sushi"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-background py-10 md:py-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 items-center text-center md:text-start leading-7 gap-8">
              <div className="relative h-80 overflow-hidden order-2 md:order-1">
                <Image
                  ref={imageParallaxRef}
                  className="absolute top-0 left-0 w-full h-[175%] object-cover"
                  src={"/2wf.webp"}
                  width={400}
                  height={200}
                  alt="Picture of delicious sushi"
                />
              </div>
              <div className="fade-in order-1 md:order-2">
                <h2 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-text">
                  Sushi ad Libitum –
                </h2>
                <h2 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-text">
                  Spis Alt, Hvad Du Har Lyst Til
                </h2>
                <div className="w-[60px] border border-accent my-5 mx-auto md:mx-0"></div>
                <p>
                  Sushi ad Libitum er et koncept, hvor du kan nyde al den sushi,
                  du elsker, og spise dig mæt i dine favoritter. Det giver dig
                  frihed til at smage forskellige typer sushi eller bare nyde
                  dine favoritter i ubegrænsede mængder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
