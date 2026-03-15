import type { Metadata } from "next";

const BASE_URL = "https://ai-visual-synthesis.vercel.app";

export const metadata: Metadata = {
  title: "Interactive Infographic",
  description:
    "Explore the AI Visual Synthesis framework through an interactive infographic. Dolphin Mode: 10 creative UI concepts including Skill Map Interface, AI Search Panel, Canvas Mode, and Card Micro-Apps with live theme switching.",
  keywords: [
    "interactive infographic",
    "AI UI concepts",
    "dolphin mode",
    "skill map interface",
    "AI search panel",
    "canvas mode",
    "micro-apps",
    "theme switcher",
    "interactive UI patterns",
    "scroll-based navigation",
  ],
  openGraph: {
    title: "Interactive Infographic | AI Visual Synthesis",
    description:
      "Explore AI Visual Synthesis through an interactive infographic with skill maps, AI search, canvas mode, and micro-apps.",
    url: `${BASE_URL}/infographic`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Visual Synthesis Interactive Infographic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Infographic | AI Visual Synthesis",
    description: "Explore AI Visual Synthesis through interactive skill maps, AI search, canvas mode, and micro-apps.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${BASE_URL}/infographic`,
  },
};

export default function InfographicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
