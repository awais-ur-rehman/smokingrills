import { BounceIcon } from "@/components/ui/BounceIcon";

export function Footer() {
  return (
    <footer className="relative flex h-screen flex-col overflow-hidden bg-cream px-[2.5vw] py-[8vw] font-sans text-black">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 text-sm font-bold uppercase">
        <nav className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Burgers</a>
          <a href="#">Spices</a>
          <a href="#">Contact</a>
        </nav>
        <span>© 2026 CRAV — All Rights Reserved</span>
      </div>

      <div className="border-t border-black/20" />

      <p className="pt-6 text-sm font-bold uppercase text-black/70">
        Smashed Patties · Toasted Buns · Est. 1997
      </p>

      <div className="relative mt-auto">
        <BounceIcon
          src="/images/ingredient-cheese.png"
          alt="Cheese slice"
          rise="60vh"
          duration={3.2}
          delay={0}
          className="absolute left-[60%] top-[36%] z-10 w-14 sm:w-20"
        />
        <BounceIcon
          src="/images/ingredient-lettuce.png"
          alt="Lettuce"
          rise="65vh"
          duration={3.8}
          delay={0.4}
          className="absolute left-[4%] top-[35%] z-10 w-16 sm:w-24"
        />
        <BounceIcon
          src="/images/ingredient-patty.png"
          alt="Beef patty"
          rise="70vh"
          duration={2.8}
          delay={0.8}
          className="absolute right-[4%] top-[33%] z-10 w-14 sm:w-20"
        />
        <BounceIcon
          src="/images/ingredient-tomato.png"
          alt="Tomato slice"
          rise="55vh"
          duration={3.4}
          delay={1.2}
          className="absolute left-[32%] top-[38%] z-10 w-16 sm:w-24"
        />

        <h2 className="text-stroke-white select-none text-center font-display leading-none text-crimson text-[42vw] sm:text-[32vw]">
          CRAV
        </h2>
      </div>
    </footer>
  );
}
