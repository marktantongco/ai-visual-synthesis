"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitText, animateTextReveal } from "@/lib/gsap-utils";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// HERO SECTION
// ============================================

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      if (titleRef.current) {
        splitText(titleRef.current);
        animateTextReveal(titleRef.current, { delay: 0.2, stagger: 0.05 });
      }

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 0.7,
        ease: "back.out(1.7)",
      });

      // Gradient background animation
      gsap.to(".hero-gradient", {
        backgroundPosition: "200% 50%",
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="hero-gradient absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-900 to-cyan-900 bg-[length:200%_200%]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1
          ref={titleRef}
          className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tight mb-6"
          style={{ fontFamily: "Clash Display, system-ui" }}
        >
          GSAP ANIMATION SHOWCASE
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-white/70 mb-10 max-w-2xl mx-auto"
        >
          Explore interactive animations built with GSAP. Scroll, hover, and trigger effects.
        </p>

        <button
          ref={ctaRef}
          className="px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-cyan-400 transition-colors"
        >
          Explore Animations
        </button>
      </div>
    </section>
  );
}

// ============================================
// TEXT REVEAL SECTION
// ============================================

export function TextRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (textRef.current) {
        splitText(textRef.current);
        gsap.from(textRef.current.querySelectorAll("span"), {
          opacity: 0,
          y: 50,
          rotationX: -90,
          stagger: 0.03,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          ref={textRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white"
        >
          TEXT REVEAL ANIMATION
        </h2>
        <p className="mt-8 text-white/50 text-lg">
          Each character animates with 3D rotation and stagger timing.
        </p>
      </div>
    </section>
  );
}

// ============================================
// STAGGER CARDS SECTION
// ============================================

export function StaggerCardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: containerRef }
  );

  const cards = [
    { title: "Stagger", desc: "Elements animate in sequence" },
    { title: "Parallax", desc: "Layers move at different speeds" },
    { title: "Timeline", desc: "Complex sequences in order" },
    { title: "Hover", desc: "Interactive micro-interactions" },
    { title: "Scroll", desc: "Triggered by viewport entry" },
    { title: "Morph", desc: "SVG path transformations" },
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-16 text-center">
          Animation Types
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 mb-4 flex items-center justify-center">
                <span className="text-black font-bold">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {card.title}
              </h3>
              <p className="text-white/50">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PARALLAX SECTION
// ============================================

export function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(layer1Ref.current, {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(layer2Ref.current, {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(layer3Ref.current, {
        y: -25,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative h-[600px] overflow-hidden bg-gray-900">
      <div
        ref={layer1Ref}
        className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-transparent"
      />
      <div
        ref={layer2Ref}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div
        ref={layer3Ref}
        className="absolute inset-0 flex items-center justify-center"
      >
        <h2 className="text-6xl sm:text-8xl font-black text-white/20">
          PARALLAX
        </h2>
      </div>
    </section>
  );
}

// ============================================
// INTERACTIVE PLAYGROUND
// ============================================

export function AnimationPlayground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState(1);

  useGSAP(
    () => {
      // Initial state
      gsap.set(boxRef.current, { x: 0, rotation: 0, scale: 1 });
    },
    { scope: containerRef }
  );

  const triggerAnimation = (type: string) => {
    const box = boxRef.current;
    if (!box) return;

    gsap.killTweensOf(box);

    switch (type) {
      case "bounce":
        gsap.to(box, {
          y: -100,
          duration: 0.5 / speed,
          ease: "power2.out",
          yoyo: true,
          repeat: 3,
        });
        break;
      case "rotate":
        gsap.to(box, {
          rotation: 360,
          duration: 1 / speed,
          ease: "power2.inOut",
        });
        break;
      case "scale":
        gsap.to(box, {
          scale: 1.5,
          duration: 0.3 / speed,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });
        break;
      case "slide":
        gsap.to(box, {
          x: 200,
          duration: 0.8 / speed,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1,
        });
        break;
      case "glow":
        gsap.to(box, {
          boxShadow: "0 0 50px #00F5FF, 0 0 100px #BF00FF",
          duration: 0.5 / speed,
          yoyo: true,
          repeat: 1,
        });
        break;
      case "reset":
        gsap.to(box, {
          x: 0,
          rotation: 0,
          scale: 1,
          boxShadow: "none",
          duration: 0.5 / speed,
          ease: "power2.out",
        });
        break;
    }
  };

  return (
    <section ref={containerRef} className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 text-center">
          Animation Playground
        </h2>

        {/* Animation Box */}
        <div className="relative h-64 bg-white/5 rounded-2xl border border-white/10 mb-8 flex items-center justify-center overflow-hidden">
          <div
            ref={boxRef}
            className="w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500"
          />
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { label: "Bounce", type: "bounce" },
            { label: "Rotate", type: "rotate" },
            { label: "Scale", type: "scale" },
            { label: "Slide", type: "slide" },
            { label: "Glow", type: "glow" },
            { label: "Reset", type: "reset" },
          ].map((btn) => (
            <button
              key={btn.type}
              onClick={() => triggerAnimation(btn.type)}
              className="px-6 py-3 bg-white/10 hover:bg-cyan-400/20 text-white rounded-full transition-colors"
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Speed Control */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-white/50">Speed:</span>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-32 accent-cyan-400"
          />
          <span className="text-white">{speed.toFixed(1)}x</span>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FLOATING ELEMENTS SECTION
// ============================================

export function FloatingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      elementsRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            y: -20,
            duration: 2 + i * 0.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.1,
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-16">
          Floating Elements
        </h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {[
            { color: "from-cyan-400 to-blue-500", size: "w-20 h-20" },
            { color: "from-purple-400 to-pink-500", size: "w-16 h-16" },
            { color: "from-yellow-400 to-orange-500", size: "w-24 h-24" },
            { color: "from-green-400 to-teal-500", size: "w-14 h-14" },
            { color: "from-red-400 to-pink-500", size: "w-18 h-18" },
          ].map((el, i) => (
            <div
              key={i}
              ref={(r) => { elementsRef.current[i] = r; }}
              className={`${el.size} rounded-full bg-gradient-to-br ${el.color} opacity-80`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white/50">
          Built with Next.js, Tailwind CSS, and GSAP
        </p>
      </div>
    </footer>
  );
}
