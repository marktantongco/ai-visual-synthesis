"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrompt } from "@/lib/PromptContext";
import { CheckCircle, XCircle, AlertTriangle, RefreshCw } from "lucide-react";

interface AnalysisResult {
  layer: string;
  present: boolean;
  color: string;
}

export default function TargetAnalyzer() {
  const { generatePrompt, analyzePrompt } = usePrompt();
  const containerRef = useRef<HTMLDivElement>(null);
  const [prompt, setPrompt] = useState("");
  const [analysis, setAnalysis] = useState<{ score: number; missing: string[] } | null>(null);
  const [layerResults, setLayerResults] = useState<AnalysisResult[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, []);

  const analyze = () => {
    const textToAnalyze = prompt || generatePrompt();
    const result = analyzePrompt(textToAnalyze);
    setAnalysis(result);
    
    // Build layer results
    const layers = [
      { layer: "Subject", color: "#FFDE00" },
      { layer: "Style", color: "#00FF87" },
      { layer: "Lighting", color: "#BF00FF" },
      { layer: "Camera", color: "#FFB000" },
      { layer: "Mood", color: "#FF6B35" },
      { layer: "Technical Specs", color: "#1DA1F2" }
    ];
    
    setLayerResults(layers.map(l => ({
      ...l,
      present: !result.missing.includes(l.layer)
    })));
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "#00FF87";
    if (score >= 50) return "#FFDE00";
    return "#FF006E";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    return "Needs Work";
  };

  return (
    <div ref={containerRef} className="brutal-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-sm uppercase tracking-wider text-brutal-black">
          Target Analyzer
        </h3>
        <button
          onClick={analyze}
          className="p-2 bg-brutal-yellow border-2 border-brutal-black hover:bg-brutal-yellow-dark transition-colors"
          title="Analyze prompt"
        >
          <RefreshCw className="w-4 h-4 text-brutal-black" />
        </button>
      </div>

      {/* Prompt Input */}
      <div className="mb-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-brutal-gray mb-2">
          Prompt to Analyze
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Paste a prompt or use the generated one from above..."
          className="w-full p-3 bg-brutal-black text-brutal-cream border-2 border-brutal-yellow text-sm font-mono focus:outline-none focus:border-brutal-cyan resize-none"
          rows={3}
        />
        <button
          onClick={() => setPrompt(generatePrompt())}
          className="mt-2 text-xs font-bold uppercase tracking-wider text-brutal-yellow hover:text-brutal-yellow-dark"
        >
          Use Generated Prompt →
        </button>
      </div>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-4">
          {/* Score */}
          <div className="p-4 bg-brutal-black border-2 border-brutal-yellow text-center">
            <div
              className="text-5xl font-black font-display"
              style={{ color: getScoreColor(analysis.score) }}
            >
              {analysis.score}
            </div>
            <div className="text-xs text-brutal-gray uppercase tracking-widest mt-1">
              {getScoreLabel(analysis.score)} Quality Score
            </div>
          </div>

          {/* Layer Checklist */}
          <div className="grid grid-cols-2 gap-2">
            {layerResults.map((result) => (
              <div
                key={result.layer}
                className={`p-2 flex items-center gap-2 border-2 ${
                  result.present
                    ? "bg-brutal-cream border-brutal-black"
                    : "bg-brutal-red/10 border-brutal-red"
                }`}
              >
                {result.present ? (
                  <CheckCircle className="w-4 h-4" style={{ color: result.color }} />
                ) : (
                  <XCircle className="w-4 h-4 text-brutal-red" />
                )}
                <span className={`text-xs font-bold uppercase ${result.present ? "text-brutal-black" : "text-brutal-red"}`}>
                  {result.layer}
                </span>
              </div>
            ))}
          </div>

          {/* Missing Layers Warning */}
          {analysis.missing.length > 0 && (
            <div className="p-3 bg-brutal-yellow/20 border-2 border-brutal-yellow flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-brutal-black mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-brutal-black">
                  Missing: {analysis.missing.join(", ")}
                </p>
                <p className="text-[10px] text-brutal-gray-dark mt-1">
                  Add these elements to improve your prompt quality score.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
