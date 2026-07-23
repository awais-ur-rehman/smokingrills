import { Hero } from "@/components/sections/Hero";
import { TopClassic } from "@/components/sections/TopClassic";
import { Experience } from "@/components/sections/Experience";
import { PhotoBanner } from "@/components/sections/PhotoBanner";
import { PureQuality } from "@/components/sections/PureQuality";
import { QualityTravels } from "@/components/sections/QualityTravels";
import { FeelTheChange } from "@/components/sections/FeelTheChange";

export default function Home() {
  return (
    <>
      <Hero />
      <TopClassic />
      <Experience />
      <PhotoBanner />
      <PureQuality />
      <QualityTravels />
      <FeelTheChange />
    </>
  );
}
