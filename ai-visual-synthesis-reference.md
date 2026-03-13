# AI Visual Synthesis — Markdown Reference

> **Complete markdown reference for AI Visual Synthesis framework**
> Version: v2026.3 | Live: https://ai-visual-synthesis-fixed.vercel.app/

---

## Table of Contents

1. [Quick Reference](#quick-reference)
2. [8-Layer Architecture](#8-layer-architecture)
3. [Animal Thinking Modes](#animal-thinking-modes)
4. [Design Vocabulary](#design-vocabulary)
5. [Typography Combos](#typography-combos)
6. [Prompt Templates](#prompt-templates)
7. [Workflows](#workflows)
8. [Quality Checklists](#quality-checklists)

---

## Quick Reference

### Install Commands

```bash
# Install via script
bash -c "$(curl -fsSL https://raw.githubusercontent.com/marktantongco/ai-visual-synthesis/main/install.sh)"

# Manual install
curl -sL "https://raw.githubusercontent.com/marktantongco/ai-visual-synthesis/main/skill.md" > SKILLS.md
echo "Read SKILLS.md and use 8-Layer Architecture" >> .cursorrules
```

### Add to AI Instructions

```
Before generating code, read SKILLS.md and apply the 8-Layer Architecture.
```

---

## 8-Layer Architecture

### Template

```
# ROLE → CONTEXT → OBJECTIVE → CONSTRAINTS → AESTHETIC → PLANNING → OUTPUT → REFINEMENT

ROLE
You are a [expert role].

CONTEXT
Product: [name]
Platform: [mobile/web]
Audience: [who]

OBJECTIVE
[One clear sentence of success]
Success criteria:
- [criterion 1]
- [criterion 2]

CONSTRAINTS
- Mobile-first
- WCAG AA accessibility
- 60fps animation budget

AESTHETIC
- [visual style keywords]

PLANNING
1. Define information architecture
2. Define layout and grid
3. Validate accessibility

OUTPUT FORMAT
Generate:
1. [file type]
2. [instructions]

REFINEMENT
- Critique for clarity
- Refine once for structure
- Refine once for polish
```

### Layer Breakdown

| Layer | Purpose | Missing It Causes |
|-------|---------|------------------|
| **01 Role** | Define AI expertise level | Generic responses |
| **02 Context** | Establish product/platform | Misaligned output |
| **03 Objective** | Clear success criteria | Aimless generation |
| **04 Constraints** | Quality guardrails | Mediocre output |
| **05 Aesthetic** | Visual style keywords | Dull design |
| **06 Planning** | Execution strategy | Structural mistakes |
| **07 Output** | Format specifications | Incomplete files |
| **08 Refinement** | Quality review steps | First-draft quality |

---

## Animal Thinking Modes

### Mode Reference

| Animal | Mode | Purpose |
|--------|------|---------|
| 🐇 | Rabbit | Multiply Ideas |
| 🦉 | Owl | Deep Analysis |
| 🐜 | Ant | Break Into Steps |
| 🦅 | Eagle | Big Picture Strategy |
| 🐬 | Dolphin | Creative Solutions |
| 🦫 | Beaver | Build Systems |
| 🐘 | Elephant | Cross-Field Connections |

### Mode Templates

#### 🐇 Rabbit — Multiply Ideas

```
Take this idea and multiply it into 10 different variations.
For each variation: change the angle, change the audience, change the format.
Present the results as a list of distinct ideas.
```

#### 🦉 Owl — Deep Analysis

```
Think like an owl — slow, observant and analytical.
Examine this problem from multiple perspectives and identify
the hidden factors most people overlook.
```

#### 🦅 Eagle — Big Picture Strategy

```
Think like an eagle flying high above the landscape.
Explain the long-term strategy behind this idea and how the pieces connect.
```

#### 🦫 Beaver — Build Systems

```
Think like a beaver building a dam.
Design a practical system that solves this problem step by step.
```

### Mode Chains

| Goal | Mode Chain | Best For |
|------|------------|----------|
| Build AI Content System | 🦅 Eagle → 🦫 Beaver → 🐜 Ant | Automated content pipelines |
| Solve Complex Problem | 🦉 Owl → 🐬 Dolphin → 🐘 Elephant | Product design, breakthrough features |
| Brainstorm Product | 🐇 Rabbit → 🦅 Eagle → 🐜 Ant | Product ideation, channel selection |
| Design Workflow | 🦫 Beaver → 🐜 Ant → 🦉 Owl | Automation scripts, SOPs |
| Validate Business | 🦉 Owl → 🐘 Elephant → 🦅 Eagle | Startup validation |

---

## Design Vocabulary

### Core Visual Effects

| Term | Description |
|------|-------------|
| **glassmorphism** | Frosted glass panels with translucent backdrop |
| **brutalist ui** | Raw, oversized typography with high contrast |
| **kinetic typography** | Text that animates and morphs |
| **bento grid** | Apple-style asymmetric card mosaic |
| **micro-interactions** | Tiny animations for feedback |
| **neon accent** | Single bright color pop against dark |
| **liquid gradient** | Smooth, animated color blends |
| **dark-mode native** | Designed for dark backgrounds first |

### Advanced Effects

| Term | Description |
|------|-------------|
| **skeleton loading** | Placeholder shimmer before content |
| **ambient motion** | Subtle looping background animation |
| **progressive disclosure** | Reveal content on interaction |
| **neo-brutalism** | Bold shadows, flat colors, thick borders |
| **aurora gradients** | Soft flowing northern lights effect |
| **noise grain** | Textured overlay adding depth |
| **blur overlay** | Background blur for focus |
| **morph shapes** | Organic transforming shapes |
| **tilt 3d** | Parallax depth on cards |
| **custom cursor** | Personalized cursor design |
| **particle systems** | Interactive floating elements |
| **scanline effect** | Retro CRT horizontal lines |
| **vignette** | Darkened edges for focus |
| **chromatic aberration** | RGB split glitch effect |
| **mesh gradient** | Multi-color organic blending |
| **claymorphism** | 3D soft plastic appearance |
| **fiber background** | Fiber optic light patterns |
| **isotype system** | Repeating graphic symbols |
| **duotone** | Two-color image treatment |

### Design Combos

| Combo | Elements | Best For |
|-------|----------|----------|
| **🫧 Glass + Bento** | glassmorphism, bento grid, dark-mode | Dashboards, data viz |
| **💥 Brutal + Neon** | brutalist, neon accent, kinetic | Landing pages, bold brands |
| **🌊 Liquid + Ambient** | liquid gradient, ambient motion | Hero sections, immersive |
| **🚀 Full Immersive** | kinetic, liquid, micro, ambient | Marketing sites, launches |
| **🎮 Cyberpunk Glow** | neon, chromatic, scanline, dark | Gaming, crypto, tech |
| **💎 Premium Minimal** | glass, noise grain, duotone | Luxury brands |

---

## Typography Combos

### Gen-Z Typography

| Display Font | Mono Pairing | Best For |
|--------------|--------------|----------|
| **Space Grotesk** | JetBrains Mono | Tech startups, modern SaaS |
| **Syne Bold** | JetBrains Mono | Creative agencies, portfolios |
| **Clash Display** | Space Mono | Fashion, luxury brands |
| **Inter Tight** | JetBrains Mono | Dashboards, enterprise apps |

### Infographic Typography

| Use Case | Font Combination |
|----------|------------------|
| **Data Viz** | Space Grotesk + Inter + JetBrains Mono |
| **Creative** | Syne + Space Grotesk + Clash Display |
| **Mobile** | Inter Tight + Inter + SF Pro |

---

## Prompt Templates

### Ready-to-Use Templates

| Template | Description |
|----------|-------------|
| **Web** | Complete Next.js + Tailwind web applications |
| **Mobile** | React Native / Expo mobile app components |
| **Brand** | Complete brand identity with colors, typography, motion |
| **Landing Page** | High-conversion landing page with CTAs |
| **Dashboard** | Analytics dashboard with charts and data viz |
| **API Design** | REST/GraphQL API specification and documentation |

### Web App Template

```
ROLE: Senior full-stack developer + product designer

GOAL: [Describe your app in one sentence]

FUNCTIONAL REQUIREMENTS
- Dynamic UI components
- Mobile-first responsive layout
- Interactive sections with user feedback
- Modular, reusable component architecture

UI/UX DESIGN LANGUAGE
- Ultra-modern Gen-Z aesthetic
- High-contrast typography
- Bold color gradients
- Glassmorphism panels
- Smooth micro-interactions

TECHNICAL STACK
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Animation: Framer Motion or GSAP
- Components: shadcn/ui

OUTPUT FORMAT
Generate:
1. Project folder structure
2. Full source code (all files)
3. Instructions to run locally
4. Key component explanations

CONSTRAINTS
- Mobile-first always
- WCAG AA accessibility minimum
- 60fps animation budget
```

---

## Workflows

### Common Workflows Reference

| Workflow | Chain | Best For |
|----------|-------|----------|
| Build AI Content System | 🦅 Eagle → 🦫 Beaver → 🐜 Ant | Automated content pipelines |
| Solve Complex Problem | 🦉 Owl → 🐬 Dolphin → 🐘 Elephant | Product design, breakthrough features |
| Brainstorm Product | 🐇 Rabbit → 🦅 Eagle → 🐜 Ant | Product ideation, channel selection |
| Design Workflow | 🦫 Beaver → 🐜 Ant → 🦉 Owl | Automation scripts, SOPs |
| Validate Business | 🦉 Owl → 🐘 Elephant → 🦅 Eagle | Startup validation, venture assessment |
| Generate Viral Content | 🐇 Rabbit → 🐬 Dolphin → 🦅 Eagle | Social media, marketing campaigns |

### Workflow Example: Landing Page Design

```
Step 1 (Rabbit): Generate 10+ headline variations
- Problem-aware headlines
- Solution-focused headlines
- Benefit-driven headlines
- Social proof headlines

Step 2 (Eagle): Structure the page architecture
- Hero section with CTA
- Problem/Agitation section
- Solution/features section
- Social proof section
- Pricing/CTA section

Step 3 (Beaver): Design each section
- Hero: Hook + visual + CTA
- Features: 3-column bento grid
- Testimonials: Carousel or grid
- CTA: Contrast section

Step 4 (Ant): Optimize for conversion
- Button placement and sizing
- Form field minimization
- Loading states
- Mobile touch targets
```

---

## Quality Checklists

### Architecture Checklist

- [ ] Role defined — who is the AI acting as?
- [ ] Goal clear — one sentence maximum
- [ ] Success criteria stated explicitly
- [ ] Constraints listed (accessibility, performance)
- [ ] Output format requested

### Design Checklist

- [ ] Platform specified — mobile or web or hybrid
- [ ] 3+ aesthetic keywords included
- [ ] Animation library named
- [ ] Mobile-first stated explicitly

### Workflow Checklist

- [ ] Modes chained in logical order
- [ ] Each mode serves specific purpose
- [ ] Output from one feeds into next
- [ ] Selected chain matches use-case

---

## Resources

| Resource | Link |
|----------|------|
| GitHub Repository | https://github.com/marktantongco/ai-visual-synthesis |
| SKILL.md | https://raw.githubusercontent.com/marktantongco/ai-visual-synthesis/main/skill.md |
| promptc OS | https://github.com/marktantongco/promptc |
| Live Site | https://ai-visual-synthesis-fixed.vercel.app/ |

---

*AI Visual Synthesis // promptc OS v2026.3*
