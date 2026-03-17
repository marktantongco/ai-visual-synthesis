"use client";

import { ScrollProgress } from "@/components/ui/primitives";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import KnowledgeGalaxy from "@/components/sections/KnowledgeGalaxy";
import PromptBuilder from "@/components/sections/PromptBuilder";
import SearchSection from "@/components/sections/SearchSection";
import SkillMapSection from "@/components/sections/SkillMapSection";
import ToolsSection from "@/components/sections/ToolsSection";
import TechniquesSection from "@/components/sections/TechniquesSection";
import PromptsSection from "@/components/sections/PromptsSection";
import GallerySection from "@/components/sections/GallerySection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import Footer from "@/components/sections/Footer";

export default function HomeClient() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <KnowledgeGalaxy />
      
      <section id="prompt-builder">
        <PromptBuilder />
      </section>
      
      <section id="search">
        <SearchSection />
      </section>
      
      <section id="skillmap">
        <SkillMapSection />
      </section>
      
      <section id="tools">
        <ToolsSection />
      </section>
      
      <section id="techniques">
        <TechniquesSection />
      </section>
      
      <section id="prompts">
        <PromptsSection />
      </section>
      
      <section id="gallery">
        <GallerySection />
      </section>
      
      <section id="roadmap">
        <RoadmapSection />
      </section>
      
      <Footer />
    </main>
  );
}
