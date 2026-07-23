"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Sticker({
  src,
  alt,
  className,
  rotate = -10,
}: {
  src: string;
  alt: string;
  className?: string;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ rotate }}
      whileHover={{ rotate: rotate - 6, y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 260, damping: 15 }}
      className={cn("drop-shadow-xl", className)}
    >
      <Image src={src} alt={alt} width={400} height={400} className="w-full" />
    </motion.div>
  );
}
