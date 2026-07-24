import Image from "next/image";
import { Button } from "@/components/ui/Button";

const WHATSAPP_NUMBER = ""; // TODO: add real number, e.g. "15551234567"

export function FeelTheChange() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-cream lg:flex-row">
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-16 sm:px-10 lg:w-1/2 lg:flex-none">
        <span className="text-stroke-white inline-block -rotate-3 font-sans text-[clamp(1rem,2vw,1.5rem)] text-crimson">
          Taste It
        </span>

        <h2 className="text-stroke-white mt-3 font-sans uppercase leading-[0.85] text-crimson text-[15vw] lg:text-[6.5vw]">
          <span className="block">Taste The</span>
          <span className="block">Difference</span>
        </h2>

        <p className="mt-6 max-w-md font-sans text-[clamp(0.95rem,1.4vw,1.15rem)] font-bold text-ink">
          From soups to steaks, pizzas to shakes — every dish is crafted to turn
          a meal into a memory. We don&apos;t just serve dishes, we serve
          experiences.
        </p>

        <Button
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-fit px-10 py-4 text-base"
        >
          Order Now
        </Button>

        <Image
          src="/images/sticker-feel-it.png"
          alt="Mascot sticker diving into a loaded dish"
          width={400}
          height={400}
          className="absolute bottom-0 left-[55%] z-20 w-40 sm:w-96 lg:left-[75%]"
        />
      </div>

      <div className="relative min-h-[50vh] flex-1 lg:min-h-full">
        <Image
          src="/images/dine-in.jpg"
          alt="Guest enjoying a meal at Smokin' Grill Cafe"
          width={1000}
          height={1000}
          className="object-cover"
        />
      </div>
    </section>
  );
}
