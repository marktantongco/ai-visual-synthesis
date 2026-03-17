import type { Metadata } from "next";

const BASE_URL = "https://ai-visual-synthesis.vercel.app";

export const metadata: Metadata = {
  title: "Prompt Templates",
  description:
    "Ready-to-use AI prompt templates for generating production-ready web applications. Developer prompts, design prompts, and custom prompt builder for Next.js, React, and Tailwind CSS projects.",
  keywords: [
    "AI prompt templates",
    "developer prompts",
    "web app prompts",
    "Next.js prompts",
    "React prompts",
    "Tailwind CSS prompts",
    "AI code generation",
    "prompt engineering",
    "ChatGPT prompts",
    "Claude prompts",
  ],
  openGraph: {
    title: "AI Prompt Templates | AI Visual Synthesis",
    description:
      "Ready-to-use AI prompt templates for generating production-ready web apps. Developer prompts, design prompts, and custom builder.",
    url: `${BASE_URL}/prompts`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Prompt Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Prompt Templates | AI Visual Synthesis",
    description: "Ready-to-use AI prompt templates for generating production-ready web apps.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${BASE_URL}/prompts`,
  },
};

export default function PromptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
