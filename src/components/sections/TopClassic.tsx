import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Sticker } from "@/components/ui/Sticker";

export function TopClassic() {
  return (
    <section className="relative overflow-hidden bg-cream pb-48 pt-20 sm:pt-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-stroke-white inline-block -rotate-3 font-sans text-[clamp(1.1rem,2.8vw,2.2rem)] text-crimson">
          What&apos;s Popular
        </span>

        <h2 className="text-stroke-white mt-4 font-sans uppercase leading-[0.95] tracking-tight text-crimson text-[clamp(2.75rem,15vw,8.5rem)]">
          <span className="block">The Ultimate</span>
          <span className="block">Duo Burger</span>
        </h2>

        <p className="mx-auto mt-[2vw] max-w-2xl font-sans text-[clamp(1rem,1.8vw,1.6rem)] font-bold text-ink">
          Meet the 10250 — a mouthwatering duo burger combining the best of both
          worlds. A juicy beef patty layered with a tender, savory chicken
          patty, for a delightful contrast in flavors and textures.
        </p>

        <Button variant="solid" className="mt-8 px-10 py-4 text-base">
          Order Now
        </Button>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl px-6">
        <Sticker
          src="/images/sticker-selfie.png"
          alt="Mascot sticker taking a selfie"
          rotate={-10}
          className="absolute -top-16 left-2 z-20 w-16 sm:-top-20 sm:left-4 lg:w-28"
        />

        <div className="flex items-start justify-center">
          <div className="aspect-6/5 w-2/4 max-w-96 -rotate-3 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/classic-gallery-1.jpg"
              alt="Guest photographing a loaded burger and fries"
              width={400}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-6/5 w-2/5 max-w-96 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/classic-gallery-2.jpg"
              alt="Double cheeseburger with fries basket"
              width={400}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-6/5 ml-6 w-2/5 max-w-96 overflow-hidden rounded-2xl shadow-xl sm:ml-10">
            <Image
              src="/images/classic-gallery-3.jpg"
              alt="Hand holding a wrapped burger"
              width={400}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 h-24 w-full text-crimson sm:h-36"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,120 C240,200 360,40 600,80 C840,120 960,200 1200,140 C1320,110 1380,100 1440,120 L1440,200 L0,200 Z"
        />
      </svg>
    </section>
  );
}
