"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FadeIn, NeonTag } from "@/components/ui/primitives";

// Gallery items — using gradient placeholders with unique patterns
const gallery = [
  {
    id: 1,
    title: "Neon Cityscape",
    tool: "Midjourney",
    style: "Cyberpunk",
    bentoClass: "bento-1",
    gradient: "from-[#4DFFFF]/30 to-[#7B5CFF]/30",
  },
  {
    id: 2,
    title: "Forest Spirit",
    tool: "Stable Diffusion",
    style: "Fantasy",
    bentoClass: "bento-2",
    gradient: "from-[#00FF87]/30 to-[#4DFFFF]/20",
  },
  {
    id: 3,
    title: "Desert Geometry",
    tool: "Flux.1",
    style: "Minimalism",
    bentoClass: "bento-3",
    gradient: "from-[#FFB000]/30 to-[#FF4FD8]/20",
  },
  {
    id: 4,
    title: "AI Mind Map",
    tool: "DALL·E 3",
    style: "Abstract",
    bentoClass: "bento-4",
    gradient: "from-[#7B5CFF]/30 to-[#FF4FD8]/30",
  },
  {
    id: 5,
    title: "Biomech Warrior",
    tool: "Midjourney",
    style: "Sci-fi",
    bentoClass: "bento-5",
    gradient: "from-[#FF4FD8]/30 to-[#FFB000]/20",
  },
  {
    id: 6,
    title: "Glass Architecture",
    tool: "Flux.1",
    style: "Modern",
    bentoClass: "bento-6",
    gradient: "from-[#4DFFFF]/20 to-[#00FF87]/30",
  },
  {
    id: 7,
    title: "Oil Portrait Study",
    tool: "Stable Diffusion",
    style: "Classical",
    bentoClass: "bento-7",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

const filters = ["All", "Midjourney", "DALL·E 3", "Stable Diffusion", "Flux.1"];

// Abstract art background for each card
function ArtPlaceholder({
  gradient,
  icon,
}: {
  gradient: string;
  icon: string;
}) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}
    >
      {/* Geometric decoration */}
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <pattern
                id={`grid-${Math.random()}`}
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect
              width="400"
              height="400"
              fill={`url(#grid-${Math.random()})`}
            />
            <circle
              cx="200"
              cy="200"
              r="100"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <circle
              cx="200"
              cy="200"
              r="60"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <line
              x1="100"
              y1="100"
              x2="300"
              y2="300"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.2"
            />
            <line
              x1="300"
              y1="100"
              x2="100"
              y2="300"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.2"
            />
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-30">{icon}</span>
        </div>
      </div>
    </div>
  );
}

const icons = ["🌆", "🌿", "🏜️", "🧠", "⚔️", "🏗️", "🎨"];

export default function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const filterButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);
  const prevFilterRef = useRef<string>(filter);

  const filtered =
    filter === "All" ? gallery : gallery.filter((g) => g.tool === filter);

  // Setup hover animations for filter buttons
  useEffect(() => {
    const cleanupFns: (() => void)[] = [];
    
    filterButtonRefs.current.forEach((btn) => {
      if (!btn) return;
      
      const handleEnter = () => {
        gsap.to(btn, { scale: 1.04, duration: 0.2, ease: "power2.out" });
      };
      
      const handleLeave = () => {
        gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" });
      };
      
      const handleDown = () => {
        gsap.to(btn, { scale: 0.97, duration: 0.1, ease: "power2.out" });
      };
      
      const handleUp = () => {
        gsap.to(btn, { scale: 1, duration: 0.1, ease: "power2.out" });
      };
      
      btn.addEventListener("mouseenter", handleEnter);
      btn.addEventListener("mouseleave", handleLeave);
      btn.addEventListener("mousedown", handleDown);
      btn.addEventListener("mouseup", handleUp);
      
      cleanupFns.push(() => {
        btn.removeEventListener("mouseenter", handleEnter);
        btn.removeEventListener("mouseleave", handleLeave);
        btn.removeEventListener("mousedown", handleDown);
        btn.removeEventListener("mouseup", handleUp);
      });
    });
    
    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  // Animate grid items when filter changes
  useEffect(() => {
    if (!gridRef.current) return;
    
    // Only animate if filter actually changed
    if (prevFilterRef.current !== filter) {
      prevFilterRef.current = filter;
      
      const items = gridRef.current.querySelectorAll(".gallery-item");
      gsap.fromTo(items, 
        { scale: 0.95 },
        { 
          scale: 1, 
          duration: 0.4, 
          stagger: 0.06, 
          ease: "power2.out" 
        }
      );
    }
  }, [filter]);

  return (
    <section id="gallery" className="section scroll-mt-20" aria-labelledby="gallery-heading">
      <FadeIn>
        <div className="text-center mb-12">
          <NeonTag color="pink">Gallery</NeonTag>
          <h2
            id="gallery-heading"
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl mt-4 mb-4 tracking-tight"
          >
            Style <span className="gradient-text-fire">Showcase</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Visual examples of what each tool produces across different styles
            and subjects.
          </p>
        </div>
      </FadeIn>

      {/* Filter tabs */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map((f, index) => (
            <button
              key={f}
              ref={(el) => { filterButtonRefs.current[index] = el; }}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                filter === f
                  ? "bg-neon-pink text-white border-neon-pink"
                  : "glass border-white/10 text-white/60 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Bento Grid */}
      <div
        key={filter}
        ref={gridRef}
        className="bento-grid"
      >
        {filtered.map((item, i) => (
          <div
            key={item.id}
            className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer group ${item.bentoClass}`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Art background */}
            <ArtPlaceholder
              gradient={item.gradient}
              icon={icons[i % icons.length]}
            />

            {/* Overlay on hover */}
            <div
              className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center transition-opacity duration-200"
              style={{ opacity: hoveredId === item.id ? 1 : 0 }}
            >
              <h3 className="font-display font-bold text-lg text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-neon-cyan font-medium">
                {item.tool}
              </p>
              <span className="mt-2 text-xs text-white/50 px-3 py-1 glass rounded-full border border-white/10">
                {item.style}
              </span>
            </div>

            {/* Label always visible */}
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-0">
              <div className="glass rounded-lg px-3 py-1.5 inline-flex items-center gap-2">
                <span className="text-xs font-medium text-white/70">
                  {item.title}
                </span>
              </div>
            </div>

            {/* Tool badge */}
            <div className="absolute top-3 right-3">
              <div className="glass rounded-full px-2.5 py-1 text-xs font-semibold text-white/70 border border-white/10">
                {item.tool.split(" ")[0]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
