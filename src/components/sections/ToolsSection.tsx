"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import {
  ExternalLink,
  Star,
  Zap,
  Image,
  Video,
  Brain,
  Layers,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { FadeIn, NeonTag } from "@/components/ui/primitives";
import { useReducedMotion } from "@/lib/gsap-animations";

const tools = [
  {
    id: "midjourney",
    name: "Midjourney",
    tagline: "The King of Aesthetic AI Art",
    description:
      "The gold standard for photorealistic and painterly AI imagery. Known for cinematic quality, rich textures, and unparalleled aesthetic coherence. Best for commercial creative work.",
    tags: ["Photorealistic", "Artistic", "Premium"],
    tagColor: "cyan" as const,
    rating: 4.9,
    icon: "🎨",
    color: "#00F5FF",
    strengths: [
      "Cinematic lighting",
      "Painterly styles",
      "Consistent aesthetics",
      "High resolution",
    ],
    bestFor: "Artists, designers, commercial projects",
    pricing: "From $10/mo",
    href: "https://midjourney.com",
    difficulty: "Intermediate",
    diffPercent: 60,
  },
  {
    id: "dalle",
    name: "DALL·E 3",
    tagline: "Prompt-Accurate & Versatile",
    description:
      "OpenAI's flagship model excels at following complex prompts with precision. Integrated into ChatGPT, making it the most accessible AI image tool for non-technical users.",
    tags: ["Accurate", "Text-in-image", "ChatGPT"],
    tagColor: "green" as const,
    rating: 4.7,
    icon: "⚡",
    color: "#00FF87",
    strengths: [
      "Text rendering",
      "Prompt accuracy",
      "Safe outputs",
      "ChatGPT integration",
    ],
    bestFor: "Marketers, content creators, beginners",
    pricing: "ChatGPT Plus ($20/mo)",
    href: "https://openai.com/dall-e-3",
    difficulty: "Beginner",
    diffPercent: 25,
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    tagline: "Open-Source Powerhouse",
    description:
      "The fully open-source model that powers thousands of custom fine-tunes, LoRAs, and tools. Complete creative control with infinite customization possibilities.",
    tags: ["Open Source", "LoRA", "Local"],
    tagColor: "purple" as const,
    rating: 4.8,
    icon: "⚙️",
    color: "#BF00FF",
    strengths: [
      "Full control",
      "LoRA support",
      "Local deployment",
      "No censorship",
    ],
    bestFor: "Developers, advanced artists, researchers",
    pricing: "Free (self-hosted)",
    href: "https://stability.ai",
    difficulty: "Advanced",
    diffPercent: 90,
  },
  {
    id: "flux",
    name: "Flux.1",
    tagline: "The New Challenger",
    description:
      "Black Forest Labs' breakthrough model achieving photorealism that rivals Midjourney with stunning human anatomy accuracy and natural lighting — at open-source prices.",
    tags: ["Photorealism", "Free", "2024"],
    tagColor: "yellow" as const,
    rating: 4.8,
    icon: "🌊",
    color: "#FFDE00",
    strengths: ["Human anatomy", "Natural lighting", "Open weights", "Speed"],
    bestFor: "Photographers, portrait artists",
    pricing: "Free / API pricing",
    href: "https://blackforestlabs.ai",
    difficulty: "Intermediate",
    diffPercent: 55,
  },
  {
    id: "runway",
    name: "Runway ML",
    tagline: "Image-to-Video Leader",
    description:
      "The premier tool for AI video generation and image animation. Gen-2 and Gen-3 Alpha produce cinema-quality video from still images or text prompts.",
    tags: ["Video", "Animation", "Professional"],
    tagColor: "pink" as const,
    rating: 4.6,
    icon: "🎬",
    color: "#FF006E",
    strengths: [
      "Video generation",
      "Frame interpolation",
      "Inpainting",
      "Professional grade",
    ],
    bestFor: "Filmmakers, motion designers, agencies",
    pricing: "From $15/mo",
    href: "https://runwayml.com",
    difficulty: "Intermediate",
    diffPercent: 50,
  },
  {
    id: "ideogram",
    name: "Ideogram",
    tagline: "Best Text-in-Image AI",
    description:
      "Solves the hardest problem in AI image gen: accurate text rendering. Create logos, posters, and typography-heavy designs with near-perfect lettering.",
    tags: ["Typography", "Logos", "Text"],
    tagColor: "green" as const,
    rating: 4.5,
    icon: "🔤",
    color: "#00FF87",
    strengths: ["Text accuracy", "Logo design", "Poster art", "Brand assets"],
    bestFor: "Graphic designers, brand teams",
    pricing: "Free tier / $8/mo",
    href: "https://ideogram.ai",
    difficulty: "Beginner",
    diffPercent: 20,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= Math.floor(rating) ? "fill-brutal-yellow text-brutal-yellow" : "text-brutal-black/20"}`}
        />
      ))}
      <span className="text-sm font-bold text-brutal-black ml-1.5 font-mono">{rating}</span>
    </div>
  );
}

function ToolCard({
  tool,
  isExpanded,
  onToggle,
}: {
  tool: (typeof tools)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const chevronRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimatedProgress = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  // Chevron rotation animation
  useEffect(() => {
    if (chevronRef.current && !prefersReducedMotion) {
      gsap.to(chevronRef.current, {
        rotate: isExpanded ? 180 : 0,
        duration: 0.25,
        ease: "power2.out"
      });
    }
  }, [isExpanded, prefersReducedMotion]);

  // Progress bar animation
  useEffect(() => {
    if (progressBarRef.current && isExpanded && !hasAnimatedProgress.current && !prefersReducedMotion) {
      hasAnimatedProgress.current = true;
      gsap.fromTo(progressBarRef.current,
        { width: "0%" },
        { width: `${tool.diffPercent}%`, duration: 0.8, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [isExpanded, tool.diffPercent, prefersReducedMotion]);

  // Expand/collapse animation
  useEffect(() => {
    if (contentRef.current && !prefersReducedMotion) {
      if (isExpanded) {
        gsap.fromTo(contentRef.current,
          { height: 0 },
          { height: "auto", duration: 0.35, ease: "power2.out" }
        );
      } else {
        gsap.to(contentRef.current, {
          height: 0, duration: 0.35, ease: "power2.out"
        });
      }
    }
  }, [isExpanded, prefersReducedMotion]);

  // Hover effect
  useEffect(() => {
    if (!cardRef.current || isExpanded || prefersReducedMotion) return;

    const card = cardRef.current;

    const handleEnter = () => {
      gsap.to(card, {
        y: -6,
        x: -6,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        y: 0,
        x: 0,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, [isExpanded, prefersReducedMotion]);

  return (
    <article itemScope itemType="https://schema.org/SoftwareApplication" className="h-full">
      <meta itemProp="name" content={tool.name} />
      <meta itemProp="description" content={tool.description} />
      <meta itemProp="applicationCategory" content="MultimediaApplication" />
      <meta itemProp="operatingSystem" content="All" />
      <meta itemProp="url" content={tool.href} />

      <div
        ref={cardRef}
        className="h-full bg-brutal-cream border-4 border-brutal-black cursor-pointer transition-all"
        style={{ 
          boxShadow: isExpanded 
            ? '12px 12px 0 0 #FFDE00' 
            : '8px 8px 0 0 #0D0D0D',
        }}
        onClick={onToggle}
        role="button"
        aria-expanded={isExpanded}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
      >
        <div className="p-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div
                className="text-3xl w-14 h-14 flex items-center justify-center shrink-0 border-3 border-brutal-black"
                style={{ 
                  backgroundColor: tool.color + '20',
                  borderWidth: '3px'
                }}
              >
                {tool.icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-display font-bold text-lg text-brutal-black">
                    {tool.name}
                  </h3>
                  <span 
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border-2 font-mono"
                    style={{ 
                      color: tool.color,
                      borderColor: tool.color,
                      backgroundColor: tool.color + '15'
                    }}
                  >
                    {tool.difficulty}
                  </span>
                </div>
                <p
                  className="text-sm font-semibold mt-1 text-brutal-gray"
                >
                  {tool.tagline}
                </p>
              </div>
            </div>
            <div ref={chevronRef} className="shrink-0 mt-2">
              <ChevronDown className="w-5 h-5 text-brutal-black" />
            </div>
          </div>

          {/* Rating + tags */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <StarRating rating={tool.rating} />
            <div className="flex gap-2 flex-wrap">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 border-2 border-brutal-black/20 text-brutal-black/70 font-medium uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Difficulty bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-brutal-gray font-mono font-bold uppercase mb-1.5">
              <span>Difficulty Level</span>
              <span>{tool.diffPercent}%</span>
            </div>
            <div className="h-2 bg-brutal-black/10 border-2 border-brutal-black overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full"
                style={{
                  width: isExpanded ? `${tool.diffPercent}%` : 0,
                  backgroundColor: tool.color,
                }}
              />
            </div>
          </div>
        </div>

        {/* Expanded content */}
        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{ height: 0 }}
          aria-hidden={!isExpanded}
        >
          <div className="px-5 pb-5 border-t-4 border-brutal-black pt-5 space-y-5">
            <p className="text-brutal-black/80 text-base leading-relaxed">
              {tool.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Strengths */}
              <div>
                <h4 className="text-xs font-bold text-brutal-black/60 uppercase tracking-wider mb-3 font-mono">
                  Key Strengths
                </h4>
                <ul className="space-y-2">
                  {tool.strengths.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-base text-brutal-black"
                    >
                      <span
                        className="w-3 h-3 border-2 shrink-0"
                        style={{ borderColor: tool.color, backgroundColor: tool.color }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta */}
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-bold text-brutal-black/60 uppercase tracking-wider mb-1 font-mono">
                    Best For
                  </div>
                  <div className="text-base text-brutal-black">{tool.bestFor}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-brutal-black/60 uppercase tracking-wider mb-1 font-mono">
                    Pricing
                  </div>
                  <div
                    className="text-base font-bold"
                    style={{ color: tool.color }}
                  >
                    {tool.pricing}
                  </div>
                </div>
              </div>
            </div>

            <a
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-bold text-brutal-black border-4 border-brutal-black transition-all hover:bg-brutal-yellow min-h-[48px] uppercase tracking-wide"
              style={{ 
                backgroundColor: tool.color,
                boxShadow: '4px 4px 0 0 #0D0D0D'
              }}
            >
              Try {tool.name}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ToolsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toolsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": tools.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": tool.name,
        "description": tool.description,
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": tool.pricing.includes("Free") ? "0" : "10",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": tool.rating,
          "bestRating": "5",
          "ratingCount": "100"
        }
      }
    }))
  };

  return (
    <section 
      id="tools" 
      className="section scroll-mt-20 py-20 px-4 bg-brutal-cream" 
      aria-labelledby="tools-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsJsonLd) }}
      />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 border-3 border-brutal-black bg-brutal-yellow font-mono text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              AI Tools Compared
            </span>
            <h2
              id="tools-heading"
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl mt-6 mb-4 tracking-tight text-brutal-black"
            >
              Every Major{" "}
              <span className="text-brutal-yellow" style={{ textShadow: '4px 4px 0 #0D0D0D' }}>
                AI Tool
              </span>
            </h2>
            <p className="text-brutal-gray text-lg max-w-2xl mx-auto leading-relaxed">
              Honest, in-depth breakdowns of every significant AI image generation
              tool. Click any card to expand the full analysis.
            </p>
          </div>
        </FadeIn>

        {/* Tool grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <FadeIn key={tool.id} delay={i * 0.08}>
              <ToolCard
                tool={tool}
                isExpanded={expanded === tool.id}
                onToggle={() =>
                  setExpanded(expanded === tool.id ? null : tool.id)
                }
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
