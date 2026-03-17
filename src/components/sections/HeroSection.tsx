"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Zap, Palette, Wand2, Sparkles, Cpu, Image } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const floatingTools = [
  { text: "Midjourney", icon: Image, x: "8%", y: "20%" },
  { text: "DALL·E 3", icon: Palette, x: "80%", y: "15%" },
  { text: "Stable Diffusion", icon: Sparkles, x: "70%", y: "65%" },
  { text: "Sora", icon: Cpu, x: "5%", y: "70%" },
  { text: "Flux", icon: Wand2, x: "40%", y: "82%" },
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
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Skip if already animated
    if (isAnimated) return;
    
    // Small delay to ensure DOM is ready
    const initTimer = setTimeout(() => {
      setIsAnimated(true);
      
      const ctx = gsap.context(() => {
        // KEY FIX: Elements are ALREADY VISIBLE (opacity: 1 in CSS/inline)
        // Animation is an ENHANCEMENT, not a requirement for visibility
        // We animate FROM a subtle state TO the current visible state
        
        // Hero content timeline - subtle entrance animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        
        // Animate from slightly lower position, but elements are already visible
        tl.fromTo(".hero-eyebrow",
          { y: -15 },  // Subtle movement, no opacity change
          { y: 0, duration: 0.6 }
        )
        .fromTo(titleRef.current,
          { y: 20 },  // Subtle movement only
          { y: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(subtitleRef.current,
          { y: 15 },
          { y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(ctaRef.current?.children || [],
          { y: 10 },
          { y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(".stat-item",
          { y: 8 },
          { y: 0, duration: 0.4, stagger: 0.08 },
          "-=0.2"
        );

        // Floating tools - already visible, just add entrance animation
        gsap.fromTo(".floating-tool",
          { y: 10, scale: 0.95 },
          { 
            y: 0, 
            scale: 1, 
            duration: 0.6, 
            stagger: 0.15, 
            delay: 0.8,
            ease: "back.out(1.7)" 
          }
        );

        // Floating animation
        gsap.to(".floating-tool", {
          y: -12,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: {
            each: 0.3,
            from: "random"
          }
        });

        // Scroll-triggered parallax
        gsap.to(".hero-parallax", {
          y: "30%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });

        // Scroll cue - already visible, just subtle fade in
        gsap.to(".scroll-cue", {
          opacity: 1,
          duration: 0.5,
          delay: 1.5
        });

        // Stats counter animation - subtle scale
        gsap.fromTo(".stat-value",
          { scale: 0.95 },
          {
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

      }, sectionRef);

      return () => ctx.revert();
    }, 50);  // Small delay for DOM readiness

    return () => clearTimeout(initTimer);
  }, [isAnimated]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brutal-cream"
      aria-label="Hero section"
    >
      {/* Brutalist grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(var(--brutal-black)_1px,transparent_1px),linear-gradient(90deg,var(--brutal-black)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Floating tool tags */}
      {floatingTools.map((tool, i) => (
        <div
          key={tool.text}
          className="floating-tool absolute hidden lg:flex items-center gap-2"
          style={{ left: tool.x, top: tool.y }}
        >
          <div className="bg-brutal-black border-2 border-brutal-yellow px-4 py-2 flex items-center gap-2"
               style={{ borderWidth: '2px', boxShadow: '4px 4px 0 0 #FFDE00' }}>
            <tool.icon className="w-4 h-4 text-brutal-yellow" />
            <span className="text-sm font-bold text-brutal-cream uppercase tracking-wider">
              {tool.text}
            </span>
          </div>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="hero-eyebrow inline-flex items-center gap-3 bg-brutal-black border-3 border-brutal-yellow px-5 py-2 mb-10"
             style={{ borderWidth: '3px', boxShadow: '6px 6px 0 0 #FFDE00' }}>
          <span className="w-2 h-2 bg-brutal-yellow rounded-full animate-pulse" />
          <span className="text-xs font-bold text-brutal-yellow tracking-[0.2em] uppercase font-mono">
            AI Practitioner Framework · 2026 Edition
          </span>
        </div>

        {/* Headline */}
        <h1 
          ref={titleRef}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8 text-brutal-black"
        >
          <span className="block">Master</span>
          <span className="block text-brutal-yellow" style={{ textShadow: '4px 4px 0 #0D0D0D' }}>AI Visual</span>
          <span className="block">Synthesis</span>
        </h1>

        {/* Subheadline */}
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-brutal-gray font-medium"
        >
          From foundational prompts to expert agent orchestration — the 2026 practitioner's complete
          interactive guide to every major AI image generation tool, style, and workflow.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#tools"
            className="brutal-btn text-brutal-black text-lg px-10 py-4"
          >
            <Zap className="w-5 h-5 mr-2 inline" />
            Explore the Guide
          </a>
          <a
            href="#prompts"
            className="brutal-btn brutal-btn-dark text-lg px-10 py-4"
          >
            Prompt Library →
          </a>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { label: "AI Tools Covered", value: "12+" },
            { label: "Prompt Templates", value: "80+" },
            { label: "Skill Framework Nodes", value: "6" },
            { label: "Free Resources", value: "∞" },
          ].map((stat, i) => (
            <div key={stat.label} className="stat-item min-w-[100px] text-center">
              <div className="stat-value text-3xl md:text-4xl font-display font-black text-brutal-black">
                {stat.value}
              </div>
              <div className="text-xs mt-2 font-bold uppercase tracking-wider text-brutal-gray">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brutal-gray">
          Scroll to explore
        </span>
        <div className="w-6 h-10 border-3 border-brutal-black flex justify-center pt-2"
             style={{ borderWidth: '3px' }}>
          <div className="w-2 h-2 bg-brutal-yellow animate-bounce" />
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-brutal-black py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-sm font-bold uppercase tracking-wider text-brutal-yellow mx-8">
              {item} •
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
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
