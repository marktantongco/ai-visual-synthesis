"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, ArrowRight, ChevronRight, BookOpen, Cpu, Palette, Code, Zap, Brain, Globe, Layers, Star, ExternalLink, Folder, FileText, Video, Download, GitBranch, MessageSquare, Rocket, Target, TrendingUp, Database, Shield, Cloud } from "lucide-react";

// Extended Knowledge Domains
const domains = [
  // Original 6
  {
    id: "ai-tools",
    name: "AI Tools",
    icon: Brain,
    color: "#00F5FF",
    description: "Midjourney, DALL·E, Stable Diffusion, Flux",
    skills: ["Prompt Engineering", "Image Generation", "Video AI", "Audio AI", "Text AI"],
    resources: 45,
    page: "/ai-tools"
  },
  {
    id: "design",
    name: "Design Systems",
    icon: Palette,
    color: "#BF00FF",
    description: "UI/UX, Typography, Visual Design",
    skills: ["Glassmorphism", "Brutalism", "Bento Grid", "Motion Design", "Animations"],
    resources: 32,
    page: "/design"
  },
  {
    id: "development",
    name: "Development",
    icon: Code,
    color: "#00FF87",
    description: "React, Next.js, TypeScript",
    skills: ["App Router", "Performance", "Components", "Animations", "Backend"],
    resources: 58,
    page: "/development"
  },
  {
    id: "automation",
    name: "Automation",
    icon: Zap,
    color: "#FFE500",
    description: "Workflows, APIs, Integrations",
    skills: ["n8n", "Zapier", "Webhooks", "AI Agents", "APIs"],
    resources: 28,
    page: "/automation"
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Globe,
    color: "#FF006E",
    description: "Content, Social, SEO",
    skills: ["LinkedIn", "Twitter", "Email", "Analytics", "Content"],
    resources: 24,
    page: "/marketing"
  },
  {
    id: "strategy",
    name: "Strategy",
    icon: Layers,
    color: "#FF6B35",
    description: "Business, Growth, Product",
    skills: ["Roadmapping", "Research", "Analytics", "Launch", "Growth"],
    resources: 18,
    page: "/strategy"
  },
  // New domains
  {
    id: "data-science",
    name: "Data Science",
    icon: Database,
    color: "#06B6D4",
    description: "ML, Analytics, Visualization",
    skills: ["Python", "Machine Learning", "Data Viz", "Statistics", "AI"],
    resources: 35,
    page: "/data-science"
  },
  {
    id: "security",
    name: "Security",
    icon: Shield,
    color: "#10B981",
    description: "AppSec, Auth, Compliance",
    skills: ["Authentication", "API Security", "DevSecOps", "Pen Testing", "Compliance"],
    resources: 22,
    page: "/security"
  },
  {
    id: "devops",
    name: "DevOps",
    icon: Cloud,
    color: "#8B5CF6",
    description: "CI/CD, Infrastructure, Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions"],
    resources: 31,
    page: "/devops"
  },
  {
    id: "product",
    name: "Product",
    icon: Target,
    color: "#F59E0B",
    description: "Product Mgmt, UX Research",
    skills: ["Roadmaps", "User Research", "Metrics", "Launch", "Growth"],
    resources: 19,
    page: "/product"
  },
  {
    id: "content",
    name: "Content",
    icon: MessageSquare,
    color: "#EC4899",
    description: "Writing, Video, Audio",
    skills: ["Copywriting", "Video", "Podcast", "Blogging", "Social"],
    resources: 27,
    page: "/content"
  },
  {
    id: "career",
    name: "Career",
    icon: Rocket,
    color: "#EF4444",
    description: "Jobs, Networking, Skills",
    skills: ["Resume", "Interviewing", "Networking", "Freelance", "Remote"],
    resources: 15,
    page: "/career"
  }
];

// Resource types for detail view
const resourceTypes = [
  { icon: FileText, label: "Articles", count: 156 },
  { icon: Video, label: "Videos", count: 48 },
  { icon: Download, label: "Templates", count: 32 },
  { icon: Code, label: "Code", count: 24 },
  { icon: MessageSquare, label: "Discussions", count: 89 }
];

// Quick access resources
const quickResources = [
  { title: "8-Layer Architecture", tag: "Framework", slug: "framework", icon: GitBranch },
  { title: "Prompt Templates", tag: "Templates", slug: "prompts", icon: FileText },
  { title: "Generator Comparison", tag: "Tools", slug: "tools", icon: Brain },
  { title: "Learning Roadmap", tag: "Guide", slug: "roadmap", icon: TrendingUp }
];

// Sample resources for search
const allResources = [
  { title: "8-Layer Prompt Architecture", type: "Framework", domain: "AI Tools", url: "#framework" },
  { title: "Midjourney Mastery", type: "Guide", domain: "AI Tools", url: "#midjourney" },
  { title: "React Performance Rules", type: "Article", domain: "Development", url: "#react" },
  { title: "Glassmorphism UI Guide", type: "Tutorial", domain: "Design", url: "#glass" },
  { title: "n8n Workflows", type: "Guide", domain: "Automation", url: "#n8n" },
  { title: "LinkedIn Content Framework", type: "Template", domain: "Marketing", url: "#linkedin" },
  { title: "Next.js App Router", type: "Documentation", domain: "Development", url: "#nextjs" },
  { title: "Prompt Engineering 101", type: "Course", domain: "AI Tools", url: "#prompts" },
];

export default function KnowledgeGalaxy() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [searchResults, setSearchResults] = useState<typeof allResources>([]);
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

  // Search functionality
  useEffect(() => {
    if (searchQuery.length > 0) {
      const results = allResources.filter(r => 
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.domain.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const activeDomainData = domains.find(d => d.id === activeDomain);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-dark-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <motion.div
          animate={{ x: mousePos.x * 2, y: mousePos.y * 2 }}
          className="absolute w-[800px] h-[800px] rounded-full bg-neon-cyan/5 blur-[150px] -top-40 -left-40"
        />
        <motion.div
          animate={{ x: -mousePos.x * 1.5, y: -mousePos.y * 1.5 }}
          className="absolute w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[120px] bottom-0 right-0"
        />
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2 + Math.random() * 4,
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
            <span className="text-sm hidden sm:inline">Search knowledge...</span>
            <kbd className="px-2 py-0.5 bg-white/10 rounded text-xs">⌘K</kbd>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 py-8">
        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-white/70">Knowledge Galaxy v2.0</span>
            <span className="px-2 py-0.5 bg-neon-cyan/20 text-neon-cyan text-xs rounded-full">12 Domains</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 tracking-tight" style={{ fontFamily: "Clash Display, system-ui" }}>
            <span className="text-white">Explore the </span>
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Universe of AI
            </span>
          </h1>
          
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Navigate knowledge visually. Discover skills, tools, and resources interconnected as a living ecosystem.
          </p>
        </motion.div>

        {/* Domain Nodes - Grid Layout */}
        <div className="max-w-6xl mx-auto mb-12">
          {/* Central Core with Connection Lines */}
          <div className="relative mb-8">
            {/* Animated Core */}
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 border border-white/20 flex items-center justify-center z-10 hidden lg:flex"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-center">
                <Sparkles className="w-6 h-6 text-neon-cyan mx-auto mb-1" />
                <span className="text-xs font-bold text-white/70">CORE</span>
              </div>
            </motion.div>

            {/* Connection Lines SVG */}
            <svg className="absolute inset-0 w-full h-[300px] pointer-events-none hidden lg:block" style={{ height: '300px' }}>
              {domains.slice(0, 6).map((domain, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const radius = 130;
                const x = 50 + (Math.cos(angle) * radius * 0.4);
                const y = 50 + (Math.sin(angle) * radius * 0.25);
                return (
                  <motion.line
                    key={domain.id}
                    x1="50%"
                    y1="50%"
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke={domain.color}
                    strokeWidth="1"
                    strokeOpacity="0.15"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Domain Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {domains.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.button
                  key={domain.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setActiveDomain(activeDomain === domain.id ? null : domain.id)}
                  onMouseEnter={() => setActiveDomain(domain.id)}
                  className={`relative p-3 sm:p-4 rounded-xl border transition-all duration-300 ${
                    activeDomain === domain.id 
                      ? "bg-white/10 border-white/40" 
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25"
                  }`}
                  style={{
                    boxShadow: activeDomain === domain.id ? `0 0 40px ${domain.color}25` : 'none'
                  }}
                >
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-2 sm:mb-3"
                    style={{ backgroundColor: domain.color + "20" }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: domain.color }} />
                  </div>
                  <h3 className="font-bold text-sm text-white mb-0.5 truncate">{domain.name}</h3>
                  <p className="text-xs text-white/40">{domain.resources} resources</p>
                  
                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0"
                    style={{ background: `radial-gradient(circle at center, ${domain.color}15, transparent 70%)` }}
                    animate={{ opacity: activeDomain === domain.id ? 1 : 0 }}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Domain Detail Panel */}
        <AnimatePresence>
          {activeDomain && activeDomainData && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              className="max-w-4xl mx-auto"
            >
              <div 
                className="p-5 sm:p-6 rounded-2xl border"
                style={{ 
                  backgroundColor: activeDomainData.color + "08",
                  borderColor: activeDomainData.color + "30"
                }}
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: activeDomainData.color + "20" }}
                    >
                      {(() => {
                        const Icon = activeDomainData.icon;
                        return <Icon className="w-6 h-6" style={{ color: activeDomainData.color }} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{activeDomainData.name}</h3>
                      <p className="text-white/50 text-sm">{activeDomainData.description}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveDomain(null)}
                    className="text-white/40 hover:text-white p-1"
                  >
                    ✕
                  </button>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Skill Nodes</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeDomainData.skills.map((skill, i) => (
                      <button
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 hover:border-white/30 text-sm transition-all flex items-center gap-1.5"
                      >
                        {skill}
                        <ArrowRight className="w-3 h-3 opacity-40" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resource Types */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Resource Types</h4>
                  <div className="flex flex-wrap gap-2">
                    {resourceTypes.map((type, i) => {
                      const Icon = type.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5"
                        >
                          <Icon className="w-3.5 h-3.5 text-white/40" />
                          <span className="text-xs text-white/60">{type.label}</span>
                          <span className="text-xs text-white/30">({type.count})</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-end">
                  <a 
                    href={activeDomainData.page}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:opacity-90"
                    style={{ backgroundColor: activeDomainData.color }}
                  >
                    Explore Domain
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Access - Show when no domain selected */}
        {!activeDomain && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-center text-white/30 text-xs uppercase tracking-widest mb-4">Quick Access</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickResources.map((resource, i) => {
                const Icon = resource.icon;
                return (
                  <a
                    key={i}
                    href={resource.slug}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neon-cyan/30 transition-all group text-center"
                  >
                    <Icon className="w-6 h-6 text-neon-cyan mx-auto mb-2" />
                    <span className="text-sm font-medium text-white">{resource.title}</span>
                  </a>
                );
              })}
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4"
            onClick={() => setShowSearch(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="w-full max-w-2xl bg-dark-800 border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 p-4 border-b border-white/10">
                <Search className="w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search resources, guides, tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-white/30 outline-none text-lg"
                  autoFocus
                />
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-white/40">ESC</kbd>
              </div>
              
              {searchQuery ? (
                <div className="max-h-96 overflow-y-auto p-2">
                  <div className="flex items-center gap-2 px-3 py-2 mb-2">
                    <Sparkles className="w-4 h-4 text-neon-cyan" />
                    <span className="text-sm text-white/60">{searchResults.length} results</span>
                  </div>
                  
                  {searchResults.length > 0 ? (
                    <div className="space-y-1">
                      {searchResults.map((result, i) => (
                        <a
                          key={i}
                          href={result.url}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-all"
                        >
                          <div>
                            <span className="text-white block">{result.title}</span>
                            <span className="text-xs text-white/40">{result.domain} · {result.type}</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-white/30" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-white/40">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-3">Popular Searches</div>
                  <div className="flex flex-wrap gap-2">
                    {["Prompt Engineering", "React", "Midjourney", "n8n", "LinkedIn", "Glassmorphism"].map((term, i) => (
                      <button
                        key={i}
                        onClick={() => setSearchQuery(term)}
                        className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-sm text-white/70 transition-all"
                      >
                        {term}
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
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
