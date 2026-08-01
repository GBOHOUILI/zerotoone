"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingMark({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`relative h-32 w-32 sm:h-40 sm:w-40 lg:h-full lg:w-full ${className}`}
      animate={{ y: [0, -14, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/images/logo_white.png"
        alt="Zero To One"
        fill
        sizes="160px"
        className="object-contain opacity-95 drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
      />
    </motion.div>
  );
}