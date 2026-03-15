"use client";

import { HeroSection } from "@/components/sections/AnimationShowcase";
import { TextRevealSection } from "@/components/sections/AnimationShowcase";
import { StaggerCardsSection } from "@/components/sections/AnimationShowcase";
import { ParallaxSection } from "@/components/sections/AnimationShowcase";
import { AnimationPlayground } from "@/components/sections/AnimationShowcase";
import { FloatingSection } from "@/components/sections/AnimationShowcase";
import { Footer } from "@/components/sections/AnimationShowcase";

export default function AnimationShowcasePage() {
  return (
    <main className="bg-black">
      <HeroSection />
      <TextRevealSection />
      <StaggerCardsSection />
      <ParallaxSection />
      <AnimationPlayground />
      <FloatingSection />
      <Footer />
    </main>
  );
}
