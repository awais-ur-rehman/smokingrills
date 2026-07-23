import Image from "next/image";

export function PureQuality() {
  return (
    <section className="relative flex h-screen min-h-140 flex-col items-center justify-center overflow-hidden bg-cream px-6">
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="text-stroke-white inline-block -rotate-3 font-sans text-[clamp(1.1rem,2.8vw,2.2rem)] text-crimson">
          Pure Quality
        </span>

        <h2 className="text-stroke-white relative z-10 mt-2 font-sans uppercase leading-[0.9] tracking-tight text-crimson text-[clamp(3rem,15vw,10rem)]">
          <span className="block">Every Layer</span>
          <span className="block">Packed With</span>
          <span className="block">Signature</span>
          <span className="block">Flavor</span>
        </h2>

        <Image
          src="/images/ingredient-lettuce.png"
          alt="Crisp lettuce leaf"
          width={260}
          height={260}
          className="absolute -left-[4%] top-0 z-0 w-24 -rotate-6 sm:w-40"
        />
        <Image
          src="/images/ingredient-tomato.png"
          alt="Sliced tomato"
          width={260}
          height={260}
          className="absolute -right-[2%] top-[28%] z-0 w-20 rotate-6 sm:w-36"
        />
        <Image
          src="/images/ingredient-cheese.png"
          alt="Melted cheese slice"
          width={260}
          height={260}
          className="absolute -left-[2%] bottom-[16%] z-0 w-20 -rotate-12 sm:w-36"
        />
        <Image
          src="/images/ingredient-patty.png"
          alt="Grilled beef patty"
          width={260}
          height={260}
          className="absolute -right-[4%] bottom-0 z-0 w-24 rotate-6 sm:w-40"
        />
      </div>
    </section>
  );
}
