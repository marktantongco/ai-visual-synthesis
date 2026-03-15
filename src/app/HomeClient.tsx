"use client";

import { ScrollProgress } from "@/components/ui/primitives";
import SectionIndicators from "@/components/ui/SectionIndicators";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PromptBuilder from "@/components/sections/PromptBuilder";
import SearchSection from "@/components/sections/SearchSection";
import SkillMapSection from "@/components/sections/SkillMapSection";
import ToolsSection from "@/components/sections/ToolsSection";
import TechniquesSection from "@/components/sections/TechniquesSection";
import PromptsSection from "@/components/sections/PromptsSection";
import GallerySection from "@/components/sections/GallerySection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import Footer from "@/components/sections/Footer";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

export default function HomeClient() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <SectionIndicators />
      <HeroSection />
      <PromptBuilder />
      <SearchSection />
      <SkillMapSection />
      <ToolsSection />
      <TechniquesSection />
      <PromptsSection />
      <GallerySection />
      <RoadmapSection />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
