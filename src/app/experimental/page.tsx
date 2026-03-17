"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Zap, Star, Moon, Sun, MousePointer2, Grid, Circle, Square, Triangle, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Gen-Z Color Palette
const colors = {
  neonPink: "#FF006E",
  neonCyan: "#00F5FF",
  neonPurple: "#BF00FF",
  neonYellow: "#FFE500",
  neonGreen: "#00FF87",
  darkBg: "#050508",
  darkSurface: "#0A0A12",
};

// Interactive Elements Data
const interactiveElements = [
  { id: 1, x: 15, y: 20, color: colors.neonCyan, size: 80, label: "Cyan" },
  { id: 2, x: 75, y: 15, color: colors.neonPurple, size: 60, label: "Purple" },
  { id: 3, x: 25, y: 70, color: colors.neonPink, size: 100, label: "Pink" },
  { id: 4, x: 80, y: 65, color: colors.neonYellow, size: 70, label: "Yellow" },
  { id: 5, x: 50, y: 45, color: colors.neonGreen, size: 90, label: "Green" },
];

export default function ExperimentalGSAP() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeElement, setActiveElement] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // GSAP Animations
  useGSAP(() => {
    // Initial page load animation
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(".hero-badge", {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      delay: 0.1,
      ease: "back.out(1.7)",
    });

    // Animate orbs with stagger
    gsap.from(".orb", {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // Feature cards animation
    gsap.from(".feature-card", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".feature-cards",
        start: "top 80%",
      },
    });

    // Interactive elements animation
    gsap.from(".interactive-element", {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 0.5,
    });

  }, { scope: containerRef });

  // Mouse follower animation
  useGSAP(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: mousePos.x - 10,
        y: mousePos.y - 10,
        duration: 0.1,
        ease: "power2.out",
      });
    }
  }, { dependencies: [mousePos] });

  // Orb parallax effect
  useGSAP(() => {
    orbsRef.current.forEach((orb, i) => {
      if (orb) {
        gsap.to(orb, {
          x: (mousePos.x - window.innerWidth / 2) * (0.02 + i * 0.01),
          y: (mousePos.y - window.innerHeight / 2) * (0.02 + i * 0.01),
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  }, { dependencies: [mousePos] });

  // Interactive elements hover effect
  const handleElementHover = (index: number, isHovering: boolean) => {
    const element = elementsRef.current[index];
    if (element) {
      gsap.to(element, {
        scale: isHovering ? 1.2 : 1,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  // Interactive elements click effect
  const handleElementClick = (index: number) => {
    const element = elementsRef.current[index];
    if (element) {
      gsap.to(element, {
        rotation: "+=360",
        scale: 1.3,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(element, { scale: 1, duration: 0.2 });
        },
      });
    }
    setActiveElement(activeElement === index ? null : index);
  };

  return (
    <div
      ref={containerRef}
      className={`min-h-screen overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#050508]" : "bg-gray-100"
      }`}
    >
      {/* Animated Background Grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          ref={(el) => { if (el) orbsRef.current[0] = el; }}
          className="orb absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            backgroundColor: colors.neonCyan,
            opacity: 0.1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          ref={(el) => { if (el) orbsRef.current[1] = el; }}
          className="orb absolute w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            backgroundColor: colors.neonPurple,
            opacity: 0.08,
            top: "40%",
            left: "60%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          ref={(el) => { if (el) orbsRef.current[2] = el; }}
          className="orb absolute w-[400px] h-[400px] rounded-full blur-[80px]"
          style={{
            backgroundColor: colors.neonPink,
            opacity: 0.06,
            top: "60%",
            left: "40%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
        <div className="hero-badge flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">EXPERIMENTAL</span>
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-neon-yellow" />
            <span className="text-sm text-white/70">Interactive Experience</span>
          </div>

          <h1 className="hero-title text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-4" style={{ fontFamily: "Clash Display, system-ui" }}>
            <span className="text-white">MOVE THE </span>
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              MOUSE
            </span>
          </h1>

          <p className="hero-subtitle text-lg text-white/50 max-w-xl mx-auto">
            Interactive elements respond to your cursor. Click, drag, and explore the dynamic UI.
          </p>
        </div>

        {/* Interactive Elements Grid */}
        <div className="relative w-full max-w-4xl aspect-video mb-16">
          {interactiveElements.map((element, i) => (
            <div
              key={element.id}
              ref={(el) => { elementsRef.current[i] = el; }}
              className="interactive-element absolute cursor-pointer"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => handleElementHover(i, true)}
              onMouseLeave={() => handleElementHover(i, false)}
              onClick={() => handleElementClick(i)}
            >
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  width: element.size,
                  height: element.size,
                  backgroundColor: element.color,
                  boxShadow: `0 0 40px ${element.color}40`,
                }}
              >
                <span className="text-black font-bold text-xs">{element.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="feature-cards grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {[
            { icon: MousePointer2, title: "Mouse Follow", desc: "Elements track your cursor with spring physics" },
            { icon: Grid, title: "Parallax", desc: "Background layers move at different speeds" },
            { icon: Star, title: "Gestures", desc: "Click, drag, and hover interactions" },
          ].map((feature, i) => (
            <div
              key={i}
              className="feature-card p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <feature.icon className="w-8 h-8 text-neon-cyan mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/50">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Cursor Follower */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 mix-blend-difference"
      >
        <div className="w-5 h-5 rounded-full bg-white" />
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-sm">
        Scroll to explore
      </div>
    </div>
  );
}
