[◈ AI Visual Synthesis](#hero)

- [Quick Start](#quickstart)
- [Architecture](#architecture)
- [Thinking Modes](#thinking-modes)
- [Vocabulary](#vocabulary)
- [Typography](#typography)
- [Templates](#templates)
- [Workflows](#workflows)
- [Resources](#resources)

[GitHub](https://github.com/marktantongco/ai-visual-synthesis) [Install](#quickstart)

v2026.3 // Prompt Engineering Framework

# AI Visual Synthesis

Complete prompt engineering guide with 8-layer architecture, animal thinking modes, design vocabulary, typography combos, and quality checklists.

[↑ Get Started](#quickstart) [↓ Explore](#architecture)

---

## 01 // Quick Start

### Install & Get Started

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/marktantongco/ai-visual-synthesis/main/install.sh)"
```

**Manual Installation**

```bash
# Download SKILL.md
curl -sL "https://raw.githubusercontent.com/marktantongco/ai-visual-synthesis/refs/heads/main/skill.md" > SKILLS.md

# Add to AI instructions
echo "Read SKILLS.md and use 8-Layer Architecture" >> .cursorrules
```

| Resource | Description |
|----------|-------------|
| [GitHub Repo](https://github.com/marktantongco/ai-visual-synthesis) | Source code & documentation |
| [Raw SKILL.md](https://raw.githubusercontent.com/marktantongco/ai-visual-synthesis/refs/heads/main/skill.md) | Direct markdown file |
| [promptc OS](https://github.com/marktantongco/promptc) | Main framework |

---

## 02 // Architecture

### 8-Layer Prompt Architecture

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

#### Layer Breakdown

| Layer | Purpose |
|-------|---------|
| **01 Role** | Define AI expertise level and perspective |
| **02 Context** | Establish product, platform, audience |
| **03 Objective** | Clear success criteria definition |
| **04 Constraints** | Quality guardrails and limits |
| **05 Aesthetic** | Visual style keywords |
| **06 Planning** | Execution strategy |
| **07 Output** | Format specifications |
| **08 Refinement** | Quality review steps |

☑ **Quality Checklist — Architecture**

- [ ] Role defined — who is the AI acting as?
- [ ] Goal clear — one sentence maximum
- [ ] Success criteria stated explicitly
- [ ] Constraints listed (accessibility, performance)
- [ ] Output format requested

---

## 03 // Thinking Modes

### Animal Thinking Modes

| Animal | Mode | Purpose |
|--------|------|---------|
| 🐇 | Rabbit | Multiply Ideas |
| 🦉 | Owl | Deep Analysis |
| 🐜 | Ant | Break Into Steps |
| 🦅 | Eagle | Big Picture Strategy |
| 🐬 | Dolphin | Creative Solutions |
| 🦫 | Beaver | Build Systems |
| 🐘 | Elephant | Cross-Field Connections |

### Recommended Mode Chains

#### 🦅 Eagle → 🦫 Beaver → 🐜 Ant — Build AI Content System

```markdown
# Build AI Content System

Step 1 (Eagle): Think like an eagle flying high above the landscape. Explain the long-term strategy for building an AI content system. What are the core components? How do they connect?

Step 2 (Beaver): Think like a beaver building a dam. Design the system architecture step by step. Create modular components for content generation, storage, and delivery.

Step 3 (Ant): Think like an ant. Break this into the smallest possible implementation steps. Each step should be completable in one session.
```

**Best for:** Building automated content pipelines, AI-powered blogs, or content generation systems.

---

#### 🦉 Owl → 🐬 Dolphin → 🐘 Elephant — Solve Complex Problem

```markdown
# Solve Complex Problem

Step 1 (Owl): Think like an owl — slow, observant and analytical. Examine this problem from multiple perspectives. Identify hidden factors most people overlook.

Step 2 (Dolphin): Think like a dolphin — curious, playful and inventive. Generate creative solutions that most people wouldn't consider. Think outside conventional approaches.

Step 3 (Elephant): Think like an elephant with a powerful memory. Connect solutions to insights from psychology, economics, science, or history. Find analogies and patterns from other fields.
```

**Best for:** Innovative product design, breakthrough features, or solving entrenched problems.

---

#### 🐇 Rabbit → 🦅 Eagle → 🐜 Ant — Brainstorm Product

```markdown
# Brainstorm Channel or Product

Step 1 (Rabbit): Multiply this idea into 10 different variations. Change the angle, change the audience, change the format.

Step 2 (Eagle): Think like an eagle flying high above the landscape. Identify which variations have the strongest long-term potential. Analyze market fit and scalability.

Step 3 (Ant): Break your chosen direction into actionable steps. What needs to happen first? What's the MVP?
```

**Best for:** New product ideation, marketing channel selection, business model exploration.

---

#### 🦫 Beaver → 🐜 Ant → 🦉 Owl — Design Workflow

```markdown
# Design Workflow or Automation

Step 1 (Beaver): Think like a beaver building a dam. Design a practical system that solves this problem step by step. Map out the core workflow components.

Step 2 (Ant): Break into smallest possible steps. Each step should be a discrete action that can be automated. Consider error handling and edge cases.

Step 3 (Owl): Review for gaps and inefficiencies. Validate the workflow makes logical sense. Identify potential bottlenecks.
```

**Best for:** Building automation scripts, designing approval workflows, creating SOPs.

---

#### 🦉 Owl → 🐘 Elephant → 🦅 Eagle — Validate Business

```markdown
# Validate Business Idea

Step 1 (Owl): Conduct deep analysis of this business idea. Examine market size, competition, and feasibility. Identify risks and assumptions that need testing.

Step 2 (Elephant): Research similar successes and failures. Connect to case studies from other industries. What patterns can inform this idea?

Step 3 (Eagle): Evaluate long-term strategic viability. Is this sustainable? Scalable? Defensible? What's the 10,000-foot view?
```

**Best for:** Validating startup ideas, evaluating new business ventures, strategic decisions.

---

☑ **Quality Checklist — Thinking Modes**

- [ ] Mode selected based on task type
- [ ] For complex tasks, modes chained in logical order
- [ ] Each mode serves specific purpose in chain
- [ ] Output from one feeds into next

---

## 04 // Vocabulary

### Design Vocabulary

Use these terms in prompts to control visual output.

**Core Visual Effects**

- **glassmorphism** — Frosted glass panels with translucent backdrop
- **brutalist ui** — Raw, oversized typography with high contrast
- **kinetic typography** — Text that animates and morphs
- **bento grid** — Apple-style asymmetric card mosaic
- **micro-interactions** — Tiny animations for feedback
- **neon accent** — Single bright color pop against dark
- **liquid gradient** — Smooth, animated color blends
- **dark-mode native** — Designed for dark backgrounds first

**Loading & Motion**

- **skeleton loading** — Placeholder shimmer before content
- **ambient motion** — Subtle looping background animation

**Advanced Effects**

- **progressive disclosure** — Reveal content on interaction
- **editorial layout** — Magazine-style content hierarchy
- **neo-brutalism** — Bold shadows, flat colors, thick borders
- **aurora gradients** — Soft flowing northern lights effect
- **noise grain** — Textured overlay adding depth
- **blur overlay** — Background blur for focus
- **morph shapes** — Organic transforming shapes
- **tilt 3d** — Parallax depth on cards
- **custom cursor** — Personalized cursor design
- **particle systems** — Interactive floating elements
- **scanline effect** — Retro CRT horizontal lines
- **vignette** — Darkened edges for focus
- **chromatic aberration** — RGB split glitch effect
- **mesh gradient** — Multi-color organic blending
- **claymorphism** — 3D soft plastic appearance
- **fiber background** — Fiber optic light patterns
- **isotype system** — Repeating graphic symbols
- **duotone** — Two-color image treatment

### Design Combos with Synergies

| Combo | Elements | Best For | Psychology |
|-------|----------|----------|------------|
| **🫧 Glass + Bento** | glassmorphism, bento grid, dark-mode | Dashboards, data viz | Depth + hierarchy + scannability |
| **💥 Brutal + Neon** | brutalist, neon accent, kinetic | Landing pages, bold brands | Urgency + attention + focus |
| **🌊 Liquid + Ambient** | liquid gradient, ambient motion | Hero sections, immersive | Emotion + flow + atmosphere |
| **📰 Editorial + Bento** | editorial, bento grid, progressive | Content platforms, blogs | Authority + modern organization |
| **✨ Micro + Skeleton** | micro-interactions, skeleton loading | Apps, data-heavy interfaces | Reduced perceived wait time |
| **🚀 Full Immersive** | kinetic, liquid, micro, ambient | Marketing sites, launches | Maximum engagement |
| **🎮 Cyberpunk Glow** | neon, chromatic, scanline, dark | Gaming, crypto, tech | Futuristic + innovation |
| **💎 Premium Minimal** | glass, noise grain, duotone | Luxury brands | Exclusivity + sophistication |
| **🧸 Playful 3D** | claymorphism, morph, tilt, cursor | Kids apps, gamified | Friendly + approachable |
| **🌐 Fiber Tech** | fiber, particles, mesh, liquid | Telecom, networks | Connectivity + speed |
| **🎬 Cinematic** | vignette, blur, kinetic, ambient | Film, media | Movie-like atmosphere |
| **📊 Isotype Data** | isotype, bento, skeleton, duotone | Statistics, reports | Data digestible + memorable |

☑ **Quality Checklist — Vocabulary**

- [ ] At least 3 aesthetic keywords used
- [ ] Vocabulary matches target platform
- [ ] Consistent design language throughout

---

## 05 // Typography

### Ultra-Modern Gen-Z Typography Combos

| Display Font | Mono Pairing | Best For |
|--------------|--------------|----------|
| **Space Grotesk** | JetBrains Mono | Tech startups, developer tools, modern SaaS |
| **Syne Bold** | JetBrains Mono | Creative agencies, art portfolios, bold brands |
| **Clash Display** | Space Mono | Fashion, luxury brands, premium products |
| **Inter Tight** | JetBrains Mono | Dashboards, enterprise apps, content platforms |

### Infographic Typography

| Use Case | Font Combination |
|----------|------------------|
| **Data Viz** | Space Grotesk (headers) + Inter (body) + JetBrains Mono (numbers) |
| **Creative** | Syne (display) + Space Grotesk (body) + Clash Display (accent) |
| **Mobile** | Inter Tight (headlines) + Inter (body) + SF Pro (UI) |

---

## 06 // Prompting Strategy

### The Core Insight

> **Vague inputs produce vague outputs. Clear constraints produce structure.**

When prompting AI for web apps, describe **architecture, UX behavior, design language, responsiveness rules, and output format**. Otherwise the model guesses.

The trick: treat prompting like **engineering a machine**.

---

### Beaver Mode — Build the System Step-by-Step

A beaver doesn't start with the dam. It starts with **structure, flow, and containment**. Your prompt should do the same.

**The 6-Component Prompt Framework:**

```
1. ROLE         → Tell the AI what expert it should act as
2. GOAL         → Describe the application clearly
3. FUNCTIONAL   → What the app must do
4. DESIGN       → Describe the aesthetic
5. STACK        → Frameworks, responsiveness, libraries
6. OUTPUT       → What files the AI should generate
```

---

### The Master Prompt Template

```
You are a senior full-stack developer and product designer.

Create a production-ready interactive web application that is fully mobile-responsive.

Objectives
• Build a modern interactive web app with dynamic UI components.
• The interface must follow an ultra-modern Gen-Z design language with high-contrast typography, bold color gradients, glassmorphism, and smooth micro-interactions.

Technical Requirements
• Framework: Next.js (App Router)
• Styling: Tailwind CSS
• Animation: GSAP or Framer Motion
• Components: reusable modular components
• Mobile-first responsive layout
• Accessible semantic HTML

UX Features
• Interactive sections
• Animated transitions
• Responsive navigation
• Hover and scroll interactions
• Modular cards and panels

Design Style
• Ultra-modern
• Sophisticated creative aesthetic
• Dark/light adaptive themes
• Large expressive typography
• Minimal but visually striking layout

Output
Generate:
1. Project folder structure
2. Full source code
3. Instructions to run locally
4. Explanation of key components
```

---

### Dolphin Mode — Creative Ideas Most People Miss

AI responds better when prompts define **interaction metaphors**:

| # | Idea | Description |
|---|------|-------------|
| 1 | Scroll as Navigation | Sections animate like chapters in a story |
| 2 | Skill Map Interface | Interactive node graph |
| 3 | AI-assisted UI | User types → interface rearranges |
| 4 | Card-based micro-apps | Each card opens a mini tool |
| 5 | Data-driven storytelling | Charts animate when scrolled |
| 6 | Gesture-first mobile | Swipe navigation instead of menus |
| 7 | AI search panel | Natural language search that filters |
| 8 | Live theme switcher | User toggles neon / minimal / glass |
| 9 | Canvas mode | User manipulates elements visually |
| 10 | Interactive infographic | The site behaves like a moving infographic |

**Gen-Z design thrives on movement + modular interaction.**

---

### Owl Mode — Hidden Factors Most People Miss

These invisible variables determine whether AI produces a good web app:

| Factor | Why It Matters |
|--------|---------------|
| **Design vocabulary** | Words like *glassmorphism, brutalist UI, kinetic typography* steer visual output |
| **Responsiveness** | Without **mobile-first** constraints, layouts break |
| **Interaction description** | Animation libraries matter (GSAP, Framer Motion) |
| **Output format** | AI behaves better when asked for **folder structure + code files** |
| **Constraints** | Specific stack = more reliable code |

---

### Eagle Mode — Long-Term Strategy

The ecosystem:

```
Prompt Template
      ↓
AI Code Generation
      ↓
Interactive Web App
      ↓
Reusable Components
      ↓
Design System
      ↓
Multiple Apps Generated Faster
```

**Your AI prompt becomes a product generator.**

---

### Ant Mode — Smallest Possible Steps

```
Step 1: write prompt
Step 2: run prompt in AI
Step 3: copy generated code
Step 4: run npm install
Step 5: run npm run dev
```

**Tiny ants move mountains by repetition.**

---

## 07 // 10 Prompt Variations (SEO Optimized)

### 1 — Developer Prompt
**SEO:** how to create a responsive interactive web app with AI

```
Act as a senior full-stack developer.

Generate a mobile-first interactive web app with modern UI/UX.

Requirements:
• Next.js + Tailwind
• Animated UI components
• Responsive grid
• Gen-Z design style
• Modular component architecture

Output the full project structure and source code.
```

---

### 2 — Product Designer Prompt

```
Act as a digital product designer.

Design an interactive web application with an ultra-modern Gen-Z aesthetic.

Include:
• Bold typography
• Gradient color systems
• Glassmorphism UI
• Smooth animated transitions
• Mobile-responsive layouts
```

---

### 3 — Startup Founder Prompt

```
Create a startup-ready interactive web app interface.

The design must feel premium, modern, and mobile responsive.

Focus on:
• Landing page
• Dashboard
• Interactive modules
• Scalable component system
```

---

### 4 — Infographic Web App Prompt
**SEO:** interactive infographic web app

```
Create an interactive infographic web app.

The entire page should behave like a dynamic infographic.

Requirements:
• Animated sections
• Scroll-based interactions
• Mobile responsive
• Modern typography
```

---

### 5 — Gen-Z UI Concept Prompt
**SEO:** ultra-modern Gen-Z design web app

```
Create an ultra-modern Gen-Z style interactive web application.

Design features:
• Neon gradients
• Animated typography
• Card-based UI
• Playful motion effects
```

---

### 6 — AI Product Builder Prompt

```
You are an AI product engineer.

Generate a complete interactive web app with responsive UI and animated components.

Stack:
Next.js
Tailwind CSS
GSAP animations

Provide deploy instructions.
```

---

### 7 — No-Code Friendly Prompt

```
Design an interactive web application concept that could be implemented using low-code tools.

The interface should be mobile-first and visually sophisticated.
```

---

### 8 — Educational Demo Prompt

```
Create a demo interactive web app that teaches users something through visual interaction.

Use animations, cards, and responsive design.
```

---

### 9 — Portfolio Web App Prompt

```
Create an interactive portfolio web application.

Design:
• Ultra modern
• Minimal layout
• Smooth page transitions
• Mobile responsive
```

---

### 10 — Creative Experimental Prompt
**SEO:** experimental interactive web app

```
Design an experimental interactive web app where UI elements move and respond dynamically.

Use bold Gen-Z aesthetics and animated UI behaviors.
```

---

### The Three Layers Formula

Prompting AI for web apps works best when you describe:

```
Function  ←  What the app does
Design    ←  How it looks
Technology ← What tools to use
```

**Miss one layer and the output collapses like a poorly engineered dam.**

---

## 08 // Templates

### Ready-to-Use Prompt Templates

| Template | Description |
|----------|-------------|
| **Web** | Complete Next.js + Tailwind web applications |
| **Mobile** | React Native / Expo mobile app components |
| **Brand** | Complete brand identity with colors, typography, motion |
| **Landing Page** | High-conversion landing page with CTAs |
| **Dashboard** | Analytics dashboard with charts and data viz |
| **API Design** | REST/GraphQL API specification and documentation |

---

## 09 // Workflows

### Common Workflows Reference

| Workflow | Chain | Best For |
|----------|-------|----------|
| **Build AI Content System** | 🦅 Eagle → 🦫 Beaver → 🐜 Ant | Automated content pipelines, AI blogs |
| **Solve Complex Problem** | 🦉 Owl → 🐬 Dolphin → 🐘 Elephant | Product design, breakthrough features |
| **Brainstorm Product** | 🐇 Rabbit → 🦅 Eagle → 🐜 Ant | Product ideation, channel selection |
| **Design Workflow** | 🦫 Beaver → 🐜 Ant → 🦉 Owl | Automation scripts, SOPs |
| **Validate Business** | 🦉 Owl → 🐘 Elephant → 🦅 Eagle | Startup validation, venture assessment |
| **Generate Viral Content** | 🐇 Rabbit → 🐬 Dolphin → 🦅 Eagle | Social media, marketing campaigns |

☑ **Quality Checklist — Workflows**

- [ ] Modes chained in logical order (analysis → creation → execution)
- [ ] Each mode serves specific purpose
- [ ] Output from one feeds into next
- [ ] Selected chain matches use-case

---

## 10 // Resources

### Links & References

| Resource | Description |
|----------|-------------|
| [GitHub Repository](https://github.com/marktantongco/ai-visual-synthesis) | Source code & full documentation |
| [SKILL.md](https://raw.githubusercontent.com/marktantongco/ai-visual-synthesis/refs/heads/main/skill.md) | Complete skill file for AI agents |
| [promptc OS](https://github.com/marktantongco/promptc) | Main framework repository |
| [Master Reference](https://raw.githubusercontent.com/marktantongco/promptc/master/MASTER_REFERENCE.md) | Complete prompt engineering guide |
| [Vercel](https://vercel.com) | Free hosting for deployments |

---

### Quick Reference — Add to AI Instructions

```
Before generating code, read SKILLS.md and apply the 8-Layer Architecture.
```

◈ AI Visual Synthesis // promptc OS v2026.3
