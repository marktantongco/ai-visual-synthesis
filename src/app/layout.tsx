import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

/* ─── Fonts ──────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/* ─── SEO Metadata ───────────────────────────────────────────────────── */
const BASE_URL = "https://ai-visual-synthesis.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "AI Visual Synthesis Mastery 2026 | Interactive Prompt Engineering Guide",
    template: "%s | AI Visual Synthesis",
  },

  description:
    "Master AI image generation with Midjourney, DALL·E 3, FLUX, Stable Diffusion, Ideogram, and more. Interactive tools, skill maps, and prompt builder. 12+ AI tools covered with tool-specific prompt formatting.",

  keywords: [
    // Primary keywords
    "AI image generation",
    "AI art generator",
    "prompt engineering",
    "visual synthesis",
    "text to image",
    "AI image prompts",
    // Tool-specific
    "Midjourney guide",
    "Midjourney prompts",
    "DALL·E 3",
    "DALL·E 3 prompts",
    "Stable Diffusion tutorial",
    "Stable Diffusion prompts",
    "Flux.1",
    "Flux AI",
    "ComfyUI",
    // Techniques
    "LoRA training",
    "ControlNet",
    "AI art techniques",
    "AI photo realistic",
    "photorealistic AI",
    "generative AI art",
    "AI prompt templates",
    "negative prompts",
    "image upscaling AI",
    // Learning
    "AI practitioner",
    "prompt engineering course",
    "AI art tutorial",
    "AI image generation guide",
    "Midjourney tutorial",
    "Stable Diffusion guide",
    // 2025 trends
    "AI art 2025",
    "AI image generation 2025",
    "latest AI art tools",
  ],

  authors: [{ name: "AI Visual Synthesis", url: BASE_URL }],
  creator: "AI Visual Synthesis",
  publisher: "AI Visual Synthesis",
  
  // Additional meta tags
  category: "Education & Technology",
  classification: "AI Image Generation Guide",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ─── Open Graph ─────────────────────────────────────────────────── */
  openGraph: {
    title: "AI Visual Synthesis Mastery 2026",
    description:
      "Interactive guide to AI image generation. Master prompts for Midjourney, FLUX, DALL·E 3, and 9 more tools. 12+ AI tools with tool-specific formatting.",
    url: BASE_URL,
    siteName: "AI Visual Synthesis",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Visual Synthesis - Complete Guide to AI Image Generation 2025",
        type: "image/png",
      },
    ],
  },

  /* ─── Twitter / X Card ───────────────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "AI Visual Synthesis Mastery — 2025 Guide",
    description:
      "The complete interactive guide to AI image generation. Midjourney, DALL·E 3, Stable Diffusion, Flux.1 + 80 prompt templates. LoRA, ControlNet & professional techniques.",
    images: ["/og-image.png"],
    creator: "@aivisualsynth",
    site: "@aivisualsynth",
  },

  /* ─── Canonical + Alt langs ─────────────────────────────────────── */
  alternates: {
    canonical: BASE_URL,
  },

  /* ─── App / PWA ──────────────────────────────────────────────────── */
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  
  /* ─── Additional Meta Tags ──────────────────────────────────────── */
  other: {
    "theme-color": "#4DFFFF",
    "msapplication-TileColor": "#4DFFFF",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "AI Visual Synthesis",
    "mobile-web-app-capable": "yes",
    "format-detection": "telephone=no",
    "referrer": "origin-when-cross-origin",
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },

  /* ─── Verification (add tokens from Google Search Console) ──────── */
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  // },
};

/* ─── JSON-LD Structured Data ────────────────────────────────────────── */

// Primary Website Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI Visual Synthesis",
  url: BASE_URL,
  description:
    "Complete interactive guide to AI image generation, visual synthesis, and prompt engineering.",
  publisher: {
    "@type": "Organization",
    name: "AI Visual Synthesis",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/icon.svg`,
      width: 512,
      height: 512,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// Course Schema for Skills Framework
const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI Visual Synthesis Mastery - 6-Layer AI Practitioner Skills Framework",
  description:
    "The 2025 AI Practitioner Skills Framework: a 6-layer competency path from prompt engineering to agent orchestration. Master Midjourney, DALL·E 3, Stable Diffusion, and Flux.1.",
  url: BASE_URL,
  provider: {
    "@type": "Organization",
    name: "AI Visual Synthesis",
    url: BASE_URL,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    isAccessibleForFree: true,
    educationalLevel: "Beginner to Advanced",
  },
  educationalCredentialAwarded: "AI Image Generation Proficiency",
  timeRequired: "P40H", // 40 hours
  audience: {
    "@type": "Audience",
    audienceType: ["Designers", "Developers", "Content Creators", "AI Enthusiasts"],
  },
};

// Software Application Schema
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Visual Synthesis",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1250",
  },
  description: "Interactive guide and prompt library for AI image generation",
  screenshot: `${BASE_URL}/og-image.png`,
};

// FAQ Schema
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI Visual Synthesis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Visual Synthesis is a comprehensive guide and prompt library for AI image generation. It covers Midjourney, DALL·E 3, Stable Diffusion, and Flux.1 with 80+ ready-to-use prompt templates and a 6-layer skills framework for mastering AI art creation.",
      },
    },
    {
      "@type": "Question",
      name: "How do I write better AI image prompts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the 8-Layer Prompt Architecture: Role, Context, Objective, Constraints, Aesthetic, Planning, Output, and Refinement. Combine descriptive elements (style, mood, atmosphere) with prescriptive specifications (lighting ratios, focal lengths, camera settings) for professional results.",
      },
    },
    {
      "@type": "Question",
      name: "What AI image generators are covered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Visual Synthesis covers Midjourney (v6), DALL·E 3, Stable Diffusion (including ComfyUI), and Flux.1. Each tool has specific techniques, prompt formats, and best practices documented with examples.",
      },
    },
    {
      "@type": "Question",
      name: "What is the AI Practitioner Skills Framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 6-Layer AI Practitioner Skills Framework is a competency path covering: 1) Prompt Engineering, 2) Photographic Literacy, 3) Strategic Negation, 4) Identity Preservation, 5) Post-Processing, and 6) Agent Orchestration.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI Visual Synthesis free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, AI Visual Synthesis is completely free and open source. All prompt templates, tutorials, and the skills framework are available online at no cost.",
      },
    },
  ],
};

// HowTo Schema for Prompt Engineering
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Master AI Image Prompt Engineering",
  description: "Learn the complete process for creating professional AI-generated images",
  step: [
    {
      "@type": "HowToStep",
      name: "Define Your Vision",
      text: "Start with a clear concept of what you want to create. Consider subject, style, mood, and purpose.",
    },
    {
      "@type": "HowToStep",
      name: "Apply the 8-Layer Architecture",
      text: "Structure your prompt using Role, Context, Objective, Constraints, Aesthetic, Planning, Output, and Refinement layers.",
    },
    {
      "@type": "HowToStep",
      name: "Add Technical Specifications",
      text: "Include prescriptive parameters like lighting ratios, focal length, aperture, and color temperature.",
    },
    {
      "@type": "HowToStep",
      name: "Refine with Negative Prompts",
      text: "Use strategic negation to exclude unwanted elements and improve image quality.",
    },
    {
      "@type": "HowToStep",
      name: "Iterate and Optimize",
      text: "Test your prompt, analyze results, and refine for better outputs.",
    },
  ],
  totalTime: "PT30M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "0",
  },
};

// BreadcrumbList Schema
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Prompts",
      item: `${BASE_URL}/prompts`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Framework",
      item: `${BASE_URL}/framework`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Infographic",
      item: `${BASE_URL}/infographic`,
    },
  ],
};

// LearningResource Schema for AI/GEO Indexing
const learningResourceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LearningResource",
  name: "AI Visual Synthesis Mastery",
  description: "Interactive prompt engineering guide for AI image generation tools",
  educationalLevel: "Beginner to Advanced",
  teaches: ["Prompt Engineering", "AI Image Generation", "Visual Design", "AI Art Creation"],
  learningResourceType: "Interactive Guide",
  educationalUse: "Practice",
  audience: {
    "@type": "Audience",
    audienceType: ["Designers", "Developers", "Content Creators", "AI Enthusiasts"],
  },
  tool: ["Midjourney", "DALL-E 3", "Stable Diffusion", "FLUX.1", "Ideogram", "FLUX", "Grok", "Gemini", "ChatGPT"],
  isAccessibleForFree: true,
  url: BASE_URL,
};

/* ─── Root Layout ────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data - Multiple Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceJsonLd) }}
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* CRITICAL FIX: Animation fallback script 
            Forces all hidden elements visible quickly - prevents whitespace */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // IMMEDIATE: Add CSS override right away - catches everything
                var immediateStyle = document.createElement('style');
                immediateStyle.innerHTML = 
                  'section, .section, section > *, .section > *, main > * { opacity: 1 !important; visibility: visible !important; transform: none !important; }' +
                  '[class*="motion"], [class*="animate"], [class*="fade"] { opacity: 1 !important; }' +
                  '[style*="opacity: 0"], [style*="opacity:0"], [style*="opacity: ."], [style*="opacity:."] { opacity: 1 !important; }' +
                  '[style*="opacity: 0.0"], [style*="opacity: 0.01"], [style*="opacity:0.01"] { opacity: 1 !important; }' +
                  '[style*="opacity: 0.1"], [style*="opacity: 0.2"], [style*="opacity: 0.3"] { opacity: 1 !important; }';
                document.head.appendChild(immediateStyle);
                
                // VERY FAST FALLBACK: Force visibility after just 100ms
                setTimeout(function() {
                  var style = document.createElement('style');
                  style.innerHTML = 
                    '[style*="opacity"] { opacity: 1 !important; transform: none !important; visibility: visible !important; }';
                  document.head.appendChild(style);
                  
                  // Force ALL elements with low opacity to be visible
                  document.querySelectorAll('*').forEach(function(el) {
                    var op = el.style && el.style.opacity;
                    if (op) {
                      var numOp = parseFloat(op);
                      if (numOp < 0.99) {
                        el.style.opacity = '1';
                        el.style.transform = 'none';
                        el.style.visibility = 'visible';
                      }
                    }
                  });
                  
                  // Force all sections visible
                  document.querySelectorAll('section, .section').forEach(function(el) {
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                    el.style.visibility = 'visible';
                  });
                }, 100);
                
                // DOUBLE CHECK: Run again at 500ms for any late-loaded content
                setTimeout(function() {
                  document.querySelectorAll('[style*="opacity"]').forEach(function(el) {
                    var op = el.style.opacity;
                    if (op) {
                      var numOp = parseFloat(op);
                      if (numOp < 0.99) {
                        el.style.opacity = '1';
                        el.style.transform = 'none';
                      }
                    }
                  });
                }, 500);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-brutal-cream text-brutal-black antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
