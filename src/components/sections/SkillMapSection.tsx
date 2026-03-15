"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, NeonTag } from "@/components/ui/primitives";
import { Zap, Eye, Layers, Cpu, Film, Shield } from "lucide-react";

/* ─── Data from AI Practitioner Skills Framework 2026 ─────────────── */
const skillNodes = [
  {
    id: 1,
    category: "1",
    title: "Technical Prompt Engineering",
    level: "Foundation",
    icon: Cpu,
    color: "#4DFFFF",
    description:
      "Master systematic prompt construction using the CLIP/T5 attention framework, semantic weight stacking, and style vocabulary from 500+ curated references.",
    keySkills: [
      "Semantic weight stacking",
      "Negative prompt algebra",
      "Style vocabulary tokens",
      "Platform-specific syntax",
    ],
    platforms: ["Midjourney", "SDXL", "FLUX.1", "DALL·E 3"],
    connects: [2, 3],
  },
  {
    id: 2,
    category: "2",
    title: "Photographic Literacy",
    level: "Foundation",
    icon: Eye,
    color: "#7B5CFF",
    description:
      "Apply real-world photography concepts (focal length, aperture, lighting setups) as AI control parameters to achieve photorealistic results.",
    keySkills: [
      "Lighting pattern vocabulary",
      "Camera/lens specifications",
      "Composition principles",
      "Color theory application",
    ],
    platforms: ["Midjourney", "SDXL", "Flux.1"],
    connects: [1, 4],
  },
  {
    id: 3,
    category: "3",
    title: "Strategic Negation & Skin Mastery",
    level: "Consistency Layer",
    icon: Shield,
    color: "#FF4FD8",
    description:
      "Advanced exclusion techniques to eliminate AI artifacts. Skin texture, lighting artifacts, and anatomical corrections via weighted negative prompts.",
    keySkills: [
      "Compound exclusion (weight ≥1.2)",
      "Skin texture preservation",
      "Anatomical correction",
      "Artifact suppression",
    ],
    platforms: ["SDXL", "ComfyUI", "Flux.1"],
    connects: [1, 4],
  },
  {
    id: 4,
    category: "4",
    title: "Identity Preservation & Consistency",
    level: "Consistency Layer",
    icon: Layers,
    color: "#FFB000",
    description:
      "Maintain consistent character, style, and setting across multi-image sequences using reference systems, seed control, and LoRA integration.",
    keySkills: [
      "IP-Adapter + ControlNet",
      "Seed management",
      "LoRA character sheets",
      "Style reference anchoring",
    ],
    platforms: ["SD / ComfyUI", "Midjourney --cref", "Flux.1"],
    connects: [3, 5],
  },
  {
    id: 5,
    category: "5",
    title: "Post-Processing & Hybrid Workflows",
    level: "Refinement Layer",
    icon: Film,
    color: "#00FF87",
    description:
      "Combine AI generation with professional post-processing: AI upscaling, Lightroom integration, inpainting for targeted corrections, and video frame workflows.",
    keySkills: [
      "AI upscaling (Topaz/ESRGAN)",
      "Lightroom AI presets",
      "Inpainting masking",
      "Img2img refinement",
    ],
    platforms: ["ComfyUI", "A1111", "Topaz", "Lightroom"],
    connects: [4, 6],
  },
  {
    id: 6,
    category: "6",
    title: "AI Agent Orchestration",
    level: "Orchestration Layer",
    icon: Zap,
    color: "#FF006E",
    description:
      "Design multi-agent pipelines for production AI workflows: Planner → Researcher → Generator → Reviewer chains with validation rules and fallback protocols.",
    keySkills: [
      "Agent role design",
      "Tool chaining",
      "Validation pipelines",
      "Fallback protocols",
    ],
    platforms: ["LangChain", "AutoGen", "Mastra", "CrewAI"],
    connects: [5],
  },
];

const layerColors: Record<string, string> = {
  "Foundation": "#4DFFFF",
  "Consistency Layer": "#7B5CFF",
  "Refinement Layer": "#00FF87",
  "Orchestration Layer": "#FF006E",
};

export default function SkillMapSection() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const active = skillNodes.find((n) => n.id === activeNode) ?? null;

  const skillJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AI Practitioner Skill Map",
    "description": "The 6-layer competency path from prompt engineering to agent orchestration.",
    "itemListElement": skillNodes.map((node, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "DefinedTerm",
        "name": node.title,
        "description": node.description,
        "inDefinedTermSet": "https://aivisualsynth.com#skillmap"
      }
    }))
  };

  return (
    <section
      id="skillmap"
      className="section scroll-mt-20"
      aria-labelledby="skillmap-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillJsonLd) }}
      />
      <FadeIn>
        <div className="text-center mb-12">
          <NeonTag color="cyan">2026 Framework</NeonTag>
          <h2
            id="skillmap-heading"
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl mt-4 mb-4 tracking-tight"
          >
            AI Practitioner{" "}
            <span className="gradient-text-powerup">Skill Map</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--pu-secondary)" }}>
            The 6-layer competency framework from the 2026 AI Practitioner Skills Framework.
            Click any node to explore its skills, tools, and connections.
          </p>
        </div>
      </FadeIn>

      {/* Layer legend */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(layerColors).map(([layer, color]) => (
            <div
              key={layer}
              className="flex items-center gap-2 glass rounded-full px-3 py-1.5 border border-white/5"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: color }}
              />
              <span className="text-xs font-medium text-white/60">{layer}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Skill node grid */}
      <FadeIn delay={0.15}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {skillNodes.map((node, i) => {
            const Icon = node.icon;
            const isActive = activeNode === node.id;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveNode(isActive ? null : node.id)}
                className={`skill-node relative rounded-2xl p-5 border cursor-pointer ${
                  isActive ? "border-opacity-80" : "border-white/8"
                }`}
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${node.color}18, ${node.color}08)`
                    : "rgba(255,255,255,0.03)",
                  borderColor: isActive ? node.color + "80" : "rgba(255,255,255,0.08)",
                  boxShadow: isActive ? `0 0 40px ${node.color}25` : "none",
                }}
                role="button"
                aria-expanded={isActive}
                aria-label={`Skill node: ${node.title}`}
              >
                {/* Category badge */}
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: node.color + "20" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: node.color }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{
                      background: layerColors[node.level] + "20",
                      color: layerColors[node.level],
                    }}
                  >
                    {node.level}
                  </span>
                </div>

                <div
                  className="text-[10px] font-mono mb-1"
                  style={{ color: node.color + "90" }}
                >
                  SKILL {node.category} / 6
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2 leading-tight">
                  {node.title}
                </h3>

                {/* Platform pills */}
                <div className="flex flex-wrap gap-1 mt-auto">
                  {node.platforms.slice(0, 3).map((p) => (
                    <span
                      key={p}
                      className="text-[10px] px-2 py-0.5 rounded-full border border-white/8 text-white/40"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* Connection arrows */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs font-mono"
                    style={{ color: node.color }}
                  >
                    ↕ connects to {node.connects.length} skill{node.connects.length !== 1 ? "s" : ""}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </FadeIn>

      {/* Detail panel */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border p-6 md:p-8"
            style={{
              background: `linear-gradient(135deg, ${active.color}10, rgba(255,255,255,0.02))`,
              borderColor: active.color + "40",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: description */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: active.color + "25" }}
                  >
                    <active.icon className="w-6 h-6" style={{ color: active.color }} />
                  </div>
                  <div>
                    <div
                      className="text-[10px] font-mono font-bold uppercase tracking-widest mb-0.5"
                      style={{ color: active.color }}
                    >
                      Skill {active.category} of 6 · {active.level}
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {active.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--pu-secondary)" }}>
                  {active.description}
                </p>

                {/* Synergy map */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">
                    Connects To
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.connects.map((cid) => {
                      const cn = skillNodes.find((n) => n.id === cid);
                      if (!cn) return null;
                      return (
                        <button
                          key={cid}
                          onClick={() => setActiveNode(cid)}
                          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl border transition-all hover:scale-105"
                          style={{
                            borderColor: cn.color + "50",
                            color: cn.color,
                            background: cn.color + "15",
                          }}
                        >
                          <cn.icon className="w-3 h-3" />
                          {cn.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right: skills + platforms */}
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">
                    Key Skills
                  </div>
                  <ul className="space-y-2">
                    {active.keySkills.map((skill, i) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: active.color }}
                        />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">
                    Compatible Platforms
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.platforms.map((p) => (
                      <span
                        key={p}
                        className="text-xs px-3 py-1 rounded-lg border border-white/10 text-white/60 font-mono"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill synergy score */}
                <div
                  className="rounded-xl p-4 flex items-center gap-4"
                  style={{ background: active.color + "12" }}
                >
                  <div
                    className="text-3xl font-display font-black"
                    style={{ color: active.color }}
                  >
                    {active.id}/6
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/50 uppercase tracking-wider">
                      Framework Position
                    </div>
                    <div className="text-sm text-white/70 mt-0.5">
                      {active.level} layer — master this to unlock the next tier
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skill synergy map visual */}
      <FadeIn delay={0.3}>
        <div className="mt-10 glass rounded-2xl border border-white/5 p-6 text-center">
          <div className="text-xs font-mono text-white/30 mb-2 uppercase tracking-widest">Synergy Flow</div>
          <div className="flex items-center justify-center flex-wrap gap-2 text-xs font-medium">
            {["Foundation", "→", "Consistency Layer", "→", "Refinement Layer", "→", "Orchestration Layer"].map((item, i) => (
              <span
                key={i}
                className={item === "→" ? "" : "px-3 py-1 rounded-full border"}
                style={{
                  color: item === "→" ? "rgba(255,255,255,0.2)" : (layerColors[item] ?? "white"),
                  borderColor: item !== "→" && layerColors[item] ? layerColors[item] + "40" : undefined,
                  background: item !== "→" && layerColors[item] ? layerColors[item] + "15" : undefined,
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: "var(--pu-muted)" }}>
            Skills compound. Foundational prompting → Consistency → Hybrid Workflows → Scalable Agent Orchestration.
          </p>
        </div>
      </FadeIn>

      {/* SEO hidden content for crawlers */}
      <div className="sr-only">
        {skillNodes.map((node) => (
          <article key={node.id} itemScope itemType="https://schema.org/DefinedTerm">
            <h3 itemProp="name">{node.title} - {node.level}</h3>
            <p itemProp="description">{node.description}</p>
            <p>Key Skills: {node.keySkills.join(", ")}</p>
            <p>Platforms: {node.platforms.join(", ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
