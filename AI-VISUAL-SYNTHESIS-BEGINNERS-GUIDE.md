# AI Visual Synthesis — Complete Beginner's Guide (2026)

> **The ultimate start-to-finish guide for learning AI image generation prompt engineering** — From your first prompt to professional-grade outputs. Combines prompt mastery techniques with the 8-Layer Architecture framework.

---

## Table of Contents

1. [Quick Start: Your First AI Image in 5 Minutes](#quick-start-your-first-ai-image-in-5-minutes)
2. [Understanding How AI Image Generation Works](#understanding-how-ai-image-generation-works)
3. [The 8-Layer Architecture: Your Prompt Framework](#the-8-layer-architecture-your-prompt-framework)
4. [Prompt Perspective Techniques](#prompt-perspective-techniques)
5. [Animal Thinking Modes](#animal-thinking-modes)
6. [Prompt Categories & Templates](#prompt-categories--templates)
7. [Advanced Techniques](#advanced-techniques)
8. [Design Vocabulary & Typography](#design-vocabulary--typography)
9. [AI Generator Comparison Guide](#ai-generator-comparison-guide)
10. [Quality Assurance Checklist](#quality-assurance-checklist)
11. [Common Mistakes to Avoid](#common-mistakes-to-avoid)
12. [Next Steps](#next-steps)

---

## Quick Start: Your First AI Image in 5 Minutes

### Step 1: Choose Your Tool

| Tool | Best For | Free Tier | Link |
|------|----------|-----------|------|
| **Midjourney** | Artistic, stylized images | 25 images | [discord.com](https://discord.com) |
| **DALL-E 3** | Semantic understanding, text | $5 credits | [chat.openai.com](https://chat.openai.com) |
| **Ideogram** | Text in images | 100/day | [ideogram.ai](https://ideogram.ai) |
| **Wan 2.1** | Free quality images | 500/day | [wan-ai.com](https://wan-ai.com) |
| **FLUX.1 Pro** | Speed, multi-image | Limited | [blackforestlabs.ai](https://blackforestlabs.ai) |

### Step 2: Write Your First Prompt

**The Simple Formula:**
```
[Subject] doing [action] in [setting], with [style] style
```

**Your First Prompt (Copy & Paste):**
```
A cute orange cat sitting on a windowsill, golden hour sunlight, 
photorealistic, cozy atmosphere --ar 16:9 --v 6
```

### Step 3: Generate & Iterate

1. Enter your prompt in your chosen tool
2. Wait 10-30 seconds
3. Review the results
4. **Iterate** — modify one element and regenerate
5. Save your best result

---

## Understanding How AI Image Generation Works

### The Simple Explanation

AI image generators use **diffusion models** — they start with random noise and gradually "denoise" it into an image that matches your text description.

```
Text Prompt → AI Understanding → Noise → Gradual Denoising → Final Image
```

### Key Concepts

| Concept | What It Means | Practical Use |
|---------|--------------|---------------|
| **Prompt** | Your text description | Be specific: "golden retriever" vs "dog" |
| **CFG Scale** | How closely AI follows your prompt | Low (1-5) = creative, High (13-20) = strict |
| **Steps** | Generation refinement iterations | More steps = more detail, slower |
| **Seed** | Random noise starting point | Same seed + same prompt = similar output |
| **Negative Prompt** | What you DON'T want | Use for removing common artifacts |

### Attention Mechanics

**Front-load important words!** AI models pay most attention to words at the start of your prompt.

```
❌ BAD:  A beautiful sunset over the ocean with birds flying and palm trees
✅ GOOD: Sunset ocean birds palm trees -- A beautiful golden hour scene
```

---

## The 8-Layer Architecture: Your Prompt Framework

This is the **foundation** for writing professional prompts. Each layer adds a dimension of control.

### The Complete Template

```
# ROLE → CONTEXT → OBJECTIVE → CONSTRAINTS → AESTHETIC → PLANNING → OUTPUT → REFINEMENT

ROLE
You are a [expert role, e.g., professional photographer, concept artist].

CONTEXT
Product: [what you're creating]
Platform: [mobile/web/print]
Audience: [who is this for]

OBJECTIVE
[One clear sentence of success]
Success criteria:
- [criterion 1]
- [criterion 2]

CONSTRAINTS
- [constraint 1, e.g., mobile-first]
- [constraint 2, e.g., WCAG AA accessibility]
- [constraint 3, e.g., 60fps if animation]

AESTHETIC
- [visual style keywords, e.g., glassmorphism, neon accent]

PLANNING
1. [first step]
2. [second step]
3. [third step]

OUTPUT FORMAT
Generate:
1. [file type or format]
2. [specific instructions]

REFINEMENT
- Critique for clarity
- Refine once for structure
- Refine once for polish
```

### Layer Breakdown

| Layer | Purpose | Without It... |
|-------|---------|---------------|
| **01 Role** | Define AI's expertise | Generic responses |
| **02 Context** | Establish product/platform | Misaligned output |
| **03 Objective** | Clear success criteria | Aimless generation |
| **04 Constraints** | Quality guardrails | Mediocre output |
| **05 Aesthetic** | Visual style keywords | Dull design |
| **06 Planning** | Execution strategy | Structural mistakes |
| **07 Output** | Format specifications | Incomplete files |
| **08 Refinement** | Quality review steps | First-draft quality |

### Layer Colors (For Visual Reference)

| Layer | Color Code | Mnemonic |
|-------|------------|----------|
| Foundation | `#4DFFFF` | Cyan for clarity |
| Optical | `#7B5CFF` | Purple for vision |
| Material | `#FF4FD8` | Pink for texture |
| Consistency | `#FFB000` | Gold for identity |
| Cinematic | `#00FF87` | Green for action |
| Refinement | `#FF6B35` | Orange for polish |
| Orchestration | `#FF006E` | Magenta for control |

---

## Prompt Perspective Techniques

These are the **specific techniques** for controlling what your AI generates.

### 1. Single-Shot Prompting (One Image)

The foundational technique — one text description → one image.

**Core Structure:**
```
[Subject] + [Action/State] + [Environment] + [Style] + [Technical Parameters]
```

**Example Templates:**

| Level | Template |
|-------|----------|
| Beginner | `A [subject] in [setting]` |
| Intermediate | `A [subject] doing [action] in [environment], [lighting] lighting, [style] style` |
| Advanced | `A [subject] engaged in [action] within [environment], captured in [style] with [composition], [mood] mood, [color] palette, [technical specs]` |

### 2. Two-Image Reference

Combine two images — one for subject, one for style.

**Techniques:**

| Technique | Description | Example |
|-----------|-------------|---------|
| **Style-Subject** | Subject from Image 1, Style from Image 2 | Photo of your pet + Van Gogh style |
| **Compositional** | Structure from Image 1, Content from Image 2 | Landscape layout + portrait subject |
| **Element Extraction** | Specific elements from each | Outfit from one, pose from another |

**FLUX.2 Specific:**
```
The character from image 1, wearing the clothes from image 2, 
in the pose from image 3, with lighting from image 4
```

### 3. Three-Image & Multi-Image

**Structural Approaches:**

| Approach | Description |
|----------|-------------|
| **Subject-Environment-Style** | Each image = one dimension |
| **Progressive Blend** | Images as transformation gradient |
| **Element Distribution** | Each image contributes specific elements |

### 4. Similarity & Difference

**Similarity Prompts:**
```
"Everything similar to [reference] except [modification]"
"Similar in [aspect 1] to [reference], but [different aspect]"
```

**Difference Prompts:**
```
"Everything like [reference] but [specific changes]"
```

---

## Animal Thinking Modes

These are **seven thinking approaches** for different creative needs. Use them based on what you're trying to achieve.

### Mode Reference

| Animal | Mode | When to Use |
|--------|------|-------------|
| 🐇 **Rabbit** | Multiply Ideas | Brainstorming, generating many options |
| 🦉 **Owl** | Deep Analysis | Understanding problems, research |
| 🐜 **Ant** | Break Into Steps | Execution, systematic work |
| 🦅 **Eagle** | Big Picture | Strategy, planning, vision |
| 🐬 **Dolphin** | Creative Solutions | Inventive, playful combinations |
| 🦫 **Beaver** | Build Systems | Practical, methodical construction |
| 🐘 **Elephant** | Cross-Field Connections | Finding patterns across domains |

### Mode Chains (Ready-to-Use Combinations)

| Goal | Chain | Best For |
|------|-------|----------|
| Build AI Content System | 🦅 Eagle → 🦫 Beaver → 🐜 Ant | Automated pipelines |
| Solve Complex Problem | 🦉 Owl → 🐬 Dolphin → 🐘 Elephant | Product design |
| Brainstorm Product | 🐇 Rabbit → 🦅 Eagle → 🐜 Ant | Ideation |
| Design Workflow | 🦫 Beaver → 🐜 Ant → 🦉 Owl | Automation scripts |
| Validate Business | 🦉 Owl → 🐘 Elephant → 🦅 Eagle | Assessment |
| Generate Viral Content | 🐇 Rabbit → 🐬 Dolphin → 🦅 Eagle | Marketing |

### Dolphin Mode: Creative Prompting (Detailed)

**When you want imaginative, surprising results:**

**Core Principles:**
- Embrace the unexpected
- Productive contradiction (impossible but interesting)
- Sensory transposition (sound → visual, taste → color)
- Scale disruption (microscopic ↔ cosmic)
- Perspective innovation (impossible viewpoints)

**Dolphin Prompt Patterns:**
```
What if [common object] behaved like [unrelated force]?
[Element A] + [Element B] where [unexpected relationship]
The [sense] of [experience] translated as [visual]
```

**Example:**
```
Standard: "A cat on a bed"
Dolphin:  "A cat floating in zero gravity where walls are frozen mist 
           and furniture hangs from invisible balloons"
```

### Beaver Mode: Systematic Prompting (Detailed)

**When you need predictable, professional results:**

**Construction Sequence:**

| Phase | Focus | Questions |
|-------|-------|-----------|
| Phase 1 | Foundation | What is the subject? What is it doing? What's its state? |
| Phase 2 | Context | Where? When? What lighting? |
| Phase 3 | Style | What artistic approach? What composition? |
| Phase 4 | Technical | What resolution? What parameters? |

**Beaver Template:**
```yaml
SUBJECT:
  - Identity: [specific type]
  - State: [pose, expression]
  - Details: [characteristics]

ENVIRONMENT:
  - Setting: [location]
  - Background: [features]
  - Atmosphere: [mood, weather]

COMPOSITION:
  - Framing: [close-up/mid/wide/full]
  - Angle: [eye-level/bird's eye/worm's eye]
  - Focus: [depth of field]

STYLE:
  - Medium: [artistic tradition]
  - Treatment: [style]
  - Color: [palette]

TECHNICAL:
  - Resolution: [target]
  - Aspect: [ratio]
  - Quality: [detail level]
```

---

## Prompt Categories & Templates

These are **ready-to-use prompt templates** for common image types.

### Portrait Prompts

| Title | Prompt Template | Best Tool |
|-------|----------------|-----------|
| Cinematic Portrait | `Ultra-photorealistic portrait of [subject], [lighting], shallow depth of field, [lens]mm lens, skin detail, cinematic color grade --ar 2:3` | Midjourney |
| Cyberpunk | `Futuristic [character], neon-lit [setting], glowing [implants], [atmosphere], cinematic close-up, ultra-detailed, 8K` | DALL-E 3 |
| Fine Art Oil | `Classical oil painting portrait, [lighting] lighting, warm [tones], impasto texture, [artist] technique, museum quality` | Stable Diffusion |
| Editorial Fashion | `High fashion editorial, [style] makeup, studio lighting, [backdrop], sharp focus, 35mm photography` | FLUX.1 |
| Vintage | `Candid portrait of [era] [person], vintage [aesthetic], faded colors, film grain, authentic style` | DALL-E 3 |

### Landscape Prompts

| Title | Prompt Template | Best Tool |
|-------|----------------|-----------|
| Aerial | `Aerial view of [landscape] at [time], [mood], National Geographic style, long exposure --ar 16:9` | Midjourney |
| Minimalist | `Vast minimalist [landscape] at [time], [composition], dramatic shadows, hyper-realistic, award-winning` | FLUX.1 |
| Watercolor | `[City/landscape] at [time], watercolor style, flowing ink washes, [artist] influence` | Midjourney |
| Cyberpunk City | `Sprawling cyberpunk [city], towering [structures], [vehicles], neon [ads], --ar 21:9` | Stable Diffusion |
| Fantasy | `Majestic [structure] floating on [element], [atmosphere], fantasy illustration, intricate details` | FLUX.1 |

### Product Prompts

| Title | Prompt Template | Best Tool |
|-------|----------------|-----------|
| Luxury Shot | `Premium [product] on [surface], studio lighting, rim lights, macro, [material] texture, advertising quality` | DALL-E 3 |
| Lifestyle | `Minimal [product] with [items], [light] from [source], editorial photography, neutral tones --ar 4:3` | Midjourney |
| Tech | `Sleek [gadget], floating in zero gravity, holographic [interface], metallic detail, tech photography, dark background` | FLUX.1 |
| Food | `Michelin star [food], on [plate], [color] [element], exquisite lighting, macro food photography` | DALL-E 3 |

### Abstract Prompts

| Title | Prompt Template | Best Tool |
|-------|----------------|-----------|
| Fluid | `Abstract fluid art, liquid [material] flowing in zero gravity, iridescent [colors], macro, physics simulation --ar 1:1` | Midjourney |
| Geometric | `Sacred geometry [shape], neon [colors], holographic [structure], dark void, mathematical precision, glowing edges` | Stable Diffusion |
| Glitch | `Glitch art, digital [artifacts], corrupted [element], pixel sorting, cyberpunk [aesthetic]` | Stable Diffusion |
| Fractal | `Infinite [fractal] zoom, impossible geometry, [material] details on [color], cosmic scale, hyper-detailed` | FLUX.1 |

### Concept Art Prompts

| Title | Prompt Template | Best Tool |
|-------|----------------|-----------|
| Epic Fantasy | `Massive [creature] vs [character] at [location], cinematic wide shot, [atmosphere], hyper-detailed, [artist] style, ArtStation` | Stable Diffusion |
| Sci-Fi | `Colossal [structure] orbiting [planet], [vehicles], hard sci-fi aesthetic, widescreen cinematic, [influence] --ar 21:9` | Midjourney |
| Cyberpunk | `Cyberpunk [location], stacked [structures], [elements], [atmosphere], heavily atmospheric` | Midjourney |
| Steampunk | `Victorian steampunk [character/setting], [elements], warm [lighting], industrial aesthetic` | Stable Diffusion |

---

## Advanced Techniques

### Prompt Structure Techniques

| Technique | Syntax | Best For |
|-----------|--------|----------|
| **Weighted Terms** | `(element:1.5)` | Increasing emphasis |
| **Negative Prompting** | `--no element` or `no [unwanted]` | Removing artifacts |
| **Prompt Chaining** | Generate → Use output as input | Complex scenes |
| **Conditional** | `[condition:element]` | Multiple variations |
| **Modularity** | Reusable components | Batch generation |

### Technical Parameters

**CFG Scale Guide:**

| Range | Effect | Use Case |
|-------|--------|----------|
| 1-5 | More creative, unexpected | Artistic exploration |
| 7-12 | Balanced | General purpose |
| 13-20 | Strict adherence | Precise specifications |

**Sampling Steps:**

| Steps | Quality | Speed | Use Case |
|-------|---------|-------|----------|
| 10-20 | Basic | Fast | Quick iteration |
| 25-35 | Good | Medium | Standard |
| 40-60 | High | Slow | Final output |

### Composition Techniques

| Technique | Prompt |
|-----------|--------|
| Rule of Thirds | `subject positioned at left third intersection point` |
| Negative Space | `minimalist composition with 70% negative space` |
| Depth Layering | `three distinct layers: foreground, midground, background` |
| Symmetry | `perfect bilateral symmetry in composition` |

### Lighting Techniques

| Type | Prompt |
|------|--------|
| Rembrandt | `single light source at 45-degree angle creating triangle on shadowed cheek` |
| Chiaroscuro | `strong contrast between light and dark, theatrical lighting` |
| Golden Hour | `warm directional sunlight, long shadows, golden color temperature` |
| Blue Hour | `cool ambient light, subtle shadows, twilight atmosphere` |
| Rim Light | `strong backlight creating silhouette edge glow` |

### Color Harmony

| Type | Prompt |
|------|--------|
| Complementary | `blue and orange dominant, high contrast` |
| Analogous | `adjacent colors on color wheel, smooth transitions` |
| Triadic | `three colors equally spaced, vibrant balance` |

### Style Integration

**Artistic Movements:**

| Movement | Keywords |
|----------|----------|
| Impressionism | `loose brushwork, light as subject` |
| Art Deco | `geometric patterns, bold forms, art deco elegance` |
| Surrealism | `unexpected combinations, dreamlike atmosphere` |
| Minimalism | `reduced to essentials, clean lines` |

**Medium Simulation:**
```
"watercolor bleeding effect, wet-on-wet technique"
"oil painting with impasto, visible brushstrokes"
"ink drawing with varying line weight, sumi-e influence"
```

---

## Design Vocabulary & Typography

### Core Visual Effects (27 Terms)

**Use these keywords to specify visual style:**

| Term | Description | Use Case |
|------|-------------|----------|
| `glassmorphism` | Frosted glass, translucent | Modern UI, cards |
| `brutalist ui` | Raw, oversized type, high contrast | Bold landing pages |
| `kinetic typography` | Animating, morphing text | Marketing, headlines |
| `bento grid` | Apple-style card mosaic | Dashboards |
| `micro-interactions` | Tiny feedback animations | Buttons, hover states |
| `neon accent` | Bright color pop against dark | Gaming, crypto |
| `liquid gradient` | Smooth animated color | Hero sections |
| `dark-mode native` | Designed dark-first | Apps, platforms |
| `skeleton loading` | Shimmer placeholders | Loading states |
| `ambient motion` | Subtle looping animation | Backgrounds |

### Advanced Effects

| Term | Description |
|------|-------------|
| `neo-brutalism` | Bold shadows, flat colors, thick borders |
| `aurora gradients` | Soft flowing northern lights |
| `noise grain` | Textured overlay for depth |
| `blur overlay` | Background blur for focus |
| `morph shapes` | Organic transforming shapes |
| `tilt 3d` | Parallax depth on cards |
| `particle systems` | Interactive floating elements |
| `scanline effect` | Retro CRT horizontal lines |
| `vignette` | Darkened edges for focus |
| `chromatic aberration` | RGB split glitch effect |
| `mesh gradient` | Multi-color organic blending |
| `claymorphism` | 3D soft plastic appearance |
| `fiber background` | Fiber optic light patterns |
| `duotone` | Two-color image treatment |

### Design Combos (Proven Pairings)

| Combo | Elements | Best For |
|-------|----------|----------|
| **Glass + Bento** | glassmorphism, bento grid, dark-mode | Dashboards |
| **Brutal + Neon** | brutalist, neon accent, kinetic | Landing pages |
| **Liquid + Ambient** | liquid gradient, ambient motion | Hero sections |
| **Cyberpunk Glow** | neon, chromatic, scanline, dark | Gaming |
| **Premium Minimal** | glass, noise grain, duotone | Luxury brands |

### Typography Combos

**Gen-Z Display Fonts:**

| Display Font | Mono Pairing | Best For |
|--------------|--------------|----------|
| **Space Grotesk** | JetBrains Mono | Tech startups |
| **Syne Bold** | JetBrains Mono | Creative agencies |
| **Clash Display** | Space Mono | Fashion, luxury |
| **Inter Tight** | JetBrains Mono | Dashboards |

---

## AI Generator Comparison Guide

### Quick Comparison

| Generator | Text | Photo | Artistic | Best For | Price |
|-----------|:----:|:-----:|:--------:|----------|-------|
| **Midjourney v7** | ★★★☆☆ | ★★★★★ | ★★★★★ | Artistic quality | $10-60/mo |
| **FLUX.1 Pro** | ★★★★☆ | ★★★★★ | ★★★★★ | Speed + API | $0.03-0.12/img |
| **DALL-E 3** | ★★★★☆ | ★★★★★ | ★★★★☆ | Semantic understanding | $20/mo |
| **Ideogram 3.0** | ★★★★★ | ★★★★☆ | ★★★★☆ | Typography/text | Free-$20/mo |
| **Recraft V4** | ★★★★★ | ★★★★☆ | ★★★★★ | Vector + style | Free-$36/mo |
| **Reve Image 1.5** | ★★★★★ | ★★★★★ | ★★★★★ | Overall quality | Free-$10/mo |
| **Wan 2.1** | ★★★★☆ | ★★★★★ | ★★★★☆ | Free tier | Free |

### Use Case Selection

| Need | Recommended Tool |
|------|-----------------|
| **Text in images** | Ideogram, Recraft, Reve |
| **Photorealism** | Midjourney, FLUX, Reve, Wan |
| **Artistic stylization** | Midjourney, Recraft, FLUX |
| **Vector graphics** | Recraft |
| **API integration** | FLUX, Ideogram, Recraft |
| **Budget-conscious** | Wan 2.1, Ideogram free |
| **Chinese language** | Qwen, Wan, Seedream |

### Model-Specific Tips

| Model | Optimization |
|-------|--------------|
| Midjourney | Less is more; brief prompts work better |
| DALL-E 3 | Natural language, conversational |
| Stable Diffusion | Explicit technical parameters |
| FLUX | Detailed prompts with numbered references |
| Ideogram | Explicit text specifications |
| Recraft | Style-preserving generation |

---

## Quality Assurance Checklist

### Pre-Generation Checklist

| Category | Item | Priority |
|----------|------|----------|
| **Role** | Is the AI's role/ expertise defined? | Critical |
| **Objective** | Is the goal clear in one sentence? | Critical |
| **Subject** | Is the primary subject specified? | Critical |
| **Action/State** | Is the subject's pose/activity clear? | High |
| **Environment** | Is the setting specific? | High |
| **Style** | Is the aesthetic defined? | High |
| **Lighting** | Is lighting specified? | High |
| **Technical** | Are resolution/aspect ratio set? | Medium |
| **Constraints** | Are quality limits stated? | Medium |
| **Internal Consistency** | Are elements logically compatible? | Critical |

### Post-Generation Assessment

| Criterion | Question |
|-----------|----------|
| Subject Clarity | Can you identify the main subject immediately? |
| Anatomical Accuracy | Check hands, faces, limbs for errors |
| Physical Plausibility | Do objects obey physics? |
| Technical Quality | Resolution correct? No artifacts? |
| Aesthetic Impact | Composition effective? Colors pleasing? |

### Iteration Protocol

```
1. Generate with core prompt
        ↓
2. Analyze: What's wrong?
        ↓
3. Fix ONE issue
        ↓
4. Generate again
        ↓
5. Repeat until acceptable
```

**Common Fixes:**

| Problem | Solution |
|---------|----------|
| Subject unclear | Add more specific descriptors |
| Style not achieved | Reference specific artists/movements |
| Lighting wrong | Specify light source explicitly |
| Artifacts | Reduce CFG, increase steps |
| Too generic | Add specific details |

---

## Common Mistakes to Avoid

### Beginner Mistakes

| Mistake | Why It's Bad | Fix |
|---------|--------------|-----|
| Too many words | AI attention dilutes | Front-load key concepts |
| Vague descriptors | "Beautiful" means nothing | Use specific: "golden hour" |
| Ignoring negative prompts | Artifacts persist | Add `--no` or negative list |
| No iteration | First try rarely best | Plan 3-5 iterations |
| Wrong tool | Results suffer | Match tool to use case |

### Intermediate Mistakes

| Mistake | Why It's Bad | Fix |
|---------|--------------|-----|
| Inconsistent style | Results look scattered | Use style lock/reference |
| Ignoring parameters | Missing aspect/resolution | Set these upfront |
| No reference images | Hard to maintain consistency | Use --cref, --sref |
| Over-weighted terms | Unnatural results | Keep weights near 1.0-1.3 |

### Advanced Mistakes

| Mistake | Why It's Bad | Fix |
|---------|--------------|-----|
| Skipping refinement | Output not production-ready | Add post-processing |
| No quality gates | Inconsistent results | Implement checklists |
| Ignoring hybrid workflows | Leaving value on table | Combine AI + traditional tools |
| No orchestration | Manual, slow process | Build agent pipelines |

---

## Next Steps

### Learning Path

| Week | Focus | Actions |
|------|-------|---------|
| **Week 1** | Basics | Generate 50+ images, try all tools |
| **Week 2** | Techniques | Practice single-shot, two-image, negative prompts |
| **Week 3** | Styles | Experiment with art movements, lighting |
| **Week 4** | Consistency | Learn character reference, style lock |
| **Week 5** | Advanced | Try orchestration, agent workflows |
| **Week 6+** | Mastery | Build your prompt library, specialize |

### Resources

| Resource | Link |
|----------|------|
| Midjourney Docs | [docs.midjourney.com](https://docs.midjourney.com) |
| FLUX Documentation | [blackforestlabs.ai](https://blackforestlabs.ai) |
| OpenAI Images Guide | [platform.openai.com](https://platform.openai.com/docs/guides/images) |
| Ideogram API | [docs.ideogram.ai](https://docs.ideogram.ai) |
| Recraft Getting Started | [recraft.ai/docs](https://www.recraft.ai/docs) |

### Practice Exercises

1. **Exercise 1:** Generate the same subject in 5 different artistic styles
2. **Exercise 2:** Use the same reference image with 3 different style references
3. **Exercise 3:** Create a character and generate them in 10 different poses
4. **Exercise 4:** Replicate a famous photograph using only text prompts
5. **Exercise 5:** Design a complete brand photoshoot with consistent style

---

## Summary

**Key Takeaways:**

1. **Start simple** — Master single-shot prompts before multi-image
2. **Use the 8-Layer Architecture** — It provides structure for any prompt
3. **Pick the right tool** — Match generator to your specific need
4. **Iterate relentlessly** — Your first prompt is never your best
5. **Think in modes** — Rabbit for ideas, Beaver for execution, Dolphin for creativity
6. **Learn vocabulary** — Design terms = predictable results

---

*AI Visual Synthesis Complete Beginner's Guide — Version 2026.3*
*Based on the 8-Layer Architecture and Prompt Mastery frameworks*
