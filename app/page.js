import { Header } from "./components/header";
import { Footer } from "./components/footer";
import Image from "next/image";

export default function Home() {
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
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Velkommen til Aji sushi
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-background py-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 items-center text-center md:text-start leading-7 gap-16">
              <div>
                <h2 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-text">
                  En unik sushioplevelse
                </h2>
                <div className="w-[60px] border border-accent my-5"></div>
                <p>
                  Vi er stolte af at tilbyde dig en unik sushioplevelse. Hos os
                  kan du nyde frisklavet sushi af højeste kvalitet, tilpasset
                  dine ønsker. Uanset om du vælger at spise i vores restaurant
                  eller bestille takeaway, kan du altid forvente lækre retter,
                  der er tilberedt med de bedste råvarer.
                </p>
              </div>
              <div className="relative grid justify-center">
                <Image
                  className="h-80 w-64 object-cover rounded shadow-md"
                  src={"/ad1.webp"}
                  width={400}
                  height={200}
                  alt="Picture of delicious sushi"
                />
                <Image
                  className="absolute top-1/4 left-1/2 -translate-y-1/3 -translate-x-1/4 h-80 w-64 object-cover rounded shadow-md"
                  src={"/116.webp"}
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
        <div className="bg-background py-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 items-center text-center md:text-start leading-7 gap-16">
              <div className="relative grid justify-center items-center object-cover">
                <Image
                  className="w-full object-cover rounded shadow-md"
                  src={"/ad1.webp"}
                  width={200}
                  height={200}
                  alt="Picture of delicious sushi"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-text">
                  Ubegrænset Sushi –
                </h2>
                <h2 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-text">
                  Spis Alt, Hvad Du Har Lyst Til
                </h2>
                <div className="w-[60px] border border-accent my-5"></div>
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
