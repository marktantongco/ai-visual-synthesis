"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, ArrowRight, ChevronRight, BookOpen, Cpu, Palette, Code, Zap, Brain, Globe, Layers, Star, ExternalLink } from "lucide-react";

// Knowledge Domains
const domains = [
  {
    id: "ai-tools",
    name: "AI Tools",
    icon: Brain,
    color: "#00F5FF",
    description: "Midjourney, DALL·E, Stable Diffusion, Flux",
    skills: ["Prompt Engineering", "Image Generation", "Video AI", "Audio AI"],
    resources: 45
  },
  {
    id: "design",
    name: "Design Systems",
    icon: Palette,
    color: "#BF00FF",
    description: "UI/UX, Typography, Visual Design",
    skills: ["Glassmorphism", "Brutalism", "Bento Grid", "Motion Design"],
    resources: 32
  },
  {
    id: "development",
    name: "Development",
    icon: Code,
    color: "#00FF87",
    description: "React, Next.js, TypeScript",
    skills: ["App Router", "Performance", "Components", "Animations"],
    resources: 58
  },
  {
    id: "automation",
    name: "Automation",
    icon: Zap,
    color: "#FFE500",
    description: "Workflows, APIs, Integrations",
    skills: ["n8n", "Zapier", "Webhooks", "AI Agents"],
    resources: 28
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Globe,
    color: "#FF006E",
    description: "Content, Social, SEO",
    skills: ["LinkedIn", "Twitter", "Email", "Analytics"],
    resources: 24
  },
  {
    id: "strategy",
    name: "Strategy",
    icon: Layers,
    color: "#FF6B35",
    description: "Business, Growth, Product",
    skills: ["Roadmapping", "Research", "Analytics", "Launch"],
    resources: 18
  }
];

// Quick access resources
const quickResources = [
  { title: "8-Layer Architecture", tag: "Framework", slug: "framework" },
  { title: "Prompt Templates", tag: "Templates", slug: "prompts" },
  { title: "Generator Comparison", tag: "Tools", slug: "tools" },
  { title: "Learning Roadmap", tag: "Guide", slug: "roadmap" }
];

export default function KnowledgeGalaxy() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        });
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const activeDomainData = domains.find(d => d.id === activeDomain);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-dark-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Animated orbs */}
        <motion.div
          animate={{
            x: mousePos.x * 2,
            y: mousePos.y * 2
          }}
          className="absolute w-[800px] h-[800px] rounded-full bg-neon-cyan/5 blur-[150px] -top-40 -left-40"
        />
        <motion.div
          animate={{
            x: -mousePos.x * 1.5,
            y: -mousePos.y * 1.5
          }}
          className="absolute w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[120px] bottom-0 right-0"
        />
        
        {/* Stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">AI Visual Synthesis</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowSearch(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
          >
            <Search className="w-4 h-4" />
            <span className="text-sm">Search knowledge...</span>
            <kbd className="px-2 py-0.5 bg-white/10 rounded text-xs">⌘K</kbd>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12">
        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-white/70">Knowledge Galaxy v2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight" style={{ fontFamily: "Clash Display, system-ui" }}>
            <span className="text-white">Explore the </span>
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Universe of AI
            </span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Navigate knowledge visually. Discover skills, tools, and resources interconnected as a living ecosystem.
          </p>
        </motion.div>

        {/* Domain Nodes - Knowledge Galaxy */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Central Core */}
          <motion.div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-white/10 flex items-center justify-center z-10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-neon-cyan mx-auto mb-1" />
              <span className="text-xs font-bold text-white/70">CORE</span>
            </div>
          </motion.div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-[500px] pointer-events-none">
            {domains.map((domain, i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const radius = 200;
              const x = 250 + Math.cos(angle) * radius;
              const y = 250 + Math.sin(angle) * radius;
              return (
                <motion.line
                  key={domain.id}
                  x1="50%"
                  y1="50%"
                  x2={`${x}px`}
                  y2={`${y}px`}
                  stroke={domain.color}
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Domain Nodes */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {domains.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.button
                  key={domain.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveDomain(activeDomain === domain.id ? null : domain.id)}
                  onHoverStart={() => setActiveDomain(domain.id)}
                  className={`relative p-4 rounded-2xl border transition-all duration-300 ${
                    activeDomain === domain.id 
                      ? "bg-white/10 border-white/30" 
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                  style={{
                    boxShadow: activeDomain === domain.id ? `0 0 30px ${domain.color}30` : 'none'
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: domain.color + "20" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: domain.color }} />
                  </div>
                  <h3 className="font-bold text-white mb-1">{domain.name}</h3>
                  <p className="text-xs text-white/40">{domain.resources} resources</p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Domain Detail Panel */}
        <AnimatePresence>
          {activeDomain && activeDomainData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-4xl mx-auto"
            >
              <div 
                className="p-6 rounded-2xl border"
                style={{ 
                  backgroundColor: activeDomainData.color + "08",
                  borderColor: activeDomainData.color + "30"
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span 
                        className="px-2 py-1 rounded-full text-xs font-bold"
                        style={{ 
                          backgroundColor: activeDomainData.color + "20",
                          color: activeDomainData.color 
                        }}
                      >
                        {activeDomainData.name}
                      </span>
                    </div>
                    <p className="text-white/60">{activeDomainData.description}</p>
                  </div>
                  <button 
                    onClick={() => setActiveDomain(null)}
                    className="text-white/40 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-3">Skill Nodes</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeDomainData.skills.map((skill, i) => (
                      <button
                        key={i}
                        className="px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:border-white/30 text-sm transition-all"
                      >
                        {skill}
                        <ArrowRight className="w-4 h-4 inline ml-2 opacity-50" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resources Preview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {quickResources.map((resource, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                    >
                      <span className="text-xs text-white/40 block mb-1">{resource.tag}</span>
                      <span className="text-sm font-medium text-white group-hover:text-neon-cyan transition-colors">
                        {resource.title}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 flex justify-end">
                  <button 
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
                    style={{ backgroundColor: activeDomainData.color }}
                  >
                    Explore Domain
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Access */}
        {!activeDomain && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-center text-white/30 text-sm uppercase tracking-widest mb-6">Quick Access</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickResources.map((resource, i) => (
                <a
                  key={i}
                  href={`#${resource.slug}`}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neon-cyan/30 transition-all group text-center"
                >
                  <BookOpen className="w-6 h-6 text-neon-cyan mx-auto mb-2" />
                  <span className="text-sm font-medium text-white">{resource.title}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
            onClick={() => setShowSearch(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="w-full max-w-2xl bg-dark-800 border border-white/20 rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 p-4 border-b border-white/10">
                <Search className="w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Ask anything about AI, design, development..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-white/30 outline-none text-lg"
                  autoFocus
                />
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-white/40">ESC</kbd>
              </div>
              
              {searchQuery && (
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-neon-cyan" />
                    <span className="text-sm text-white/60">AI Suggestions</span>
                  </div>
                  <div className="space-y-2">
                    {["Prompt Engineering Guide", "Best AI Image Tools 2026", "React Performance Tips"].map((result, i) => (
                      <button
                        key={i}
                        className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-all"
                      >
                        <span className="text-white">{result}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <ChevronRight className="w-5 h-5 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}
