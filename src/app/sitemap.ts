import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ai-visual-synthesis.vercel.app";
  const currentDate = new Date();
  
  // Main pages with high priority
  const mainPages = [
    {
      url: base,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${base}/prompts`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/framework`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/infographic`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/animation-showcase`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Prompt categories - deep linkable entries via ?view= param
  const promptIds = [
    // Portrait prompts
    "portrait-cinematic-portrait",
    "portrait-cyberpunk-character",
    "portrait-fine-art-oil",
    // Landscape prompts
    "landscape-aerial-dreamscape",
    "landscape-minimalist-desert",
    "landscape-watercolor-city",
    // Product prompts
    "product-luxury-shot",
    "product-lifestyle-context",
    "product-futuristic-gadget",
    // Abstract prompts
    "abstract-fluid-dynamics",
    "abstract-geometric-neon",
    "abstract-organic-growth",
    // Architectural prompts
    "architectural-brutalist-majesty",
    "architectural-glass-utopia",
    "architectural-ancient-ruins",
    // Concept art prompts
    "concept-epic-fantasy-battle",
    "concept-space-opera",
    "concept-solarpunk-city",
  ];

  // Skill framework entries
  const skillIds = [
    "skill-1-prompt-engineering",
    "skill-2-photographic-literacy",
    "skill-3-strategic-negation",
    "skill-4-identity-preservation",
    "skill-5-post-processing",
    "skill-6-agent-orchestration",
  ];

  // Generate entries for prompts
  const promptEntries = promptIds.map((id) => ({
    url: `${base}/?view=${id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Generate entries for skills
  const skillEntries = skillIds.map((id) => ({
    url: `${base}/?view=${id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Documentation files (hosted on GitHub but referenced)
  const docsPages = [
    {
      url: `${base}/#documentation`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return [
    ...mainPages,
    ...promptEntries,
    ...skillEntries,
    ...docsPages,
  ];
}
