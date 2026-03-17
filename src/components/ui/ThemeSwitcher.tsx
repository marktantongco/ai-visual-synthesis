"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const themes = [
  { id: "neon",    label: "Neon",    dot: "#4DFFFF", tooltip: "Neon Cyan Theme" },
  { id: "minimal", label: "Violet",  dot: "#7B5CFF", tooltip: "Violet Purple Theme" },
  { id: "glass",   label: "Magenta", dot: "#FF4FD8", tooltip: "Magenta Pink Theme" },
  { id: "amber",   label: "Amber",   dot: "#FFB000", tooltip: "Amber Gold Theme" },
] as const;

type ThemeId = typeof themes[number]["id"];

export default function ThemeSwitcher() {
  const [active, setActive] = useState<ThemeId>("neon");
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const root = document.documentElement;
    if (active === "neon") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", active);
    }
  }, [active]);

  // Setup hover animations for each button
  useEffect(() => {
    const cleanupFns: (() => void)[] = [];
    
    buttonRefs.current.forEach((btn) => {
      if (!btn) return;
      
      const handleEnter = () => {
        gsap.to(btn, { x: -2, duration: 0.2, ease: "power2.out" });
      };
      
      const handleLeave = () => {
        gsap.to(btn, { x: 0, duration: 0.2, ease: "power2.out" });
      };
      
      const handleDown = () => {
        gsap.to(btn, { scale: 0.95, duration: 0.1, ease: "power2.out" });
      };
      
      const handleUp = () => {
        gsap.to(btn, { scale: 1, duration: 0.1, ease: "power2.out" });
      };
      
      btn.addEventListener("mouseenter", handleEnter);
      btn.addEventListener("mouseleave", handleLeave);
      btn.addEventListener("mousedown", handleDown);
      btn.addEventListener("mouseup", handleUp);
      btn.addEventListener("mouseleave", handleUp);
      
      cleanupFns.push(() => {
        btn.removeEventListener("mouseenter", handleEnter);
        btn.removeEventListener("mouseleave", handleLeave);
        btn.removeEventListener("mousedown", handleDown);
        btn.removeEventListener("mouseup", handleUp);
        btn.removeEventListener("mouseleave", handleUp);
      });
    });
    
    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      aria-label="Live theme switcher"
    >
      <div className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1 text-right">
        Theme Selector
      </div>
      <div className="glass rounded-2xl border border-white/10 p-2 flex flex-col gap-1.5">
        {themes.map((t, index) => (
          <button
            key={t.id}
            ref={(el) => { buttonRefs.current[index] = el; }}
            onClick={() => setActive(t.id)}
            id={`theme-btn-${t.id}`}
            aria-pressed={active === t.id}
            title={t.tooltip}
            className={`theme-btn flex items-center gap-2.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all min-h-[44px] min-w-[120px] ${
              active === t.id ? "active" : ""
            }`}
          >
            <span
              className="w-3 h-3 rounded-full shrink-0 transition-all"
              style={{
                background: t.dot,
                boxShadow: active === t.id ? `0 0 10px ${t.dot}` : "none",
              }}
            />
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
