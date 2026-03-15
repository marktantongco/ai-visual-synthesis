# AI Visual Synthesis — Layout Variants (6-12)

## Variant 1: Bento Grid Layout
**Concept:** Apple-style asymmetric card mosaic with dynamic sizing

**Structure:**
- Hero spans full width (12 cols)
- Tools section: 2x3 grid with varying card heights
- Prompts: Masonry-style bento grid (2-3 columns)
- Gallery: 4-column grid with featured hero card
- Skill Map: Horizontal scroll with sticky sidebar

**Key Features:**
- Cards have different aspect ratios (1:1, 2:1, 1:2)
- Hover effects scale cards up
- Dynamic grid using CSS Grid `grid-template-areas`
- Visual hierarchy through card size variation

**Best For:** Visual-heavy content, showcasing variety

---

## Variant 2: Tabbed Sidebar Navigation
**Concept:** Persistent left sidebar with tabbed content sections

**Structure:**
- Fixed sidebar (280px) with vertical navigation
- Main content area with tabbed sections
- Each section loads independently
- Active section indicator with progress

**Key Features:**
- Always-visible navigation
- Quick section jumping
- Progress indicator per section
- Collapsible on mobile (hamburger menu)

**Best For:** Deep-dive content, reference-style sites

---

## Variant 3: Full-Screen Section Scroll
**Concept:** Each section takes full viewport height

**Structure:**
- 100vh sections with snap scrolling
- Each section has unique background treatment
- Smooth scroll snap points
- Section indicators on right side

**Key Features:**
- Immersive section-by-section experience
- Unique visual treatment per section
- Progress dots on right edge
- Keyboard navigation support

**Best For:** Storytelling, guided tours

---

## Variant 4: Horizontal Scroll Dashboard
**Concept:** Horizontal scrolling workspace with sticky panels

**Structure:**
- Main horizontal scroll container
- Sticky left panel (tools overview)
- Central content area (scrollable)
- Right panel (quick actions/stats)

**Key Features:**
- Panoramic content experience
- Sticky context panels
- Mouse wheel horizontal scroll
- Touch-friendly swipe navigation

**Best For:** Data-heavy dashboards, comparison views

---

## Variant 5: Card Carousel + Grid
**Concept:** Featured carousel above grid layout

**Structure:**
- Hero carousel (3-5 featured items)
- Below: 3-column grid of all content
- Filter tabs above grid
- Search bar integrated

**Key Features:**
- Featured content spotlight
- Filterable grid
- Search integration
- Lazy loading cards

**Best For:** Catalog-style content, product showcases

---

## Variant 6: Accordion Stack
**Concept:** Vertical accordion with nested sections

**Structure:**
- Single column of expandable sections
- Each section expands to reveal content
- Only one section open at a time
- Smooth expand/collapse animations

**Key Features:**
- Focus on one section at a time
- Clean, minimal interface
- Easy mobile scrolling
- Clear hierarchy

**Best For:** Tutorials, step-by-step guides

---

## Variant 7: Split Screen Layout
**Concept:** 50/50 split with content on left, visuals on right

**Structure:**
- Left: Text content, navigation, details
- Right: Visuals, previews, examples
- Both sides scroll independently
- Synced scroll option

**Key Features:**
- Side-by-side comparison
- Visual context for text
- Independent scrolling
- Sync mode for guided reading

**Best For:** Educational content, documentation

---

## Variant 8: Timeline/Roadmap Layout
**Concept:** Vertical timeline with branching paths

**Structure:**
- Central vertical timeline
- Content branches left/right
- Progress indicators
- Milestone markers

**Key Features:**
- Clear progression path
- Visual timeline
- Milestone highlights
- Branching content

**Best For:** Learning paths, roadmaps

---

## Variant 9: Modular Panel System
**Concept:** Draggable/resizable panels

**Structure:**
- Multiple floating panels
- Drag to reposition
- Resize handles
- Panel presets (layout templates)

**Key Features:**
- User-customizable layout
- Drag & drop panels
- Resize capability
- Save/load layouts

**Best For:** Power users, customizable dashboards

---

## Variant 10: Stacked Cards with Peek
**Concept:** Cards stack with peek preview

**Structure:**
- Cards stack vertically
- Hover reveals next card
- Click to expand full view
- Stack indicator shows position

**Key Features:**
- Space-efficient
- Progressive disclosure
- Visual stack metaphor
- Easy navigation

**Best For:** Browsing large collections

---

## Variant 11: Focus Mode with Overlay
**Concept:** Minimal base with overlay content

**Structure:**
- Clean dark background
- Floating content cards
- Overlay panels for details
- Focus mode toggle

**Key Features:**
- Minimal distraction
- Contextual overlays
- Focus mode for deep work
- Quick access to details

**Best For:** Reading, focused learning

---

## Variant 12: Hybrid Dashboard
**Concept:** Combines multiple patterns

**Structure:**
- Top: Sticky navigation bar
- Left: Collapsible sidebar
- Center: Main content area
- Right: Context panel (optional)
- Bottom: Quick actions

**Key Features:**
- Multiple navigation paths
- Context-aware panels
- Responsive collapse
- Power user features

**Best For:** Complex applications, all-in-one solutions
