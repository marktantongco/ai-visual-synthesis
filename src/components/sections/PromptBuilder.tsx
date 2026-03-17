"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Copy, RefreshCw, Sparkles, X, Shuffle, Wand2 } from "lucide-react";

// ─── DATA ───────────────────────────────────────────────────────────────
const subjects = [
  "a woman", "a man", "a child", "a warrior", "a scientist", "an artist"
];

const actions = [
  "walking", "standing", "running", "thinking", "floating", "glancing"
];

const lighting = [
  "golden hour", "cinematic", "neon rim", "dramatic", "softbox", "backlit"
];

const styles = [
  "photorealistic", "cinematic", "oil painting", "anime", "cyberpunk", "fantasy"
];

const cameras = [
  "85mm f/1.4", "50mm f/1.8", "35mm wide", "24mm ultra-wide", "macro", "aerial"
];

const qualities = [
  "8K resolution", "ultra-detailed", "masterpiece", "best quality", "4K", "cinematic"
];

const presets = [
  { name: "Portrait", icon: "👤", subject: "a woman", action: "looking at camera", lighting: "softbox", camera: "85mm f/1.4", quality: "8K resolution" },
  { name: "Landscape", icon: "🏔️", subject: "mountain range", action: "at golden hour", lighting: "golden hour", camera: "24mm ultra-wide", quality: "ultra-detailed" },
  { name: "Cyberpunk", icon: "🌃", subject: "hacker", action: "in a neon city", lighting: "neon rim", camera: "35mm wide", quality: "cinematic" },
  { name: "Product", icon: "💎", subject: "perfume bottle", action: "on marble", lighting: "softbox", camera: "macro", quality: "ultra-detailed" },
];

// ─── SKELETON LOADER ─────────────────────────────────────────────────────
function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`skeleton-shimmer bg-gradient-to-r from-brutal-black via-brutal-gray/20 to-brutal-black rounded ${className}`} 
         style={{ backgroundSize: '200% 100%' }} />
  );
}

// ─── TILT CARD COMPONENT ─────────────────────────────────────────────────
function TiltCard({ 
  children, 
  className = "",
  color = "#FFDE00"
}: { 
  children: React.ReactNode; 
  className?: string;
  color?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    
    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };
    
    const handleLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    };
    
    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`tilt-card ${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        borderLeft: `4px solid ${color}`,
      }}
    >
      {children}
    </div>
  );
}

// ─── CLAY BUTTON ─────────────────────────────────────────────────────────
function ClayButton({ 
  children, 
  onClick, 
  active = false,
  variant = "default",
  className = ""
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  active?: boolean;
  variant?: "default" | "accent" | "danger";
  className?: string;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!btnRef.current) return;
    
    const btn = btnRef.current;
    
    const handleDown = () => gsap.to(btn, { scale: 0.95, y: 2, duration: 0.1 });
    const handleUp = () => gsap.to(btn, { scale: 1, y: 0, duration: 0.2, ease: "elastic.out(1, 0.5)" });
    
    btn.addEventListener('mousedown', handleDown);
    btn.addEventListener('mouseup', handleUp);
    btn.addEventListener('mouseleave', handleUp);
    btn.addEventListener('touchstart', handleDown);
    btn.addEventListener('touchend', handleUp);
    
    return () => {
      btn.removeEventListener('mousedown', handleDown);
      btn.removeEventListener('mouseup', handleUp);
      btn.removeEventListener('mouseleave', handleUp);
      btn.removeEventListener('touchstart', handleDown);
      btn.removeEventListener('touchend', handleUp);
    };
  }, []);

  const variants = {
    default: active 
      ? "bg-brutal-yellow text-brutal-black shadow-brutal" 
      : "bg-brutal-gray/20 text-brutal-cream hover:bg-brutal-gray/30",
    accent: "bg-brutal-red text-white shadow-brutal-red hover:brightness-110",
    danger: "bg-transparent border-2 border-brutal-red text-brutal-red hover:bg-brutal-red/10"
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className={`
        clay-btn px-3 py-2 text-xs font-bold uppercase tracking-wide
        transition-all duration-200 rounded-none
        ${variants[variant]}
        ${className}
      `}
      style={{
        boxShadow: active 
          ? '4px 4px 0 0 #0D0D0D' 
          : '2px 2px 0 0 rgba(255,222,0,0.3)',
      }}
    >
      {children}
    </button>
  );
}

// ─── BENTO SELECTOR ──────────────────────────────────────────────────────
function BentoSelector({
  label,
  options,
  selected,
  onSelect,
  color
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (val: string) => void;
  color: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      gsap.fromTo(containerRef.current.querySelectorAll('.bento-option'),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.2, stagger: 0.03, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <div className="bento-selector">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 bg-brutal-black border-2 border-brutal-gray/30 flex items-center justify-between hover:border-brutal-yellow transition-colors"
        style={{ borderLeftWidth: '4px', borderLeftColor: color }}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-brutal-cream/80">
          {label}
        </span>
        <span className="text-sm font-bold text-brutal-cream truncate max-w-[120px]">
          {selected || '—'}
        </span>
      </button>
      
      {isOpen && (
        <div ref={containerRef} className="grid grid-cols-2 gap-1 mt-1 p-1 bg-brutal-black/90 border border-brutal-gray/20">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onSelect(opt); setIsOpen(false); }}
              className={`bento-option p-2 text-left text-xs font-medium transition-all ${
                selected === opt 
                  ? "bg-brutal-yellow text-brutal-black" 
                  : "text-brutal-cream/70 hover:bg-brutal-gray/20"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────
export default function PromptBuilder() {
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [selected, setSelected] = useState({
    subject: "", action: "", lighting: "", style: "", camera: "", quality: ""
  });

  const containerRef = useRef<HTMLElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Build prompt
  useEffect(() => {
    const parts = [selected.subject, selected.action, selected.lighting, selected.style, selected.camera, selected.quality].filter(Boolean);
    const result = parts.join(", ") + (selected.quality ? " --ar 16:9 --v 6.1" : "");
    setPrompt(result);
  }, [selected]);

  // Cursor follower
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (cursorRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gsap.to(cursorRef.current, {
          x, y,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };
    
    containerRef.current?.addEventListener('mousemove', handleMove);
    return () => containerRef.current?.removeEventListener('mousemove', handleMove);
  }, []);

  // Entrance animations
  useEffect(() => {
    if (!isLoading && containerRef.current) {
      gsap.fromTo(containerRef.current.querySelectorAll('.animate-in'),
        { y: 20 },
        { y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, [isLoading]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    
    if (outputRef.current) {
      gsap.to(outputRef.current, {
        scale: 1.02,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
    
    setTimeout(() => setCopied(false), 2000);
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

  const clear = () => setSelected({ subject: "", action: "", lighting: "", style: "", camera: "", quality: "" });

  const applyPreset = (preset: typeof presets[0]) => {
    setSelected({
      subject: preset.subject,
      action: preset.action,
      lighting: preset.lighting,
      style: "",
      camera: preset.camera,
      quality: preset.quality
    });
  };

  // ─── SKELETON STATE ───────────────────────────────────────────────────
  if (isLoading) {
    return (
      <section className="py-8 px-4 bg-brutal-black">
        <div className="max-w-4xl mx-auto space-y-4">
          <Skeleton className="h-12 w-48" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-20" />
            ))}
          </div>
          <Skeleton className="h-32" />
        </div>
      </section>
    );
  }

  // ─── MAIN RENDER ──────────────────────────────────────────────────────
  return (
    <section 
      ref={containerRef}
      id="prompt-builder" 
      className="py-8 px-4 bg-brutal-black relative overflow-hidden"
    >
      {/* Cursor follower (hidden on mobile) */}
      <div 
        ref={cursorRef}
        className="hidden md:block fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ background: '#FFDE00', transform: 'translate(-50%, -50%)' }}
      />

      <div className="max-w-4xl mx-auto relative">
        {/* ─── HEADER ───────────────────────────────────────────────────── */}
        <div className="animate-in flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brutal-yellow flex items-center justify-center" style={{ boxShadow: '4px 4px 0 0 #FF006E' }}>
              <Wand2 className="w-5 h-5 text-brutal-black" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-brutal-cream tracking-tight" style={{ fontFamily: "Clash Display, system-ui" }}>
                PROMPT<span className="text-brutal-yellow">.</span>BUILDER
              </h2>
              <p className="text-[10px] text-brutal-gray uppercase tracking-widest">
                Click to construct → Copy to create
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <ClayButton onClick={randomize} variant="accent" className="min-h-[44px]">
              <Shuffle className="w-4 h-4 inline mr-1" />
              Shuffle
            </ClayButton>
            <ClayButton onClick={clear} variant="danger" className="min-h-[44px]">
              <X className="w-4 h-4 inline mr-1" />
              Clear
            </ClayButton>
          </div>
        </div>

        {/* ─── PRESETS BENTO ────────────────────────────────────────────── */}
        <div className="animate-in grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          {presets.map((preset) => (
            <TiltCard key={preset.name} color="#FFDE00" className="p-3 bg-brutal-gray/10 cursor-pointer hover:bg-brutal-gray/20 transition-colors">
              <button
                onClick={() => applyPreset(preset)}
                className="w-full text-left"
              >
                <span className="text-lg">{preset.icon}</span>
                <span className="block text-xs font-bold text-brutal-cream mt-1">{preset.name}</span>
                <span className="block text-[10px] text-brutal-gray truncate">{preset.subject}</span>
              </button>
            </TiltCard>
          ))}
        </div>

        {/* ─── SELECTORS BENTO GRID ─────────────────────────────────────── */}
        <div className="animate-in grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          <BentoSelector label="Subject" options={subjects} selected={selected.subject} onSelect={(v) => setSelected({...selected, subject: v})} color="#FFDE00" />
          <BentoSelector label="Action" options={actions} selected={selected.action} onSelect={(v) => setSelected({...selected, action: v})} color="#FF006E" />
          <BentoSelector label="Lighting" options={lighting} selected={selected.lighting} onSelect={(v) => setSelected({...selected, lighting: v})} color="#00F5FF" />
          <BentoSelector label="Style" options={styles} selected={selected.style} onSelect={(v) => setSelected({...selected, style: v})} color="#BF00FF" />
          <BentoSelector label="Camera" options={cameras} selected={selected.camera} onSelect={(v) => setSelected({...selected, camera: v})} color="#FFB000" />
          <BentoSelector label="Quality" options={qualities} selected={selected.quality} onSelect={(v) => setSelected({...selected, quality: v})} color="#00FF87" />
        </div>

        {/* ─── OUTPUT - DUOTONE STYLE ───────────────────────────────────── */}
        <div 
          ref={outputRef}
          className="animate-in relative"
          style={{
            background: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 50%, #0D0D0D 100%)',
            border: '4px solid #0D0D0D',
            boxShadow: '8px 8px 0 0 #FFDE00',
          }}
        >
          {/* Decorative corner */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-brutal-red" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-brutal-yellow" />
          
          <div className="p-4 md:p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-brutal-cream/70 uppercase tracking-widest">
                Generated Output
              </span>
              <button
                onClick={randomize}
                className="p-1 text-brutal-gray hover:text-brutal-yellow transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-base md:text-lg font-medium text-brutal-cream leading-relaxed min-h-[60px]" style={{ fontFamily: "monospace" }}>
              {prompt || (
                <span className="text-brutal-cream/50 italic">
                  Select options above to build your prompt...
                </span>
              )}
            </p>

            <div className="flex gap-2 mt-4 flex-wrap">
              <button
                onClick={handleCopy}
                disabled={!prompt}
                className={`
                  flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-wide
                  transition-all duration-200
                  ${prompt 
                    ? "bg-brutal-yellow text-brutal-black hover:bg-brutal-cream active:scale-95" 
                    : "bg-brutal-gray/20 text-brutal-gray/50 cursor-not-allowed"
                  }
                `}
                style={{ boxShadow: prompt ? '4px 4px 0 0 #FF006E' : 'none' }}
              >
                {copied ? (
                  <>
                    <Sparkles className="w-4 h-4" />
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
          </div>
        </div>

        {/* ─── TIPS - ISOTYPE STYLE ─────────────────────────────────────── */}
        <div className="animate-in flex flex-wrap gap-2 mt-4 justify-center">
          {[
            { icon: "💡", text: "3-4 elements = best results" },
            { icon: "⚡", text: "--ar for aspect ratio" },
            { icon: "🎯", text: "Presets for quick starts" },
          ].map((tip, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 bg-brutal-gray/10 border border-brutal-yellow/30" title={tip.text}>
              <span className="text-sm">{tip.icon}</span>
              <span className="text-xs text-brutal-cream/80">{tip.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── GLOBAL STYLES ─────────────────────────────────────────────── */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .skeleton-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
        .tilt-card {
          transform-style: preserve-3d;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
