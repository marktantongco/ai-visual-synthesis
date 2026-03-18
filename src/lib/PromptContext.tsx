"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

// ─── TYPES ───────────────────────────────────────────────────────────────

export type AITool = 
  | "midjourney"
  | "dalle3"
  | "sdxl"
  | "flux"
  | "ideogram"
  | "seeddream"
  | "grok"
  | "gemini"
  | "chatgpt"
  | "llama"
  | "qwen"
  | "wanvideo";

export interface PromptLayer {
  subject: string;
  action: string;
  environment: string;
  lighting: string;
  camera: string;
  style: string;
  mood: string;
  technical: string;
}

export interface StyleMix {
  styleA: string;
  styleB: string;
  ratio: number; // 0.3 to 0.7
}

export interface LightingSetup {
  kelvin: number; // 1000 to 10000
  setup: string; // e.g., "3-point", "rembrandt", "butterfly"
}

export interface CameraSetup {
  focalLength: string;
  aperture: string;
  sensor: string;
}

export interface PromptState {
  // 8-Layer Stack
  layers: PromptLayer;
  
  // Style Mixer
  styleMix: StyleMix;
  
  // Lighting Lab
  lightingSetup: LightingSetup;
  
  // Camera Presets
  cameraSetup: CameraSetup;
  
  // Target Tool
  targetTool: AITool;
  
  // Free text input
  customText: string;
  
  // Generated prompt
  generatedPrompt: string;
}

interface PromptContextType {
  state: PromptState;
  updateLayers: (layers: Partial<PromptLayer>) => void;
  updateStyleMix: (mix: Partial<StyleMix>) => void;
  updateLightingSetup: (setup: Partial<LightingSetup>) => void;
  updateCameraSetup: (setup: Partial<CameraSetup>) => void;
  setTargetTool: (tool: AITool) => void;
  setCustomText: (text: string) => void;
  generatePrompt: () => string;
  resetAll: () => void;
  getToolSyntax: (tool: AITool, prompt: string) => string;
  analyzePrompt: (prompt: string) => { score: number; missing: string[] };
}

// ─── DEFAULT STATE ───────────────────────────────────────────────────────

const defaultState: PromptState = {
  layers: {
    subject: "",
    action: "",
    environment: "",
    lighting: "",
    camera: "",
    style: "",
    mood: "",
    technical: ""
  },
  styleMix: {
    styleA: "",
    styleB: "",
    ratio: 0.5
  },
  lightingSetup: {
    kelvin: 5500,
    setup: "3-point"
  },
  cameraSetup: {
    focalLength: "50mm",
    aperture: "f/1.8",
    sensor: "Full Frame"
  },
  targetTool: "midjourney",
  customText: "",
  generatedPrompt: ""
};

// ─── TOOL FORMATTING ─────────────────────────────────────────────────────

const toolFormats: Record<AITool, { prefix: string; suffix: string; format: (p: string) => string }> = {
  midjourney: {
    prefix: "/imagine ",
    suffix: " --v 6.1 --ar 16:9",
    format: (p) => `/imagine ${p} --v 6.1 --ar 16:9 --style raw`
  },
  dalle3: {
    prefix: "",
    suffix: "",
    format: (p) => `Create an image: ${p}`
  },
  sdxl: {
    prefix: "",
    suffix: "",
    format: (p) => `${p}, masterpiece, best quality, highly detailed`
  },
  flux: {
    prefix: "",
    suffix: "",
    format: (p) => p
  },
  ideogram: {
    prefix: "",
    suffix: "",
    format: (p) => `${p}, text clarity, high quality`
  },
  seeddream: {
    prefix: "",
    suffix: "",
    format: (p) => p
  },
  grok: {
    prefix: "",
    suffix: "",
    format: (p) => `Generate an image: ${p}`
  },
  gemini: {
    prefix: "",
    suffix: "",
    format: (p) => `Create an image of ${p}`
  },
  chatgpt: {
    prefix: "",
    suffix: "",
    format: (p) => `Generate an image: ${p}`
  },
  llama: {
    prefix: "",
    suffix: "",
    format: (p) => p
  },
  qwen: {
    prefix: "",
    suffix: "",
    format: (p) => p
  },
  wanvideo: {
    prefix: "",
    suffix: "",
    format: (p) => `${p}, cinematic, smooth motion`
  }
};

// ─── CONTEXT ─────────────────────────────────────────────────────────────

const PromptContext = createContext<PromptContextType | undefined>(undefined);

export function PromptProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PromptState>(defaultState);

  const updateLayers = useCallback((layers: Partial<PromptLayer>) => {
    setState(prev => ({
      ...prev,
      layers: { ...prev.layers, ...layers }
    }));
  }, []);

  const updateStyleMix = useCallback((mix: Partial<StyleMix>) => {
    setState(prev => ({
      ...prev,
      styleMix: { ...prev.styleMix, ...mix }
    }));
  }, []);

  const updateLightingSetup = useCallback((setup: Partial<LightingSetup>) => {
    setState(prev => ({
      ...prev,
      lightingSetup: { ...prev.lightingSetup, ...setup }
    }));
  }, []);

  const updateCameraSetup = useCallback((setup: Partial<CameraSetup>) => {
    setState(prev => ({
      ...prev,
      cameraSetup: { ...prev.cameraSetup, ...setup }
    }));
  }, []);

  const setTargetTool = useCallback((tool: AITool) => {
    setState(prev => ({ ...prev, targetTool: tool }));
  }, []);

  const setCustomText = useCallback((text: string) => {
    setState(prev => ({ ...prev, customText: text }));
  }, []);

  const generatePrompt = useCallback(() => {
    const { layers, styleMix, lightingSetup, cameraSetup, customText } = state;
    
    const parts: string[] = [];
    
    // Layer 1: Subject
    if (layers.subject) parts.push(layers.subject);
    
    // Layer 2: Action
    if (layers.action) parts.push(layers.action);
    
    // Layer 3: Environment
    if (layers.environment) parts.push(layers.environment);
    
    // Layer 4: Lighting
    if (layers.lighting) {
      parts.push(layers.lighting);
    } else if (lightingSetup.kelvin && lightingSetup.setup) {
      const kelvinDesc = getKelvinDescription(lightingSetup.kelvin);
      parts.push(`${lightingSetup.setup} lighting, ${kelvinDesc}`);
    }
    
    // Layer 5: Camera
    if (layers.camera) {
      parts.push(layers.camera);
    } else if (cameraSetup.focalLength) {
      parts.push(`${cameraSetup.focalLength} ${cameraSetup.aperture}, ${cameraSetup.sensor}`);
    }
    
    // Layer 6: Style
    if (layers.style) {
      parts.push(layers.style);
    } else if (styleMix.styleA && styleMix.styleB) {
      const dominant = styleMix.ratio >= 0.5 ? styleMix.styleA : styleMix.styleB;
      parts.push(`in the style of ${styleMix.styleA} meets ${styleMix.styleB}, ${Math.round(Math.abs(styleMix.ratio - 0.5) * 100)}% emphasis on ${dominant}`);
    }
    
    // Layer 7: Mood
    if (layers.mood) parts.push(layers.mood);
    
    // Layer 8: Technical
    if (layers.technical) parts.push(layers.technical);
    
    // Custom text
    if (customText) parts.push(customText);
    
    const prompt = parts.join(", ");
    return prompt;
  }, [state]);

  const getToolSyntax = useCallback((tool: AITool, prompt: string): string => {
    return toolFormats[tool].format(prompt);
  }, []);

  const analyzePrompt = useCallback((prompt: string): { score: number; missing: string[] } => {
    const requiredLayers = ["subject", "style", "lighting", "camera", "mood", "technical"];
    const missing: string[] = [];
    let score = 0;
    
    const promptLower = prompt.toLowerCase();
    
    // Check for subject (person, object, scene keywords)
    if (/\b(person|woman|man|child|portrait|figure|object|scene|landscape|building)\b/i.test(prompt)) {
      score += 17;
    } else {
      missing.push("Subject");
    }
    
    // Check for style
    if (/\b(photorealistic|cinematic|painting|anime|illustration|style|artistic)\b/i.test(prompt)) {
      score += 17;
    } else {
      missing.push("Style");
    }
    
    // Check for lighting
    if (/\b(light|lighting|golden hour|neon|softbox|backlit|rim|dramatic)\b/i.test(prompt)) {
      score += 17;
    } else {
      missing.push("Lighting");
    }
    
    // Check for camera/focal length
    if (/\b(\d+mm|f\/|aperture|dof|depth of field|wide|telephoto|lens)\b/i.test(prompt)) {
      score += 17;
    } else {
      missing.push("Camera");
    }
    
    // Check for mood
    if (/\b(mood|atmosphere|dramatic|epic|intimate|eerie|joyful|melancholic)\b/i.test(prompt)) {
      score += 16;
    } else {
      missing.push("Mood");
    }
    
    // Check for technical specs
    if (/\b(8k|4k|ultra|highly detailed|masterpiece|best quality|resolution)\b/i.test(prompt)) {
      score += 16;
    } else {
      missing.push("Technical Specs");
    }
    
    return { score, missing };
  }, []);

  const resetAll = useCallback(() => {
    setState(defaultState);
  }, []);

  return (
    <PromptContext.Provider value={{
      state,
      updateLayers,
      updateStyleMix,
      updateLightingSetup,
      updateCameraSetup,
      setTargetTool,
      setCustomText,
      generatePrompt,
      resetAll,
      getToolSyntax,
      analyzePrompt
    }}>
      {children}
    </PromptContext.Provider>
  );
}

export function usePrompt() {
  const context = useContext(PromptContext);
  if (context === undefined) {
    throw new Error("usePrompt must be used within a PromptProvider");
  }
  return context;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────

function getKelvinDescription(kelvin: number): string {
  if (kelvin < 2000) return "warm candlelight glow";
  if (kelvin < 3000) return "tungsten warm light";
  if (kelvin < 4000) return "warm golden hour";
  if (kelvin < 5000) return "soft warm daylight";
  if (kelvin < 6000) return "natural daylight";
  if (kelvin < 7000) return "cool daylight";
  if (kelvin < 8000) return "overcast cool light";
  if (kelvin < 9000) return "blue sky ambient";
  return "cool blue hour light";
}

export const AI_TOOLS: { id: AITool; name: string; type: string; color: string }[] = [
  { id: "midjourney", name: "Midjourney v6", type: "Image", color: "#FFDE00" },
  { id: "dalle3", name: "DALL·E 3", type: "Image", color: "#00A67E" },
  { id: "sdxl", name: "Stable Diffusion XL", type: "Image", color: "#FF6B35" },
  { id: "flux", name: "FLUX.1", type: "Image", color: "#00F5FF" },
  { id: "ideogram", name: "Ideogram 2", type: "Image+Text", color: "#BF00FF" },
  { id: "seeddream", name: "SeedDream 3.0", type: "Image", color: "#FF006E" },
  { id: "grok", name: "Grok (xAI)", type: "Text+Image", color: "#1DA1F2" },
  { id: "gemini", name: "Gemini 2.0 Flash", type: "Text+Image", color: "#4285F4" },
  { id: "chatgpt", name: "ChatGPT (GPT-4o)", type: "Text+Image", color: "#10A37F" },
  { id: "llama", name: "Meta Llama", type: "Text+Image", color: "#0081FB" },
  { id: "qwen", name: "Qwen VL", type: "Text+Image", color: "#FF4D4D" },
  { id: "wanvideo", name: "Wan Video", type: "Video", color: "#9333EA" }
];

export const STYLE_OPTIONS = [
  "Photorealistic", "Cinematic", "Oil Painting", "Watercolor", "Anime",
  "Cyberpunk", "Fantasy", "Minimalist", "Bauhaus", "Baroque",
  "Art Nouveau", "Wabi-sabi", "Impressionist", "Surrealist", "Pop Art"
];

export const LIGHTING_SETUPS = [
  "3-point", "Rembrandt", "Butterfly", "Loop", "Split", "Rim", "Backlit"
];

export const CAMERA_PRESETS = {
  focalLengths: ["14mm", "24mm", "35mm", "50mm", "85mm", "135mm", "200mm"],
  apertures: ["f/1.2", "f/1.8", "f/2.8", "f/5.6", "f/11"],
  sensors: ["Full Frame", "APS-C", "Medium Format"]
};
