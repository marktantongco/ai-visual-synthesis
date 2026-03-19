"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrompt, LIGHTING_SETUPS } from "@/lib/PromptContext";
import { Sun, Moon, CloudSun, Flame } from "lucide-react";

// Kelvin color mapping
const kelvinColors: Record<number, string> = {
  1000: "#FF7A00",
  2000: "#FF9500",
  3000: "#FFB347",
  4000: "#FFD580",
  5000: "#FFF4E0",
  5500: "#FFFFFF",
  6000: "#F5F6FF",
  7000: "#D4E4FF",
  8000: "#B0D4FF",
  9000: "#8BC4FF",
  10000: "#6BB3FF"
};

const kelvinLabels: Record<number, { label: string; icon: React.ReactNode }> = {
  1000: { label: "Candlelight", icon: <Flame className="w-4 h-4" /> },
  2000: { label: "Tungsten", icon: <Sun className="w-4 h-4" /> },
  3000: { label: "Warm White", icon: <Sun className="w-4 h-4" /> },
  4000: { label: "Cool White", icon: <Sun className="w-4 h-4" /> },
  5500: { label: "Daylight", icon: <Sun className="w-4 h-4" /> },
  7000: { label: "Overcast", icon: <CloudSun className="w-4 h-4" /> },
  9000: { label: "Blue Sky", icon: <Moon className="w-4 h-4" /> },
};

export default function LightingLab() {
  const { state, updateLightingSetup } = usePrompt();
  const containerRef = useRef<HTMLDivElement>(null);
  const [kelvin, setKelvin] = useState(state.lightingSetup.kelvin);
  const [setup, setSetup] = useState(state.lightingSetup.setup);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    updateLightingSetup({ kelvin, setup });
  }, [kelvin, setup, updateLightingSetup]);

  // Find closest kelvin for color
  const getKelvinColor = (k: number) => {
    const keys = Object.keys(kelvinColors).map(Number).sort((a, b) => a - b);
    for (let i = 0; i < keys.length - 1; i++) {
      if (k >= keys[i] && k <= keys[i + 1]) {
        return kelvinColors[keys[i]];
      }
    }
    return kelvinColors[5500];
  };

  const getKelvinLabel = (k: number) => {
    const closest = Object.keys(kelvinLabels).map(Number).reduce((prev, curr) => 
      Math.abs(curr - k) < Math.abs(prev - k) ? curr : prev
    );
    return kelvinLabels[closest];
  };

  const currentColor = getKelvinColor(kelvin);
  const currentLabel = getKelvinLabel(kelvin);

  const getKelvinDescription = (k: number): string => {
    if (k < 2000) return "warm candlelight glow";
    if (k < 3000) return "tungsten warm light";
    if (k < 4000) return "warm golden hour";
    if (k < 5000) return "soft warm daylight";
    if (k < 6000) return "natural daylight";
    if (k < 7000) return "cool daylight";
    if (k < 8000) return "overcast cool light";
    if (k < 9000) return "blue sky ambient";
    return "cool blue hour light";
  };

  return (
    <div ref={containerRef} className="brutal-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-sm uppercase tracking-wider text-brutal-black">
          Lighting Lab
        </h3>
        <div
          className="w-10 h-10 border-2 border-brutal-black flex items-center justify-center"
          style={{ background: currentColor }}
          title={`${kelvin}K`}
        >
          {currentLabel?.icon}
        </div>
      </div>

      {/* Kelvin Slider */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brutal-gray">
            Color Temperature
          </span>
          <span className="text-sm font-mono font-bold text-brutal-black">
            {kelvin}K
          </span>
        </div>
        
        {/* Visual Kelvin Gradient */}
        <div className="h-8 mb-2 relative overflow-hidden border-2 border-brutal-black"
          style={{
            background: "linear-gradient(to right, #FF7A00, #FF9500, #FFB347, #FFD580, #FFF4E0, #FFFFFF, #F5F6FF, #D4E4FF, #B0D4FF, #8BC4FF, #6BB3FF)"
          }}
        >
          <div
            className="absolute top-0 bottom-0 w-1 bg-brutal-black transition-all duration-150"
            style={{ left: `${((kelvin - 1000) / 9000) * 100}%` }}
          />
        </div>
        
        <input
          type="range"
          min="1000"
          max="10000"
          step="100"
          value={kelvin}
          onChange={(e) => setKelvin(parseInt(e.target.value))}
          className="w-full h-2 bg-brutal-gray/20 appearance-none cursor-pointer"
        />
        
        <div className="flex justify-between mt-1">
          <span className="text-[10px] font-mono text-brutal-gray">1000K</span>
          <span className="text-[10px] font-mono text-brutal-gray">{currentLabel?.label}</span>
          <span className="text-[10px] font-mono text-brutal-gray">10000K</span>
        </div>
      </div>

      {/* Lighting Setup */}
      <div className="mb-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-brutal-gray mb-2">
          Lighting Setup
        </label>
        <div className="grid grid-cols-2 gap-1">
          {LIGHTING_SETUPS.map((s) => (
            <button
              key={s}
              onClick={() => setSetup(s)}
              className={`p-2 text-xs font-bold uppercase tracking-wider border-2 transition-all ${
                setup === s
                  ? "bg-brutal-yellow border-brutal-black text-brutal-black"
                  : "bg-brutal-cream border-brutal-gray/30 text-brutal-gray hover:border-brutal-black"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Output Preview */}
      <div className="p-3 bg-brutal-black border-2 border-brutal-yellow">
        <p className="text-xs text-brutal-gray mb-1 uppercase tracking-wider">Output Fragment:</p>
        <p className="text-sm text-brutal-cream font-mono">
          lit by <span className="text-brutal-yellow">{setup}</span> setup,{" "}
          <span className="text-brutal-cyan">{getKelvinDescription(kelvin)}</span> ({kelvin}K)
        </p>
      </div>
    </div>
  );
}
