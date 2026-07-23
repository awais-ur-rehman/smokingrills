import Image from "next/image";
import { Button } from "@/components/ui/Button";

const WHATSAPP_NUMBER = ""; // TODO: add real number, e.g. "15551234567"

export function FeelTheChange() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-cream lg:flex-row">
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-16 sm:px-10 lg:w-1/2 lg:flex-none">
        <span className="text-stroke-white inline-block -rotate-3 font-sans text-[clamp(1rem,2vw,1.5rem)] text-crimson">
          Feel It
        </span>

        <h2 className="text-stroke-white mt-3 font-sans uppercase leading-[0.85] text-crimson text-[15vw] sm:text-[9vw] lg:text-[6.5vw]">
          <span className="block">Feel The</span>
          <span className="block">Change</span>
        </h2>

        <p className="mt-6 max-w-md font-sans text-[clamp(0.95rem,1.4vw,1.15rem)] font-bold text-ink">
          Smashed for the bold, built for the hungry. Dive into a legendary
          craft experience where every crispy edge and juicy layer rules.
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
          alt="CRAV mascot diving into a loaded burger"
          width={400}
          height={400}
          className="absolute bottom-0 left-[55%] z-20 w-40 sm:w-96 lg:left-[75%]"
        />
      </div>

      <div className="relative min-h-[50vh] flex-1 lg:min-h-full">
        <Image
          src="/images/feel-the-change.jpg"
          alt="Guest taking a big bite of a loaded burger"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
