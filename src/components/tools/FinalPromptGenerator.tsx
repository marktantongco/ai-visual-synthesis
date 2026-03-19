"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrompt, AI_TOOLS, AITool } from "@/lib/PromptContext";
import { Copy, Share2, RotateCcw, Sparkles, Check, Download } from "lucide-react";

export default function FinalPromptGenerator() {
  const { 
    state, 
    generatePrompt, 
    getToolSyntax, 
    setTargetTool, 
    setCustomText, 
    resetAll 
  } = usePrompt();
  const containerRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const [finalPrompt, setFinalPrompt] = useState("");
  const [formattedPrompt, setFormattedPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    const raw = generatePrompt();
    setFinalPrompt(raw);
    setFormattedPrompt(getToolSyntax(state.targetTool, raw));
    setCharCount(raw.length);
  }, [state, generatePrompt, getToolSyntax]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(formattedPrompt);
    setCopied(true);
    
    if (outputRef.current) {
      gsap.to(outputRef.current, {
        scale: 1.02,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
    
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "AI Prompt",
          text: formattedPrompt
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      handleCopy();
    }
  };

  const handleDownload = () => {
    const blob = new Blob([formattedPrompt], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-prompt.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const selectedTool = AI_TOOLS.find(t => t.id === state.targetTool);

  return (
    <div ref={containerRef} className="brutal-card-dark p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-brutal-yellow flex items-center justify-center"
            style={{ boxShadow: "4px 4px 0 0 #0D0D0D" }}>
            <Sparkles className="w-6 h-6 text-brutal-black" />
          </div>
          <div>
            <h3 className="text-xl font-black text-brutal-cream uppercase tracking-wider">
              Final Prompt
            </h3>
            <p className="text-xs text-brutal-gray uppercase tracking-widest">
              Ready to use
            </p>
          </div>
        </div>
      </div>

      {/* Target Tool Selector */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-widest text-brutal-gray mb-3">
          Target AI Tool
        </label>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {AI_TOOLS.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setTargetTool(tool.id)}
              className={`p-2 text-xs font-bold border-2 transition-all ${
                state.targetTool === tool.id
                  ? "text-brutal-black"
                  : "bg-brutal-black-light text-brutal-gray border-brutal-gray/30 hover:border-brutal-yellow"
              }`}
              style={{
                background: state.targetTool === tool.id ? tool.color : undefined,
                borderColor: state.targetTool === tool.id ? "#0D0D0D" : undefined,
                borderLeftWidth: state.targetTool === tool.id ? "4px" : "2px",
                borderLeftColor: state.targetTool === tool.id ? "#0D0D0D" : tool.color
              }}
            >
              {tool.name}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Text Input */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-widest text-brutal-gray mb-2">
          Additional Instructions (Optional)
        </label>
        <input
          type="text"
          value={state.customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Add any extra details..."
          className="w-full p-3 bg-brutal-black text-brutal-cream border-2 border-brutal-yellow text-sm font-mono focus:outline-none focus:border-brutal-cyan"
        />
      </div>

      {/* Output */}
      <div
        ref={outputRef}
        className="relative p-4 bg-brutal-black border-4 mb-4"
        style={{ borderColor: selectedTool?.color || "#FFDE00", boxShadow: `8px 8px 0 0 ${selectedTool?.color || "#FFDE00"}` }}
      >
        {/* Tool Badge */}
        <div className="absolute -top-3 left-4 px-3 py-1 text-xs font-bold uppercase"
          style={{ background: selectedTool?.color, color: "#0D0D0D" }}>
          {selectedTool?.name}
        </div>

        {/* Character Count */}
        <div className="absolute top-2 right-2 text-xs font-mono text-brutal-gray">
          {charCount} chars
        </div>

        {/* Prompt Text */}
        <div className="mt-4 mb-4">
          {formattedPrompt ? (
            <p className="text-base text-brutal-cream font-mono leading-relaxed whitespace-pre-wrap">
              {formattedPrompt}
            </p>
          ) : (
            <p className="text-brutal-gray italic text-sm">
              Build your prompt using the tools above...
            </p>
          )}
        </div>

        {/* Syntax Hint */}
        {state.targetTool === "midjourney" && (
          <div className="text-[10px] text-brutal-gray mt-2 pt-2 border-t border-brutal-gray/20">
            Format: /imagine [prompt] --v 6.1 --ar 16:9 --style raw
          </div>
        )}
        {state.targetTool === "sdxl" && (
          <div className="text-[10px] text-brutal-gray mt-2 pt-2 border-t border-brutal-gray/20">
            Format: [prompt], masterpiece, best quality, highly detailed
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleCopy}
          disabled={!formattedPrompt}
          className={`flex-1 flex items-center justify-center gap-2 p-4 font-bold text-sm uppercase tracking-wide transition-all ${
            formattedPrompt
              ? "bg-brutal-yellow text-brutal-black hover:bg-brutal-yellow-dark"
              : "bg-brutal-gray/20 text-brutal-gray cursor-not-allowed"
          }`}
          style={{ boxShadow: formattedPrompt ? "4px 4px 0 0 #0D0D0D" : "none" }}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              Copy Prompt
            </>
          )}
        </button>

        <button
          onClick={handleShare}
          disabled={!formattedPrompt}
          className="p-4 bg-brutal-black-light border-2 border-brutal-yellow text-brutal-yellow hover:bg-brutal-yellow hover:text-brutal-black transition-all"
          title="Share prompt"
        >
          <Share2 className="w-5 h-5" />
        </button>

        <button
          onClick={handleDownload}
          disabled={!formattedPrompt}
          className="p-4 bg-brutal-black-light border-2 border-brutal-cyan text-brutal-cyan hover:bg-brutal-cyan hover:text-brutal-black transition-all"
          title="Download as .txt"
        >
          <Download className="w-5 h-5" />
        </button>

        <button
          onClick={resetAll}
          className="p-4 bg-brutal-red border-2 border-brutal-black text-white hover:bg-brutal-red-light transition-all"
          title="Reset all"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
