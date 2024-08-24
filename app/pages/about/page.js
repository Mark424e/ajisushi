import React from 'react'
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function About() {
  return (
    <main>
      <Header />
      <section>
        <div className="container mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Om os
          </h1>
        </div>
      </section>
      <Footer />
    </main>
  )
}