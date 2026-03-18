"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Zap, Palette, Wand2, Sparkles, Cpu, Image, ArrowRight } from "lucide-react";
import {
  useMagneticEffect,
  useParticleSystem,
  useReducedMotion,
} from "@/lib/gsap-animations";

gsap.registerPlugin(ScrollTrigger);

const floatingTools = [
  { text: "Midjourney", icon: Image, x: "6%", y: "18%" },
  { text: "DALL·E 3", icon: Palette, x: "82%", y: "12%" },
  { text: "Stable Diffusion", icon: Sparkles, x: "72%", y: "68%" },
  { text: "Sora", icon: Cpu, x: "3%", y: "72%" },
  { text: "Flux", icon: Wand2, x: "38%", y: "85%" },
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
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const primaryCtaRef = useMagneticEffect<HTMLAnchorElement>(0.4);
  const secondaryCtaRef = useMagneticEffect<HTMLAnchorElement>(0.4);
  const [isAnimated, setIsAnimated] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // TIER 3: Particle system for hero background
  useParticleSystem(particleContainerRef, {
    count: 25,
    minSize: 3,
    maxSize: 8,
    color: "255, 222, 0",
    minOpacity: 0.06,
    maxOpacity: 0.2,
  });

  useEffect(() => {
    if (isAnimated || prefersReducedMotion) return;
    
    const initTimer = setTimeout(() => {
      setIsAnimated(true);
      
      const ctx = gsap.context(() => {
        // Hero entrance timeline
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        
        tl.fromTo(".hero-eyebrow",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo(titleRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.3"
        )
        .fromTo(subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(ctaRef.current?.children || [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
          "-=0.3"
        )
        .fromTo(".stat-item",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 },
          "-=0.2"
        );

        // Floating tools entrance with back.out
        gsap.fromTo(".floating-tool",
          { y: 30, scale: 0.9, opacity: 0 },
          { 
            y: 0, 
            scale: 1, 
            opacity: 1,
            duration: 0.7, 
            stagger: 0.12, 
            delay: 0.6,
            ease: "back.out(1.7)" 
          }
        );

        // Continuous floating animation
        gsap.to(".floating-tool", {
          y: -15,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: {
            each: 0.3,
            from: "random"
          }
        });

        // Parallax on scroll
        gsap.to(".hero-parallax", {
          y: "40%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });

        // Scroll cue animation
        gsap.fromTo(".scroll-cue",
          { opacity: 0 },
          { opacity: 1, duration: 0.8, delay: 1.8 }
        );

      }, sectionRef);

      return () => ctx.revert();
    }, 50);

    return () => clearTimeout(initTimer);
  }, [isAnimated, prefersReducedMotion]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brutal-cream"
      aria-label="Hero section"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 pattern-grid-light opacity-50" />

      {/* Particle Container */}
      <div
        ref={particleContainerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t-4 border-l-4 border-brutal-black opacity-20" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b-4 border-r-4 border-brutal-black opacity-20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-brutal-yellow opacity-40" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-brutal-yellow opacity-40" />

      {/* Floating tool tags */}
      {floatingTools.map((tool, i) => (
        <div
          key={tool.text}
          className="floating-tool absolute hidden lg:flex items-center gap-2"
          style={{ left: tool.x, top: tool.y }}
        >
          <div 
            className="bg-brutal-black border-3 border-brutal-yellow px-5 py-2.5 flex items-center gap-2.5"
            style={{ borderWidth: '3px', boxShadow: '6px 6px 0 0 #FFDE00' }}
          >
            <tool.icon className="w-4 h-4 text-brutal-yellow" />
            <span className="text-sm font-bold text-brutal-cream uppercase tracking-wider font-display">
              {tool.text}
            </span>
          </div>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Eyebrow Badge */}
        <div 
          className="hero-eyebrow inline-flex items-center gap-3 bg-brutal-black border-4 border-brutal-yellow px-6 py-3 mb-10"
          style={{ boxShadow: '8px 8px 0 0 #FFDE00' }}
        >
          <span className="w-2.5 h-2.5 bg-brutal-yellow rounded-full animate-pulse" />
          <span className="text-xs font-bold text-brutal-yellow tracking-[0.15em] uppercase font-mono">
            AI Practitioner Framework · 2026 Edition
          </span>
          <Sparkles className="w-4 h-4 text-brutal-yellow" />
        </div>

        {/* Headline */}
        <h1 
          ref={titleRef}
          className="hero-title font-display font-black text-brutal-black mb-8"
        >
          <span className="block">Master</span>
          <span 
            className="block text-brutal-yellow" 
            style={{ textShadow: '6px 6px 0 #0D0D0D' }}
          >
            AI Visual
          </span>
          <span className="block">Synthesis</span>
        </h1>

        {/* Subheadline */}
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed text-brutal-gray font-medium"
        >
          From foundational prompts to expert agent orchestration — the 2026 practitioner's complete
          interactive guide to every major AI image generation tool, style, and workflow.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            ref={primaryCtaRef}
            href="#tools"
            className="brutal-btn brutal-btn-lg text-brutal-black text-lg px-12 py-5"
          >
            <Zap className="w-5 h-5 mr-3" />
            Explore the Guide
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            ref={secondaryCtaRef}
            href="#prompts"
            className="brutal-btn brutal-btn-lg brutal-btn-dark text-lg px-12 py-5"
          >
            Prompt Library
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            { label: "AI Tools Covered", value: "12+" },
            { label: "Prompt Templates", value: "80+" },
            { label: "Skill Framework Nodes", value: "6" },
            { label: "Free Resources", value: "∞" },
          ].map((stat, i) => (
            <div key={stat.label} className="stat-item min-w-[120px] text-center">
              <div className="stat-value text-4xl md:text-5xl font-display font-black text-brutal-black">
                {stat.value}
              </div>
              <div className="text-xs mt-2 font-bold uppercase tracking-wider text-brutal-gray font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="scroll-cue absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs font-bold uppercase tracking-[0.15em] text-brutal-gray font-mono">
          Scroll to explore
        </span>
        <div 
          className="w-7 h-12 border-3 border-brutal-black flex justify-center pt-2"
          style={{ borderWidth: '3px' }}
        >
          <div className="w-2.5 h-2.5 bg-brutal-yellow animate-bounce" />
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-brutal-black py-4 border-t-4 border-brutal-yellow">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span 
              key={i} 
              className="text-sm font-bold uppercase tracking-wider text-brutal-yellow mx-10 font-display"
            >
              {item} <span className="text-brutal-cream/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
