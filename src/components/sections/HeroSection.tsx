"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles, Cpu, Image } from "lucide-react";
import { FadeIn, Marquee } from "@/components/ui/primitives";

const floatingTags = [
  { text: "Midjourney", color: "#00F5FF", x: "10%", y: "25%" },
  { text: "DALL·E 3", color: "#BF00FF", x: "78%", y: "20%" },
  { text: "Stable Diffusion", color: "#FF006E", x: "65%", y: "70%" },
  { text: "Sora", color: "#00FF87", x: "8%", y: "75%" },
  { text: "Flux", color: "#FFE500", x: "45%", y: "85%" },
];

const marqueeItems = [
  "AI Image Generation",
  "Prompt Engineering",
  "Visual Synthesis",
  "Generative Art",
  "Text-to-Image",
  "Style Transfer",
  "ControlNet",
  "LoRA Techniques",
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-bg grid-pattern"
      aria-label="Hero section"
    >
      {/* Orbs */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="orb w-[600px] h-[600px] bg-neon-cyan/8 top-[-15%] left-[-10%]" />
        <div className="orb w-[500px] h-[500px] bg-neon-purple/8 bottom-[-10%] right-[-5%]" />
        <div className="orb w-[300px] h-[300px] bg-neon-pink/6 top-[40%] left-[30%]" />
      </motion.div>

      {/* Floating tool tags */}
      {floatingTags.map((tag, i) => (
        <motion.div
          key={tag.text}
          className="absolute hidden lg:block"
          style={{ left: tag.x, top: tag.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass px-3 py-1.5 rounded-full border text-sm font-medium"
            style={{ borderColor: tag.color + "40", color: tag.color }}
          >
            {tag.text}
          </motion.div>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Eyebrow */}
        <FadeIn>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 glass border border-[var(--pu-violet)]/30 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--pu-cyan)] animate-pulse" />
            <span className="text-xs font-semibold text-[var(--pu-cyan)] tracking-widest uppercase font-mono">
              AI Practitioner Framework · 2026 Edition
            </span>
          </motion.div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6">
            <span className="block text-white">Master</span>
            <span className="block kinetic-text">AI Visual</span>
            <span className="block text-white">Synthesis</span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--pu-secondary)' }}>
            From foundational prompts to expert agent orchestration — the 2026 practitioner's complete
            interactive guide to every major AI image generation tool, style, and workflow.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#tools"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(0,245,255,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl bg-neon-cyan text-dark-900 font-bold text-lg w-full sm:w-auto text-center transition-all"
            >
              Explore the Guide
            </motion.a>
            <motion.a
              href="#prompts"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl glass border border-white/10 text-white font-semibold text-lg w-full sm:w-auto text-center hover:border-white/30 transition-all"
            >
              Prompt Library →
            </motion.a>
          </div>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={0.45}>
          <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
            {[
              { label: "AI Tools Covered", value: "12+" },
              { label: "Prompt Templates", value: "80+" },
              { label: "Skill Framework Nodes", value: "6" },
              { label: "Free Resources", value: "∞" },
            ].map((stat) => (
              <div key={stat.label} className="min-w-[80px]">
                <div className="text-2xl md:text-3xl font-display font-black" style={{ color: 'var(--theme-accent)' }}>
                  {stat.value}
                </div>
                <div className="text-xs mt-1 font-medium uppercase tracking-wider" style={{ color: 'var(--pu-muted)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-neon-cyan/60" />
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
}
