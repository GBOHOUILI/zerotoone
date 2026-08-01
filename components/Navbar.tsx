"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { nav } from "@/lib/content";
import { useThemeColor } from "@/lib/theme-color-context";
import { darken } from "@/lib/theme-color-context";

function Mark() {
  const { color } = useThemeColor();

  const bgColor = darken(color, 0.55); // toujours assez sombre pour contraster
  const background = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, 0.65)`;
  const border = `rgba(${color.r}, ${color.g}, ${color.b}, 0.9)`;
  const glow = `0 0 20px rgba(${color.r}, ${color.g}, ${color.b}, 0.35)`;

  return (
    <motion.div
      className="relative flex h-14 w-14 items-center justify-center rounded-full border p-2.5 backdrop-blur-md sm:h-16 sm:w-16 md:h-20 md:w-20 xl:h-24 xl:w-24"
      animate={{ backgroundColor: background, borderColor: border, boxShadow: glow }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <Image
        src="/images/logo_white.png"
        alt="Zero To One"
        fill
        sizes="96px"
        priority
        className="object-contain"
      />
    </motion.div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-3 xl:px-6 xl:pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 sm:gap-6 xl:justify-center">
          <Link href="/" aria-label="Zero To One — accueil" className="relative z-50 shrink-0">
            <Mark />
          </Link>

          <nav
            className={`liquid-glass liquid-glass-nav flex items-center gap-6 rounded-full px-2 py-1 transition-shadow duration-500 sm:px-3 sm:py-1.5 xl:gap-9 xl:px-8 xl:py-3 ${
              scrolled ? "shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]" : ""
            }`}
          >
            <ul className="hidden items-center gap-9 xl:flex">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                        active ? "text-pearl" : "text-pearl/60 hover:text-pearl"
                      }`}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1.5 left-0 h-px w-full bg-green"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className="hidden whitespace-nowrap rounded-full border border-pearl/25 px-5 py-2 text-sm font-medium text-pearl transition-colors hover:border-pearl/60 xl:inline-block"
            >
              Démarrer un projet
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] xl:hidden"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="h-px w-6 bg-pearl"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="h-px w-6 bg-pearl"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="h-px w-6 bg-pearl"
              />
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex h-screen flex-col justify-center bg-forest-radial px-8 xl:hidden"
          >
            <ul className="flex flex-col gap-6">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <Link href={item.href} className="text-4xl font-light text-pearl">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}