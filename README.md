# AI Visual Synthesis

> Complete prompt engineering framework for AI image generation. Built with Next.js, Tailwind CSS, and GSAP.

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
│   └── lib/              # Utilities & GSAP animations
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
| `layout.tsx` | Root layout with fonts, metadata, SEO, and graceful degradation fallbacks |
| `globals.css` | Global styles, CSS variables, animations with visibility fallbacks |
| `sitemap.ts` | Dynamic sitemap generation |

### Components (`src/components/`)

| File | Purpose |
|------|---------|
| `HeroSection.tsx` | Landing hero with GSAP animations, floating tags, parallax |
| `SearchSection.tsx` | Search functionality |
| `SkillMapSection.tsx` | 6-layer skills framework visualization |
| `KnowledgeGalaxy.tsx` | Domain knowledge cards with safe animations |
| `ToolsSection.tsx` | AI tools comparison |
| `TechniquesSection.tsx` | Prompt techniques guide |
| `PromptsSection.tsx` | Prompt templates by category |
| `GallerySection.tsx` | Image gallery showcase |
| `RoadmapSection.tsx` | Learning roadmap |
| `Navbar.tsx` | Navigation header |
| `Footer.tsx` | Site footer |
| `ui/primitives.tsx` | Reusable UI components (FadeIn, SafeFadeIn, GlassCard, NeonTag) |
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
| `gsap-utils.ts` | GSAP ScrollTrigger utilities (fadeInOnScroll, staggerReveal, parallaxScroll) |
| `gsap-animations.ts` | GSAP animation configurations and presets |

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
- **Styling:** Tailwind CSS
- **Animations:** GSAP with ScrollTrigger
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## Animation System

This project uses **GSAP (GreenSock Animation Platform)** with ScrollTrigger for smooth, performant animations. The animation system includes:

### Graceful Degradation
- Elements start visible by default (no `opacity: 0` initial states)
- CSS fallbacks force visibility after 3 seconds if JS fails
- JavaScript fallback in `<head>` ensures content is always visible
- `useSafeAnimation` hook for components that need animation safety

### GSAP Utilities (`src/lib/gsap-utils.ts`)
- `fadeInOnScroll()` - Fade elements in on scroll
- `staggerReveal()` - Staggered reveal animations
- `parallaxScroll()` - Parallax scrolling effects

### Safe Animation Components
- `SafeFadeIn` - Fade-in component with built-in fallbacks
- `useSafeAnimation` - Hook for safe animation initialization

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
- ⚡ **Fast Animations** - GSAP-powered with graceful degradation

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

---

## Deployment

### Vercel (Recommended)
The project is configured for automatic deployment to Vercel. Push to the `main` branch to trigger deployment.

**Live URL:** https://ai-visual-synthesis-repo.vercel.app/

### GitHub Pages
The project also supports static export for GitHub Pages:

1. Enable GitHub Pages in repository settings
2. Select "GitHub Actions" as the source
3. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy

**GitHub Pages URL:** https://marktantongco.github.io/ai-visual-synthesis/

### Manual Deployment

```bash
# Build for Vercel (dynamic)
npm run build

# Build for GitHub Pages (static export)
GITHUB_PAGES=true npm run build
```

---

## Recent Updates

### UI & Accessibility Improvements (March 2026)
- Enhanced text contrast across all components for WCAG compliance
- Increased font sizes for better readability on mobile
- Added WCAG 2.1 AAA compliant touch targets (44x44px minimum)
- Added high contrast mode support
- Added reduced motion preferences
- Added tooltips to all interactive elements
- Improved mobile navigation with larger buttons

### Animation System (Previous)
- Replaced Framer Motion with GSAP for better performance
- Fixed whitespace/loading issues caused by hidden elements
- Added multi-layer fallback system for content visibility
- Elements now start visible and animate in, rather than starting hidden

### Files Modified
- `src/app/globals.css` - CSS visibility fallbacks, touch targets, contrast fixes
- `src/app/layout.tsx` - JavaScript fallback in `<head>`
- `src/components/ui/primitives.tsx` - SafeFadeIn component, useSafeAnimation hook
- `src/components/sections/KnowledgeGalaxy.tsx` - Safe animation implementation
- `src/lib/gsap-animations.tsx` - GSAP animation utilities
- `src/components/sections/*.tsx` - Contrast and accessibility improvements

---

## License

MIT

---

*Last Updated: March 2026*
