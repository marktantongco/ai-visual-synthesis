"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Sparkles, Zap, Star, Moon, Sun, MousePointer2, Grid, Circle, Square, Triangle } from "lucide-react";

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

export default function ExperimentalApp() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeElement, setActiveElement] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth mouse tracking with spring
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#050508]" : "bg-gray-100"
      }`}
    >
      {/* Animated Background Grid */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: parallaxY }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{
          x: springX,
          y: springY,
          backgroundColor: colors.neonCyan,
          opacity: 0.1,
          translateX: -300,
          translateY: -300,
        }}
      />
      <motion.div
        className="fixed w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{
          x: springX,
          y: springY,
          backgroundColor: colors.neonPurple,
          opacity: 0.08,
          translateX: -250,
          translateY: -250,
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">EXPERIMENTAL</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setIsDark(!isDark)}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-neon-yellow" />
            <span className="text-sm text-white/70">Interactive Experience</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-4" style={{ fontFamily: "Clash Display, system-ui" }}>
            <span className="text-white">MOVE THE </span>
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              MOUSE
            </span>
          </h1>

          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Interactive elements respond to your cursor. Click, drag, and explore the dynamic UI.
          </p>
        </motion.div>

        {/* Interactive Elements Grid */}
        <div className="relative w-full max-w-4xl aspect-video mb-16">
          {interactiveElements.map((element, i) => {
            const x = useMotionValue(element.x);
            const y = useMotionValue(element.y);

            useEffect(() => {
              const handleMouseMove = (e: MouseEvent) => {
                const rect = containerRef.current?.getBoundingClientRect();
                if (rect) {
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const mouseX = e.clientX - rect.left - centerX;
                  const mouseY = e.clientY - rect.top - centerY;
                  const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
                  const maxDistance = 300;
                  const influence = Math.max(0, 1 - distance / maxDistance);
                  const offsetX = mouseX * influence * 0.1;
                  const offsetY = mouseY * influence * 0.1;
                  x.set(element.x + offsetX);
                  y.set(element.y + offsetY);
                }
              };
              window.addEventListener("mousemove", handleMouseMove);
              return () => window.removeEventListener("mousemove", handleMouseMove);
            }, [element.x, element.y, x, y]);

            return (
              <motion.div
                key={element.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${x.get()}%`,
                  top: `${y.get()}%`,
                  x: useTransform(x, (v) => v * 10),
                  y: useTransform(y, (v) => v * 10),
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveElement(activeElement === element.id ? null : element.id)}
              >
                <motion.div
                  className="rounded-full flex items-center justify-center"
                  style={{
                    width: element.size,
                    height: element.size,
                    backgroundColor: element.color,
                    boxShadow: `0 0 40px ${element.color}40`,
                  }}
                  animate={{
                    scale: activeElement === element.id ? 1.3 : 1,
                    rotate: activeElement === element.id ? 360 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-black font-bold text-xs">{element.label}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {[
            { icon: MousePointer2, title: "Mouse Follow", desc: "Elements track your cursor with spring physics" },
            { icon: Grid, title: "Parallax", desc: "Background layers move at different speeds" },
            { icon: Star, title: "Gestures", desc: "Click, drag, and hover interactions" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <feature.icon className="w-8 h-8 text-neon-cyan mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/50">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Cursor Follower */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePos.x - 10,
          y: mousePos.y - 10,
        }}
      >
        <div className="w-5 h-5 rounded-full bg-white" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-sm"
      >
        Scroll to explore
      </motion.div>
    </div>
  );
}
