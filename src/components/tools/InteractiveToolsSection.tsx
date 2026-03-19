"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import LayerStack from "./LayerStack";
import StyleMixer from "./StyleMixer";
import LightingLab from "./LightingLab";
import CameraPresets from "./CameraPresets";
import TargetAnalyzer from "./TargetAnalyzer";
import FinalPromptGenerator from "./FinalPromptGenerator";
import { Layers, Palette, Sun, Camera, Scan, Sparkles, ChevronDown } from "lucide-react";

const toolTabs = [
  { id: "layers", label: "8-Layer Stack", icon: Layers, color: "#FFDE00" },
  { id: "style", label: "Style Mixer", icon: Palette, color: "#00F5FF" },
  { id: "lighting", label: "Lighting Lab", icon: Sun, color: "#BF00FF" },
  { id: "camera", label: "Camera Presets", icon: Camera, color: "#FFB000" },
  { id: "analyzer", label: "Target Analyzer", icon: Scan, color: "#FF006E" },
];

export default function InteractiveToolsSection() {
  const [activeTab, setActiveTab] = useState("layers");
  const containerRef = useRef<HTMLDivElement>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.querySelectorAll(".tool-tab"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.03, ease: "back.out(1.7)" }
      );
    }
  }, []);

  useEffect(() => {
    if (tabContentRef.current) {
      gsap.fromTo(tabContentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  const renderTool = () => {
    switch (activeTab) {
      case "layers":
        return <LayerStack />;
      case "style":
        return <StyleMixer />;
      case "lighting":
        return <LightingLab />;
      case "camera":
        return <CameraPresets />;
      case "analyzer":
        return <TargetAnalyzer />;
      default:
        return <LayerStack />;
    }
  };

  return (
    <section id="interactive-tools" className="py-16 px-4 bg-brutal-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid-light opacity-30" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-brutal-black border-4 border-brutal-yellow px-6 py-3 mb-6"
            style={{ boxShadow: "8px 8px 0 0 #FFDE00" }}>
            <Sparkles className="w-5 h-5 text-brutal-yellow" />
            <span className="text-xs font-bold text-brutal-yellow tracking-[0.15em] uppercase font-mono">
              Interactive Tool Suite
            </span>
          </div>
          <h2 className="headline-xl text-brutal-black mb-4">
            Build Your <span className="text-brutal-yellow">Perfect</span> Prompt
          </h2>
          <p className="text-brutal-gray max-w-2xl mx-auto">
            Use our interconnected tools to craft prompts layer by layer. Every selection updates the final output automatically.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Tool Tabs + Content */}
          <div ref={containerRef}>
            {/* Tool Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {toolTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tool-tab flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider border-2 transition-all ${
                    activeTab === tab.id
                      ? "text-brutal-black"
                      : "bg-brutal-cream text-brutal-gray border-brutal-gray/30 hover:border-brutal-black"
                  }`}
                  style={{
                    background: activeTab === tab.id ? tab.color : undefined,
                    borderColor: activeTab === tab.id ? "#0D0D0D" : undefined,
                    boxShadow: activeTab === tab.id ? `4px 4px 0 0 #0D0D0D` : "none"
                  }}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tool Content */}
            <div ref={tabContentRef}>
              {renderTool()}
            </div>
          </div>

          {/* Right: Final Prompt Generator */}
          <div>
            <FinalPromptGenerator />
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="mt-12 p-6 bg-brutal-black border-4 border-brutal-yellow"
          style={{ boxShadow: "12px 12px 0 0 #FFDE00" }}>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brutal-yellow mb-4">
            Tool Interconnection Flow
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            {[
              { label: "Layer Stack", color: "#FFDE00" },
              { label: "Style Mixer", color: "#00F5FF" },
              { label: "Lighting Lab", color: "#BF00FF" },
              { label: "Camera Presets", color: "#FFB000" },
              { label: "Target Analyzer", color: "#FF006E" },
              { label: "Final Prompt", color: "#00FF87" }
            ].map((item, i, arr) => (
              <div key={item.label} className="flex items-center gap-2">
                <span
                  className="px-3 py-2 text-brutal-black font-bold"
                  style={{ background: item.color }}
                >
                  {item.label}
                </span>
                {i < arr.length - 1 && (
                  <ChevronDown className="w-4 h-4 text-brutal-yellow rotate-[-90deg]" />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-brutal-gray text-xs mt-4">
            All tools share state — any selection updates the final prompt automatically
          </p>
        </div>
      </div>
    </section>
  );
}
