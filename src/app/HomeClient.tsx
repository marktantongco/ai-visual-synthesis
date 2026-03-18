"use client";

import { ScrollProgress } from "@/components/ui/primitives";
import CursorFollower from "@/components/ui/CursorFollower";
import MobileTabBar from "@/components/ui/MobileTabBar";
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
import InteractiveToolsSection from "@/components/tools/InteractiveToolsSection";
import CompareChoose from "@/components/sections/CompareChoose";

export default function HomeClient() {
  return (
    <main className="relative">
      {/* TIER 2: Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* TIER 2: Custom Cursor Follower (Desktop Only) */}
      <CursorFollower />
      
      {/* Desktop Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Knowledge Galaxy */}
      <KnowledgeGalaxy />
      
      {/* Prompt Builder (Original) */}
      <section id="prompt-builder">
        <PromptBuilder />
      </section>
      
      {/* NEW: Interactive Tools Section */}
      <InteractiveToolsSection />
      
      {/* NEW: Compare & Choose Matrix */}
      <CompareChoose />
      
      {/* Search Section */}
      <section id="search">
        <SearchSection />
      </section>
      
      {/* Skill Map */}
      <section id="skillmap">
        <SkillMapSection />
      </section>
      
      {/* Tools Section */}
      <section id="tools">
        <ToolsSection />
      </section>
      
      {/* Techniques Section */}
      <section id="techniques">
        <TechniquesSection />
      </section>
      
      {/* Prompts Section */}
      <section id="prompts">
        <PromptsSection />
      </section>
      
      {/* Gallery Section */}
      <section id="gallery">
        <GallerySection />
      </section>
      
      {/* Roadmap Section */}
      <section id="roadmap">
        <RoadmapSection />
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile Bottom Tab Bar */}
      <MobileTabBar />
    </main>
  );
}
