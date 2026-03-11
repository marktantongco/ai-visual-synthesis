"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Fade-in-up on scroll
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Glassmorphism card
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
  const glowClasses = {
    cyan: "hover:glow-cyan",
    purple: "hover:glow-purple",
    pink: "hover:glow-pink",
    green: "hover:shadow-[0_0_30px_rgba(0,255,135,0.25)]",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "glass rounded-2xl overflow-hidden transition-all duration-300",
        glow && glowClasses[glow],
        className,
      )}
    >
      {children}
    </motion.div>
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
    cyan: "text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10",
    purple: "text-neon-purple border-neon-purple/30 bg-neon-purple/10",
    pink: "text-neon-pink border-neon-pink/30 bg-neon-pink/10",
    green: "text-neon-green border-neon-green/30 bg-neon-green/10",
    yellow: "text-neon-yellow border-neon-yellow/30 bg-neon-yellow/10",
  };

  return (
    <span
      className={cn(
        "tag border font-semibold tracking-wide uppercase",
        colorMap[color],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Animated counter
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
  const [count, setCount] = useState(from);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = Date.now();
    const timer = setInterval(() => {
      const elapsed = (Date.now() - start) / (duration * 1000);
      if (elapsed >= 1) {
        setCount(to);
        clearInterval(timer);
      } else {
        const ease = 1 - Math.pow(1 - elapsed, 3);
        setCount(Math.round(from + (to - from) * ease));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, from, to, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Scroll progress bar
───────────────────────────────────────────── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink origin-left z-50"
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
