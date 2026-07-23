"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BounceIcon({
  src,
  alt,
  className,
  rise = "80vh",
  duration = 3.6,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  rise?: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [rise, "0vh", rise] }}
      transition={{
        duration,
        times: [0, 0.5, 1],
        ease: ["easeOut", "easeIn"],
        repeat: Infinity,
        repeatDelay: 0.25,
        delay,
      }}
      className={className}
    >
      <Image src={src} alt={alt} width={200} height={200} className="w-full" />
    </motion.div>
  );
}
