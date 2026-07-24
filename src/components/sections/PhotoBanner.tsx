import Image from "next/image";

export function PhotoBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/banner-dish.jpg"
        alt="Guest enjoying a Smokin' Grill Cafe dish"
        fill
        className="object-cover"
      />
      <svg
        className="absolute inset-x-0 top-0 h-20 w-full text-crimson md:h-32"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,80 C1320,140 1200,20 1000,60 C800,100 700,160 500,110 C300,60 180,20 0,90 Z"
        />
      </svg>
      <svg
        className="absolute inset-x-0 bottom-0 h-16 w-full text-cream md:h-28"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,110 C180,180 300,140 500,90 C700,40 800,100 1000,140 C1200,180 1320,60 1440,120 L1440,200 L0,200 Z"
        />
      </svg>
    </section>
  );
}
