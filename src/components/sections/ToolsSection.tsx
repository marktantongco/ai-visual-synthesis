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
} from "lucide-react";
import { FadeIn, GlassCard, NeonTag } from "@/components/ui/primitives";

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
    color: "#FFE500",
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
          className={`w-3.5 h-3.5 ${i <= Math.floor(rating) ? "fill-neon-yellow text-neon-yellow" : "text-white/20"}`}
        />
      ))}
      <span className="text-sm font-bold text-white/70 ml-1">{rating}</span>
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
  const hasAnimatedProgress = useRef(false);

  // Chevron rotation animation
  useEffect(() => {
    if (chevronRef.current) {
      gsap.to(chevronRef.current, {
        rotate: isExpanded ? 180 : 0,
        duration: 0.25,
        ease: "power2.out"
      });
    }
  }, [isExpanded]);

  // Progress bar animation
  useEffect(() => {
    if (progressBarRef.current && isExpanded && !hasAnimatedProgress.current) {
      hasAnimatedProgress.current = true;
      gsap.fromTo(progressBarRef.current,
        { width: "0%" },
        { width: `${tool.diffPercent}%`, duration: 0.8, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [isExpanded, tool.diffPercent]);

  // Expand/collapse animation
  useEffect(() => {
    if (contentRef.current) {
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
  }, [isExpanded]);

  return (
    <article itemScope itemType="https://schema.org/SoftwareApplication">
      <meta itemProp="name" content={tool.name} />
      <meta itemProp="description" content={tool.description} />
      <meta itemProp="applicationCategory" content="MultimediaApplication" />
      <meta itemProp="operatingSystem" content="All" />
      <meta itemProp="url" content={tool.href} />
      
      <GlassCard className="cursor-pointer" hover={!isExpanded}>
      <div
        className="p-6"
        onClick={onToggle}
        role="button"
        aria-expanded={isExpanded}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div
              className="text-3xl w-14 h-14 glass rounded-2xl flex items-center justify-center shrink-0 border"
              style={{ borderColor: tool.color + "30" }}
            >
              {tool.icon}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-display font-bold text-xl text-white">
                  {tool.name}
                </h3>
                <NeonTag color={tool.tagColor}>{tool.difficulty}</NeonTag>
              </div>
              <p
                className="text-sm font-medium mt-0.5"
                style={{ color: tool.color }}
              >
                {tool.tagline}
              </p>
            </div>
          </div>
          <div ref={chevronRef} className="shrink-0">
            <ChevronDown className="w-5 h-5 text-white/40" />
          </div>
        </div>

        {/* Rating + tags */}
        <div className="flex flex-wrap items-center gap-3 mt-4">
          <StarRating rating={tool.rating} />
          <div className="flex gap-2 flex-wrap">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Difficulty bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-white/30 mb-1.5">
            <span>Difficulty</span>
            <span>{tool.diffPercent}%</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full rounded-full"
              style={{
                width: isExpanded ? `${tool.diffPercent}%` : 0,
                background: `linear-gradient(90deg, ${tool.color}80, ${tool.color})`,
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
        <div className="px-6 pb-6 border-t border-white/5 pt-5 space-y-5">
          <p className="text-white/70 text-base leading-relaxed">
            {tool.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Strengths */}
            <div>
              <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">
                Key Strengths
              </h4>
              <ul className="space-y-2">
                {tool.strengths.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 text-base text-white/80"
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: tool.color }}
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Meta */}
            <div className="space-y-3">
              <div>
                <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">
                  Best For
                </div>
                <div className="text-base text-white/80">{tool.bestFor}</div>
              </div>
              <div>
                <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">
                  Pricing
                </div>
                <div
                  className="text-base font-semibold"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold text-dark-900 transition-all hover:opacity-90 active:scale-95 min-h-[48px]"
            style={{ background: tool.color }}
          >
            Try {tool.name}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </GlassCard>
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
    <section id="tools" className="section scroll-mt-20" aria-labelledby="tools-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsJsonLd) }}
      />
      {/* Section header */}
      <FadeIn>
        <div className="text-center mb-16">
          <NeonTag color="cyan">AI Tools</NeonTag>
          <h2
            id="tools-heading"
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl mt-4 mb-4 tracking-tight"
          >
            Every Major <span className="gradient-text-cyan">AI Tool</span>
            <br />
            Compared
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Honest, in-depth breakdowns of every significant AI image generation
            tool. Click any card to expand the full analysis.
          </p>
        </div>
      </FadeIn>

      {/* Tool grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </section>
  );
}
