# AI Image Generation Prompt Mastery: Complete 2026 Reference Guide

<p align="center">
  <img src="https://img.shields.io/badge/AI%20Image%20Generation-Prompt%20Engineering-blue" alt="Category">
  <img src="https://img.shields.io/badge/2026-Current%20Guide-green" alt="Year">
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License">
  <img src="https://img.shields.io/badge/Models-20%2B-orange" alt="Models Covered">
</p>

> **Comprehensive prompt engineering guide for AI image generation** — Covers single-shot, multi-image reference, similarity/difference prompting, Dolphin & Beaver thinking modes, and detailed comparisons of 20+ AI image generators including Midjourney, DALL-E 3, FLUX, Ideogram, Reve, and more.

---

## Table of Contents

- [What This Guide Covers](#what-this-guide-covers)
- [Quick Reference: AI Image Generator Comparison](#quick-reference-ai-image-generator-comparison)
- [Prompt Perspective Frameworks](#prompt-perspective-frameworks)
  - [Single-Shot Prompt Architecture](#single-shot-prompt-architecture)
  - [Two-Image Reference Prompting](#two-image-reference-prompting)
  - [Three-Image and Multi-Image Reference Prompting](#three-image-and-multi-image-reference-prompting)
  - [Similarity and Difference Prompting](#similarity-and-difference-prompting)
- [Thinking Mode Frameworks](#thinking-mode-frameworks)
  - [Dolphin Mode: Curious, Playful, Inventive](#dolphin-mode-curious-playful-inventive)
  - [Beaver Mode: Practical, Systematic, Step-by-Step](#beaver-mode-practical-systematic-step-by-step)
- [Advanced Techniques, Tools, and Tricks](#advanced-techniques-tools-and-tricks)
  - [Prompt Structure Techniques](#prompt-structure-techniques)
  - [Technical Parameter Manipulation](#technical-parameter-manipulation)
  - [Advanced Composition Techniques](#advanced-composition-techniques)
  - [Lighting and Color Techniques](#lighting-and-color-techniques)
  - [Style Integration Techniques](#specialized-prompt-techniques)
  - [Model-Specific Optimization](#model-specific-optimization)
- [AI Image Generator Comparative Analysis](#ai-image-generator-comparative-analysis)
  - [Generator Overview Comparison](#generator-overview-comparison)
  - [Capability Comparison Matrix](#capability-comparison-matrix)
  - [Technical Specification Comparison](#technical-specification-comparison)
  - [Pricing Comparison](#pricing-comparison)
  - [Use Case Recommendations](#use-case-recommendations)
  - [Prompt Language Compatibility](#prompt-language-compatibility)
- [Quality Assurance](#quality-assurance)
  - [Pre-Generation Quality Checklist](#pre-generation-quality-checklist)
  - [Post-Generation Quality Assessment](#post-generation-quality-assessment)
  - [Iteration Optimization](#iteration-optimization)
- [Related Resources](#related-resources)

---

## What This Guide Covers

| Section | Description |
|---------|-------------|
| **Prompt Perspectives** | Single-shot, two-image, three-image, multi-image reference techniques |
| **Thinking Modes** | Dolphin (creative/playful) and Beaver (systematic/practical) approaches |
| **Advanced Techniques** | Weighted prompts, negative prompting, chaining, conditioning, composition |
| **Generator Comparison** | 20+ AI image generators with detailed capability matrices |
| **Quality Checklists** | Pre-generation, post-generation, and iteration protocols |

**Target Audience:** AI artists, prompt engineers, designers, content creators, and developers working with AI image generation tools.

**Models Covered:** Midjourney, DALL-E 3, ChatGPT Image, FLUX 1/2, Google Imagen 3, Ideogram, Recraft, Reve Image, Hunyuan, Qwen-VL, Wan 2.1, Nano Banana 2, Seedream, Mai Image, P Image, Photon, Lucid Origin, Vidu Q2, Runway Gen-4, Grok Imagine

---

## Quick Reference: AI Image Generator Comparison

| Generator | Text Rendering | Photorealism | Best For | Price |
|-----------|:-------------:|:------------:|----------|-------|
| **Midjourney v7** | ★★★☆☆ | ★★★★★ | Artistic quality | $10-60/mo |
| **FLUX.1 Pro** | ★★★★☆ | ★★★★★ | Speed + API | $0.03-0.12/img |
| **DALL-E 3** | ★★★★☆ | ★★★★★ | Semantic understanding | $20/mo |
| **Ideogram 3.0** | ★★★★★ | ★★★★☆ | Typography | Free-$20/mo |
| **Recraft V4** | ★★★★★ | ★★★★☆ | Vector + style | Free-$36/mo |
| **Reve Image 1.5** | ★★★★★ | ★★★★★ | Overall quality | Free-$10/mo |
| **Wan 2.1** | ★★★★☆ | ★★★★★ | Free tier | Free |

*Full comparison table in [AI Image Generator Comparative Analysis](#ai-image-generator-comparative-analysis)*

---

## Prompt Perspective Frameworks

### Single-Shot Prompt Architecture

The single-shot prompt represents the foundational paradigm: a single text description generating one image.

**Core Structure:**

```
[Subject] + [Action/State] + [Environment] + [Style] + [Technical Parameters]
```

**Example Framework:**

```
A [subject] engaged in [action] within [environment], 
captured in [style] style with [lighting] lighting, 
[composition] composition, [mood] mood, 
[color palette] color scheme, [technical specs]
```

#### Dolphin Mode Application

When operating in Dolphin mode, the prompt writer embraces unexpected combinations, metaphor, and visual surprises.

> **Dolphin Prompt Pattern:** Lead with "what if" questions that challenge conventional visual logic

```
Standard: "A cat sitting on a windowsill"
Dolphin: "A cat perched on a floating windowsill in a nebula, reading a book made of light, 
with constellation patterns forming on its fur"
```

#### Beaver Mode Application

Beaver mode treats prompt construction as a construction project: laying foundations methodically, building incrementally.

> **Beaver Prompt Pattern:** Define subject completely before adding context; build in clear hierarchical structure

```
Step 1 - Foundation: "A professional business portrait"
Step 2 - Detail: "of a female executive in her 40s"
Step 3 - Environment: "standing in a modern corporate office"
Step 4 - Lighting: "with soft natural window light"
Step 5 - Style: "executed in corporate photography style"
Step 6 - Technical: "with shallow depth of field, professional color grading"
```

#### Single-Shot Quality Checklist

| Category | Requirement |
|----------|-------------|
| Subject Clarity | Primary subject is clearly defined |
| Action Coherence | Any described actions are physically plausible |
| Environment Context | Setting is specific and coherent |
| Style Consistency | Described style is internally consistent |
| Lighting Logic | Light source is identifiable and consistent |
| Composition Intent | Framing and placement serve the subject |
| Technical Feasibility | Parameters are achievable by the model |

---

### Two-Image Reference Prompting

Two-image reference prompting introduces a second visual input, allowing the model to synthesize elements from both sources.

#### Techniques

**Technique A: Style-Subject Separation**

One image provides the subject matter while the other contributes the stylistic treatment.

```
Image 1 (Subject): [Description of subject reference]
Image 2 (Style): [Description of style reference]
Prompt: "Generate [subject description] in the [style characteristics]"
```

**Technique B: Compositional Synthesis**

Both images contribute structural or compositional elements.

**Technique C: Element Extraction**

Extract specific elements from each reference image and combine them into a novel configuration.

#### FLUX.2 Multi-Image Support

FLUX.2 supports up to 10 reference images simultaneously:

```
Prompt: "The character design from image 1, wearing the clothing from image 2, 
in the pose from image 3, with the lighting from image 4"
```

#### Two-Image Quality Checklist

| Category | Requirement |
|----------|-------------|
| Source Differentiation | Each source contributes distinct elements |
| Synthesis Coherence | Combined elements create unified image |
| Dominance Balance | Neither source overwhelms the other |
| Novel Output | Result differs from both sources |

---

### Three-Image and Multi-Image Reference Prompting

#### Structural Approaches

| Approach | Description |
|----------|-------------|
| **Subject-Environment-Style Triangle** | Each image contributes to a distinct dimension |
| **Progressive Blend** | Three images establish a gradient of transformation |
| **Element Distribution** | Each image contributes specific, identified elements |

#### Multi-Image Element Registry Template

| Image | Contribution Type | Specific Elements | Weight |
|-------|-------------------|------------------|--------|
| Image 1 | Subject | Human figure, pose | 80% |
| Image 2 | Clothing | Jacket style, pattern | 70% |
| Image 3 | Environment | Urban background | 60% |

---

### Similarity and Difference Prompting

#### Similarity Prompts

| Type | Example |
|------|---------|
| **Exact Similarity** | "Everything similar to [reference] except [modification]" |
| **Partial Similarity** | "Similar in [aspect 1] and [aspect 2] to [reference]" |
| **Stylistic Similarity** | "Everything in the style of [artist reference]" |

#### Difference Prompts

```
Prompt: "Everything similar to [reference] but [specific differences]"
```

#### Transformation Matrix

| Reference Element | Transformation |
|-------------------|----------------|
| Subject | Same type, different instance |
| Action | Same activity, different moment |
| Environment | Same setting type, different location |

---

## Thinking Mode Frameworks

### Dolphin Mode: Curious, Playful, Inventive

Dolphin mode represents an approach that embraces cognitive playfulness, curiosity-driven exploration, and unconventional combinations.

#### Core Principles

| Principle | Description |
|-----------|-------------|
| **Embrace the Unexpected** | Introduce elements that would not occur through logical planning |
| **Productive Contradiction** | Create visual tension with impossible combinations |
| **Sensory Transposition** | Translate sound into visual texture, taste into color |
| **Scale Disruption** | Microscopic becomes monumental, cosmic becomes intimate |
| **Perspective Innovation** | Adopt impossible viewpoints |

#### Prompt Patterns

**Pattern A - The "What If" Chain:**
```
What if [common object] behaved like [unrelated force]?
What if [everyday scene] was actually [hidden reality]?
```

**Pattern B - The Impossible Combination:**
```
[Element A] + [Element B] where [unexpected relationship]
```

**Pattern C - The Sensory Translation:**
```
The [sense] of [experience] translated as [visual element]
```

---

### Beaver Mode: Practical, Systematic, Step-by-Step

Beaver mode represents an engineering approach—methodical, systematic, building methodically.

#### Construction Sequence

| Phase | Focus | Questions |
|-------|-------|-----------|
| Phase 1 | Foundation | What is the subject? What is it doing? What is its state? |
| Phase 2 | Context | Where? When? What lighting? |
| Phase 3 | Style | What artistic approach? What composition? |
| Phase 4 | Technical | What resolution? What parameters? |

#### Beaver Mode Template

```yaml
SUBJECT:
  - Identity: [specific subject type]
  - State: [pose, expression, action]
  - Details: [physical characteristics]

ENVIRONMENT:
  - Setting: [specific location]
  - Background elements: [secondary features]
  - Atmosphere: [mood, weather]

COMPOSITION:
  - Framing: [close-up/mid/wide/full]
  - Angle: [eye-level/bird's eye/worm's eye]
  - Focus: [depth of field]

STYLE:
  - Medium: [artistic tradition]
  - Treatment: [style characteristics]
  - Color: [palette specifications]

TECHNICAL:
  - Resolution: [target]
  - Aspect: [ratio]
  - Quality markers: [detail level]
```

---

## Advanced Techniques, Tools, and Tricks

### Prompt Structure Techniques

| Technique | Description | Best For |
|-----------|-------------|----------|
| **Weighted Terms** | `(element:1.5)` increases emphasis | Controlling relative importance |
| **Negative Prompting** | "no [unwanted elements]" | Removing common artifacts |
| **Prompt Chaining** | Sequential generation where each output informs next | Complex scenes |
| **Conditional Prompting** | `[condition:element]` for branching | Multiple variations |
| **Prompt Modularity** | Reusable component system | Batch generation |

### Technical Parameter Manipulation

#### CFG Scale Guide

| Range | Effect | Best For |
|-------|--------|----------|
| 1-5 | More creative, interpretative | Artistic exploration |
| 7-12 | Balanced adherence | General purpose |
| 13-20 | Strict prompt following | Precise specifications |

#### Sampling Steps

| Steps | Quality | Speed | Best For |
|-------|---------|-------|----------|
| 10-20 | Basic | Fast | Quick iteration |
| 25-35 | Good | Medium | Standard generation |
| 40-60 | High | Slow | Final outputs |

### Advanced Composition Techniques

| Technique | Prompt Specification |
|-----------|---------------------|
| Rule of Thirds | "subject positioned at the left third intersection point" |
| Negative Space | "minimalist composition with 70% negative space" |
| Depth Layering | "three distinct depth layers: foreground, midground, background" |
| Symmetry | "perfect bilateral symmetry in the architectural composition" |

### Lighting and Color Techniques

#### Cinematic Lighting

| Type | Prompt Specification |
|------|---------------------|
| Rembrandt | "single light source at 45-degree angle creating triangle on shadowed cheek" |
| Chiaroscuro | "strong contrast between light and dark, theatrical lighting" |
| Golden Hour | "warm directional sunlight, long shadows, golden color temperature" |
| Blue Hour | "cool ambient light, subtle shadows, twilight atmosphere" |
| Rim Light | "strong backlight creating silhouette edge glow" |

#### Color Harmony

| Type | Prompt Specification |
|------|---------------------|
| Complementary | "blue and orange dominant, high contrast" |
| Analogous | "adjacent colors on color wheel, smooth transitions" |
| Triadic | "three colors equally spaced, vibrant balance" |

### Style Integration Techniques

#### Artistic Movement Reference

| Movement | Keywords |
|----------|----------|
| Impressionism | "loose brushwork, light as subject" |
| Art Deco | "geometric patterns, bold forms, art deco elegance" |
| Surrealism | "unexpected combinations, dreamlike atmosphere" |
| Minimalism | "reduced to essentials, clean lines" |

#### Medium Simulation

```
"watercolor bleeding effect, wet-on-wet technique"
"oil painting with impasto texture, visible brushstrokes"
"ink drawing with varying line weight, sumi-e influence"
```

### Model-Specific Optimization

| Model | Optimization Strategy |
|-------|----------------------|
| Midjourney | Less is more; brief prompts work better |
| DALL-E 3 | Natural language, conversational |
| Stable Diffusion | Explicit technical parameters |
| FLUX | Detailed prompts with numbered references |
| Ideogram | Explicit text specifications |
| Recraft | Style-preserving generation |

---

## AI Image Generator Comparative Analysis

### Generator Overview Comparison

| Generator | Developer | Access | Best For |
|-----------|-----------|--------|----------|
| **Midjourney v7** | Midjourney | Discord | Artistic quality |
| **FLUX.1/2** | Black Forest Labs | API, Web | Speed, multi-image |
| **DALL-E 3** | OpenAI | ChatGPT, API | Semantic understanding |
| **Google Imagen 3** | Google | Vertex AI | Google ecosystem |
| **Ideogram 3.0** | Ideogram AI | Web, API | Typography, text |
| **Recraft V4** | Recraft AI | Web, API | Vector, consistency |
| **Reve Image 1.5** | Reve AI | Web | Overall quality |
| **Wan 2.1** | ByteDance | Web, API | Free tier |
| **Nano Banana 2** | re:scrypt | API | Text rendering |
| **Seedream 5.0** | ByteDance | API | Style control |
| **Hunyuan** | Tencent | API | Speed |
| **Qwen-VL** | Alibaba | API | Chinese language |
| **Grok Imagine** | xAI | Web | Basic generation |
| **Runway Gen-4** | Runway | Web, API | Video frames |

### Capability Comparison Matrix

| Generator | Text | Photo | Artistic | Speed | Free Tier |
|-----------|:----:|:-----:|:--------:|:-----:|:---------:|
| **Midjourney v7** | ★★★☆☆ | ★★★★★ | ★★★★★ | ★★★☆☆ | Trial |
| **FLUX.1 Pro** | ★★★★☆ | ★★★★★ | ★★★★★ | ★★★★★ | Limited |
| **DALL-E 3** | ★★★★☆ | ★★★★★ | ★★★★☆ | ★★★★☆ | Limited |
| **Ideogram 3.0** | ★★★★★ | ★★★★☆ | ★★★★☆ | ★★★★☆ | ✓ |
| **Recraft V4** | ★★★★★ | ★★★★☆ | ★★★★★ | ★★★★☆ | ✓ |
| **Reve Image 1.5** | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★☆ | ✓ |
| **Wan 2.1** | ★★★★☆ | ★★★★★ | ★★★★☆ | ★★★★☆ | ✓ |
| **Grok Imagine** | ★★★☆☆ | ★★★★☆ | ★★★★☆ | ★★★★☆ | ✓ |

### Technical Specification Comparison

| Generator | Max Resolution | Control Options | Multi-Image | Editing |
|-----------|----------------|-----------------|:-----------:|:-------:|
| **Midjourney v7** | 2048×2048+ | Extensive | ✗ | Vary, Pan |
| **FLUX.1 Pro** | 2048×2048 | ControlNet | ✓ (10) | Inpainting |
| **DALL-E 3** | 1024×1024 | Basic | ✗ | Inpainting |
| **Ideogram 3.0** | 1536×1536 | Style lock | ✗ | Magic edit |
| **Recraft V4** | 2048×2048 | Style | ✓ | Vector |
| **Reve Image 1.5** | 2048×2048 | Edit | ✓ | Advanced |

### Pricing Comparison

| Generator | Free Tier | Paid Plans | Per Image |
|-----------|-----------|------------|-----------|
| **Midjourney v7** | 25 images | $10-60/mo | Included |
| **FLUX.1 Pro** | Limited | API | $0.03-0.12 |
| **Ideogram 3.0** | 100/day | $8-20/mo | $0.02-0.10 |
| **Recraft V4** | 50/day | $12-36/mo | $0.03-0.15 |
| **Reve Image 1.5** | 100/day | $9.99/mo | $0.03-0.10 |
| **Wan 2.1** | 500/day | Free | Free |

### Use Case Recommendations

| Use Case | Primary | Secondary |
|----------|---------|-----------|
| **Typography/Text** | Ideogram, Recraft | Nano Banana, Reve |
| **Photorealism** | Midjourney, FLUX, Reve | DALL-E, Imagen |
| **Artistic/Stylized** | Midjourney, Recraft | FLUX |
| **API Integration** | FLUX, Ideogram | Recraft, Runway |
| **Budget-Conscious** | Wan 2.1, Ideogram | Recraft |
| **Chinese Language** | Qwen, Wan, Seedream | Ideogram |

---

## Quality Assurance

### Pre-Generation Quality Checklist

| Category | Critical | High | Medium |
|----------|:--------:|:----:|:------:|
| Subject specification | ✓ | | |
| Action/state description | | ✓ | |
| Environment specification | | ✓ | |
| Style specification | | | ✓ |
| Lighting specification | | ✓ | |
| Internal consistency | ✓ | | |

### Post-Generation Quality Assessment

| Criterion | Evaluation |
|-----------|------------|
| Subject clarity | Can main subject be identified immediately? |
| Anatomical accuracy | Check hands, faces, limbs |
| Technical quality | Resolution, artifacts, color accuracy |
| Aesthetic impact | Composition, lighting, color harmony |

### Iteration Protocol

```
Iteration 1: Basic generation with core prompt
    ↓
Analysis: Identify primary deviation from vision
    ↓
Iteration 2: Address primary issue only
    ↓
Analysis: Verify fix, identify new issues
    ↓
Iteration 3: Address secondary issues
    ↓
Continue until acceptable
```

---

## Related Resources

- [Midjourney Official Documentation](https://docs.midjourney.com)
- [FLUX Model Documentation](https://blackforestlabs.ai/flux/)
- [OpenAI DALL-E Guide](https://platform.openai.com/docs/guides/images)
- [Ideogram API Documentation](https://docs.ideogram.ai)
- [Recraft Getting Started](https://www.recraft.ai/docs)

---

<p align="center">
  <strong>AI Image Generation Prompt Mastery</strong> — Updated March 2026
</p>
