"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  useFadeInOnScroll,
  useScrollProgress,
  useAnimatedCounter,
  ANIMATION_CONFIG,
} from "@/lib/gsap-animations";
import gsap from "gsap";

/* ─────────────────────────────────────────────
   Fade-in-up on scroll (GSAP Version)
   
   FIX: Elements start VISIBLE by default to prevent
   whitespace issues when animations fail to initialize.
   Animation is purely an enhancement.
───────────────────────────────────────────── */
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref } = useFadeInOnScroll({ delay, duration: 0.5, y: 20 });

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        opacity: 1,  // Start visible!
        visibility: 'visible'  // Always visible
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SafeFadeIn - Guaranteed visibility
   Use this for critical content
───────────────────────────────────────────── */
export function SafeFadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Enable animations after mount
  useEffect(() => {
    const readyTimer = setTimeout(() => setShouldAnimate(true), 100);
    return () => clearTimeout(readyTimer);
  }, []);

  // Intersection Observer for scroll trigger
  useEffect(() => {
    if (!ref.current || !shouldAnimate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [shouldAnimate]);

  // Fallback timeout
  useEffect(() => {
    const fallbackTimer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shouldAnimate && !isVisible ? 0.01 : 1,
        transform: shouldAnimate && !isVisible ? 'translateY(32px)' : 'translateY(0)',
        transition: shouldAnimate
          ? `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
          : 'none',
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Glassmorphism card (GSAP Version)
───────────────────────────────────────────── */
export function GlassCard({
  children,
  className = "",
  hover = true,
  glow,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "purple" | "pink" | "green";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glowClasses = {
    cyan: "hover:glow-cyan",
    purple: "hover:glow-purple",
    pink: "hover:glow-pink",
    green: "hover:shadow-[0_0_30px_rgba(0,255,135,0.25)]",
  };

  useEffect(() => {
    if (!ref.current || !hover) return;

    const card = ref.current;

    const handleEnter = () => {
      gsap.to(card, {
        y: -4,
        scale: 1.01,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, [hover]);

  return (
    <div
      ref={ref}
      className={cn(
        "glass rounded-2xl overflow-hidden transition-all duration-300",
        glow && glowClasses[glow],
        className
      )}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Neon badge / tag pill
───────────────────────────────────────────── */
export function NeonTag({
  children,
  color = "cyan",
  className = "",
}: {
  children: React.ReactNode;
  color?: "cyan" | "purple" | "pink" | "green" | "yellow";
  className?: string;
}) {
  const colorMap = {
    cyan: "text-brutal-black bg-brutal-cyan border-brutal-black",
    purple: "text-brutal-cream bg-brutal-purple/80 border-brutal-black",
    pink: "text-brutal-cream bg-brutal-red/80 border-brutal-black",
    green: "text-brutal-black bg-brutal-green border-brutal-black",
    yellow: "text-brutal-black bg-brutal-yellow border-brutal-black",
  };

  return (
    <span
      className={cn(
        "tag border font-semibold tracking-wide uppercase",
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Animated counter (GSAP Version)
───────────────────────────────────────────── */
export function AnimatedCounter({
  from = 0,
  to,
  suffix = "",
  duration = 2,
}: {
  from?: number;
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const { displayValue, ref } = useAnimatedCounter({
    target: to,
    duration,
    suffix,
  });

  return <span ref={ref}>{displayValue}</span>;
}

/* ─────────────────────────────────────────────
   Scroll progress bar (GSAP Version)
───────────────────────────────────────────── */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink origin-left z-50"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
}

/* ─────────────────────────────────────────────
   Marquee ticker
───────────────────────────────────────────── */
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="w-full overflow-hidden py-3 border-y border-white/5">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium text-white/30 tracking-widest uppercase shrink-0"
          >
            {item} <span className="text-neon-cyan/50 mx-3">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
