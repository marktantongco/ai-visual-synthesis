"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const themes = [
  { id: "neon",    label: "Neon",    dot: "#4DFFFF" },
  { id: "minimal", label: "Violet",  dot: "#7B5CFF" },
  { id: "glass",   label: "Magenta", dot: "#FF4FD8" },
  { id: "amber",   label: "Amber",   dot: "#FFB000" },
] as const;

type ThemeId = typeof themes[number]["id"];

export default function ThemeSwitcher() {
  const [active, setActive] = useState<ThemeId>("neon");

  useEffect(() => {
    const root = document.documentElement;
    if (active === "neon") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", active);
    }
  }, [active]);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      aria-label="Live theme switcher"
    >
      <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1 text-right">
        Theme
      </div>
      <div className="glass rounded-2xl border border-white/10 p-1.5 flex flex-col gap-1">
        {themes.map((t) => (
          <motion.button
            key={t.id}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActive(t.id)}
            id={`theme-btn-${t.id}`}
            aria-pressed={active === t.id}
            className={`theme-btn flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              active === t.id ? "active" : ""
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0 transition-all"
              style={{
                background: t.dot,
                boxShadow: active === t.id ? `0 0 8px ${t.dot}` : "none",
              }}
            />
            {t.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
