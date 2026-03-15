"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Copy, RefreshCw, Sparkles, ArrowRight, X } from "lucide-react";
import { useFadeInOnScroll, useGSAPReady } from "@/lib/gsap-animations";
import gsap from "gsap";

const subjects = [
  "a woman", "a man", "a child", "an elderly person", "a couple",
  "a warrior", "a scientist", "an artist", "a musician", "a traveler"
];

const actions = [
  "walking", "standing", "sitting", "running", "fighting",
  "playing", "thinking", "dreaming", "floating", "glancing"
];

const lighting = [
  "golden hour", "cinematic lighting", "neon rim light", "rim lighting",
  "softbox lighting", "natural light", "dramatic shadows", "backlit",
  "volumetric lighting", "studio lighting"
];

const styles = [
  "photorealistic", "cinematic", "oil painting", "digital art",
  "anime", "concept art", "fashion editorial", "noir", "cyberpunk", "fantasy"
];

const cameras = [
  "85mm f/1.4", "50mm f/1.8", "35mm wide", "24mm ultra-wide",
  "135mm telephoto", "macro lens", "drone aerial", "low angle"
];

const qualities = [
  "8K resolution", "ultra-detailed", "high detail", "masterpiece",
  "best quality", " Award-winning", "4K", "cinematic quality"
];

const presets = [
  { name: "Portrait", subject: "a woman", action: "looking at camera", lighting: "softbox lighting", camera: "85mm f/1.4", quality: "8K resolution" },
  { name: "Landscape", subject: "mountain range", action: "at golden hour", lighting: "golden hour", camera: "24mm ultra-wide", quality: "ultra-detailed" },
  { name: "Cyberpunk", subject: "hacker", action: "in a neon city", lighting: "neon rim light", camera: "35mm wide", quality: "cinematic" },
  { name: "Product", subject: "perfume bottle", action: "on marble", lighting: "studio lighting", camera: "macro lens", quality: "high detail" },
];

export default function PromptBuilder() {
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const presetsBarRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);
  const isReady = useGSAPReady();
  
  const [selected, setSelected] = useState({
    subject: "",
    action: "",
    lighting: "",
    style: "",
    camera: "",
    quality: ""
  });

  // GSAP scroll animations - elements start visible, animate as enhancement
  useEffect(() => {
    if (!isReady || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0.01, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Presets bar animation
      if (presetsBarRef.current) {
        gsap.fromTo(
          presetsBarRef.current,
          { opacity: 0.01, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: presetsBarRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Output animation
      if (outputRef.current) {
        gsap.fromTo(
          outputRef.current,
          { opacity: 0.01, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: outputRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Tips animation
      if (tipsRef.current) {
        gsap.fromTo(
          tipsRef.current,
          { opacity: 0.01 },
          {
            opacity: 1,
            duration: 0.5,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: tipsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isReady]);

  // Build prompt from selections
  useEffect(() => {
    const parts = [
      selected.subject,
      selected.action,
      selected.lighting,
      selected.style,
      selected.camera,
      selected.quality
    ].filter(Boolean);
    
    let result = parts.join(", ");
    // Add Midjourney params if quality selected
    if (selected.quality) {
      result += " --ar 16:9 --v 6.1";
    }
    setPrompt(result);
  }, [selected]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePreset = (preset: typeof presets[0]) => {
    setSelected({
      subject: preset.subject,
      action: preset.action,
      lighting: preset.lighting,
      style: "",
      camera: preset.camera,
      quality: preset.quality
    });
    setShowPresets(false);
  };

  const randomize = () => {
    setSelected({
      subject: subjects[Math.floor(Math.random() * subjects.length)],
      action: actions[Math.floor(Math.random() * actions.length)],
      lighting: lighting[Math.floor(Math.random() * lighting.length)],
      style: styles[Math.floor(Math.random() * styles.length)],
      camera: cameras[Math.floor(Math.random() * cameras.length)],
      quality: qualities[Math.floor(Math.random() * qualities.length)]
    });
  };

  const clear = () => {
    setSelected({ subject: "", action: "", lighting: "", style: "", camera: "", quality: "" });
  };

  return (
    <section id="prompt-builder" className="py-20 px-4 bg-dark-900 relative overflow-hidden scroll-mt-20">
      {/* Brutalist Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            #fff 2px,
            #fff 4px
          )`
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Brutalist Typography */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-neon-cyan text-black font-bold text-xs tracking-widest uppercase">
              NEW
            </span>
            <span className="text-neon-cyan font-mono text-xs tracking-widest">
              INTERACTIVE
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-4" style={{ fontFamily: "Clash Display, system-ui" }}>
            PROMPT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              BUILDER
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl">
            Construct your perfect prompt. Click elements below to build — no typing required.
          </p>
        </motion.div>

        {/* Presets Bar */}
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          <button
            onClick={() => setShowPresets(!showPresets)}
            className="px-4 py-2 bg-white text-black font-bold text-sm uppercase tracking-wide hover:bg-neon-cyan transition-colors"
          >
            {showPresets ? "CLOSE PRESETS" : "QUICK PRESETS"}
          </button>
          <button
            onClick={randomize}
            className="px-4 py-2 border border-white/20 text-white font-mono text-sm hover:border-neon-cyan hover:text-neon-cyan transition-colors flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            RANDOMIZE
          </button>
          <button
            onClick={clear}
            className="px-4 py-2 border border-white/20 text-white/50 font-mono text-sm hover:border-red-500 hover:text-red-500 transition-colors flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            CLEAR
          </button>
        </motion.div>

        {/* Presets Dropdown */}
        <AnimatePresence>
          {showPresets && (
            <motion.div
              initial={{ opacity: 1, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {presets.map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => handlePreset(preset)}
                    className="p-4 bg-white/5 border-2 border-white/10 text-left hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all group"
                  >
                    <span className="block text-neon-cyan font-bold text-lg mb-1 group-hover:translate-x-1 transition-transform">
                      {preset.name}
                    </span>
                    <span className="text-white/40 text-xs font-mono">
                      {preset.subject}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Builder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Subject */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-neon-cyan">
              Subject
            </label>
            <div className="flex flex-wrap gap-2">
              {subjects.slice(0, 6).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelected({ ...selected, subject: s })}
                  className={`px-3 py-2 text-sm font-medium transition-all border-2 ${
                    selected.subject === s
                      ? "bg-neon-cyan text-black border-neon-cyan"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/30"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-neon-purple">
              Action
            </label>
            <div className="flex flex-wrap gap-2">
              {actions.slice(0, 6).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelected({ ...selected, action: s })}
                  className={`px-3 py-2 text-sm font-medium transition-all border-2 ${
                    selected.action === s
                      ? "bg-neon-purple text-white border-neon-purple"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/30"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Lighting */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-neon-pink">
              Lighting
            </label>
            <div className="flex flex-wrap gap-2">
              {lighting.slice(0, 6).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelected({ ...selected, lighting: s })}
                  className={`px-3 py-2 text-sm font-medium transition-all border-2 ${
                    selected.lighting === s
                      ? "bg-neon-pink text-white border-neon-pink"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/30"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Style */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-neon-green">
              Style
            </label>
            <div className="flex flex-wrap gap-2">
              {styles.slice(0, 6).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelected({ ...selected, style: s })}
                  className={`px-3 py-2 text-sm font-medium transition-all border-2 ${
                    selected.style === s
                      ? "bg-neon-green text-black border-neon-green"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/30"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Camera */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-neon-yellow">
              Camera
            </label>
            <div className="flex flex-wrap gap-2">
              {cameras.slice(0, 6).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelected({ ...selected, camera: s })}
                  className={`px-3 py-2 text-sm font-medium transition-all border-2 ${
                    selected.camera === s
                      ? "bg-neon-yellow text-black border-neon-yellow"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/30"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quality */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-orange-400">
              Quality
            </label>
            <div className="flex flex-wrap gap-2">
              {qualities.slice(0, 6).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelected({ ...selected, quality: s })}
                  className={`px-3 py-2 text-sm font-medium transition-all border-2 ${
                    selected.quality === s
                      ? "bg-orange-400 text-black border-orange-400"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/30"
                  }`
                  }
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-black border-4 border-white/20 p-1">
            <div className="bg-dark-900 p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Generated Prompt
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={randomize}
                    className="p-2 text-white/40 hover:text-neon-cyan transition-colors"
                    title="Regenerate"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl font-medium text-white leading-relaxed min-h-[80px]">
                {prompt || (
                  <span className="text-white/30 italic">
                    Click options above to build your prompt...
                  </span>
                )}
              </p>

              {/* Copy Button */}
              <motion.button
                onClick={handleCopy}
                disabled={!prompt}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 w-full md:w-auto px-8 py-4 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${
                  prompt
                    ? "bg-neon-cyan text-black hover:bg-white"
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                }`}
              >
                {copied ? (
                  <>
                    <Sparkles className="w-5 h-5" />
                    COPIED!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    COPY PROMPT
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Brutalist Decor */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-neon-cyan" />
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-neon-purple" />
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <div className="px-4 py-2 bg-white/5 border border-white/10">
            <span className="text-white/40 text-xs">💡</span>
            <span className="text-white/60 text-sm ml-2">Combine 3-4 elements for best results</span>
          </div>
          <div className="px-4 py-2 bg-white/5 border border-white/10">
            <span className="text-white/40 text-xs">🎯</span>
            <span className="text-white/60 text-sm ml-2">Use presets for quick starts</span>
          </div>
          <div className="px-4 py-2 bg-white/5 border border-white/10">
            <span className="text-white/40 text-xs">⚡</span>
            <span className="text-white/60 text-sm ml-2">Add --ar for aspect ratio</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
