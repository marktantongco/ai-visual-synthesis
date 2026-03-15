"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

// ─── Motion Config ─────────────────────────────────────────────
const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
const durMicro = 0.18;
const durStandard = 0.32;
const durHero = 4.2;

// ─── Animations ────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: durStandard, ease },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: durMicro,
    },
  },
};

// ─── Data ───────────────────────────────────────────────────────
const philosophy = {
  title: "Descriptive + Prescriptive",
  subtitle: "The Unified Approach",
  description:
    "Combine creative vision with physics-based precision. Descriptive tells the AI what to feel like—style, mood, atmosphere. Prescriptive tells it what to do physically—lighting ratios, focal lengths, material properties.",
  aspects: [
    {
      label: "Descriptive",
      desc: "Subject + Style + Mood",
      use: "Initial concepts, creative exploration",
    },
    {
      label: "Prescriptive",
      desc: "Physics Parameters + Technical Specs",
      use: "Production output, consistent results",
    },
  ],
};

const layers = [
  {
    num: "01",
    name: "Role",
    desc: "Define AI expertise level",
    example: '"Professional photographer"',
  },
  {
    num: "02",
    name: "Context",
    desc: "Establish product, platform, audience",
    example: '"E-commerce, mobile app"',
  },
  {
    num: "03",
    name: "Objective",
    desc: "Clear success criteria",
    example: '"Convert visitors to buyers"',
  },
  {
    num: "04",
    name: "Constraints",
    desc: "Quality guardrails",
    example: '"2-second load time"',
  },
  {
    num: "05",
    name: "Aesthetic",
    desc: "Visual style keywords",
    example: '"glassmorphism, neon"',
  },
  {
    num: "06",
    name: "Planning",
    desc: "Execution strategy",
    example: '"Define grid → Add components"',
  },
  {
    num: "07",
    name: "Output",
    desc: "Format specifications",
    example: '"React component, Tailwind"',
  },
  {
    num: "08",
    name: "Refinement",
    desc: "Quality review steps",
    example: '"Check accessibility"',
  },
];

const physics = {
  lighting: [
    { ratio: "2:1", stops: "1", effect: "Flat, even", for: "Beauty, corporate" },
    { ratio: "3:1", stops: "1.5", effect: "Natural modeling", for: "Standard portrait" },
    { ratio: "4:1", stops: "2", effect: "Dramatic", for: "Editorial, leadership" },
    { ratio: "8:1", stops: "3", effect: "Extreme contrast", for: "Noir, mystery" },
  ],
  patterns: [
    { name: "Rembrandt", pos: "45° high", signal: "Intellect, gravitas" },
    { name: "Butterfly", pos: "Above/centered", signal: "Beauty, confidence" },
    { name: "Loop", pos: "30-45°", signal: "Approachable" },
    { name: "Split", pos: "90° side", signal: "Power, intensity" },
    { name: "Rim", pos: "Backlight 135°", signal: "Premium, editorial" },
  ],
  kelvin: [
    { temp: "2700K", source: "Candlelight", mood: "Intimate, warm" },
    { temp: "3200K", source: "Tungsten", mood: "Cozy, warm" },
    { temp: "4500K", source: "Golden hour", mood: "Flattering" },
    { temp: "5000K", source: "Noon daylight", mood: "Balanced, natural" },
    { temp: "5600K", source: "Overcast", mood: "Cool, clinical" },
  ],
  focal: [
    { mm: "24mm", for: "Architecture, landscapes", impact: "Immersive, dramatic" },
    { mm: "35mm", for: "Documentary, street", impact: "Honest, natural" },
    { mm: "50mm", for: "General purpose", impact: "Truthful" },
    { mm: "85mm", for: "Portraits", impact: "Flattering, premium" },
    { mm: "105mm+", for: "Isolation", impact: "Prestigious, dominant" },
  ],
};

const thinkingModes = [
  { animal: "🐇", name: "Rabbit", mode: "Multiply Ideas", for: "Brainstorming" },
  { animal: "🦉", name: "Owl", mode: "Deep Analysis", for: "Research, understanding" },
  { animal: "🐜", name: "Ant", mode: "Break Into Steps", for: "Execution" },
  { animal: "🦅", name: "Eagle", mode: "Big Picture", for: "Strategy, planning" },
  { animal: "🐬", name: "Dolphin", mode: "Creative Solutions", for: "Innovation" },
  { animal: "🦫", name: "Beaver", mode: "Build Systems", for: "Construction" },
  { animal: "🐘", name: "Elephant", mode: "Cross-Field", for: "Connections" },
];

const vocabulary = [
  "glassmorphism",
  "brutalist ui",
  "bento grid",
  "neon accent",
  "liquid gradient",
  "dark-mode native",
  "micro-interactions",
  "kinetic typography",
  "neo-brutalism",
  "aurora gradients",
  "noise grain",
  "chromatic aberration",
  "claymorphism",
  "mesh gradient",
  "vignette",
];

const templates = [
  {
    name: "Executive Portrait",
    prompt: `Editorial portrait, confident, professional

PRESCRIPTIVE:
Rembrandt lighting, 4:1 ratio, 5600K
85mm f/1.4
SSS 1.2mm, visible pores
ARRI ALEXA 65 color science

--ar 4:5 --style raw --seed 12345`,
  },
  {
    name: "Product Photography",
    prompt: `Luxury product on seamless white

PRESCRIPTIVE:
Ring light 5600K, 2:1 ratio
90mm tilt-shift, f/11
Anisotropic reflections
Fresnel 0.04

--ar 4:3 --quality 2 --repeat 3`,
  },
  {
    name: "Cinematic Scene",
    prompt: `Film noir atmosphere, dramatic tension

PRESCRIPTIVE:
Anamorphic 1.33x squeeze
8:1 lighting ratio, 3200K
Horizontal blue streak flares
50mm anamorphic, f/2.8

--ar 21:9 --cinematic --v 6`,
  },
];

export default function FrameworkPage() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: "#0B0D10",
        color: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* ─── Hero Section ───────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: durHero, ease }}
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, #4DFFFF, transparent)",
          }}
        />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: durStandard }}
          className="text-xs font-mono tracking-widest uppercase mb-6"
          style={{ color: "#6B7280" }}
        >
          AI Visual Synthesis
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: durStandard, ease }}
          className="font-display font-black leading-[0.9]"
          style={{
            fontSize: "clamp(3rem, 6vw, 6rem)",
            letterSpacing: "-0.02em",
          }}
        >
          The Complete
          <br />
          <span style={{ color: "#4DFFFF" }}>Framework</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: durStandard, ease }}
          className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed"
          style={{ color: "#A1A1AA" }}
        >
          Unified guide combining descriptive creativity + prescriptive precision.
          <br />
          From 8-Layer Architecture to physics-based visual engineering.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: durStandard }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#6B7280" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: "linear-gradient(180deg, #4DFFFF, transparent)" }}
          />
        </motion.div>
      </section>

      {/* ─── Philosophy Section ───────────────────────────────── */}
      <section
        className="px-6 md:px-12 lg:px-24 py-24"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durStandard, ease }}
          className="grid md:grid-cols-2 gap-16 md:gap-24"
        >
          {/* Left: Philosophy */}
          <div>
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "#4DFFFF" }}
            >
              Philosophy
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
              {philosophy.title}
              <br />
              <span style={{ color: "#A1A1AA" }}>{philosophy.subtitle}</span>
            </h2>
            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "#A1A1AA" }}
            >
              {philosophy.description}
            </p>

            {/* Aspects */}
            <div className="mt-12 space-y-6">
              {philosophy.aspects.map((aspect, i) => (
                <motion.div
                  key={aspect.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: durStandard, ease }}
                  className="border-l-2 pl-6"
                  style={{
                    borderColor: i === 0 ? "#4DFFFF" : "#7B5CFF",
                  }}
                >
                  <span
                    className="text-xs font-mono uppercase"
                    style={{ color: i === 0 ? "#4DFFFF" : "#7B5CFF" }}
                  >
                    {aspect.label}
                  </span>
                  <p className="mt-1 font-mono text-sm" style={{ color: "#FFFFFF" }}>
                    {aspect.desc}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "#6B7280" }}>
                    {aspect.use}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="relative p-8 border"
            style={{
              borderColor: "#14161A",
              backgroundColor: "#14161A",
            }}
          >
            <pre
              className="font-mono text-sm leading-relaxed"
              style={{ color: "#A1A1AA" }}
            >
              <code>
                {`DESCRIPTIVE (WHO/WHAT)
━━━━━━━━━━━━━━━━━━━━━
Subject + Style + Mood

PRESCRIPTIVE (HOW EXACTLY)
━━━━━━━━━━━━━━━━━━━━━━━━━━
Physics Parameters + Technical Specs

RESULT
━━━━━━━━
Professional Output`}
              </code>
            </pre>
          </div>
        </motion.div>
      </section>

      {/* ─── 8-Layer Architecture ──────────────────────────────── */}
      <section
        className="px-6 md:px-12 lg:px-24 py-24"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durStandard, ease }}
        >
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "#FF4FD8" }}
          >
            Foundation
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            8-Layer Architecture
          </h2>
          <p className="mt-4 max-w-xl" style={{ color: "#A1A1AA" }}>
            The descriptive foundation template. Each layer adds a dimension of
            control.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: durStandard, ease }}
              className="p-6 border group"
              style={{
                borderColor: "#14161A",
                backgroundColor: "#14161A",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="font-mono text-xs"
                  style={{ color: "#FF4FD8" }}
                >
                  {layer.num}
                </span>
                <span className="font-semibold text-lg">{layer.name}</span>
              </div>
              <p className="text-sm mb-4" style={{ color: "#A1A1AA" }}>
                {layer.desc}
              </p>
              <code
                className="text-xs font-mono p-2 block"
                style={{
                  backgroundColor: "#0B0D10",
                  color: "#6B7280",
                }}
              >
                {layer.example}
              </code>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Physics-First Parameters ────────────────────────────── */}
      <section
        className="px-6 md:px-12 lg:px-24 py-24"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durStandard, ease }}
        >
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "#FFB000" }}
          >
            Precision
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Physics-First Parameters
          </h2>
          <p className="mt-4 max-w-xl" style={{ color: "#A1A1AA" }}>
            Prescriptive specifications that produce predictable, professional
            results.
          </p>
        </motion.div>

        {/* Lighting Ratios */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Lighting Ratios
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {physics.lighting.map((item, i) => (
              <motion.div
                key={item.ratio}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: durStandard, ease }}
                className="p-4 border"
                style={{ borderColor: "#14161A", backgroundColor: "#14161A" }}
              >
                <span
                  className="font-mono text-lg"
                  style={{ color: "#FFB000" }}
                >
                  {item.ratio}
                </span>
                <p className="mt-2 text-sm" style={{ color: "#FFFFFF" }}>
                  {item.effect}
                </p>
                <p className="mt-1 text-xs" style={{ color: "#6B7280" }}>
                  {item.for}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lighting Patterns */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Lighting Patterns
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {physics.patterns.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: durStandard, ease }}
                className="p-4 border text-center"
                style={{ borderColor: "#14161A", backgroundColor: "#14161A" }}
              >
                <span className="font-semibold">{item.name}</span>
                <p className="mt-2 text-xs" style={{ color: "#6B7280" }}>
                  {item.pos}
                </p>
                <p className="mt-1 text-xs" style={{ color: "#4DFFFF" }}>
                  {item.signal}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kelvin + Focal */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Kelvin */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Kelvin Temperature
            </h3>
            <div className="space-y-2">
              {physics.kelvin.map((item, i) => (
                <motion.div
                  key={item.temp}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: durStandard, ease }}
                  className="flex items-center justify-between py-2 border-b"
                  style={{ borderColor: "#14161A" }}
                >
                  <span className="font-mono" style={{ color: "#FFB000" }}>
                    {item.temp}
                  </span>
                  <span className="text-sm" style={{ color: "#A1A1AA" }}>
                    {item.source}
                  </span>
                  <span className="text-sm" style={{ color: "#6B7280" }}>
                    {item.mood}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Focal Length */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Focal Length
            </h3>
            <div className="space-y-2">
              {physics.focal.map((item, i) => (
                <motion.div
                  key={item.mm}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: durStandard, ease }}
                  className="flex items-center justify-between py-2 border-b"
                  style={{ borderColor: "#14161A" }}
                >
                  <span className="font-mono" style={{ color: "#7B5CFF" }}>
                    {item.mm}
                  </span>
                  <span className="text-sm" style={{ color: "#A1A1AA" }}>
                    {item.for}
                  </span>
                  <span className="text-sm" style={{ color: "#6B7280" }}>
                    {item.impact}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Thinking Modes ────────────────────────────────────── */}
      <section
        className="px-6 md:px-12 lg:px-24 py-24"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durStandard, ease }}
        >
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "#4DFFFF" }}
          >
            Creative + Systematic
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Thinking Modes
          </h2>
          <p className="mt-4 max-w-xl" style={{ color: "#A1A1AA" }}>
            Seven approaches for different creative needs. Use them based on
            what you are trying to achieve.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-4 lg:grid-cols-7 gap-4">
          {thinkingModes.map((mode, i) => (
            <motion.div
              key={mode.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: durStandard, ease }}
              className="p-6 border text-center"
              style={{ borderColor: "#14161A", backgroundColor: "#14161A" }}
            >
              <span className="text-3xl">{mode.animal}</span>
              <p className="mt-3 font-semibold">{mode.name}</p>
              <p className="mt-1 text-xs" style={{ color: "#4DFFFF" }}>
                {mode.mode}
              </p>
              <p className="mt-2 text-xs" style={{ color: "#6B7280" }}>
                {mode.for}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Design Vocabulary ─────────────────────────────────── */}
      <section
        className="px-6 md:px-12 lg:px-24 py-24"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durStandard, ease }}
        >
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "#7B5CFF" }}
          >
            Visual Keywords
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Design Vocabulary
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-3">
          {vocabulary.map((term, i) => (
            <motion.span
              key={term}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: durMicro, ease }}
              className="px-4 py-2 text-sm font-mono border"
              style={{
                borderColor: "#14161A",
                backgroundColor: "#14161A",
                color: i < 8 ? "#7B5CFF" : "#A1A1AA",
              }}
            >
              {term}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ─── Master Templates ────────────────────────────────────── */}
      <section
        className="px-6 md:px-12 lg:px-24 py-24"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durStandard, ease }}
        >
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "#FF4FD8" }}
          >
            Ready to Use
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Master Templates
          </h2>
          <p className="mt-4 max-w-xl" style={{ color: "#A1A1AA" }}>
            Copy and modify these templates for production output.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: durStandard, ease }}
              className="border"
              style={{ borderColor: "#14161A", backgroundColor: "#14161A" }}
            >
              <div className="p-4 border-b" style={{ borderColor: "#0B0D10" }}>
                <h3 className="font-semibold">{template.name}</h3>
              </div>
              <pre
                className="p-4 text-xs font-mono overflow-x-auto"
                style={{ color: "#A1A1AA", maxHeight: "300px" }}
              >
                <code>{template.prompt}</code>
              </pre>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Footer ────────────────────────────────────────────── */}
      <footer
        className="px-6 md:px-12 lg:px-24 py-12 border-t"
        style={{
          borderColor: "#14161A",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-display font-bold text-xl">
              AI Visual Synthesis
            </span>
            <p className="mt-1 text-sm" style={{ color: "#6B7280" }}>
              The Complete Framework (2026)
            </p>
          </div>
          <div className="flex gap-8 text-sm" style={{ color: "#6B7280" }}>
            <a
              href="https://github.com/marktantongco/ai-visual-synthesis"
              className="hover:text-white transition-colors"
              style={{ color: "#A1A1AA" }}
            >
              GitHub
            </a>
            <a
              href="https://raw.githubusercontent.com/marktantongco/ai-visual-synthesis/main/AI-VISUAL-SYNTHESIS-COMPLETE-FRAMEWORK.md"
              className="hover:text-white transition-colors"
              style={{ color: "#A1A1AA" }}
            >
              Download Markdown
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
