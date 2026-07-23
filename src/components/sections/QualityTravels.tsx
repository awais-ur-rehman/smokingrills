"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";

const path =
  "M28.94,-6.39 C31,-4 89.72,4 93.20,15 C101.02,45 -9.29,25.33 -0.68,55.03 C6.79,80.75 85.07,42.55 85.30,69.05 C85.54,95.60 3.69,63.20 -0.68,87.17 C-6.22,117.59 111.60,93.86 111.60,93.86";

// sticker-airplane.png points up-and-right by default; tweak if your asset faces another way.
const PLANE_ROTATION_OFFSET = 45;

const cities = [
  { label: "Berlin", top: 16, left: 76, width: "w-48 sm:w-64", revealAt: 0.16, rotate: "rotate-2", src: "/images/travel-berlin.jpg" },
  { label: "London", top: 42, left: 32, width: "w-40 sm:w-56", revealAt: 0.42, rotate: "-rotate-3", src: "/images/travel-london.jpg" },
  { label: "New York", top: 52, left: 62, width: "w-40 sm:w-56", revealAt: 0.52, rotate: "rotate-2", src: "/images/travel-newyork.jpg" },
  { label: "Sydney", top: 67, left: 12, width: "w-40 sm:w-56", revealAt: 0.67, rotate: "rotate-2", src: "/images/travel-sydney.jpg" },
  { label: "Tokyo", top: 82, left: 68, width: "w-40 sm:w-56", revealAt: 0.82, rotate: "-rotate-2", src: "/images/travel-tokyo.jpg" },
];

function TravelCard({
  scrollYProgress,
  city,
}: {
  scrollYProgress: MotionValue<number>;
  city: (typeof cities)[number];
}) {
  const [revealed, setRevealed] = useState(false);
  const opacity = useTransform(scrollYProgress, [city.revealAt - 0.06, city.revealAt], [0, 1]);
  const scale = useTransform(scrollYProgress, [city.revealAt - 0.06, city.revealAt], [0.75, 1]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= city.revealAt) setRevealed(true);
  });

  return (
    <motion.div
      style={{
        top: `${city.top}%`,
        left: `${city.left}%`,
        opacity: revealed ? 1 : opacity,
        scale: revealed ? 1 : scale,
      }}
      className={`absolute ${city.width} ${city.rotate}`}
    >
      <span className="text-stroke-white absolute -top-6 left-0 z-10 -rotate-3 font-sans text-xs text-crimson sm:text-sm">
        {city.label}
      </span>
      <div className="aspect-4/5 overflow-hidden rounded-2xl shadow-xl">
        <Image
          src={city.src}
          alt={`CRAV takeaway burger in ${city.label}`}
          width={320}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
}

export function QualityTravels() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [plane, setPlane] = useState({ x: 29, y: -6, angle: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const el = pathRef.current;
    if (!el) return;
    const length = el.getTotalLength();
    const clamped = Math.min(Math.max(progress, 0), 1);
    const point = el.getPointAtLength(clamped * length);
    const ahead = el.getPointAtLength(Math.min(clamped * length + 1, length));
    const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * (180 / Math.PI);
    setPlane({ x: point.x, y: point.y, angle });
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-mustard">
      <svg
        className="absolute inset-x-0 top-0 z-10 h-16 w-full text-cream sm:h-28"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,110 C180,180 300,140 500,90 C700,40 800,100 1000,140 C1200,180 1320,60 1440,120 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="relative z-10 px-6 pt-24 sm:px-10 sm:pt-32">
        <span className="text-stroke-white inline-block -rotate-3 font-sans text-[clamp(1rem,2vw,1.5rem)] text-crimson">
          Take Away
        </span>

        <h2 className="text-stroke-mustard mt-3 w-[80vw] font-sans uppercase leading-[0.85] text-cream text-[15vw]">
          <span className="block">Quality That</span>
          <span className="block">Travels With You</span>
        </h2>

        <p className="mt-6 max-w-lg font-sans text-[clamp(0.95rem,1.4vw,1.15rem)] font-bold text-ink">
          Freshly packed smash burgers, ready to go wherever you crave. From
          our flat-top to any corner of the globe, we ensure every layer stays
          hot and juicy.
        </p>
      </div>

      <div className="relative mx-auto h-[310vh] w-full max-w-5xl px-6">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden
        >
          <path
            ref={pathRef}
            d={path}
            stroke="white"
            strokeOpacity={0.6}
            strokeWidth={0.3}
            strokeDasharray="1.2 1.8"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <motion.div
          style={{
            left: `${plane.x}%`,
            top: `${plane.y}%`,
            rotate: plane.angle + PLANE_ROTATION_OFFSET,
          }}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/sticker-airplane.png"
            alt="Delivery plane"
            width={90}
            height={90}
            className="w-24 sm:w-32"
          />
        </motion.div>

        {cities.map((city) => (
          <TravelCard key={city.label} scrollYProgress={scrollYProgress} city={city} />
        ))}
      </div>

      <svg
        className="relative z-10 h-16 w-full text-cream sm:h-28"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,90 C180,20 300,140 500,110 C700,80 800,160 1000,120 C1200,80 1320,140 1440,80 L1440,200 L0,200 Z"
        />
      </svg>
    </section>
  );
}
