"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Layers, Grid3X3, Zap, Layout, Palette, Code, MousePointer2, Layers3, X, ChevronRight, ChevronDown, Plus, Minus, RotateCcw } from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────
interface Concept {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillNode {
  id: string;
  name: string;
  x: number;
  y: number;
  connections: string[];
  category: "foundation" | "technical" | "creative" | "advanced";
}

interface MiniApp {
  id: string;
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

interface SearchResult {
  id: string;
  title: string;
  category: string;
  snippet: string;
}

// ─── Theme Config ───────────────────────────────────────────────
const themes = {
  neon: {
    name: "Neon",
    bg: "#0B0D10",
    surface: "rgba(20, 22, 26, 0.8)",
    border: "#14161A",
    accent: "#4DFFFF",
    accent2: "#FF4FD8",
    accent3: "#7B5CFF",
    glow: "0 0 30px rgba(77, 255, 255, 0.3)",
    text: "#FFFFFF",
    textSecondary: "#A1A1AA",
  },
  minimal: {
    name: "Minimal",
    bg: "#FAFAFA",
    surface: "#FFFFFF",
    border: "#E5E5E5",
    accent: "#0A0A0A",
    accent2: "#525252",
    accent3: "#737373",
    glow: "none",
    text: "#0A0A0A",
    textSecondary: "#525252",
  },
  glass: {
    name: "Glass",
    bg: "#0D0718",
    surface: "rgba(255, 255, 255, 0.07)",
    border: "rgba(255, 79, 216, 0.15)",
    accent: "#FF4FD8",
    accent2: "#7B5CFF",
    accent3: "#4DFFFF",
    glow: "0 0 30px rgba(255, 79, 216, 0.2)",
    text: "#FFFFFF",
    textSecondary: "#A1A1AA",
  },
};

type ThemeName = keyof typeof themes;

// ─── Dolphin Mode Concepts ────────────────────────────────────
const dolphinConcepts: Concept[] = [
  {
    id: 1,
    title: "Scroll as Navigation",
    description: "Sections animate like chapters — each scroll triggers cinematic transitions",
    icon: <Layers className="w-6 h-6" />,
    color: "#4DFFFF",
  },
  {
    id: 2,
    title: "Skill Map Interface",
    description: "Interactive node graph — hover reveals connections, click expands details",
    icon: <Grid3X3 className="w-6 h-6" />,
    color: "#7B5CFF",
  },
  {
    id: 3,
    title: "AI-Assisted UI",
    description: "User types and interface rearranges — natural language controls layout",
    icon: <Sparkles className="w-6 h-6" />,
    color: "#FF4FD8",
  },
  {
    id: 4,
    title: "Card Micro-Apps",
    description: "Each card opens a mini tool — calculators, generators, converters",
    icon: <Layout className="w-6 h-6" />,
    color: "#FFB000",
  },
  {
    id: 5,
    title: "Data Storytelling",
    description: "Charts animate on scroll — numbers tell stories as you explore",
    icon: <Zap className="w-6 h-6" />,
    color: "#4DFFFF",
  },
  {
    id: 6,
    title: "Gesture-First Mobile",
    description: "Swipe instead of menus — natural touch gestures navigate everything",
    icon: <MousePointer2 className="w-6 h-6" />,
    color: "#7B5CFF",
  },
  {
    id: 7,
    title: "AI Search Panel",
    description: "Natural language search — ask questions, get instant visual answers",
    icon: <Search className="w-6 h-6" />,
    color: "#FF4FD8",
  },
  {
    id: 8,
    title: "Live Theme Switcher",
    description: "Neon / Minimal / Glass — instant transformation with preserved state",
    icon: <Palette className="w-6 h-6" />,
    color: "#FFB000",
  },
  {
    id: 9,
    title: "Canvas Mode",
    description: "Drag, drop, resize — manipulate elements visually on infinite canvas",
    icon: <Layers3 className="w-6 h-6" />,
    color: "#4DFFFF",
  },
  {
    id: 10,
    title: "Interactive Infographic",
    description: "Site as moving data — every element responds to user attention",
    icon: <Code className="w-6 h-6" />,
    color: "#7B5CFF",
  },
];

// ─── Skill Nodes ─────────────────────────────────────────────
const skillNodes: SkillNode[] = [
  { id: "role", name: "Role", x: 50, y: 15, connections: ["context", "objective"], category: "foundation" },
  { id: "context", name: "Context", x: 30, y: 35, connections: ["role", "objective"], category: "foundation" },
  { id: "objective", name: "Objective", x: 70, y: 35, connections: ["role", "constraints"], category: "foundation" },
  { id: "constraints", name: "Constraints", x: 50, y: 55, connections: ["objective", "aesthetic"], category: "technical" },
  { id: "aesthetic", name: "Aesthetic", x: 25, y: 70, connections: ["constraints", "planning"], category: "creative" },
  { id: "planning", name: "Planning", x: 50, y: 75, connections: ["aesthetic", "output"], category: "technical" },
  { id: "output", name: "Output", x: 75, y: 70, connections: ["planning", "refinement"], category: "technical" },
  { id: "refinement", name: "Refinement", x: 50, y: 90, connections: ["output"], category: "advanced" },
];

// ─── Mini Apps Data ──────────────────────────────────────────
const miniApps: MiniApp[] = [
  {
    id: "prompt",
    title: "Prompt Builder",
    icon: <Code className="w-5 h-5" />,
    component: <PromptBuilderMiniApp />,
  },
  {
    id: "color",
    title: "Color Mixer",
    icon: <Palette className="w-5 h-5" />,
    component: <ColorMixerMiniApp />,
  },
  {
    id: "timer",
    title: "Timer",
    icon: <Zap className="w-5 h-5" />,
    component: <TimerMiniApp />,
  },
  {
    id: "converter",
    title: "Unit Converter",
    icon: <Layers className="w-5 h-5" />,
    component: <ConverterMiniApp />,
  },
];

// ─── Mini App Components ──────────────────────────────────────
function PromptBuilderMiniApp() {
  const [subject, setSubject] = useState("");
  const [style, setStyle] = useState("");
  const [lighting, setLighting] = useState("");

  return (
    <div className="p-4 space-y-4">
      <input
        type="text"
        placeholder="Subject..."
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full p-2 text-sm rounded border bg-transparent"
        style={{ borderColor: "var(--border)", color: "var(--text)" }}
      />
      <input
        type="text"
        placeholder="Style..."
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        className="w-full p-2 text-sm rounded border bg-transparent"
        style={{ borderColor: "var(--border)", color: "var(--text)" }}
      />
      <input
        type="text"
        placeholder="Lighting..."
        value={lighting}
        onChange={(e) => setLighting(e.target.value)}
        className="w-full p-2 text-sm rounded border bg-transparent"
        style={{ borderColor: "var(--border)", color: "var(--text)" }}
      />
      <pre className="text-xs font-mono p-2 rounded" style={{ backgroundColor: "var(--bg)", color: "var(--accent)" }}>
        {subject}{style ? `, ${style}` : ""}{lighting ? `, ${lighting}` : ""}
      </pre>
    </div>
  );
}

function ColorMixerMiniApp() {
  const [hue, setHue] = useState(180);

  return (
    <div className="p-4 space-y-4">
      <input
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={(e) => setHue(Number(e.target.value))}
        className="w-full"
      />
      <div
        className="w-full h-16 rounded"
        style={{ backgroundColor: `hsl(${hue}, 80%, 60%)` }}
      />
      <p className="text-xs font-mono text-center">
        hsl({hue}, 80%, 60%)
      </p>
    </div>
  );
}

function TimerMiniApp() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (running) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="p-4 text-center space-y-4">
      <p className="text-3xl font-mono font-bold" style={{ color: "var(--accent)" }}>
        {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
      </p>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setRunning(!running)}
          className="px-4 py-1 text-xs rounded"
          style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => { setRunning(false); setSeconds(0); }}
          className="px-4 py-1 text-xs rounded border"
          style={{ borderColor: "var(--border)", color: "var(--text)" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function ConverterMiniApp() {
  const [value, setValue] = useState("1");
  const [from, setFrom] = useState("px");
  const [to, setTo] = useState("rem");

  const conversions: Record<string, Record<string, number>> = {
    px: { rem: 0.0625, em: 0.0625, "%": 6.25 },
    rem: { px: 16, em: 1, "%": 100 },
    em: { px: 16, rem: 1, "%": 100 },
    "%": { px: 0.16, rem: 0.01, em: 0.01 },
  };

  const result = Number(value) * (conversions[from]?.[to] || 1);

  return (
    <div className="p-4 space-y-4">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-2 text-sm rounded border bg-transparent"
        style={{ borderColor: "var(--border)", color: "var(--text)" }}
      />
      <div className="flex gap-2">
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="flex-1 p-2 text-xs rounded border bg-transparent"
          style={{ borderColor: "var(--border)", color: "var(--text)" }}
        >
          {Object.keys(conversions).map((u) => <option key={u} value={u}>{u}</option>)}
        </select>
        <span className="self-center">→</span>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="flex-1 p-2 text-xs rounded border bg-transparent"
          style={{ borderColor: "var(--border)", color: "var(--text)" }}
        >
          {Object.keys(conversions).map((u) => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <p className="text-center font-mono text-sm" style={{ color: "var(--accent)" }}>
        {result.toFixed(4)} {to}
      </p>
    </div>
  );
}

// ─── Navigation Dots ─────────────────────────────────────────
function NavigationDots({ total, active, onClick }: { total: number; active: number; onClick: (i: number) => void }) {
  return (
    <motion.div
      initial={{ opacity: 1, x: 20 }}
      animate={{ opacity: 1 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          className="w-3 h-3 rounded-full transition-all"
          style={{
            backgroundColor: active === i ? "var(--accent)" : "transparent",
            border: `1px solid ${active === i ? "var(--accent)" : "var(--border)"}`,
            boxShadow: active === i ? "var(--glow)" : "none",
          }}
        />
      ))}
    </motion.div>
  );
}

// ─── Chapter Section ─────────────────────────────────────────
function ChapterSection({
  children,
  index,
  isActive,
}: {
  children: React.ReactNode;
  index: number;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 0]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="min-h-screen flex items-center justify-center py-24"
      style={{ opacity, scale, y }}
    >
      {children}
    </motion.section>
  );
}

// ─── Skill Map ────────────────────────────────────────────────
function SkillMap() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const categoryColors = {
    foundation: "#4DFFFF",
    technical: "#7B5CFF",
    creative: "#FF4FD8",
    advanced: "#FFB000",
  };

  return (
    <div className="relative w-full h-[400px] border rounded-lg" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {skillNodes.map((node) =>
          node.connections.map((connId) => {
            const conn = skillNodes.find((n) => n.id === connId);
            if (!conn) return null;
            return (
              <line
                key={`${node.id}-${connId}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${conn.x}%`}
                y2={`${conn.y}%`}
                stroke={hoveredNode === node.id || hoveredNode === connId ? "var(--accent)" : "var(--border)"}
                strokeWidth="1"
                opacity={hoveredNode === node.id || hoveredNode === connId ? 1 : 0.3}
              />
            );
          })
        )}
      </svg>

      {/* Nodes */}
      {skillNodes.map((node) => (
        <motion.button
          key={node.id}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.2 }}
          onHoverStart={() => setHoveredNode(node.id)}
          onHoverEnd={() => setHoveredNode(null)}
          onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
          className="absolute w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
            backgroundColor: selectedNode === node.id ? categoryColors[node.category] : "var(--surface)",
            border: `2px solid ${categoryColors[node.category]}`,
            color: selectedNode === node.id ? "var(--bg)" : categoryColors[node.category],
            boxShadow: selectedNode === node.id || hoveredNode === node.id ? `0 0 20px ${categoryColors[node.category]}50` : "none",
          }}
        >
          {node.name.charAt(0)}
        </motion.button>
      ))}

      {/* Info Panel */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 p-3 rounded border text-xs"
            style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
          >
            <p className="font-bold" style={{ color: categoryColors[skillNodes.find((n) => n.id === selectedNode)?.category || "foundation"] }}>
              {skillNodes.find((n) => n.id === selectedNode)?.name}
            </p>
            <p style={{ color: "var(--textSecondary)" }}>
              {skillNodes.find((n) => n.id === selectedNode)?.connections.length} connections
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── AI Search Panel ────────────────────────────────────────
function AISearchPanel() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const allContent = [
    { id: "1", title: "8-Layer Architecture", category: "Framework", snippet: "Role → Context → Objective → Constraints → Aesthetic → Planning → Output → Refinement" },
    { id: "2", title: "Rembrandt Lighting", category: "Physics", snippet: "45° key light creating triangle on shadowed cheek" },
    { id: "3", title: "Dolphin Mode", category: "Thinking", snippet: "Creative solutions with playful curiosity" },
    { id: "4", title: "Subsurface Scattering", category: "Material", snippet: "Light penetration depth for realistic skin" },
    { id: "5", title: "Focal Length 85mm", category: "Optical", snippet: "Flattering compression for portraits" },
  ];

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
    if (q.length < 2) {
      setResults([]);
      return;
    }
    setIsSearching(true);
    // Simulate AI search
    setTimeout(() => {
      const filtered = allContent.filter(
        (item) =>
          item.title.toLowerCase().includes(q.toLowerCase()) ||
          item.snippet.toLowerCase().includes(q.toLowerCase()) ||
          item.category.toLowerCase().includes(q.toLowerCase())
      );
      setResults(filtered);
      setIsSearching(false);
    }, 300);
  }, []);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "var(--textSecondary)" }} />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Ask anything... (e.g., 'lighting for portraits')"
          className="w-full pl-10 pr-4 py-3 rounded-lg border text-sm"
          style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
        />
        {isSearching && (
          <motion.div
            animate={{ opacity: [0.5, 1] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <Sparkles className="w-4 h-4" style={{ color: "var(--accent)" }} />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 1, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-2 max-h-60 overflow-y-auto"
          >
            {results.map((result) => (
              <motion.div
                key={result.id}
                className="p-3 rounded border cursor-pointer transition-colors"
                style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
                whileHover={{ borderColor: "var(--accent)" }}
              >
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                  {result.title}
                </p>
                <p className="text-xs" style={{ color: "var(--accent)" }}>
                  {result.category}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--textSecondary)" }}>
                  {result.snippet}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Theme Switcher ─────────────────────────────────────────
function ThemeSwitcher({ current, onChange }: { current: ThemeName; onChange: (t: ThemeName) => void }) {
  return (
    <div className="flex gap-2">
      {(Object.keys(themes) as ThemeName[]).map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className="px-3 py-1.5 text-xs font-medium rounded border transition-all"
          style={{
            backgroundColor: current === t ? themes[t].accent : "transparent",
            borderColor: themes[t].border,
            color: current === t ? themes[t].bg : themes[t].textSecondary,
          }}
        >
          {themes[t].name}
        </button>
      ))}
    </div>
  );
}

// ─── Canvas Mode ────────────────────────────────────────────
function CanvasMode() {
  const [elements, setElements] = useState<{ id: number; x: number; y: number; color: string; text: string }[]>([
    { id: 1, x: 100, y: 100, color: "#4DFFFF", text: "Role" },
    { id: 2, x: 250, y: 150, color: "#7B5CFF", text: "Context" },
    { id: 3, x: 180, y: 250, color: "#FF4FD8", text: "Objective" },
  ]);
  const [selected, setSelected] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const addElement = () => {
    const newId = Math.max(...elements.map((e) => e.id), 0) + 1;
    const colors = ["#4DFFFF", "#7B5CFF", "#FF4FD8", "#FFB000"];
    setElements([
      ...elements,
      { id: newId, x: 150, y: 150, color: colors[newId % colors.length], text: `Node ${newId}` },
    ]);
  };

  const handleDrag = (id: number, delta: { x: number; y: number }) => {
    setElements(elements.map((el) => (el.id === id ? { ...el, x: el.x + delta.x, y: el.y + delta.y } : el)));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={addElement}
          className="px-3 py-1.5 text-xs rounded flex items-center gap-1"
          style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
        >
          <Plus className="w-3 h-3" /> Add Node
        </button>
        <button
          onClick={() => setSelected(null)}
          className="px-3 py-1.5 text-xs rounded border flex items-center gap-1"
          style={{ borderColor: "var(--border)", color: "var(--textSecondary)" }}
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <div
        ref={canvasRef}
        className="relative h-[300px] border rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, var(--border) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Elements */}
        {elements.map((el) => (
          <motion.div
            key={el.id}
            drag
            dragMomentum={false}
            onDrag={(_, info) => handleDrag(el.id, { x: info.delta.x, y: info.delta.y })}
            onClick={() => setSelected(el.id)}
            className="absolute w-20 h-20 rounded-lg flex items-center justify-center text-xs font-bold cursor-grab"
            style={{
              left: el.x,
              top: el.y,
              backgroundColor: selected === el.id ? el.color : "var(--surface)",
              border: `2px solid ${el.color}`,
              color: selected === el.id ? "var(--bg)" : el.color,
              boxShadow: selected === el.id ? `0 0 20px ${el.color}50` : "none",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {el.text}
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-center" style={{ color: "var(--textSecondary)" }}>
        Drag elements to rearrange • Click to select
      </p>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────
export default function InteractiveInfographic() {
  const [theme, setTheme] = useState<ThemeName>("neon");
  const [activeSection, setActiveSection] = useState(0);
  const [openMiniApp, setOpenMiniApp] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTheme = themes[theme];

  // Scroll handler
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Sections
  const sections = [
    { id: "hero", title: "Dolphin Mode" },
    { id: "skills", title: "Skill Map" },
    { id: "search", title: "AI Search" },
    { id: "canvas", title: "Canvas" },
    { id: "apps", title: "Micro-Apps" },
  ];

  // Inject CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty("--bg", currentTheme.bg);
    document.documentElement.style.setProperty("--surface", currentTheme.surface);
    document.documentElement.style.setProperty("--border", currentTheme.border);
    document.documentElement.style.setProperty("--accent", currentTheme.accent);
    document.documentElement.style.setProperty("--accent2", currentTheme.accent2);
    document.documentElement.style.setProperty("--accent3", currentTheme.accent3);
    document.documentElement.style.setProperty("--glow", currentTheme.glow);
    document.documentElement.style.setProperty("--text", currentTheme.text);
    document.documentElement.style.setProperty("--textSecondary", currentTheme.textSecondary);
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto"
      style={{ backgroundColor: currentTheme.bg, color: currentTheme.text }}
    >
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{ scaleX, backgroundColor: currentTheme.accent }}
      />

      {/* Theme Switcher */}
      <motion.div
        initial={{ opacity: 1, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 right-4 z-50"
      >
        <ThemeSwitcher current={theme} onChange={setTheme} />
      </motion.div>

      {/* Navigation Dots */}
      <NavigationDots total={sections.length} active={activeSection} onClick={setActiveSection} />

      {/* ─── Section 1: Dolphin Mode Hero ──────────────────────── */}
      <ChapterSection index={0} isActive={activeSection === 0}>
        <div className="px-6 max-w-6xl mx-auto">
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: currentTheme.accent }}
          >
            Interactive Infographic
          </motion.span>

          <motion.h1
            initial={{ opacity: 1, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display font-black leading-none"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            Dolphin Mode
            <br />
            <span style={{ color: currentTheme.accent }}>10 Creative UI Concepts</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg max-w-2xl"
            style={{ color: currentTheme.textSecondary }}
          >
            An interactive exploration of modern UI patterns. Scroll to navigate, 
            click cards to expand, switch themes instantly.
          </motion.p>

          {/* Concept Cards Grid */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {dolphinConcepts.slice(0, 6).map((concept, i) => (
              <motion.div
                key={concept.id}
                initial={{ opacity: 1, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="p-6 rounded-xl border cursor-pointer group"
                style={{
                  backgroundColor: currentTheme.surface,
                  borderColor: currentTheme.border,
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors"
                  style={{ backgroundColor: `${concept.color}20`, color: concept.color }}
                >
                  {concept.icon}
                </div>
                <h3 className="font-semibold text-lg">{concept.title}</h3>
                <p className="mt-2 text-sm" style={{ color: currentTheme.textSecondary }}>
                  {concept.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ChapterSection>

      {/* ─── Section 2: Skill Map ──────────────────────────────── */}
      <ChapterSection index={1} isActive={activeSection === 1}>
        <div className="px-6 max-w-4xl mx-auto w-full">
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: currentTheme.accent2 }}
          >
            Interactive
          </motion.span>

          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-display text-4xl font-bold"
          >
            Skill Map Interface
          </motion.h2>

          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4"
            style={{ color: currentTheme.textSecondary }}
          >
            Interactive node graph showing the 8-Layer Architecture. Hover to reveal connections, click to explore.
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <SkillMap />
          </motion.div>
        </div>
      </ChapterSection>

      {/* ─── Section 3: AI Search ──────────────────────────────── */}
      <ChapterSection index={2} isActive={activeSection === 2}>
        <div className="px-6 max-w-4xl mx-auto w-full">
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: currentTheme.accent3 }}
          >
            Natural Language
          </motion.span>

          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-display text-4xl font-bold"
          >
            AI Search Panel
          </motion.h2>

          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4"
            style={{ color: currentTheme.textSecondary }}
          >
            Type to search. Results appear instantly. Try "lighting" or "thinking modes".
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <AISearchPanel />
          </motion.div>
        </div>
      </ChapterSection>

      {/* ─── Section 4: Canvas Mode ──────────────────────────── */}
      <ChapterSection index={3} isActive={activeSection === 3}>
        <div className="px-6 max-w-4xl mx-auto w-full">
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: currentTheme.accent }}
          >
            Visual Manipulation
          </motion.span>

          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-display text-4xl font-bold"
          >
            Canvas Mode
          </motion.h2>

          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4"
            style={{ color: currentTheme.textSecondary }}
          >
            Drag, drop, and rearrange elements visually. An infinite canvas for exploration.
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <CanvasMode />
          </motion.div>
        </div>
      </ChapterSection>

      {/* ─── Section 5: Micro-Apps ──────────────────────────── */}
      <ChapterSection index={4} isActive={activeSection === 4}>
        <div className="px-6 max-w-6xl mx-auto">
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: currentTheme.accent2 }}
          >
            Mini Tools
          </motion.span>

          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-display text-4xl font-bold"
          >
            Card Micro-Apps
          </motion.h2>

          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4"
            style={{ color: currentTheme.textSecondary }}
          >
            Each card is a functional mini-app. Click to expand and use.
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {miniApps.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 1, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setOpenMiniApp(openMiniApp === app.id ? null : app.id)}
                className="p-6 rounded-xl border cursor-pointer"
                style={{
                  backgroundColor: currentTheme.surface,
                  borderColor: openMiniApp === app.id ? currentTheme.accent : currentTheme.border,
                  boxShadow: openMiniApp === app.id ? currentTheme.glow : "none",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${currentTheme.accent}20`, color: currentTheme.accent }}
                >
                  {app.icon}
                </div>
                <h3 className="font-semibold">{app.title}</h3>

                <AnimatePresence>
                  {openMiniApp === app.id && (
                    <motion.div
                      initial={{ opacity: 1, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t overflow-hidden"
                      style={{ borderColor: currentTheme.border }}
                    >
                      {app.component}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ChapterSection>

      {/* ─── Footer ───────────────────────────────────────── */}
      <footer className="py-12 text-center border-t" style={{ borderColor: currentTheme.border }}>
        <p className="text-sm" style={{ color: currentTheme.textSecondary }}>
          AI Visual Synthesis — Interactive Framework (2026)
        </p>
      </footer>
    </div>
  );
}
