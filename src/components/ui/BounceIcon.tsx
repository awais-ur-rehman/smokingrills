"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";

export function BounceIcon({
  src,
  alt,
  className,
  rise = 80,
  drift = 6,
  spin = 25,
  duration = 3.6,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  rise?: number;
  drift?: number;
  spin?: number;
  duration?: number;
  delay?: number;
}) {
  const t = useMotionValue(0);

  useEffect(() => {
    const controls = animate(t, 1, { duration, repeat: Infinity, ease: "linear", delay });
    return () => controls.stop();
  }, [t, duration, delay]);

  // y bounces up and back down (hump, 0 -> 1 -> 0), so it's only ever visible
  // near the middle of the cycle. x/rotate instead move forward the whole time
  // (smoothstep, monotonic 0 -> 1) like real projectile drift that never
  // reverses mid-air; they only "reset" for the next loop while y has the icon
  // hidden off-screen at the bottom, so it never visibly retraces its arc.
  const y = useTransform(t, (v) => {
    const s = Math.sin(v * Math.PI);
    return `${(1 - s * s) * rise}vh`;
  });
  const forward = useTransform(t, (v) => v * v * (3 - 2 * v));
  const x = useTransform(forward, (v) => `${v * drift}vw`);
  const rotate = useTransform(forward, (v) => v * spin);

  return (
    <motion.div style={{ x, y, rotate }} className={className}>
      <Image src={src} alt={alt} width={200} height={200} className="w-full" />
    </motion.div>
  );
}
