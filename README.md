# AI Visual Synthesis

> Complete prompt engineering framework for AI image generation. Built with Next.js, Tailwind CSS, and Framer Motion.

**Live Site:** https://ai-visual-synthesis.vercel.app  
**GitHub:** https://github.com/marktantongco/ai-visual-synthesis

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/marktantongco/ai-visual-synthesis.git
cd ai-visual-synthesis

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Project Structure

```
ai-visual-synthesis/
├── src/                    # Next.js source code
│   ├── app/               # App Router pages
│   ├── components/        # React components
│   │   └── sections/     # Page sections
│   ├── data/             # Static data
│   └── lib/              # Utilities
├── public/                # Static assets
├── *.md                   # Documentation files
└── config files           # Next.js, Tailwind, etc.
```

---

## Documentation Files

| File | Description | Lines |
|------|-------------|-------|
| **[skill.md](./skill.md)** | Main reference - 8-Layer Architecture, design vocabulary, prompt templates | 369 |
| **[AI-IMAGE-PROMPT-MASTERY-2026.md](./AI-IMAGE-PROMPT-MASTERY-2026.md)** | Advanced guide - 20+ AI generators comparison, techniques | 524 |
| **[AI-VISUAL-SYNTHESIS-BEGINNERS-GUIDE.md](./AI-VISUAL-SYNTHESIS-BEGINNERS-GUIDE.md)** | Beginner's step-by-step guide to prompt engineering | 685 |
| **[ai-photorealism.md](./ai-photorealism.md)** | AI Creator Suite skills - photorealism, React, UI, content | 240 |
| **[SKILLS.md](./SKILLS.md)** | Installation guide - redirects to skill.md | 38 |
| **[CLAUDE.md](./CLAUDE.md)** | AI agent system prompt - core rules & preferences | 24 |
| **[agents.md](./agents.md)** | Project agent instructions for development | 41 |

---

## Source Code

### App Router (`src/app/`)

| File | Purpose |
|------|---------|
| `page.tsx` | Server component - main entry |
| `HomeClient.tsx` | Client shell - all sections |
| `layout.tsx` | Root layout with fonts, metadata, SEO |
| `globals.css` | Global styles, CSS variables, animations |
| `sitemap.ts` | Dynamic sitemap generation |

### Components (`src/components/`)

| File | Purpose |
|------|---------|
| `HeroSection.tsx` | Landing hero with floating tags, parallax |
| `SearchSection.tsx` | Search functionality |
| `SkillMapSection.tsx` | 6-layer skills framework visualization |
| `ToolsSection.tsx` | AI tools comparison |
| `TechniquesSection.tsx` | Prompt techniques guide |
| `PromptsSection.tsx` | Prompt templates by category |
| `GallerySection.tsx` | Image gallery showcase |
| `RoadmapSection.tsx` | Learning roadmap |
| `Navbar.tsx` | Navigation header |
| `Footer.tsx` | Site footer |
| `ui/primitives.tsx` | Reusable UI components (FadeIn, GlassCard, NeonTag) |
| `ui/ThemeSwitcher.tsx` | Theme toggle |

### Data (`src/data/`)

| File | Purpose |
|------|---------|
| `imagePrompts.ts` | 80+ prompt templates across 6 categories |

### Utilities (`src/lib/`)

| File | Purpose |
|------|---------|
| `utils.ts` | Utility functions (cn, formatting) |
| `searchData.ts` | Search functionality |

---

## Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies & scripts |
| `next.config.ts` | Next.js configuration |
| `tailwind.config.js` | Tailwind CSS with custom fonts, colors, animations |
| `tsconfig.json` | TypeScript configuration |
| `postcss.config.js` | PostCSS configuration |
| `eslint.config.mjs` | ESLint rules |

---

## Public Assets (`public/`)

| File | Purpose |
|------|---------|
| `favicon.ico` | Site favicon |
| `icon.svg` | SVG icon |
| `og-image.png` | Open Graph image for social sharing |
| `apple-touch-icon.png` | iOS home screen icon |
| `manifest.json` | PWA manifest |
| `robots.txt` | Search engine directives |
| `llms.txt` | LLM-friendly documentation |

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## Features

- 🎨 **8-Layer Prompt Architecture** - Structured prompting framework
- 🧠 **Animal Thinking Modes** - 7 creative problem-solving approaches
- 📚 **80+ Prompt Templates** - Ready-to-use prompts across 6 categories
- 🔍 **Search Functionality** - Find prompts by keyword
- 🌙 **Dark Mode** - Theme switcher
- 📱 **Responsive Design** - Mobile-first
- ♿ **Accessible** - ARIA labels, semantic HTML
- 🔍 **SEO Optimized** - JSON-LD schemas, meta tags

---

## Documentation Index

### For Beginners
Start with `AI-VISUAL-SYNTHESIS-BEGINNERS-GUIDE.md`

### For Intermediate
Continue with `skill.md` - 8-Layer Architecture

### For Advanced
Deep dive with `AI-IMAGE-PROMPT-MASTERY-2026.md` - Generator comparisons

### For Developers
- `CLAUDE.md` - AI agent rules
- `agents.md` - Project setup instructions

---

## License

MIT

---

*Last Updated: March 2026*
