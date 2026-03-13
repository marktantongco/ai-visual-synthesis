# AI Creator Suite | Skills

> Comprehensive skills framework for building production-ready AI applications. Updated March 2026.

---

## Overview

**AI Creator Suite** is a comprehensive skills framework for building production-ready AI applications. It covers photorealism, React performance, UI components, animations, and content distribution.

| Metric | Value |
|--------|-------|
| Skills | 6 |
| Commands | 50+ |
| Version | v5.0 |

---

## Quick Actions

| Action | Command |
|--------|---------|
| All Skills | Filter all |
| Image | Image generation skills |
| Frontend | React & UI skills |
| Content | Social media & distribution |

---

## Skills

### 1. AI Photorealism

> Master photorealistic image generation through photographic physics, lens optics, and strategic prompt engineering.

**Install:**
```bash
npx skills add marktantongco/aiskills-photog@latest
```

**Category:** Image Generation  
**Stars:** 2.4k  
**Version:** v4.0

**Tags:** `prompt-engineering` `photography` `midjourney`

#### Core Commands

| Command | Description |
|---------|-------------|
| `85mm f/1.8` | Portrait lens for flattering compression |
| `Rembrandt lighting` | 45° off-axis, triangle on cheek |
| `subsurface scattering` | Skin translucency realism |
| `--style raw` | Midjourney photorealism mode |

#### Quick Start

Use the skill to generate photorealistic images:
- Specify lens specs instead of "hyperrealistic"
- Add lighting patterns (Rembrandt, Loop, Rim)
- Include skin details (pores, vellus hair)
- Use film stock emulation (Kodak Portra)

---

### 2. React Performance

> 57 performance rules across 8 categories. Eliminate waterfalls, optimize bundles, and master SSR.

**Install:**
```bash
npx skills add vercel-labs/agent-skills@vercel-react-best-practices
```

**Category:** Frontend  
**Stars:** 8.2k  
**Version:** v2.0

**Tags:** `react` `nextjs` `performance`

#### Priority Rules

| Priority | Category | Prefix |
|----------|----------|--------|
| 1 | Eliminating Waterfalls | `async-` |
| 2 | Bundle Size | `bundle-` |
| 3 | Server Performance | `server-` |
| 4 | Client Fetching | `client-` |

---

### 3. shadcn/ui Components

> Accessible, customizable UI components with Radix UI primitives and Tailwind CSS.

**Install:**
```bash
npx shadcn@latest init
npx shadcn@latest add button input card dialog
```

**Category:** Frontend  
**Stars:** 12k  
**Version:** v1.0

**Tags:** `components` `a11y` `tailwind`

#### Components

| Component | Usage |
|-----------|-------|
| `Button` | variant="default\|outline\|ghost" |
| `Dialog` | Modal overlays |
| `Form` | React Hook Form + Zod |
| `Card` | Content containers |

---

### 4. Framer Motion

> Declarative animations, gestures, and transitions for React. Page transitions, layout animations.

**Install:**
```bash
npm install framer-motion
```

**Category:** Frontend  
**Stars:** 15k  
**Version:** v3.0

**Tags:** `animation` `react` `gestures`

#### Basic Animation

```jsx
<motion.div
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  whileHover={{scale: 1.05}}
/>
```

#### Transitions

| Type | Usage |
|------|-------|
| `spring` | Natural bounce |
| `tween` | Linear ease |
| `layout` | Shared element |

---

### 5. LinkedIn Content

> Write high-engagement LinkedIn posts. Hook formulas, formatting rules, and engagement patterns.

**Install:**
```bash
curl -fsSL https://cli.inference.sh | sh && infsh login
```

**Category:** Content  
**Stars:** 3.1k  
**Version:** v1.0

**Tags:** `social` `marketing` `writing`

#### Hook Formulas

| Formula | Example |
|---------|---------|
| Contrarian | "Unpopular opinion..." |
| Story | "I got fired..." |
| Bold | "Your resume doesn't matter..." |

---

### 6. Integration Patterns

> Combine AI image generation with React components, animations, and content distribution pipelines.

**Install:**
```bash
npx skills add ai-creator-suite
```

**Category:** Integration  
**Stars:** 1.2k  
**Version:** v5.0

**Tags:** `patterns` `pipelines` `workflows`

#### Pipeline

```
AI Image → shadcn Card → Framer Motion → LinkedIn/X
```

#### Example

```tsx
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";

export function AIImageCard({ imageUrl, title }) {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card>
        <img src={imageUrl} />
      </Card>
    </motion.div>
  );
}
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Esc` | Close modal |
| `⌘K` | Focus search |

---

## Search

Filter skills by searching:
- Skill name
- Description
- Tags

---

## Resources

- **Live Demo:** https://ai-visual-synthesis.vercel.app
- **GitHub:** https://github.com/marktantongco/ai-visual-synthesis
- **Skill File:** https://raw.githubusercontent.com/marktantongco/ai-visual-synthesis/refs/heads/main/skill.md

---

*Last Updated: March 2026 | Version 5.0*
