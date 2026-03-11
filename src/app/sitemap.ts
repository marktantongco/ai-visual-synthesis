import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ai-visual-synthesis.vercel.app";

  // All searchable entries as individual pages via ?view= param
  const promptIds = [
    "portrait-cinematic-portrait",
    "portrait-cyberpunk-character",
    "portrait-fine-art-oil",
    "landscape-aerial-dreamscape",
    "landscape-minimalist-desert",
    "landscape-watercolor-city",
    "product-luxury-shot",
    "product-lifestyle-context",
    "product-futuristic-gadget",
    "abstract-fluid-dynamics",
    "abstract-geometric-neon",
    "abstract-organic-growth",
    "architectural-brutalist-majesty",
    "architectural-glass-utopia",
    "architectural-ancient-ruins",
    "concept-epic-fantasy-battle",
    "concept-space-opera",
    "concept-solarpunk-city",
  ];

  const skillIds = [
    "skill-1-prompt-engineering",
    "skill-2-photographic-literacy",
    "skill-3-strategic-negation",
    "skill-4-identity-preservation",
    "skill-5-post-processing",
    "skill-6-agent-orchestration",
  ];

  const entries = [...promptIds, ...skillIds].map((id) => ({
    url: `${base}/?view=${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/#search`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/#skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...entries,
  ];
}
