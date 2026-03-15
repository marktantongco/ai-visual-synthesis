import type { Metadata } from "next";

const BASE_URL = "https://ai-visual-synthesis.vercel.app";

export const metadata: Metadata = {
  title: "The Complete Framework",
  description:
    "The complete AI Visual Synthesis framework: 8-Layer Prompt Architecture, Physics-First Parameters, Thinking Modes, Design Vocabulary, and Master Templates. Descriptive creativity meets prescriptive precision for AI image generation.",
  keywords: [
    "AI prompt framework",
    "prompt architecture",
    "8-layer prompt",
    "AI image generation framework",
    "prompt engineering methodology",
    "physics-based prompting",
    "lighting ratios AI",
    "focal length AI",
    "Kelvin temperature AI",
    "thinking modes",
  ],
  openGraph: {
    title: "The Complete Framework | AI Visual Synthesis",
    description:
      "Master AI image generation with the complete framework: 8-Layer Architecture, Physics Parameters, Thinking Modes, and Master Templates.",
    url: `${BASE_URL}/framework`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Visual Synthesis Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Complete Framework | AI Visual Synthesis",
    description: "Master AI image generation: 8-Layer Architecture, Physics Parameters, Thinking Modes, Master Templates.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${BASE_URL}/framework`,
  },
};

export default function FrameworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
