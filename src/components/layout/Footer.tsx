import { BounceIcon } from "@/components/ui/BounceIcon";

export function Footer() {
  return (
    <footer className="relative flex h-[50vh] lg:h-screen flex-col overflow-hidden bg-cream px-[2.5vw] py-[8vw] font-sans text-black">
      <div className="flex flex-col items-start gap-4 pb-6 text-sm lg:text-2xl font-bold uppercase md:flex-row md:items-center md:justify-between">
        <nav className="flex flex-col gap-3 md:flex-row md:gap-6">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Locations</a>
          <a href="#">Contact</a>
        </nav>
        <span>© 2026 Smokin&apos; Grill Cafe — All Rights Reserved</span>
      </div>

      <div className="border-t border-black/20" />

      <p className="pt-6 text-sm lg:text-2xl font-bold uppercase text-black/70">
        International Flavours, Locally Served.
      </p>

      <div className="relative mt-auto">
        <BounceIcon
          src="/images/ingredient-cheese.png"
          alt="Cheese slice"
          rise={60}
          drift={-7}
          spin={-30}
          duration={3.2}
          delay={0}
          className="absolute left-[60%] top-[36%] z-10 w-14 md:w-20"
        />
        <BounceIcon
          src="/images/ingredient-lettuce.png"
          alt="Lettuce"
          rise={65}
          drift={6}
          spin={25}
          duration={3.8}
          delay={0.4}
          className="absolute left-[4%] top-[35%] z-10 w-16 md:w-24"
        />
        <BounceIcon
          src="/images/ingredient-patty.png"
          alt="Beef patty"
          rise={70}
          drift={-5}
          spin={-20}
          duration={2.8}
          delay={0.8}
          className="absolute right-[4%] top-[33%] z-10 w-14 md:w-20"
        />
        <BounceIcon
          src="/images/ingredient-tomato.png"
          alt="Tomato slice"
          rise={55}
          drift={8}
          spin={35}
          duration={3.4}
          delay={1.2}
          className="absolute left-[32%] top-[38%] z-10 w-16 md:w-24"
        />

        <h2 className="text-stroke-white select-none text-center font-display leading-none text-crimson lg:text-[22vw] text-[18vw]">
          SMOKIN&apos;
        </h2>
      </div>
    </footer>
  );
}
