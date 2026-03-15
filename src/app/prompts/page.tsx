"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  Copy, Check, RefreshCw, Sparkles, Code, Palette, 
  Layout, Zap, Smartphone, Layers, ChevronRight, Search
} from "lucide-react";

// ─── Prompt Templates Data ───────────────────────────────────────────────
const promptTemplates = [
  {
    id: 1,
    title: "Developer Prompt",
    description: "Generate a responsive interactive web app with modern UI/UX",
    icon: Code,
    category: "Technical",
    prompt: `Act as a senior full-stack developer.

Generate a mobile-first interactive web app with modern UI/UX.

Requirements:
• Next.js + Tailwind
• Animated UI components
• Responsive grid
• Gen-Z design style
• Modular component architecture

Output the full project structure and source code.`
  },
  {
    id: 2,
    title: "Product Designer Prompt",
    description: "Design an ultra-modern Gen-Z aesthetic application",
    icon: Palette,
    category: "Design",
    prompt: `Act as a digital product designer.

Design an interactive web application with an ultra-modern Gen-Z aesthetic.

Include:
• Bold typography
• Gradient color systems
• Glassmorphism UI
• Smooth animated transitions
• Mobile-responsive layouts`
  },
  {
    id: 3,
    title: "Startup Founder Prompt",
    description: "Create a startup-ready premium interface",
    icon: Zap,
    category: "Business",
    prompt: `Create a startup-ready interactive web app interface.

The design must feel premium, modern, and mobile responsive.

Focus on:
• Landing page
• Dashboard
• Interactive modules
• Scalable component system`
  },
  {
    id: 4,
    title: "Infographic Web App",
    description: "Create an interactive dynamic infographic",
    icon: Layers,
    category: "Creative",
    prompt: `Create an interactive infographic web app.

The entire page should behave like a dynamic infographic.

Requirements:
• Animated sections
• Scroll-based interactions
• Mobile responsive
• Modern typography`
  },
  {
    id: 5,
    title: "Gen-Z UI Concept",
    description: "Ultra-modern with neon gradients and motion",
    icon: Sparkles,
    category: "Design",
    prompt: `Create an ultra-modern Gen-Z style interactive web application.

Design features:
• Neon gradients
• Animated typography
• Card-based UI
• Playful motion effects`
  },
  {
    id: 6,
    title: "AI Product Builder",
    description: "Complete web app with GSAP animations",
    icon: Code,
    category: "Technical",
    prompt: `You are an AI product engineer.

Generate a complete interactive web app with responsive UI and animated components.

Stack:
Next.js
Tailwind CSS
GSAP animations

Provide deploy instructions.`
  },
  {
    id: 7,
    title: "Portfolio Web App",
    description: "Minimal layout with smooth transitions",
    icon: Layout,
    category: "Creative",
    prompt: `Create an interactive portfolio web application.

Design:
• Ultra modern
• Minimal layout
• Smooth page transitions
• Mobile responsive`
  },
  {
    id: 8,
    title: "Educational Demo",
    description: "Visual interactive learning experience",
    icon: Sparkles,
    category: "Education",
    prompt: `Create a demo interactive web app that teaches users something through visual interaction.

Use animations, cards, and responsive design.`
  },
];

// ─── Master Template ──────────────────────────────────────────────────────
const masterTemplate = `You are a {role}.

Create a production-ready {appType} that is fully mobile-responsive.

Objectives
• {objective1}
• {objective2}

Technical Requirements
• Framework: {framework}
• Styling: {styling}
• Animation: {animation}
• Components: reusable modular components
• Mobile-first responsive layout
• Accessible semantic HTML

UX Features
• Interactive sections
• Animated transitions
• Responsive navigation
• Hover and scroll interactions
• Modular cards and panels

Design Style
• {designStyle1}
• {designStyle2}
• {designStyle3}

Output
Generate:
1. Project folder structure
2. Full source code
3. Instructions to run locally
4. Explanation of key components`;

// ─── Component: PromptCard ────────────────────────────────────────────────
function PromptCard({ template, onSelect, isSelected }: { 
  template: typeof promptTemplates[0]; 
  onSelect: () => void;
  isSelected: boolean;
}) {
  const Icon = template.icon;
  const cardRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Hover animation
  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    
    const handleEnter = () => {
      gsap.to(card, { scale: 1.02, y: -4, duration: 0.2, ease: "power2.out" });
    };
    
    const handleLeave = () => {
      gsap.to(card, { scale: 1, y: 0, duration: 0.2, ease: "power2.out" });
    };
    
    const handleDown = () => {
      gsap.to(card, { scale: 0.98, duration: 0.1 });
    };
    
    const handleUp = () => {
      gsap.to(card, { scale: 1, duration: 0.1 });
    };
    
    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);
    card.addEventListener("mousedown", handleDown);
    card.addEventListener("mouseup", handleUp);
    
    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
      card.removeEventListener("mousedown", handleDown);
      card.removeEventListener("mouseup", handleUp);
    };
  }, []);
  
  // Expand animation
  useEffect(() => {
    if (!contentRef.current) return;
    
    if (isSelected) {
      gsap.fromTo(contentRef.current, 
        { height: 0 },
        { height: "auto", duration: 0.35, ease: "power2.out" }
      );
    } else {
      gsap.to(contentRef.current, { height: 0, duration: 0.25, ease: "power2.in" });
    }
  }, [isSelected]);
  
  return (
    <button
      ref={cardRef}
      onClick={onSelect}
      className={`w-full text-left p-6 rounded-xl border transition-all ${
        isSelected 
          ? "border-cyan-400 bg-cyan-400/10" 
          : "border-white/10 bg-white/5 hover:border-white/20"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${isSelected ? "bg-cyan-400/20" : "bg-white/10"}`}>
          <Icon className={`w-5 h-5 ${isSelected ? "text-cyan-400" : "text-white/60"}`} />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-white mb-1">{template.title}</h3>
          <p className="text-sm text-white/50">{template.description}</p>
          <span className="inline-block mt-3 text-xs px-2 py-1 rounded bg-white/5 text-white/40">
            {template.category}
          </span>
        </div>
        <ChevronRight className={`w-5 h-5 ${isSelected ? "text-cyan-400" : "text-white/20"}`} />
      </div>
      
      {/* Expanded content */}
      <div ref={contentRef} className="overflow-hidden">
        <div className="mt-4">
          <div className="bg-black/40 border border-white/10 rounded-xl p-6 font-mono text-sm text-white/70 whitespace-pre-wrap">
            {template.prompt}
          </div>
        </div>
      </div>
    </button>
  );
}

// ─── Component: PromptBuilder ────────────────────────────────────────────
function PromptBuilder({ onGenerate }: { onGenerate: (prompt: string) => void }) {
  const [role, setRole] = useState("senior full-stack developer + product designer");
  const [appType, setAppType] = useState("interactive web application");
  const [framework, setFramework] = useState("Next.js (App Router)");
  const [styling, setStyling] = useState("Tailwind CSS");
  const [animation, setAnimation] = useState("Framer Motion");
  const [designStyle1, setDesignStyle1] = useState("ultra-modern Gen-Z aesthetic");
  const [designStyle2, setDesignStyle2] = useState("dark-mode native");
  const [designStyle3, setDesignStyle3] = useState("glassmorphism panels");
  const [objective1, setObjective1] = useState("dynamic UI components with smooth interactions");
  const [objective2, setObjective2] = useState("high-contrast typography and bold color gradients");

  const generatedPrompt = masterTemplate
    .replace(/{role}/g, role)
    .replace(/{appType}/g, appType)
    .replace(/{framework}/g, framework)
    .replace(/{styling}/g, styling)
    .replace(/{animation}/g, animation)
    .replace(/{designStyle1}/g, designStyle1)
    .replace(/{designStyle2}/g, designStyle2)
    .replace(/{designStyle3}/g, designStyle3)
    .replace(/{objective1}/g, objective1)
    .replace(/{objective2}/g, objective2);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Form */}
      <div className="space-y-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">App Type</label>
          <input
            type="text"
            value={appType}
            onChange={(e) => setAppType(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">Framework</label>
            <select
              value={framework}
              onChange={(e) => setFramework(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
            >
              <option>Next.js (App Router)</option>
              <option>React + Vite</option>
              <option>Astro</option>
              <option>Remix</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">Styling</label>
            <select
              value={styling}
              onChange={(e) => setStyling(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
            >
              <option>Tailwind CSS</option>
              <option>CSS Modules</option>
              <option>Styled Components</option>
              <option>Vanilla CSS</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">Animation</label>
          <select
            value={animation}
            onChange={(e) => setAnimation(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
          >
            <option>Framer Motion</option>
            <option>GSAP</option>
            <option>React Spring</option>
            <option>CSS Animations</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="block text-xs uppercase tracking-wider text-white/40">Design Style</label>
          <input
            type="text"
            value={designStyle1}
            onChange={(e) => setDesignStyle1(e.target.value)}
            placeholder="Style 1"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
          />
          <input
            type="text"
            value={designStyle2}
            onChange={(e) => setDesignStyle2(e.target.value)}
            placeholder="Style 2"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
          />
          <input
            type="text"
            value={designStyle3}
            onChange={(e) => setDesignStyle3(e.target.value)}
            placeholder="Style 3"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Preview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-xs uppercase tracking-wider text-white/40">Generated Prompt</label>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Copy className="w-4 h-4" />
            Copy
          </button>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-xl p-6 font-mono text-sm text-white/70 whitespace-pre-wrap h-[500px] overflow-y-auto">
          {generatedPrompt}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function PromptsPage() {
  const [activeTab, setActiveTab] = useState<"templates" | "builder">("templates");
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);
  const prevTabRef = useRef<"templates" | "builder">(activeTab);

  const filteredTemplates = promptTemplates.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = (id: number, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Hero entrance animation
  useEffect(() => {
    if (!heroRef.current) return;
    const hero = heroRef.current;
    
    gsap.fromTo(hero, 
      { y: 20 },
      { y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  // Tab content animation
  useEffect(() => {
    if (!tabContentRef.current) return;
    
    if (prevTabRef.current !== activeTab) {
      prevTabRef.current = activeTab;
      
      gsap.fromTo(tabContentRef.current, 
        { y: 20 },
        { y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0B0D10]">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-6xl mx-auto">
          <div
            ref={heroRef}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
              AI Prompt Engineering
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              Prompt <span className="text-cyan-400">Templates</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Ready-to-use prompts for generating production-ready web apps with AI
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab("templates")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "templates"
                  ? "bg-cyan-400 text-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              Templates
            </button>
            <button
              onClick={() => setActiveTab("builder")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "builder"
                  ? "bg-cyan-400 text-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              Custom Builder
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div key={activeTab} ref={tabContentRef}>
            {activeTab === "templates" ? (
              <>
                {/* Search */}
                <div className="relative max-w-md mx-auto mb-12">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search templates..."
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-4 py-3 text-white placeholder-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Templates Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {filteredTemplates.map((template) => (
                    <div
                      key={template.id}
                      className={`relative group ${selectedTemplate === template.id ? 'md:col-span-2' : ''}`}
                    >
                      <PromptCard
                        template={template}
                        onSelect={() => setSelectedTemplate(selectedTemplate === template.id ? null : template.id)}
                        isSelected={selectedTemplate === template.id}
                      />
                      
                      {selectedTemplate === template.id && (
                        <div className="mt-4">
                          <button
                            onClick={() => handleCopy(template.id, template.prompt)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/20 transition-colors"
                          >
                            {copiedId === template.id ? (
                              <>
                                <Check className="w-4 h-4" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                Copy Prompt
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <PromptBuilder onGenerate={() => {}} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
