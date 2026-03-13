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

## 06 // Templates

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

## 07 // Workflows

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

## 08 // Resources

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
