const BASE_URL = "https://ai-visual-synthesis.vercel.app";

export async function GET() {
  const feedItems = [
    {
      title: "AI Visual Synthesis - Complete 2025 Guide",
      link: BASE_URL,
      description: "Master AI image generation in 2025. Complete interactive guide to Midjourney, DALL·E 3, Stable Diffusion, Flux.1 with 80+ prompt templates.",
      pubDate: new Date().toUTCString(),
    },
    {
      title: "Prompt Templates Collection",
      link: `${BASE_URL}/prompts`,
      description: "Ready-to-use AI prompt templates for generating production-ready web applications. Developer prompts, design prompts, and custom prompt builder.",
      pubDate: new Date().toUTCString(),
    },
    {
      title: "The Complete Framework",
      link: `${BASE_URL}/framework`,
      description: "8-Layer Prompt Architecture, Physics-First Parameters, Thinking Modes, Design Vocabulary, and Master Templates for AI image generation.",
      pubDate: new Date().toUTCString(),
    },
    {
      title: "Interactive Infographic",
      link: `${BASE_URL}/infographic`,
      description: "Explore AI Visual Synthesis through an interactive infographic with Dolphin Mode, Skill Maps, AI Search, Canvas Mode, and Micro-Apps.",
      pubDate: new Date().toUTCString(),
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI Visual Synthesis</title>
    <link>${BASE_URL}</link>
    <description>Complete guide to AI image generation, prompt engineering, and visual synthesis. Updates on new prompts, techniques, and AI tools.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${feedItems
      .map(
        (item) => `
    <item>
      <title>${item.title}</title>
      <link>${item.link}</link>
      <description>${item.description}</description>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="true">${item.link}</guid>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
