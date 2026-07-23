import Image from "next/image";
import { Sticker } from "@/components/ui/Sticker";
import { TrackingEyes } from "@/components/ui/TrackingEyes";

export function Experience() {
  return (
    <section className="relative flex h-screen min-h-140 flex-col justify-center overflow-hidden bg-crimson px-6 py-6">
      <div className="relative mx-auto w-full max-w-4xl text-center">
        <Sticker
          src="/images/sticker-fries.png"
          alt="Fries mascot sticker"
          rotate={-8}
          className="absolute left-[2%] top-1/2 z-10 w-24 -translate-y-1/2 sm:left-[8%] sm:w-36"
        />
        <Sticker
          src="/images/sticker-burger-thumbsup.png"
          alt="Mascot sticker giving a thumbs up"
          rotate={8}
          className="absolute right-[2%] top-1/2 z-10 w-24 -translate-y-1/2 sm:right-[8%] sm:w-36"
        />

        <span className="inline-block -rotate-2 rounded-full bg-cream px-5 py-1.5 font-sans text-[clamp(1rem,2vw,1.5rem)] text-crimson">
          From The Grill
        </span>

        <h2 className="mt-4 font-sans uppercase leading-[0.95] tracking-tight text-cream text-[clamp(4rem,14vw,9rem)]">
          <span className="block">Seared To</span>
          <span className="block">Perfection</span>
        </h2>
      </div>

      <div className="relative mx-auto mt-8 w-full max-w-3xl flex-1 px-6">
        <p className="absolute left-4 top-1/3 hidden font-sans text-sm lg:text-xl font-bold uppercase leading-relaxed text-cream sm:block lg:left-10">
          Premium cuts
          <br />
          Signature spice blend
          <br />
          Grilled to order
        </p>
        <p className="absolute right-4 top-1/3 hidden text-right font-sans text-sm lg:text-xl font-bold uppercase leading-relaxed text-cream sm:block lg:right-10">
          Rich garlic butter
          <br />
          Choice of sauce
          <br />
          Two sides included
        </p>

        <TrackingEyes className="absolute left-1/2 top-[6%] z-20 -translate-x-1/2" />

        <Image
          src="/images/experience-steak.png"
          alt="Seared beef steak with garlic butter"
          width={700}
          height={700}
          priority
          className="relative z-10 mx-auto h-full max-h-full w-auto max-w-md object-contain"
        />

        <span className="text-stroke-white absolute bottom-[8%] right-[10%] z-20 -rotate-6 font-sans text-[clamp(1.1rem,2.5vw,1.75rem)] text-mustard">
          Bold
          <br />
          Flavour
        </span>
      </div>
    </section>
  );
}
