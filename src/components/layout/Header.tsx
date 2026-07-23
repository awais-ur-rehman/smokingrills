"use client";

import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setHidden(y > lastScrollY.current && y > 80);
      lastScrollY.current = y;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-transparent transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10">
        <span className="text-stroke-white font-display text-2xl text-crimson sm:text-3xl">
          CRAV
        </span>

        <div className="flex items-center gap-3">
          <Button variant="solid" className="hidden sm:inline-block">
            Burgers
          </Button>
          <button className="flex items-center gap-2 rounded-full border-2 border-ink/70 px-5 py-3 font-sans font-bold text-sm uppercase text-ink">
            Menu
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
