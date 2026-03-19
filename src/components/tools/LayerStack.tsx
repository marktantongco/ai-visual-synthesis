"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrompt } from "@/lib/PromptContext";
import { cn } from "@/lib/utils";

// ─── LAYER CONFIG ─────────────────────────────────────────────────────────

const layerConfig = [
  {
    id: "subject",
    label: "Subject",
    color: "#FFDE00",
    presets: ["a woman", "a man", "a child", "a warrior", "a scientist", "an artist", "a robot", "an animal", "a landscape", "a building"],
    placeholder: "e.g., a young woman with flowing hair"
  },
  {
    id: "action",
    label: "Action / Pose",
    color: "#FF006E",
    presets: ["standing", "walking", "running", "sitting", "floating", "dancing", "looking up", "glancing back", "in motion", "at rest"],
    placeholder: "e.g., walking through a misty forest"
  },
  {
    id: "environment",
    label: "Environment",
    color: "#00F5FF",
    presets: ["studio", "urban street", "forest", "beach", "mountains", "desert", "space", "underwater", "ancient ruins", "futuristic city"],
    placeholder: "e.g., neon-lit cyberpunk street at night"
  },
  {
    id: "lighting",
    label: "Lighting",
    color: "#BF00FF",
    presets: ["golden hour", "blue hour", "neon rim", "softbox", "dramatic side", "backlit", "candlelight", "moonlight", "studio ring", "natural window"],
    placeholder: "e.g., dramatic Rembrandt lighting from left"
  },
  {
    id: "camera",
    label: "Camera",
    color: "#FFB000",
    presets: ["35mm wide", "50mm portrait", "85mm telephoto", "135mm tight", "24mm ultra-wide", "macro close-up", "aerial drone", "low angle", "high angle", "Dutch angle"],
    placeholder: "e.g., 85mm f/1.4 shallow depth of field"
  },
  {
    id: "style",
    label: "Style",
    color: "#00FF87",
    presets: ["photorealistic", "cinematic", "oil painting", "watercolor", "anime", "cyberpunk", "fantasy art", "minimalist", "film noir", "editorial"],
    placeholder: "e.g., cinematic film still, Kodak Portra 400"
  },
  {
    id: "mood",
    label: "Mood / Atmosphere",
    color: "#FF6B35",
    presets: ["epic", "intimate", "mysterious", "joyful", "melancholic", "tense", "peaceful", "dramatic", "romantic", "dark"],
    placeholder: "e.g., mysterious and contemplative"
  },
  {
    id: "technical",
    label: "Technical Specs",
    color: "#1DA1F2",
    presets: ["8K ultra-detailed", "4K high resolution", "masterpiece quality", "HDR", "film grain", "sharp focus", "bokeh", "ray-traced", "octane render", "unreal engine"],
    placeholder: "e.g., 8K, ultra-detailed, sharp focus"
  }
];

// ─── LAYER COMPONENT ──────────────────────────────────────────────────────

function LayerCard({
  layer,
  value,
  onChange,
  index,
  isActive,
  onToggle
}: {
  layer: typeof layerConfig[0];
  value: string;
  onChange: (val: string) => void;
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [customInput, setCustomInput] = useState(value);
  const [showCustom, setShowCustom] = useState(false);

  useEffect(() => {
    setCustomInput(value);
  }, [value]);

  useEffect(() => {
    if (cardRef.current && isActive) {
      gsap.fromTo(cardRef.current.querySelectorAll(".preset-chip"),
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.2, stagger: 0.02, ease: "back.out(1.7)" }
      );
    }
  }, [isActive]);

  const handlePresetClick = (preset: string) => {
    onChange(preset);
    setCustomInput(preset);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "brutal-card relative transition-all duration-200",
        isActive && "ring-2 ring-offset-2"
      )}
      style={{
        borderLeftWidth: "6px",
        borderLeftColor: layer.color
      }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full p-3 flex items-center justify-between text-left hover:bg-brutal-cream-dark transition-colors"
      >
        <div className="flex items-center gap-3">
          <span
            className="w-8 h-8 flex items-center justify-center text-sm font-black font-mono"
            style={{ background: layer.color, color: "#0D0D0D" }}
          >
            {index + 1}
          </span>
          <div>
            <h4 className="font-bold text-brutal-black uppercase text-sm tracking-wider">
              {layer.label}
            </h4>
            {value && (
              <p className="text-xs text-brutal-gray truncate max-w-[180px]">
                {value}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {value && (
            <span
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: layer.color }}
            />
          )}
          <svg
            className={cn(
              "w-5 h-5 text-brutal-gray transition-transform duration-200",
              isActive && "rotate-180"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expanded Content */}
      {isActive && (
        <div className="p-3 pt-0 border-t-2 border-brutal-black/10">
          {/* Preset Chips */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {layer.presets.map((preset) => (
              <button
                key={preset}
                onClick={() => handlePresetClick(preset)}
                className={cn(
                  "preset-chip px-2.5 py-1 text-xs font-medium uppercase tracking-wide transition-all",
                  value === preset
                    ? "text-brutal-black"
                    : "bg-brutal-gray/10 text-brutal-gray-dark hover:bg-brutal-gray/20"
                )}
                style={{
                  background: value === preset ? layer.color : undefined,
                  border: `2px solid ${layer.color}`,
                }}
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Custom Input Toggle */}
          <button
            onClick={() => setShowCustom(!showCustom)}
            className="text-xs font-bold uppercase tracking-wider text-brutal-gray hover:text-brutal-black mb-2"
          >
            {showCustom ? "← Back to presets" : "+ Custom input"}
          </button>

          {/* Custom Input */}
          {showCustom && (
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onBlur={() => onChange(customInput)}
              onKeyDown={(e) => e.key === "Enter" && onChange(customInput)}
              placeholder={layer.placeholder}
              className="w-full p-2 text-sm border-2 border-brutal-black bg-brutal-cream-light focus:outline-none focus:border-brutal-yellow"
              style={{ borderLeftColor: layer.color, borderLeftWidth: "4px" }}
            />
          )}
        </div>
      )}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────

export default function LayerStack() {
  const { state, updateLayers } = usePrompt();
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.querySelectorAll(".layer-card"),
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, []);

  const handleLayerChange = (layerId: string, value: string) => {
    updateLayers({ [layerId]: value });
  };

  const filledLayers = Object.values(state.layers).filter(Boolean).length;

  return (
    <div ref={containerRef} className="space-y-2">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-4 p-3 bg-brutal-black text-brutal-cream">
        <span className="text-xs font-bold uppercase tracking-widest">
          Layer Stack
        </span>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {layerConfig.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-4 h-1.5 transition-colors",
                  Object.values(state.layers)[i] ? "bg-brutal-yellow" : "bg-brutal-gray/30"
                )}
              />
            ))}
          </div>
          <span className="text-xs font-mono">
            {filledLayers}/8
          </span>
        </div>
      </div>

      {/* Layers */}
      {layerConfig.map((layer, index) => (
        <div key={layer.id} className="layer-card">
          <LayerCard
            layer={layer}
            value={state.layers[layer.id as keyof typeof state.layers]}
            onChange={(val) => handleLayerChange(layer.id, val)}
            index={index}
            isActive={activeLayer === layer.id}
            onToggle={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
          />
        </div>
      ))}

      {/* Quick Actions */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => {
            layerConfig.forEach((layer) => {
              const randomPreset = layer.presets[Math.floor(Math.random() * layer.presets.length)];
              handleLayerChange(layer.id, randomPreset);
            });
          }}
          className="flex-1 p-3 bg-brutal-yellow border-2 border-brutal-black text-brutal-black text-xs font-bold uppercase tracking-wider hover:bg-brutal-yellow-light transition-colors"
        >
          🎲 Random Fill
        </button>
        <button
          onClick={() => {
            layerConfig.forEach((layer) => handleLayerChange(layer.id, ""));
            setActiveLayer(null);
          }}
          className="flex-1 p-3 bg-brutal-gray/10 border-2 border-brutal-black text-brutal-black text-xs font-bold uppercase tracking-wider hover:bg-brutal-gray/20 transition-colors"
        >
          ✕ Clear All
        </button>
      </div>
    </div>
  );
}
