"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

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
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevActiveRef = useRef<string>(active);

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

  // Animate dots when active state changes
  useEffect(() => {
    sections.forEach((section, index) => {
      const dot = dotRefs.current[index];
      if (!dot) return;
      
      const isActive = active === section.id;
      const wasActive = prevActiveRef.current === section.id;
      
      if (isActive && !wasActive) {
        gsap.to(dot, {
          scale: 1.5,
          backgroundColor: "var(--neon-cyan)",
          duration: 0.2,
          ease: "power2.out"
        });
      } else if (!isActive && wasActive) {
        gsap.to(dot, {
          scale: 1,
          backgroundColor: "rgba(255,255,255,0.2)",
          duration: 0.2,
          ease: "power2.out"
        });
      }
    });
    
    prevActiveRef.current = active;
  }, [active]);

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center gap-3"
          aria-label={`Go to ${section.label}`}
        >
          <span className="text-xs text-white/30 group-hover:text-white/60 transition-colors">
            {section.label}
          </span>
          <div
            ref={(el) => { dotRefs.current[index] = el; }}
            className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors"
            style={{
              backgroundColor: active === section.id ? "var(--neon-cyan)" : "rgba(255,255,255,0.2)",
              transform: `scale(${active === section.id ? 1.5 : 1})`
            }}
          />
        </a>
      ))}
    </nav>
  );
}
