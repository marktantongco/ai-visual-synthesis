"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrompt, STYLE_OPTIONS } from "@/lib/PromptContext";
import { Shuffle } from "lucide-react";

export default function StyleMixer() {
  const { state, updateStyleMix } = usePrompt();
  const containerRef = useRef<HTMLDivElement>(null);
  const [styleA, setStyleA] = useState(state.styleMix.styleA);
  const [styleB, setStyleB] = useState(state.styleMix.styleB);
  const [ratio, setRatio] = useState(state.styleMix.ratio);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    updateStyleMix({ styleA, styleB, ratio });
  }, [styleA, styleB, ratio, updateStyleMix]);

  const dominantStyle = ratio >= 0.5 ? styleA : styleB;
  const emphasis = Math.round(Math.abs(ratio - 0.5) * 100);

  const randomize = () => {
    const randomA = STYLE_OPTIONS[Math.floor(Math.random() * STYLE_OPTIONS.length)];
    let randomB = STYLE_OPTIONS[Math.floor(Math.random() * STYLE_OPTIONS.length)];
    while (randomB === randomA) {
      randomB = STYLE_OPTIONS[Math.floor(Math.random() * STYLE_OPTIONS.length)];
    }
    setStyleA(randomA);
    setStyleB(randomB);
    setRatio(Math.random() * 0.4 + 0.3); // 0.3 to 0.7
  };

  return (
    <div ref={containerRef} className="brutal-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-sm uppercase tracking-wider text-brutal-black">
          Style Mixer
        </h3>
        <button
          onClick={randomize}
          className="p-2 bg-brutal-yellow border-2 border-brutal-black hover:bg-brutal-yellow-dark transition-colors"
          title="Randomize styles"
        >
          <Shuffle className="w-4 h-4 text-brutal-black" />
        </button>
      </div>

      {/* Style Selectors */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brutal-gray mb-1">
            Style A
          </label>
          <select
            value={styleA}
            onChange={(e) => setStyleA(e.target.value)}
            className="w-full p-2 bg-brutal-black text-brutal-cream border-2 border-brutal-yellow text-sm focus:outline-none"
          >
            <option value="">Select...</option>
            {STYLE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brutal-gray mb-1">
            Style B
          </label>
          <select
            value={styleB}
            onChange={(e) => setStyleB(e.target.value)}
            className="w-full p-2 bg-brutal-black text-brutal-cream border-2 border-brutal-cyan text-sm focus:outline-none"
          >
            <option value="">Select...</option>
            {STYLE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Blend Ratio Slider */}
      <div className="mb-4">
        <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-brutal-gray mb-2">
          <span>{styleA || "Style A"}</span>
          <span>{Math.round(ratio * 100)}% / {Math.round((1 - ratio) * 100)}%</span>
          <span>{styleB || "Style B"}</span>
        </div>
        <input
          type="range"
          min="30"
          max="70"
          value={ratio * 100}
          onChange={(e) => setRatio(parseInt(e.target.value) / 100)}
          className="w-full h-2 bg-brutal-gray/20 appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #FFDE00 ${ratio * 100}%, #00F5FF ${ratio * 100}%)`
          }}
        />
      </div>

      {/* Output Preview */}
      {styleA && styleB && (
        <div className="p-3 bg-brutal-black border-2 border-brutal-yellow">
          <p className="text-xs text-brutal-gray mb-1 uppercase tracking-wider">Output Fragment:</p>
          <p className="text-sm text-brutal-cream font-mono">
            in the style of <span className="text-brutal-yellow">{styleA}</span> meets{" "}
            <span className="text-brutal-cyan">{styleB}</span>, {emphasis}% emphasis on{" "}
            <span className="text-brutal-yellow">{dominantStyle}</span>
          </p>
        </div>
      )}
    </div>
  );
}
