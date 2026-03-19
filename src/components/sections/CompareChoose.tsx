"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Check, X, Minus, ArrowRight, Shuffle, Zap } from "lucide-react";
import { usePrompt, AI_TOOLS } from "@/lib/PromptContext";

interface ToolData {
  id: string;
  name: string;
  type: string;
  color: string;
  strength: string;
  bestUse: string;
  difficulty: string;
  promptStyle: string;
  pricing: string;
  free: boolean;
  apiAvailable: boolean;
  textInImage: boolean;
  videoCapable: boolean;
  localRuntime: boolean;
}

const toolsData: ToolData[] = [
  {
    id: "midjourney",
    name: "Midjourney v6",
    type: "Image",
    color: "#FFDE00",
    strength: "Aesthetic quality, artistic styles",
    bestUse: "Commercial art, concept design",
    difficulty: "Intermediate",
    promptStyle: "/imagine [prompt] --v 6 --ar 16:9",
    pricing: "$10-60/mo",
    free: false,
    apiAvailable: false,
    textInImage: false,
    videoCapable: false,
    localRuntime: false
  },
  {
    id: "dalle3",
    name: "DALL·E 3",
    type: "Image",
    color: "#00A67E",
    strength: "Prompt accuracy, text rendering",
    bestUse: "Marketing, presentations",
    difficulty: "Beginner",
    promptStyle: "Natural language description",
    pricing: "ChatGPT Plus $20/mo",
    free: false,
    apiAvailable: true,
    textInImage: true,
    videoCapable: false,
    localRuntime: false
  },
  {
    id: "sdxl",
    name: "Stable Diffusion XL",
    type: "Image",
    color: "#FF6B35",
    strength: "Full control, customization",
    bestUse: "Artists, developers, researchers",
    difficulty: "Advanced",
    promptStyle: "Tags with negative prompts",
    pricing: "Free (self-hosted)",
    free: true,
    apiAvailable: true,
    textInImage: false,
    videoCapable: false,
    localRuntime: true
  },
  {
    id: "flux",
    name: "FLUX.1",
    type: "Image",
    color: "#00F5FF",
    strength: "Photorealism, anatomy",
    bestUse: "Portraits, photorealistic art",
    difficulty: "Intermediate",
    promptStyle: "Natural language, concise",
    pricing: "Free / API",
    free: true,
    apiAvailable: true,
    textInImage: false,
    videoCapable: false,
    localRuntime: true
  },
  {
    id: "ideogram",
    name: "Ideogram 2",
    type: "Image+Text",
    color: "#BF00FF",
    strength: "Typography, text-in-image",
    bestUse: "Logos, posters, branding",
    difficulty: "Beginner",
    promptStyle: "Natural language with text",
    pricing: "Free tier / $8-20/mo",
    free: true,
    apiAvailable: true,
    textInImage: true,
    videoCapable: false,
    localRuntime: false
  },
  {
    id: "seeddream",
    name: "SeedDream 3.0",
    type: "Image",
    color: "#FF006E",
    strength: "Anime, Asian aesthetics",
    bestUse: "Anime art, illustration",
    difficulty: "Intermediate",
    promptStyle: "Bilingual prompts supported",
    pricing: "Free tier available",
    free: true,
    apiAvailable: false,
    textInImage: false,
    videoCapable: false,
    localRuntime: false
  },
  {
    id: "grok",
    name: "Grok (xAI)",
    type: "Text+Image",
    color: "#1DA1F2",
    strength: "Twitter/X integration, wit",
    bestUse: "Social media content",
    difficulty: "Beginner",
    promptStyle: "Conversational, casual",
    pricing: "X Premium $16/mo",
    free: false,
    apiAvailable: true,
    textInImage: false,
    videoCapable: false,
    localRuntime: false
  },
  {
    id: "gemini",
    name: "Gemini 2.0 Flash",
    type: "Text+Image",
    color: "#4285F4",
    strength: "Multimodal, long context",
    bestUse: "Research, documentation",
    difficulty: "Beginner",
    promptStyle: "Natural language, detailed",
    pricing: "Free tier / $20/mo",
    free: true,
    apiAvailable: true,
    textInImage: true,
    videoCapable: false,
    localRuntime: false
  },
  {
    id: "chatgpt",
    name: "ChatGPT (GPT-4o)",
    type: "Text+Image",
    color: "#10A37F",
    strength: "Versatile, conversational",
    bestUse: "General purpose, DALL·E 3 access",
    difficulty: "Beginner",
    promptStyle: "Natural conversation",
    pricing: "Free tier / $20/mo",
    free: true,
    apiAvailable: true,
    textInImage: true,
    videoCapable: false,
    localRuntime: false
  },
  {
    id: "llama",
    name: "Meta Llama",
    type: "Text+Image",
    color: "#0081FB",
    strength: "Open source, customizable",
    bestUse: "Developers, researchers",
    difficulty: "Advanced",
    promptStyle: "Natural language",
    pricing: "Free (open weights)",
    free: true,
    apiAvailable: true,
    textInImage: false,
    videoCapable: false,
    localRuntime: true
  },
  {
    id: "qwen",
    name: "Qwen VL",
    type: "Text+Image",
    color: "#FF4D4D",
    strength: "Multilingual, visual",
    bestUse: "International markets",
    difficulty: "Intermediate",
    promptStyle: "Multilingual prompts",
    pricing: "Free tier / API",
    free: true,
    apiAvailable: true,
    textInImage: false,
    videoCapable: false,
    localRuntime: true
  },
  {
    id: "wanvideo",
    name: "Wan Video",
    type: "Video",
    color: "#9333EA",
    strength: "Short video generation",
    bestUse: "Video clips, animations",
    difficulty: "Intermediate",
    promptStyle: "Cinematic descriptions",
    pricing: "Credits-based",
    free: false,
    apiAvailable: false,
    textInImage: false,
    videoCapable: true,
    localRuntime: false
  }
];

const filters = [
  { id: "all", label: "All Tools" },
  { id: "image", label: "Image" },
  { id: "video", label: "Video" },
  { id: "text+image", label: "Text+Image" },
  { id: "free", label: "Free Tier" },
  { id: "api", label: "API Available" }
];

export default function CompareChoose() {
  const [selected, setSelected] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const { setTargetTool } = usePrompt();

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.querySelectorAll(".compare-row"),
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.03, ease: "power2.out" }
      );
    }
  }, [activeFilter]);

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else if (selected.length < 4) {
      setSelected([...selected, id]);
    }
  };

  const filterTools = (tools: ToolData[]) => {
    switch (activeFilter) {
      case "image":
        return tools.filter(t => t.type === "Image" || t.type === "Image+Text");
      case "video":
        return tools.filter(t => t.videoCapable || t.type === "Video");
      case "text+image":
        return tools.filter(t => t.type === "Text+Image");
      case "free":
        return tools.filter(t => t.free);
      case "api":
        return tools.filter(t => t.apiAvailable);
      default:
        return tools;
    }
  };

  const filteredTools = filterTools(toolsData);
  const selectedTools = toolsData.filter(t => selected.includes(t.id));

  const handleUseTool = (toolId: string) => {
    setTargetTool(toolId as any);
    // Scroll to prompt builder
    document.querySelector("#prompt-builder")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="compare" className="py-16 px-4 bg-brutal-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid-light opacity-30" />

      <div ref={containerRef} className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-brutal-black border-4 border-brutal-yellow px-6 py-3 mb-6"
            style={{ boxShadow: "8px 8px 0 0 #FFDE00" }}>
            <Shuffle className="w-5 h-5 text-brutal-yellow" />
            <span className="text-xs font-bold text-brutal-yellow tracking-[0.15em] uppercase font-mono">
              Compare & Choose
            </span>
          </div>
          <h2 className="headline-xl text-brutal-black mb-4">
            Find Your <span className="text-brutal-yellow">Perfect</span> Tool
          </h2>
          <p className="text-brutal-gray max-w-2xl mx-auto">
            Select 2-4 tools to compare. See strengths, pricing, and features side-by-side.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-2 transition-all ${
                activeFilter === filter.id
                  ? "bg-brutal-yellow border-brutal-black text-brutal-black"
                  : "bg-brutal-cream border-brutal-gray/30 text-brutal-gray hover:border-brutal-black"
              }`}
              style={{ boxShadow: activeFilter === filter.id ? "4px 4px 0 0 #0D0D0D" : "none" }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Selection Counter */}
        <div className="flex items-center justify-between mb-4 p-3 bg-brutal-black text-brutal-cream">
          <span className="text-xs font-bold uppercase tracking-widest">
            Selected: {selected.length}/4
          </span>
          {selected.length > 0 && (
            <button
              onClick={() => setSelected([])}
              className="text-xs font-bold uppercase tracking-wider text-brutal-yellow hover:text-brutal-yellow-light"
            >
              Clear Selection
            </button>
          )}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {filteredTools.map((tool) => {
            const isSelected = selected.includes(tool.id);
            return (
              <button
                key={tool.id}
                onClick={() => toggleSelection(tool.id)}
                className={`compare-row p-3 text-left border-3 transition-all ${
                  isSelected
                    ? "text-brutal-black"
                    : "bg-brutal-cream border-brutal-black/20 text-brutal-black hover:border-brutal-black"
                }`}
                style={{
                  background: isSelected ? tool.color : undefined,
                  borderColor: isSelected ? "#0D0D0D" : undefined,
                  boxShadow: isSelected ? "6px 6px 0 0 #0D0D0D" : "none"
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="w-3 h-3 border-2"
                    style={{
                      borderColor: isSelected ? "#0D0D0D" : tool.color,
                      background: isSelected ? "#0D0D0D" : "transparent"
                    }}
                  />
                  <span className="text-[10px] font-mono uppercase">{tool.type}</span>
                </div>
                <h4 className="font-bold text-sm">{tool.name}</h4>
                <p className="text-[10px] mt-1 opacity-70">{tool.pricing}</p>
              </button>
            );
          })}
        </div>

        {/* Comparison Matrix */}
        {selectedTools.length >= 2 && (
          <div className="brutal-card overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-3 border-brutal-black">
                  <th className="p-3 text-left text-xs font-bold uppercase tracking-widest bg-brutal-gray/10">
                    Feature
                  </th>
                  {selectedTools.map((tool) => (
                    <th
                      key={tool.id}
                      className="p-3 text-left"
                      style={{ background: tool.color + "30" }}
                    >
                      <div className="font-bold text-sm">{tool.name}</div>
                      <div className="text-[10px] text-brutal-gray">{tool.type}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Best For", key: "bestUse" },
                  { label: "Strength", key: "strength" },
                  { label: "Difficulty", key: "difficulty" },
                  { label: "Prompt Style", key: "promptStyle" },
                  { label: "Pricing", key: "pricing" }
                ].map((row, i) => (
                  <tr key={row.key} className={i % 2 === 0 ? "bg-brutal-gray/5" : ""}>
                    <td className="p-3 text-xs font-bold uppercase tracking-wider text-brutal-gray">
                      {row.label}
                    </td>
                    {selectedTools.map((tool) => (
                      <td key={tool.id} className="p-3 text-sm">
                        {tool[row.key as keyof ToolData]}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Boolean features */}
                <tr className="bg-brutal-gray/5">
                  <td className="p-3 text-xs font-bold uppercase tracking-wider text-brutal-gray">
                    Free Tier
                  </td>
                  {selectedTools.map((tool) => (
                    <td key={tool.id} className="p-3">
                      {tool.free ? (
                        <Check className="w-5 h-5 text-brutal-green" />
                      ) : (
                        <X className="w-5 h-5 text-brutal-red" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 text-xs font-bold uppercase tracking-wider text-brutal-gray">
                    API Available
                  </td>
                  {selectedTools.map((tool) => (
                    <td key={tool.id} className="p-3">
                      {tool.apiAvailable ? (
                        <Check className="w-5 h-5 text-brutal-green" />
                      ) : (
                        <X className="w-5 h-5 text-brutal-red" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="bg-brutal-gray/5">
                  <td className="p-3 text-xs font-bold uppercase tracking-wider text-brutal-gray">
                    Text-in-Image
                  </td>
                  {selectedTools.map((tool) => (
                    <td key={tool.id} className="p-3">
                      {tool.textInImage ? (
                        <Check className="w-5 h-5 text-brutal-green" />
                      ) : (
                        <X className="w-5 h-5 text-brutal-red" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 text-xs font-bold uppercase tracking-wider text-brutal-gray">
                    Local Runtime
                  </td>
                  {selectedTools.map((tool) => (
                    <td key={tool.id} className="p-3">
                      {tool.localRuntime ? (
                        <Check className="w-5 h-5 text-brutal-green" />
                      ) : (
                        <X className="w-5 h-5 text-brutal-red" />
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            {/* Action Buttons */}
            <div className="p-4 border-t-3 border-brutal-black flex flex-wrap gap-2 justify-center">
              {selectedTools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => handleUseTool(tool.id)}
                  className="flex items-center gap-2 px-4 py-2 font-bold text-sm uppercase tracking-wide border-2 transition-all"
                  style={{
                    background: tool.color,
                    borderColor: "#0D0D0D",
                    boxShadow: "4px 4px 0 0 #0D0D0D"
                  }}
                >
                  <Zap className="w-4 h-4" />
                  Use {tool.name.split(" ")[0]}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {selectedTools.length < 2 && (
          <div className="text-center p-8 border-2 border-dashed border-brutal-gray/30 text-brutal-gray">
            <p className="text-sm">
              Select at least 2 tools above to compare their features
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
