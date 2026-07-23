"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-140 flex-col overflow-hidden bg-cream px-6 pb-3 pt-24 sm:px-10 sm:pt-28">
      <div className="relative mx-auto w-full max-w-[1700px] flex-1">
        <span className="text-stroke-white absolute left-[4%] top-[8%] -rotate-6 font-display text-lg text-mustard sm:left-[16%] sm:top-[6%] sm:text-2xl md:text-3xl">
          Smashed
          <br />
          Fresh
        </span>
        <span className="text-stroke-white absolute right-[4%] top-[34%] rotate-3 font-display text-lg text-mustard sm:right-[10%] sm:top-[30%] sm:text-2xl md:text-3xl">
          Bold
          <br />
          Flavor
        </span>

        <h1 className="text-stroke-white flex flex-col items-center text-center font-sans leading-[0.8] tracking-tight text-crimson text-[19vw] sm:text-[15vw] lg:text-[24.5vw]">
          <span>THE</span>
          <span>BURGER</span>
        </h1>

        <div className="absolute left-1/2 top-1/2 z-10 w-[44vw] max-w-[440px] -translate-x-1/2 -translate-y-[46%]">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/hero-burger.png"
              alt="Signature smashed cheeseburger"
              width={600}
              height={600}
              priority
              className="w-full"
            />
          </motion.div>
          <span className="text-stroke-white absolute  left-1/2 w-full -translate-x-1/2 text-center font-display text-[9vw] text-mustard sm:text-[6vw] lg:text-[9.5vw]">
            CRAV
          </span>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1700px] font-bold flex-col gap-2 pt-2 font-sans text-sm text-ink sm:flex-row sm:items-end sm:justify-between sm:text-base">
        <p className="max-w-[220px] sm:max-w-sm sm:text-left">
          Smashed hot on the flat top, our prime patties lock in ultimate
          juiciness under a caramelized crust.
        </p>
        <p className="sm:max-w-sm sm:text-right">
          Topped with melted cheddar and our signature chili honey glaze crafted
          to satisfy your cravings since 1997.
        </p>
      </div>
    </section>
  );
}
