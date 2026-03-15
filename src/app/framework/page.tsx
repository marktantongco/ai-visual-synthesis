"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, useState, useCallback } from "react";

// ─── Types ─────────────────────────────────────────────────────
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: "cyan" | "violet" | "magenta" | "amber";
  delay?: number;
}

interface NavItem {
  label: string;
  href: string;
}

// ─── Motion Config ───────────────────────────────────────────
const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
const durMicro = 0.18;
const durStandard = 0.32;

// ─── Reusable Components ─────────────────────────────────────

// 1. Section Wrapper
function Section({ children, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative px-6 md:px-12 lg:px-24 py-24 ${className}`}
      style={{ maxWidth: "1400px", margin: "0 auto" }}
    >
      {children}
    </section>
  );
}

// 2. Glass Card
function GlassCard({ children, className = "", accent = "cyan", delay = 0 }: CardProps) {
  const accents = {
    cyan: "#4DFFFF",
    violet: "#7B5CFF",
    magenta: "#FF4FD8",
    amber: "#FFB000",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: durStandard, ease }}
      className={`p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${className}`}
      style={{
        borderColor: "#14161A",
        backgroundColor: "rgba(20, 22, 26, 0.8)",
        boxShadow: `0 0 0 1px rgba(255,255,255,0.02) inset`,
      }}
      whileHover={{
        boxShadow: `0 0 30px ${accents[accent]}15`,
        borderColor: `${accents[accent]}30`,
      }}
    >
      {children}
    </motion.div>
  );
}

// 3. Accent Line
function AccentLine({ color = "#4DFFFF" }: { color?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: durStandard * 2, ease }}
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
    />
  );
}

// 4. Label Tag
function Label({ children, color = "#4DFFFF" }: { children: React.ReactNode; color?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: durMicro }}
      className="text-xs font-mono tracking-widest uppercase"
      style={{ color }}
    >
      {children}
    </motion.span>
  );
}

// 5. Stagger Container
function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: durMicro } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: durStandard, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Navigation ───────────────────────────────────────────────
const navItems: NavItem[] = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Architecture", href: "#architecture" },
  { label: "Physics", href: "#physics" },
  { label: "Thinking", href: "#thinking" },
  { label: "Vocabulary", href: "#vocabulary" },
  { label: "Templates", href: "#templates" },
];

function Navigation() {
  const [active, setActive] = useState<string>("#philosophy");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: durStandard, ease, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: "rgba(11, 13, 16, 0.9)",
        borderColor: "#14161A",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg">
          AVS<span style={{ color: "#4DFFFF" }}>.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className="text-sm font-medium transition-colors relative"
              style={{ color: active === item.href ? "#FFFFFF" : "#6B7280" }}
            >
              {item.label}
              {active === item.href && (
                <motion.div
                  layoutId="nav-accent"
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ backgroundColor: "#4DFFFF" }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

// ─── Scroll Progress ─────────────────────────────────────────
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
      style={{ scaleX, backgroundColor: "#4DFFFF" }}
    />
  );
}

// ─── Hero Section ────────────────────────────────────────────
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex flex-col justify-center">
      <motion.div style={{ y, opacity }}>
        <Section>
          <AccentLine />
          <Label color="#4DFFFF">AI Visual Synthesis</Label>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durStandard, ease, delay: 0.2 }}
            className="font-display font-black leading-[0.9] mt-6"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            The Complete
            <br />
            <span style={{ color: "#4DFFFF" }}>Framework</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durStandard, ease, delay: 0.4 }}
            className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "#A1A1AA" }}
          >
            Unified guide combining descriptive creativity + prescriptive precision.
            <br />
            From 8-Layer Architecture to physics-based visual engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: durStandard, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#philosophy"
              className="px-6 py-3 text-sm font-semibold rounded-lg transition-all hover:scale-105"
              style={{ backgroundColor: "#4DFFFF", color: "#0B0D10" }}
            >
              Explore Framework
            </a>
            <a
              href="https://raw.githubusercontent.com/marktantongco/ai-visual-synthesis/main/AI-VISUAL-SYNTHESIS-COMPLETE-FRAMEWORK.md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-semibold rounded-lg border transition-all hover:bg-white/5"
              style={{ borderColor: "#14161A", color: "#A1A1AA" }}
            >
              Download Markdown ↓
            </a>
          </motion.div>
        </Section>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#6B7280" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(180deg, #4DFFFF, transparent)" }}
        />
      </motion.div>
    </div>
  );
}

// ─── Philosophy Section ──────────────────────────────────────
function PhilosophySection() {
  return (
    <Section id="philosophy">
      <StaggerContainer className="grid md:grid-cols-2 gap-16 md:gap-24">
        <StaggerItem>
          <Label color="#4DFFFF">Philosophy</Label>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
            Descriptive +
            <br />
            <span style={{ color: "#A1A1AA" }}>Prescriptive</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "#A1A1AA" }}>
            Combine creative vision with physics-based precision. Descriptive tells the AI what to feel like—style, mood, atmosphere. 
            Prescriptive tells it what to do physically—lighting ratios, focal lengths, material properties.
          </p>

          <div className="mt-12 space-y-6">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: durStandard } },
              }}
              className="border-l-2 pl-6"
              style={{ borderColor: "#4DFFFF" }}
            >
              <span className="text-xs font-mono uppercase" style={{ color: "#4DFFFF" }}>
                Descriptive
              </span>
              <p className="mt-1 font-mono text-sm" style={{ color: "#FFFFFF" }}>
                Subject + Style + Mood
              </p>
              <p className="mt-1 text-sm" style={{ color: "#6B7280" }}>
                Initial concepts, creative exploration
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: durStandard } },
              }}
              className="border-l-2 pl-6"
              style={{ borderColor: "#7B5CFF" }}
            >
              <span className="text-xs font-mono uppercase" style={{ color: "#7B5CFF" }}>
                Prescriptive
              </span>
              <p className="mt-1 font-mono text-sm" style={{ color: "#FFFFFF" }}>
                Physics Parameters + Technical Specs
              </p>
              <p className="mt-1 text-sm" style={{ color: "#6B7280" }}>
                Production output, consistent results
              </p>
            </motion.div>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div
            className="p-8 border h-full flex flex-col justify-center"
            style={{
              borderColor: "#14161A",
              backgroundColor: "#14161A",
            }}
          >
            <pre className="font-mono text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>
              <code>{`DESCRIPTIVE (WHO/WHAT)
━━━━━━━━━━━━━━━━━━━━━
Subject + Style + Mood

PRESCRIPTIVE (HOW EXACTLY)
━━━━━━━━━━━━━━━━━━━━━━━━━━
Physics Parameters + Technical Specs

RESULT
━━━━━━━━
Professional Output`}</code>
            </pre>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </Section>
  );
}

// ─── Architecture Section ────────────────────────────────────
const layers = [
  { num: "01", name: "Role", desc: "Define AI expertise level", example: '"Professional photographer"' },
  { num: "02", name: "Context", desc: "Establish product, platform, audience", example: '"E-commerce, mobile"' },
  { num: "03", name: "Objective", desc: "Clear success criteria", example: '"Convert to buyers"' },
  { num: "04", name: "Constraints", desc: "Quality guardrails", example: '"2-second load"' },
  { num: "05", name: "Aesthetic", desc: "Visual style keywords", example: '"glassmorphism"' },
  { num: "06", name: "Planning", desc: "Execution strategy", example: '"Grid → Components"' },
  { num: "07", name: "Output", desc: "Format specifications", example: '"React + Tailwind"' },
  { num: "08", name: "Refinement", desc: "Quality review steps", example: '"Check a11y"' },
];

function ArchitectureSection() {
  return (
    <Section id="architecture">
      <Label color="#FF4FD8">Foundation</Label>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
        8-Layer Architecture
      </h2>
      <p className="mt-4 max-w-xl" style={{ color: "#A1A1AA" }}>
        The descriptive foundation template. Each layer adds a dimension of control.
      </p>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {layers.map((layer, i) => (
          <GlassCard key={layer.num} accent="magenta" delay={i * 0.05}>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs" style={{ color: "#FF4FD8" }}>
                {layer.num}
              </span>
              <span className="font-semibold text-lg">{layer.name}</span>
            </div>
            <p className="text-sm mb-4" style={{ color: "#A1A1AA" }}>
              {layer.desc}
            </p>
            <code
              className="text-xs font-mono p-2 block rounded"
              style={{ backgroundColor: "#0B0D10", color: "#6B7280" }}
            >
              {layer.example}
            </code>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

// ─── Physics Section ────────────────────────────────────────
const lightingRatios = [
  { ratio: "2:1", effect: "Flat, even", for: "Beauty, corporate" },
  { ratio: "3:1", effect: "Natural modeling", for: "Standard portrait" },
  { ratio: "4:1", effect: "Dramatic", for: "Editorial, leadership" },
  { ratio: "8:1", effect: "Extreme contrast", for: "Noir, mystery" },
];

const lightingPatterns = [
  { name: "Rembrandt", pos: "45° high", signal: "Intellect, gravitas" },
  { name: "Butterfly", pos: "Above/centered", signal: "Beauty, confidence" },
  { name: "Loop", pos: "30-45°", signal: "Approachable" },
  { name: "Split", pos: "90° side", signal: "Power, intensity" },
  { name: "Rim", pos: "Backlight 135°", signal: "Premium, editorial" },
];

const kelvinTemps = [
  { temp: "2700K", source: "Candlelight", mood: "Intimate, warm" },
  { temp: "3200K", source: "Tungsten", mood: "Cozy, warm" },
  { temp: "4500K", source: "Golden hour", mood: "Flattering" },
  { temp: "5600K", source: "Overcast", mood: "Cool, clinical" },
  { temp: "6500K", source: "Blue sky", mood: "Cold, dramatic" },
];

const focalLengths = [
  { mm: "24mm", for: "Architecture", impact: "Immersive, dramatic" },
  { mm: "35mm", for: "Documentary", impact: "Honest, natural" },
  { mm: "50mm", for: "General", impact: "Truthful" },
  { mm: "85mm", for: "Portraits", impact: "Flattering, premium" },
  { mm: "105mm+", for: "Isolation", impact: "Prestigious, dominant" },
];

function PhysicsSection() {
  return (
    <Section id="physics">
      <Label color="#FFB000">Precision</Label>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
        Physics-First Parameters
      </h2>
      <p className="mt-4 max-w-xl" style={{ color: "#A1A1AA" }}>
        Prescriptive specifications that produce predictable, professional results.
      </p>

      {/* Lighting Ratios */}
      <div className="mt-12">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
          Lighting Ratios
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {lightingRatios.map((item, i) => (
            <GlassCard key={item.ratio} accent="amber" delay={i * 0.05}>
              <span className="font-mono text-lg" style={{ color: "#FFB000" }}>
                {item.ratio}
              </span>
              <p className="mt-2 text-sm" style={{ color: "#FFFFFF" }}>
                {item.effect}
              </p>
              <p className="mt-1 text-xs" style={{ color: "#6B7280" }}>
                {item.for}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Lighting Patterns */}
      <div className="mt-12">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
          Lighting Patterns
        </h3>
        <div className="grid md:grid-cols-5 gap-4">
          {lightingPatterns.map((item, i) => (
            <GlassCard key={item.name} accent="amber" delay={i * 0.05}>
              <p className="font-semibold">{item.name}</p>
              <p className="mt-2 text-xs" style={{ color: "#6B7280" }}>
                {item.pos}
              </p>
              <p className="mt-1 text-xs" style={{ color: "#4DFFFF" }}>
                {item.signal}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Kelvin + Focal */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Kelvin Temperature
          </h3>
          <div className="space-y-2">
            {kelvinTemps.map((item, i) => (
              <motion.div
                key={item.temp}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: durStandard }}
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

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Focal Length
          </h3>
          <div className="space-y-2">
            {focalLengths.map((item, i) => (
              <motion.div
                key={item.mm}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: durStandard }}
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
    </Section>
  );
}

// ─── Thinking Modes Section ───────────────────────────────────
const thinkingModes = [
  { animal: "🐇", name: "Rabbit", mode: "Multiply Ideas", for: "Brainstorming" },
  { animal: "🦉", name: "Owl", mode: "Deep Analysis", for: "Research" },
  { animal: "🐜", name: "Ant", mode: "Break Into Steps", for: "Execution" },
  { animal: "🦅", name: "Eagle", mode: "Big Picture", for: "Strategy" },
  { animal: "🐬", name: "Dolphin", mode: "Creative Solutions", for: "Innovation" },
  { animal: "🦫", name: "Beaver", mode: "Build Systems", for: "Construction" },
  { animal: "🐘", name: "Elephant", mode: "Cross-Field", for: "Connections" },
];

function ThinkingSection() {
  return (
    <Section id="thinking">
      <Label color="#4DFFFF">Creative + Systematic</Label>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
        Thinking Modes
      </h2>
      <p className="mt-4 max-w-xl" style={{ color: "#A1A1AA" }}>
        Seven approaches for different creative needs. Use them based on what you are trying to achieve.
      </p>

      <div className="mt-12 grid md:grid-cols-4 lg:grid-cols-7 gap-4">
        {thinkingModes.map((mode, i) => (
          <GlassCard key={mode.name} accent="cyan" delay={i * 0.05}>
            <p className="text-3xl">{mode.animal}</p>
            <p className="mt-3 font-semibold">{mode.name}</p>
            <p className="mt-1 text-xs" style={{ color: "#4DFFFF" }}>
              {mode.mode}
            </p>
            <p className="mt-2 text-xs" style={{ color: "#6B7280" }}>
              {mode.for}
            </p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

// ─── Vocabulary Section ───────────────────────────────────────
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

function VocabularySection() {
  return (
    <Section id="vocabulary">
      <Label color="#7B5CFF">Visual Keywords</Label>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
        Design Vocabulary
      </h2>

      <div className="mt-12 flex flex-wrap gap-3">
        {vocabulary.map((term, i) => (
          <motion.span
            key={term}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02, duration: durMicro }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 text-sm font-mono border cursor-default"
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
    </Section>
  );
}

// ─── Templates Section ────────────────────────────────────────
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

function TemplatesSection() {
  return (
    <Section id="templates">
      <Label color="#FF4FD8">Ready to Use</Label>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
        Master Templates
      </h2>
      <p className="mt-4 max-w-xl" style={{ color: "#A1A1AA" }}>
        Copy and modify these templates for production output.
      </p>

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        {templates.map((template, i) => (
          <GlassCard key={template.name} accent="magenta" delay={i * 0.1}>
            <div className="p-4 border-b" style={{ borderColor: "#0B0D10" }}>
              <h3 className="font-semibold">{template.name}</h3>
            </div>
            <pre
              className="p-4 text-xs font-mono overflow-x-auto"
              style={{ color: "#A1A1AA", maxHeight: "280px" }}
            >
              <code>{template.prompt}</code>
            </pre>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

// ─── Footer ─────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="px-6 md:px-12 lg:px-24 py-12 border-t"
      style={{ borderColor: "#14161A", maxWidth: "1400px", margin: "0 auto" }}
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
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            style={{ color: "#A1A1AA" }}
          >
            GitHub
          </a>
          <a
            href="https://raw.githubusercontent.com/marktantongco/ai-visual-synthesis/main/AI-VISUAL-SYNTHESIS-COMPLETE-FRAMEWORK.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            style={{ color: "#A1A1AA" }}
          >
            Download Markdown
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Component ─────────────────────────────────────────
export default function FrameworkPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: "#0B0D10",
        color: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <ScrollProgress />
      <Navigation />
      <Hero />
      <PhilosophySection />
      <ArchitectureSection />
      <PhysicsSection />
      <ThinkingSection />
      <VocabularySection />
      <TemplatesSection />
      <Footer />
    </main>
  );
}
