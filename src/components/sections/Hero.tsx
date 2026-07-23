"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-140 flex-col overflow-hidden bg-cream px-6 pb-3 pt-24 sm:px-10 sm:pt-28">
      <div className="relative mx-auto w-full max-w-[1700px] flex-1">
        <span className="text-stroke-white absolute left-[4%] top-[8%] -rotate-6 font-display text-lg text-mustard sm:left-[16%] sm:top-[6%] sm:text-2xl md:text-3xl">
          International
          <br />
          Flavours
        </span>
        <span className="text-stroke-white absolute right-[4%] top-[34%] rotate-3 font-display text-lg text-mustard sm:right-[10%] sm:top-[30%] sm:text-2xl md:text-3xl">
          Locally
          <br />
          Served
        </span>

        <h1 className="text-stroke-white flex flex-col items-center text-center font-sans leading-[0.8] tracking-tight text-crimson text-[23vw] lg:text-[16vw]">
          <span>SERIOUSLY</span>
          <span>GOOD</span>
        </h1>

        <div className="absolute left-1/2 top-1/2 z-10 w-[44vw] max-w-[440px] -translate-x-1/2 -translate-y-[26%] lg:-translate-y-[16%]">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/hero-dish.png"
              alt="Smokin' Grill Cafe signature dish"
              width={600}
              height={600}
              priority
              className="w-full"
            />
          </motion.div>
          <span className="text-stroke-white absolute  left-1/3 w-full -translate-x-1/2 text-center font-display text-[14vw] text-mustard lg:text-[9.5vw]">
            SMOKIN&apos;
          </span>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1700px] font-bold flex-col gap-2 pt-2 font-sans lg:text-2xl text-xl text-ink sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-[220px] sm:max-w-sm sm:text-left">
          Our eclectic menu reflects the wide variety of influences and
          experiences that inform our approach to cooking.
        </p>
        <p className="sm:max-w-sm sm:text-right">
          We don&apos;t just serve dishes, we serve memories — crafted fresh,
          every single day.
        </p>
      </div>
    </section>
  );
}
