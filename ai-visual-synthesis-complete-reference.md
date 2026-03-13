# AI Visual Synthesis — Complete Reference

> **Unified prompt engineering framework combining prompt templates, skill layers, and design vocabulary**
> Version: v2026.3 | Live: https://ai-visual-synthesis-fixed.vercel.app/

---

## Table of Contents

1. [Quick Reference](#quick-reference)
2. [8-Layer Architecture](#8-layer-architecture)
3. [Prompt Categories & Templates](#prompt-categories--templates)
4. [Skill Layers Framework](#skill-layers-framework)
5. [Animal Thinking Modes](#animal-thinking-modes)
6. [Design Vocabulary](#design-vocabulary)
7. [Typography Combos](#typography-combos)
8. [Workflows](#workflows)
9. [Quality Checklists](#quality-checklists)

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

## Prompt Categories & Templates

### Category Definitions

| ID | Category | Icon | Description |
|----|----------|------|-------------|
| portrait | Portrait | 👤 | Human subjects, character studies, facial expressions |
| landscape | Landscape | 🌄 | Natural environments, cityscapes, aerial views |
| product | Product | 📦 | Commercial items, product photography, lifestyle |
| abstract | Abstract | 🌀 | Non-representational, patterns, textures, concepts |
| architectural | Architecture | 🏛️ | Buildings, structures, interior design |
| concept | Concept Art | ⚔️ | Fantasy, sci-fi, imaginative scenes |

### Portrait Prompts

| Title | Prompt | Tool | Tags |
|-------|--------|------|------|
| Cinematic Portrait | Ultra-photorealistic portrait of a woman, golden hour backlighting, shallow depth of field, 85mm lens, skin texture detail, cinematic color grade, --ar 2:3 --v 6.0 --style raw | Midjourney | Photorealism, Lighting, Cinematic |
| Cyberpunk Hacker | Futuristic cyberpunk hacker, neon-lit underground lab, glowing cybernetic implants, rain-soaked atmosphere, cinematic close-up, ultra-detailed, 8K, concept art style | DALL·E 3 | Cyberpunk, Character, Sci-Fi |
| Fine Art Oil | Classical oil painting portrait, Rembrandt lighting, warm amber tones, rich impasto texture, old master technique, museum quality, extremely detailed brush strokes | Stable Diffusion | Art History, Classical, Painterly |
| Editorial Fashion | High fashion editorial portrait, Vogue style, striking avant-garde makeup, studio lighting, stark minimal backdrop, sharp focus, 35mm photography, high contrast | Flux.1 | Fashion, Editorial, Studio |
| Neon Noir | Moody noir detective portrait, backlit by red neon signs, smoke filling the air, wet rain reflections on face, cinematic shadow play, 50mm f/1.4 | Midjourney | Noir, Neon, Moody |
| Fantasy Ranger | Elven ranger portrait in ancient forest, dappled sunlight, detailed leather armor, mystical glowing aura, sharp focus, ArtStation trending, fantasy illustration | Stable Diffusion | Fantasy, Elven, Armor |
| Sci-Fi Astronaut | Close-up of an astronaut inside an illuminated helmet, reflecting a dying red star, high-tech suit details, dramatic chiaroscuro lighting, unreal engine 5 render, cinematic | Midjourney | Space, Astronaut, UE5 |
| Vintage Polaroid | A candid portrait of a 1970s rockstar, vintage polaroid aesthetic, faded colors, light leaks, film grain, authentic 70s style, emotional and raw | DALL·E 3 | Vintage, Film, 70s |
| Ethereal Beauty | Ethereal soft-focus portrait of a glowing goddess, translucent holographic skin, floating in space, bioluminescent details, cosmic background, dreamlike | Flux.1 | Ethereal, Cosmic, Surreal |
| Street Photography | Gritty street photography portrait, elderly man with deep wrinkles, bustling Tokyo street at night, neon blur background, authentic, Leica M10, 35mm | Midjourney | Street, Gritty, Tokyo |
| Anime Protagonist | Intense anime protagonist looking at camera, Studio Ghibli meets Cyberpunk Edgerunners style, cel shaded, glowing eyes, dynamic wind, highly detailed | Stable Diffusion | Anime, Cel Shaded, Intense |
| Historical Royal | Renaissance era queen, immensely detailed embroidered velvet gown, gold jewelry, soft window light, classical composition, hyper-realistic 8k | Midjourney | Renaissance, Royal, Historical |
| Double Exposure | Double exposure silhouette portrait of a man merged with a dense misty pine forest, surrealistic, moody monochrome, conceptual photography | DALL·E 3 | Double Exposure, Conceptual, Surreal |
| Pop Art Poster | Vibrant pop art portrait, Andy Warhol style, bright contrasting halftone dots, flat bold colors, retro comic book aesthetic, screen print | Flux.1 | Pop Art, Retro, Halftone |

### Landscape Prompts

| Title | Prompt | Tool | Tags |
|-------|--------|------|------|
| Aerial Dreamscape | Aerial view of bioluminescent forest at night, glowing blue and purple foliage, misty valleys, cinematic mood, National Geographic photography, long exposure, --ar 16:9 --v 6.0 | Midjourney | Fantasy, Aerial, Night |
| Minimalist Desert | Vast minimalist desert at golden hour, perfect symmetry, single dead tree, dramatic shadows, hyper-realistic photography, ultra-high contrast, award-winning composition | Flux.1 | Minimalism, Golden Hour, Desert |
| Watercolor City | Tokyo skyline at dusk, loose watercolor style, flowing ink washes, pastel gradient sky, street photography meets impressionism, Yoshida Hiroshi influence | Midjourney | Watercolor, Urban, Japan |
| Cyber Metropolis | Sprawling cyberpunk metropolis from ground level, towering skyscrapers, flying cars, dense vertical city layers, neon holographic advertisements, --ar 21:9 | Stable Diffusion | Cyberpunk, City, Sci-Fi |
| Alien Terraform | Bizarre alien landscape, crimson atmosphere, floating magnetic metallic islands, crystal flora, twin suns setting, epic sci-fi concept art, highly detailed | DALL·E 3 | Alien, Sci-Fi, Concept |
| Nordic Fjord | Epic photorealistic nordic fjord, immense scale, dramatic sheer cliffs, dark turbulent water, low hanging moody clouds, drone photography, 8k resolution | Midjourney | Nature, Epic, Drone |
| Post-Apocalyptic City | Overgrown ruined city street, crumbling concrete structures reclaimed by lush thick jungle vines, shafts of sunlight, atmospheric mist, the last of us style, --ar 16:9 | Midjourney | Ruins, Overgrown, Atmospheric |
| Synthwave Highway | Retrowave neon grid landscape, endless 80s outrun highway heading towards a giant wireframe sunset, magenta and cyan palette, vaporwave aesthetic | Stable Diffusion | Synthwave, Retro, Vaporwave |
| Ethereal Cloud Palace | Majestic marble castle floating on massive glowing clouds, infinite pastel sky, golden morning light, heavenly, fantasy illustration, intricate details | Flux.1 | Fantasy, Castle, Heavenly |
| Bioluminescent Cave | Vast underground cavern filled with glowing turquoise crystal structures and bioluminescent mushrooms, underground river, mysterious lighting, fantasy environment | DALL·E 3 | Cave, Glowing, Underground |
| Frozen Tundra | Endless frozen ice fields, jagged ice anomalies, aurora borealis covering the entire night sky, extreme wide angle lens, stunning astrophotography | Midjourney | Ice, Aurora, Astrophotography |
| Micro-Landscape | Macro photography of an entire tiny mountain range growing on a mossy log, miniature ecosystem, extreme depth of field, tilt-shift effect, incredibly detailed | Stable Diffusion | Macro, Miniature, Tilt-Shift |
| Volcanic Eruption | Dramatic volcanic eruption at night seen from the sea, rivers of lava, lightning strikes in ash clouds, explosive energy, cinematic action, hyper-realism | Flux.1 | Volcano, Action, Dramatic |
| Serene Zen Garden | Perfectly raked sand zen garden, ancient mossy boulders, a single cherry blossom tree dropping petals, peaceful morning mist, Japanese aesthetic, calming | Midjourney | Zen, Peaceful, Japan |

### Product Prompts

| Title | Prompt | Tool | Tags |
|-------|--------|------|------|
| Luxury Product Shot | Premium perfume bottle on black marble surface, studio lighting with rim lights, macro photography, crystal reflections, ultra-detailed glass texture, advertising quality | DALL·E 3 | Luxury, Perfume, Studio |
| Lifestyle Context | Minimal wooden desk with Apple MacBook, warm morning light from window, artisan coffee cup, succulent plant, editorial lifestyle photography, neutral tones, --ar 4:3 | Midjourney | Lifestyle, Editorial, Minimal |
| Futuristic Gadget | Sleek sci-fi smartwatch floating in zero gravity, holographic interface projections, metallic chassis detail, tech product photography, dark background with neon accents | Flux.1 | Tech, Sci-Fi, Floating |
| Minimalist Sneaker | Modern designer sneaker floating in pure white void, dynamic explosive lighting, high contrast shadows, hyper-realistic 3D render, Nike style commercial | Midjourney | Sneaker, Fashion, 3D Render |
| Organic Cosmetics | Organic skincare cream jar resting on a smooth wet pebble surrounded by fresh eucalyptus leaves, water ripples, natural soft sunlight, spa aesthetic | Stable Diffusion | Organic, Skincare, Nature |
| Cyber-Deck Device | Custom retro-futuristic cyberdeck hacking terminal, mechanical keyboard, countless glowing switches, CRT monitors, cluttered cyberpunk workbench background | Midjourney | Cyberdeck, Retro-Tech, Hardware |
| Gourmet Food Shot | Michelin star restaurant plating, seared scallop on a black plate with vibrant green puree splashes and micro-herbs, exquisite lighting, macro food photography | DALL·E 3 | Food, Gourmet, Macro |
| Liquid Splash | High-speed macro photography of a single strawberry falling into splashing milk, perfectly frozen motion, crisp lighting, vibrant colors, commercial grade | Flux.1 | Splash, High-Speed, Commercial |
| Abstract Bottle Concept | Wine bottle made entirely of flowing water, conceptual product design, blue translucent liquid physics simulation, black seamless background, ultra detail | Midjourney | Conceptual, Liquid, Design |
| Vintage Camera | Beautifully preserved vintage Leica rangefinder camera resting on an old leather map, warm dramatic spotlighting, dust motes in the air, nostalgic mood | Stable Diffusion | Vintage, Camera, Nostalgia |
| Cosmic Keyboard | Mechanical keyboard where the keys are glowing tiny galaxies, cosmos inside resin keycaps, RGB lighting transitioning into nebula colors, top-down view | DALL·E 3 | Keyboard, Cosmic, Unique |
| Crystal Watch | High-end mechanical luxury watch made of transparent crystal, exposed gears catching refracted rainbow light, dramatic dark studio setting | Flux.1 | Watch, Luxury, Crystal |
| Neon Energy Drink | Energy drink can glowing with neon green radioactive light, condensation drops on the metal, surrounded by dark ice cubes, aggressive striking aesthetic | Midjourney | Energy, Neon, Commercial |
| Origami Bag | Designer leather handbag folded like complex origami, minimalist architectural fashion, soft pastel studio backdrop, soft diffused lighting, Vogue editorial | Stable Diffusion | Fashion, Bag, Origami |

### Abstract Prompts

| Title | Prompt | Tool | Tags |
|-------|--------|------|------|
| Fluid Dynamics | Abstract fluid art, liquid metal mercury flowing in zero gravity, iridescent color shifts, macro photography, physics simulation, black background, --ar 1:1 --v 6.0 | Midjourney | Fluid, Macro, Iridescent |
| Geometric Neon | Sacred geometry mandala, neon cyan and purple lines, holographic crystalline structure, dark void background, mathematical precision, glowing edges, 8K render | Stable Diffusion | Geometry, Neon, Sacred |
| Organic Growth | Microscopic organic growth patterns, bioluminescent cell structures, electron microscope aesthetic, teal and amber color palette, scientific beauty, extreme detail | DALL·E 3 | Microscopic, Bio, Science |
| Glass Dispersion | Shattering glass prisms floating in anti-gravity, sharp geometric shards, refracting intense laser light into rainbow spectrums, chaotic beauty, raytracing | Flux.1 | Glass, Prisms, Raytracing |
| Op Art Illusion | High contrast black and white optical illusion pattern, mind-bending recursive geometry, Escher inspired, vector art style, perfectly symmetrical | Midjourney | Illusion, Op-Art, B&W |
| Digital Distortion | Glitch art databending, digital tearing artifacts, corrupted video signal, pixel sorting, chaotic RGB shift, cyberpunk error screen aesthetic | Stable Diffusion | Glitch, Digital, Corrupt |
| Vibronic Waves | Sound waves materialized into glowing 3D liquid neon threads, pulsating to an unseen beat, dark background, electric energy, dynamic sweeping lines | DALL·E 3 | Sound, Waves, Neon |
| Soft Body Physics | Satisfying 3D render of soft fluffy spheres squishing together in a tight box, pastel matte colors, tactile texture, Cinema4D style aesthetic, playful | Midjourney | 3D, Tactile, Pastel |
| Fractal Universe | Infinite Mandelbrot fractal zoom, impossible geometry, golden metallic details on deep navy blue, cosmic scale, hyper-detailed mathematical art | Flux.1 | Fractal, Math, Cosmic |
| Minimalist Bauhaus | Abstract minimalist Bauhaus composition, simple circles and rectangles, primary colors red yellow blue on off-white, clean lines, modernist poster design | Stable Diffusion | Bauhaus, Minimalist, Design |
| Ethereal Smoke | Swirling wisps of multi-colored smoke dancing in slow motion, volumetric lighting, velvet smooth gradients, elegant abstract composition, deep black space | Midjourney | Smoke, Elegant, Flowing |
| Circuit Board Maze | Abstract macro of a golden glowing printed circuit board that looks like a vast alien city maze, electric blue current pulsing through the tracks | DALL·E 3 | Circuit, Tech, Maze |
| Origami Folds | Abstract topography made of folded white paper, sharp intersecting creases, soft shadow interplay highlighting geometry, clean minimalist aesthetic | Flux.1 | Paper, Origami, Shadows |
| Synesthesia | Visualizing the feeling of jazz music, wildly chaotic yet harmonious splashes of vibrant paint drops, gold foil accents, explosive energy, abstract expressionism | Midjourney | Jazz, Abstract, Expressionism |

### Architectural Prompts

| Title | Prompt | Tool | Tags |
|-------|--------|------|------|
| Brutalist Majesty | Monumental brutalist architecture, raw concrete textures, dramatic overcast sky, low angle perspective, architectural photography, black and white with subtle warmth, --ar 3:2 | Midjourney | Brutalism, B&W, Bold |
| Glass Utopia | Ultra-modern glass pavilion in lush tropical garden, transparent walls, perfect symmetry, golden hour reflections, architectural visualization, photorealistic rendering | Flux.1 | Modern, Glass, Tropical |
| Ancient Ruins | Overgrown ancient temple ruins in deep jungle, dramatic shafts of light through canopy, mist, vines reclaiming stone, historical fantasy, adventure photography style | DALL·E 3 | History, Nature, Ruins |
| Gothic Futuristic | Cyberpunk gothic cathedral, flying buttresses combined with neon signs and exhaust vents, towering dystopian religious architecture, cinematic dark fantasy | Midjourney | Gothic, Cyberpunk, Dark |
| Desert Oasis Villa | Luxurious modern minimalist villa in the middle of sand dunes, sandstone architecture blending with nature, turquoise infinity pool, warm sunset lighting | Stable Diffusion | Villa, Desert, Luxury |
| Underground City | Enormous subterranean cavern city, carved into rock, glowing fungi lighting, suspension bridges, dwarven architecture aesthetic, epic scale | DALL·E 3 | Subterranean, Fantasy, Epic |
| Parametric Zaha Hadid | Futuristic parametric art museum, sweeping curved metallic exterior, Zaha Hadid style fluid architecture, pristine white environment, ultra-modern | Flux.1 | Parametric, Fluid, Museum |
| Cyber-Slums | Dense vertical cyberpunk slum, stacked shipping container housing, chaotic cables, neon signs from noodle bars, rain pouring, heavily atmospheric | Midjourney | Slum, Cyberpunk, Dense |
| Bio-Architecture | Building grown from living giant trees and biomaterials, organic curves, elven city style, green energy, glowing pods, harmonious with nature, optimistic future | Stable Diffusion | Bio, Elven, Organic |
| Steampunk Factory | Massive Victorian steampunk factory interior, giant brass gears, steam venting, iron catwalks, warm glowing furnaces, industrial revolution aesthetic | Midjourney | Steampunk, Industrial, Victorian |
| Sci-Fi Space Station | Interior corridor of an opulent interstellar generation ship, clean white curves, zero-gravity gardens, massive window showing galaxy, 2001 Space Odyssey vibe | DALL·E 3 | Space, Sci-Fi, Interior |
| Floating Castle | A massive medieval stone castle levitating on a chunk of earth in the sky, waterfalls cascading into the void, sunset backlighting, high fantasy concept art | Flux.1 | Floating, Castle, Fantasy |
| Abandoned Mall | Liminal space photography, abandoned 1980s shopping mall, empty dried out fountain, flickering fluorescent lights, eerie nostalgic atmosphere, decaying pastel colors | Midjourney | Liminal, Abandoned, 80s |
| Micro-Apartment | Ingenious ultra-compact transformer apartment interior in Tokyo, clever space-saving minimalist design, raw wood and concrete, daylight streaming in | Stable Diffusion | Interior, Minimalist, Clever |

### Concept Art Prompts

| Title | Prompt | Tool | Tags |
|-------|--------|------|------|
| Epic Fantasy Battle | Massive ancient dragon vs. armored knight on volcanic mountain peak, cinematic wide shot, dramatic storm, lava glow, hyper-detailed concept art, Greg Rutkowski style, trending ArtStation | Stable Diffusion | Fantasy, Epic, ArtStation |
| Space Opera | Colossal alien megastructure orbiting gas giant, military spacecraft fleet, sci-fi hard science aesthetic, widescreen cinematic, Mass Effect + Interstellar influence, --ar 21:9 | Midjourney | Sci-fi, Space, Cinematic |
| Solarpunk City | Utopian solarpunk megacity, vertical gardens on skyscrapers, solar panels integrated in architecture, diverse community market, warm afternoon light, optimistic future, illustrated style | DALL·E 3 | Utopia, Solarpunk, Green |
| Mecha Hangar | Giant battle mech undergoing repairs in immense industrial sci-fi hangar, sparks flying, tiny human engineers moving around, dramatic lighting, highly detailed anime concept art | Flux.1 | Mecha, Sci-Fi, Hangar |
| Eldritch Horror | Cosmic horror entity emerging from churning stormy ocean, impossible geometry, terrifying scale, Lovecraftian nightmare, dark moody concept painting, ominous | Midjourney | Horror, Lovecraft, Cosmic |
| Steampunk Explorer | Victorian steampunk explorer in flying brass airship charting unknown territory above the clouds, detailed instruments, telescope, adventurous mood, rich oil painting | Stable Diffusion | Steampunk, Airship, Adventure |
| Post-Human Evolution | Transcendent cybernetic human entity plugged into a massive glowing central AI brain, wires connecting to nervous system, Matrix style dystopian future, high concept | DALL·E 3 | Cybernetic, AI, Dystopian |
| Deep Sea Discovery | Submersible vehicles discovering glowing ancient civilization ruins at the bottom of the Mariana Trench, bioluminescent deep sea creatures, suspenseful underwater atmosphere | Midjourney | Deep Sea, Discovery, Underwater |
| Magical Academy | Interior of an endless magical library, floating books returning to impossible shelves, glowing runes, scholars in robes, Harry Potter meets Escher, wondrous fantasy | Flux.1 | Magic, Library, Fantasy |
| Time Travel Paradox | Multiple versions of the same person from different timelines meeting in a chaotic vortex of clocks and shattering reality, surreal, mind-bending conceptual illustration | Stable Diffusion | Time Travel, Surreal, Vortex |
| Mutant Wasteland | Post-apocalyptic scavenger standing over a mutated giant creature skeleton in a toxic glowing wasteland, Mad Max aesthetic, gritty concept design | Midjourney | Wasteland, Mutant, Post-Apocalyptic |
| Virtual Reality Dive | First person perspective diving into a retro-cyber cyberspace grid, data streams rushing past, TRON aesthetic, immersive digital realm, high speed motion blur | DALL·E 3 | VR, Cyberspace, Retro-Cyber |
| Mythical Forge | Dwarven blacksmith forging a glowing magic sword on a magma anvil deep underground, sparks, intense heat, sweat, epic fantasy character design | Flux.1 | Forge, Dwarves, Magic |
| Dyson Sphere Construction | Swarm of drones building panels for a massive Dyson sphere around a blazing star, extreme sci-fi scale, harsh stark contrasts of space and sun, conceptual | Midjourney | Dyson Sphere, Sci-Fi, Space |

---

## Skill Layers Framework

### Layer Colors

| Layer | Color |
|-------|-------|
| Foundation | `#4DFFFF` |
| Optical Layer | `#7B5CFF` |
| Material Layer | `#FF4FD8` |
| Consistency Layer | `#FFB000` |
| Cinematic Layer | `#00FF87` |
| Refinement Layer | `#FF6B35` |
| Orchestration Layer | `#FF006E` |

### Skill Nodes

#### 01 — Technical Prompt Engineering (Foundation)

**Description:** Constructing prompts as structured blueprints — the interface between human intent and machine execution. Think periodic table, not textbook: objective parameters that produce predictable results.

**Skills:**
- **The Scaffold Method** — Subject → Style → Technical → Mood → Negative — structured prompt layers for reproducible output.
- **Universal Blueprint** — A subject [action/pose], [environment], [lighting], [camera], [style], [mood], [negative] template that works across all platforms.
- **Front-Loading** — CLIP and T5 attention weights front tokens highest — always lead with your most critical descriptors.
- **Keyword Weighting** — Use (keyword:1.3) for emphasis, [keyword:0.7] for de-emphasis. Stack modifiers to control semantic drift.
- **Photographic Vocabulary** — 500+ curated style tokens mapped to real optical outcomes. Replace vague adjectives with measurable parameters.
- **Agent Prompting Patterns** — Meta-prompts, chain-of-thought injection, and role-based system prompts for LLM-driven generation pipelines.

**Platforms:** Midjourney, SDXL, FLUX.1, DALL·E 3

---

#### 02 — Optical Physics & Depth Perception (Optical Layer)

**Description:** The foundation of all visual engineering — understanding how focal length governs psychological perception. Every focal length is a philosophical statement about the distance between the viewer and the subject.

**Skills:**
- **Focal Length Mapping** — 14mm–800mm semantic map: 14mm exaggerates environment, 85mm flatters portraiture, 400mm compresses backgrounds. Each focal length is a visual argument.
- **Center of Projection (COP)** — The mathematical origin of perspective — how COP distance determines whether subjects feel intimate, heroic, or detached.
- **Inverse Square Law** — Light intensity falls off at 1/d². Understanding this is the difference between flat and dimensional lighting.
- **Sensor Format Impact** — Full frame vs. crop vs. medium format: how sensor size affects depth of field, compression, and tonal rendering.

**Platforms:** Midjourney, SDXL, Flux.1, ComfyUI

---

#### 03 — Advanced Photographic Literacy (Optical Layer)

**Description:** Reconstructing real-world physics — the key to believable photorealism and tactile truth. The amateur applies labels; the professional calculates light.

**Skills:**
- **Lighting Pattern Mastery** — Rembrandt, butterfly, loop, split, broad, short — each pattern creates a specific shadow map that communicates psychological intent.
- **Lighting Ratios** — Key-to-fill ratios (1:1 flat → 8:1 dramatic) mapped to emotional register. The ratio is the mood.
- **Color Temperature Control** — 2700K (candlelight) → 10000K (overcast shade) — precise Kelvin values as prompt tokens for scientifically accurate color casts.
- **Aperture Control** — f/1.2 isolates, f/22 maximizes depth. Bokeh quality (circular vs. cat-eye) engineered through specific lens descriptors.
- **Lens Selection Psychology** — Each optical design (spherical, anamorphic, tilt-shift) creates a distinct relationship between subject, environment, and viewer.

**Platforms:** Midjourney, SDXL, Flux.1

---

#### 04 — Strategic Negation & Material Science (Material Layer)

**Description:** Telling the AI what not to include — overcoming the uncanny valley through material physics. Strategic exclusion is as important as inclusion.

**Skills:**
- **Negative Prompting with Weights** — Compound exclusion at weight ≥1.2: (blurry, deformed, plastic skin:1.4). Target artifacts specifically rather than generically.
- **Skin Realism Management** — Subsurface scattering vocabulary, pore-level texture tokens, and specular highlight control for defeating the plastic-skin artifact.
- **Subsurface Scattering (SSS)** — Light penetrates skin 2–3mm and exits at a different point. SSS prompts simulate this biological reality for tactile believability.
- **Fresnel Reflectance** — Surfaces reflect more at grazing angles. Fresnel-aware prompts create physically accurate specularity on skin, glass, and wet surfaces.
- **Anisotropic Reflections** — Directional micro-surface structure (hair, brushed metal, silk) creates stretched rather than circular highlights — critical for material convincingness.

**Platforms:** SDXL, ComfyUI, Flux.1, A1111

---

#### 05 — Identity Preservation & Consistency (Consistency Layer)

**Description:** Maintaining specific character or style across multiple generations — critical for storytelling, brand work, and production pipelines.

**Skills:**
- **Seed Locking** — Fix the noise seed to maintain compositional consistency across iterations. Combine with cfg_scale variation for controlled exploration.
- **Character Reference (--cref)** — Midjourney's --cref flag with --cw weight control: inject a reference image's identity into new generations at controlled strength.
- **Style Reference (--sref)** — Separate style from content — apply an aesthetic reference without forcing the subject. --sref + --cref simultaneously for full control.
- **Multi-Reference Consistency** — IP-Adapter + ControlNet + LoRA stacking in ComfyUI for cross-platform character consistency. Character sheets as reference anchors.

**Platforms:** Midjourney --cref, SD / ComfyUI, Flux.1, IP-Adapter

---

#### 06 — Anamorphic Mastery & Cinematic Grammar (Cinematic Layer)

**Description:** Engineering narrative scale and texture through cylindrical optics — the hallmark of visual architects. Anamorphic is not an aesthetic choice; it is a physics decision.

**Skills:**
- **Squeeze Factor Selection** — 1.33x (gentle widescreen) vs. 2.0x (extreme cinematic). Squeeze ratio determines oval bokeh geometry and horizontal flare character.
- **Anamorphic Artifact Engineering** — Intentional horizontal lens flares (blue/amber), oval bokeh, and focus breathing — the physical signatures of cylindrical optics.
- **De-Squeeze Workflow** — Generating in squeezed format then de-squeezing in post for authentic anamorphic results rather than simulated ones.
- **Lens Breathing Control** — The focus-distance relationship unique to anamorphic designs — background scale shifts as focus changes, adding organic life.

**Platforms:** Midjourney, SDXL, ComfyUI, DaVinci Resolve

---

#### 07 — Post-Processing & Hybrid Workflows (Refinement Layer)

**Description:** Treating AI generation as the beginning, not the end — refining outputs into professional assets through hybrid AI + traditional workflows.

**Skills:**
- **Inpainting** — Mask-based regional regeneration: fix hands, correct faces, replace backgrounds — surgical precision on specific areas without touching the rest.
- **Outpainting** — Extend images beyond their original canvas. Used for aspect ratio changes, scene expansion, and contextual addition.
- **Color Grading** — LUT application, Lightroom AI masking, and curves adjustment to unify AI-generated assets into a coherent visual language.
- **External AI Enhancement** — Topaz Gigapixel (4x upscaling), ESRGAN (texture recovery), and Neat Video (noise reduction) — AI-to-AI refinement chains.
- **Cross-Domain Compositing** — Combining AI-generated elements with photography, 3D renders, and motion graphics. Matching light, color, and perspective for seamless integration.

**Platforms:** ComfyUI, A1111, Topaz, Lightroom, Photoshop

---

#### 08 — AI Agent Orchestration (Orchestration Layer)

**Description:** Designing and managing multi-step, autonomous workflows — the frontier of scalable AI creativity. From single prompts to production pipelines.

**Skills:**
- **Agent Architecture Design** — Planner → Researcher → Generator → Reviewer → Critic chains. Each role has a defined scope, tool access, and handoff protocol.
- **Router Pattern Implementation** — Conditional logic that routes tasks to specialized sub-agents based on content type, complexity score, or output format required.
- **Role-Based Agent Teams** — Art Director, Prompt Engineer, Quality Reviewer, and Style Consistency agents operating in parallel with a shared memory context.
- **Cross-Agent Communication** — Structured message passing, shared vector memory, and validation gates between agents. Fallback protocols for degraded outputs.

**Platforms:** Mastra, LangChain, AutoGen, CrewAI

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

### Mode Chains

| Goal | Mode Chain | Best For |
|------|------------|----------|
| Build AI Content System | 🦅 Eagle → 🦫 Beaver → 🐜 Ant | Automated content pipelines |
| Solve Complex Problem | 🦉 Owl → 🐬 Dolphin → 🐘 Elephant | Product design, breakthrough features |
| Brainstorm Product | 🐇 Rabbit → 🦅 Eagle → 🐜 Ant | Product ideation, channel selection |
| Design Workflow | 🦫 Beaver → 🐜 Ant → 🦉 Owl | Automation scripts, SOPs |
| Validate Business | 🦉 Owl → 🐘 Elephant → 🦅 Eagle | Startup validation, venture assessment |

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
| **skeleton loading** | Placeholder shimmer before content |
| **ambient motion** | Subtle looping background animation |

### Advanced Effects

| Term | Description |
|------|-------------|
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

| Combo | Elements | Best For | Psychology |
|-------|----------|----------|------------|
| **🫧 Glass + Bento** | glassmorphism, bento grid, dark-mode | Dashboards, data viz | Depth + hierarchy + scannability |
| **💥 Brutal + Neon** | brutalist, neon accent, kinetic | Landing pages, bold brands | Urgency + attention + focus |
| **🌊 Liquid + Ambient** | liquid gradient, ambient motion | Hero sections, immersive | Emotion + flow + atmosphere |
| **🚀 Full Immersive** | kinetic, liquid, micro, ambient | Marketing sites, launches | Maximum engagement |
| **🎮 Cyberpunk Glow** | neon, chromatic, scanline, dark | Gaming, crypto, tech | Futuristic + innovation |
| **💎 Premium Minimal** | glass, noise grain, duotone | Luxury brands | Exclusivity + sophistication |

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
