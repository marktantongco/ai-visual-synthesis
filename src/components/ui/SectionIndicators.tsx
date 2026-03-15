"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "prompt-builder", label: "Builder" },
  { id: "search", label: "Search" },
  { id: "skillmap", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "techniques", label: "Techniques" },
  { id: "prompts", label: "Prompts" },
  { id: "gallery", label: "Gallery" },
  { id: "roadmap", label: "Roadmap" },
];

export default function SectionIndicators() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center gap-3"
          aria-label={`Go to ${section.label}`}
        >
          <span className="text-xs text-white/30 group-hover:text-white/60 transition-colors">
            {section.label}
          </span>
          <motion.div
            className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors"
            animate={{
              scale: active === section.id ? 1.5 : 1,
              backgroundColor: active === section.id ? "var(--neon-cyan)" : "rgba(255,255,255,0.2)",
            }}
            transition={{ duration: 0.2 }}
          />
        </a>
      ))}
    </nav>
  );
}
