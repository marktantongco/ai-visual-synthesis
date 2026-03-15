---
name: gsap-animations
description: Comprehensive GSAP animation skill with React integration, ScrollTrigger, timelines, and advanced patterns. Includes useGSAP hook, ref handling, and cleanup patterns.
triggers: gsap, animation, framer motion, scroll animation, timeline, usegsap
user-invocable: true
---

# GSAP Animations Skill

When this skill is invoked, you MUST ask the user clarifying questions before writing any animation code.

## Required Questions (ALWAYS ASK)

Before implementing ANY animation, ask the user:

1. **What elements to animate?** - CSS selectors, component names, or element descriptions
2. **What type of animation?** - Choose from the categories below
3. **When should it trigger?** - On load, scroll, hover, click, or custom event
4. **Any specific timing preferences?** - Duration, delay, easing style

### Animation Categories to Present

When asking about animation type, present these options:

**Basic Animations:**
- Fade (in/out/cross-fade)
- Slide (up/down/left/right)
- Scale (grow/shrink/pulse)
- Rotate (spin/flip/wobble)
- Combined (fade + slide, scale + rotate, etc.)

**Advanced Animations:**
- Stagger (animate list items sequentially)
- Timeline (choreographed multi-step sequence)
- Morph (transform between shapes)
- Path (move along SVG path)
- Parallax (depth-based scroll effects)

**Scroll-Based:**
- Scroll-triggered (animate when element enters view)
- Scrub (animation linked to scroll position)
- Pin (freeze element while scrolling)
- Parallax layers (different speeds)
- Smooth scroll (momentum-based scrolling)

**Interactive:**
- Hover effects
- Click/tap animations
- Drag interactions
- Gesture responses

**Text Animations:**
- Typewriter effect
- Character-by-character reveal
- Word-by-word animation
- Line-by-line stagger
- Text morphing

**SVG Animations:**
- Draw stroke (line drawing effect)
- Morph shapes
- Path animation
- Fill transitions

---

## Installation

### NPM (Recommended for React)
```bash
npm install gsap @gsap/react
```

```javascript
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
```

---

## React Integration (useGSAP Hook)

### Basic Usage
```tsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Component() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(".box", { x: 200, duration: 1 });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <div className="box">Animated</div>
    </div>
  );
}
```

### With Dependencies
```tsx
function AnimatedComponent({ isOpen }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(".drawer", {
      height: isOpen ? "auto" : 0,
      duration: 0.3
    });
  }, { scope: containerRef, dependencies: [isOpen] });

  return (
    <div ref={containerRef}>
      <div className="drawer">Content</div>
    </div>
  );
}
```

### Returning Context
```tsx
function Component() {
  const containerRef = useRef(null);

  const { context, contextSafe } = useGSAP(() => {
    gsap.to(".box", { x: 200 });
  }, { scope: containerRef });

  // Use contextSafe for event handlers
  const handleClick = contextSafe(() => {
    gsap.to(".box", { rotation: 360 });
  });

  return (
    <div ref={containerRef}>
      <div className="box" onClick={handleClick}>Click me</div>
    </div>
  );
}
```

---

## Ref Patterns

### Single Element Ref
```tsx
function SingleElement() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 200,
      rotation: 360,
      duration: 1
    });
  });

  return <div ref={boxRef}>Box</div>;
}
```

### Multiple Element Refs
```tsx
function MultipleElements() {
  const itemsRef = useRef([]);

  useGSAP(() => {
    gsap.from(itemsRef.current, {
      opacity: 0,
      y: 30,
      stagger: 0.1
    });
  });

  return (
    <div>
      {[1, 2, 3].map((item, i) => (
        <div
          key={item}
          ref={el => itemsRef.current[i] = el}
        >
          Item {item}
        </div>
      ))}
    </div>
  );
}
```

---

## Core Methods

### gsap.to() - Animate TO destination values
```javascript
gsap.to(".box", {
  x: 100,
  y: 50,
  rotation: 360,
  scale: 1.5,
  opacity: 0.5,
  duration: 1,
  ease: "power2.out"
});
```

### gsap.from() - Animate FROM starting values
```javascript
gsap.from(".box", {
  opacity: 0,
  y: -50,
  duration: 1
});
```

### gsap.fromTo() - Define both start and end
```javascript
gsap.fromTo(".box",
  { opacity: 0, x: -100 },
  { opacity: 1, x: 0, duration: 1 }
);
```

### gsap.set() - Instantly set properties (no animation)
```javascript
gsap.set(".box", { x: 100, opacity: 0.5 });
```

---

## Timelines

### Basic Timeline
```javascript
const tl = gsap.timeline();

tl.to(".box1", { x: 100, duration: 1 })
  .to(".box2", { y: 100, duration: 0.5 })
  .to(".box3", { rotation: 360, duration: 1 });
```

### Position Parameters
```javascript
tl.to(".a", { x: 100 })
  .to(".b", { y: 100 }, "<")        // Starts with previous
  .to(".c", { opacity: 0 }, ">")    // Starts after previous ends
  .to(".d", { scale: 2 }, "+=0.5")  // 0.5s gap
  .to(".e", { x: 50 }, 2)           // At exactly 2 seconds
  .to(".f", { y: 50 }, "<0.5")      // 0.5s after previous starts
  .addLabel("middle")
  .to(".g", { rotation: 180 }, "middle");
```

### Timeline Controls
```javascript
const tl = gsap.timeline({ paused: true });

tl.play();              // Start playing
tl.pause();             // Pause
tl.resume();            // Resume from paused
tl.reverse();           // Play backwards
tl.restart();           // Restart from beginning
tl.seek(1.5);           // Jump to 1.5 seconds
tl.progress(0.5);       // Jump to 50%
tl.timeScale(2);        // 2x speed
tl.kill();              // Destroy timeline
```

---

## ScrollTrigger Plugin

### Basic Usage
```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 500,
  scrollTrigger: ".box"  // Simple trigger
});
```

### Full Configuration
```javascript
gsap.to(".box", {
  x: 500,
  scrollTrigger: {
    trigger: ".box",           // Element that triggers
    start: "top 80%",          // When animation starts
    end: "bottom 20%",         // When animation ends
    scrub: true,               // Link to scroll (true or number for smoothing)
    pin: true,                 // Pin element during animation
    markers: true,             // Debug markers (remove in production!)
    toggleActions: "play pause resume reset",
    onEnter: () => {},         // When trigger enters viewport
    onLeave: () => {},         // When trigger leaves viewport
  }
});
```

### With Timeline
```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=1000",
    scrub: 1,
    pin: true
  }
});

tl.to(".box1", { x: 100 })
  .to(".box2", { y: 100 }, "<")
  .to(".box3", { rotation: 360 });
```

---

## Context and Cleanup

### Automatic Cleanup (useGSAP)
```tsx
// useGSAP automatically cleans up animations on unmount
function Component() {
  useGSAP(() => {
    // This timeline is automatically killed on unmount
    gsap.timeline()
      .to(".a", { x: 100 })
      .to(".b", { x: 100 });
  });
}
```

### Manual Context (Without useGSAP)
```tsx
import gsap from 'gsap';

function Component() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box", { x: 200 });
      gsap.to(".circle", { rotation: 360 });
    });

    return () => ctx.revert(); // Cleanup
  }, []);
}
```

### Scoped Context
```tsx
function Component() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Selectors only query within containerRef
      gsap.to(".item", { opacity: 1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);
}
```

---

## Event Handlers

### contextSafe for Events
```tsx
function InteractiveComponent() {
  const container = useRef(null);

  const { contextSafe } = useGSAP(() => {
    // Initial animation
    gsap.set(".box", { scale: 1 });
  }, { scope: container });

  const handleMouseEnter = contextSafe(() => {
    gsap.to(".box", { scale: 1.1, duration: 0.2 });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(".box", { scale: 1, duration: 0.2 });
  });

  return (
    <div ref={container}>
      <div
        className="box"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover me
      </div>
    </div>
  );
}
```

---

## Custom Hooks

### useAnimation Hook
```tsx
function useAnimation(animation, deps = []) {
  const elementRef = useRef(null);
  const tweenRef = useRef(null);

  useGSAP(() => {
    if (elementRef.current) {
      tweenRef.current = animation(elementRef.current);
    }
    return () => tweenRef.current?.kill();
  }, { dependencies: deps });

  return elementRef;
}

// Usage
function Component() {
  const boxRef = useAnimation((el) =>
    gsap.from(el, { opacity: 0, y: 50, duration: 0.5 })
  );

  return <div ref={boxRef}>Animated</div>;
}
```

### useFadeIn Hook
```tsx
function useFadeIn(options = {}) {
  const { duration = 0.5, delay = 0, y = 30 } = options;
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y,
      duration,
      delay,
      ease: "power2.out"
    });
  });

  return ref;
}

// Usage
function Card() {
  const cardRef = useFadeIn({ delay: 0.2 });
  return <div ref={cardRef}>Card content</div>;
}
```

---

## Performance Tips

```tsx
// 1. Use will-change for heavy animations
gsap.set(".animated", { willChange: "transform" });

// 2. Batch similar animations
useGSAP(() => {
  gsap.to(".item", { opacity: 1, stagger: 0.1 }); // Single tween
  // Not: items.forEach(item => gsap.to(item, ...)) // Multiple tweens
});

// 3. Use refs over selectors for frequently animated elements
const boxRef = useRef(null);
gsap.to(boxRef.current, { x: 100 }); // Faster

// 4. Kill animations on rapid state changes
const tweenRef = useRef(null);
useEffect(() => {
  tweenRef.current?.kill();
  tweenRef.current = gsap.to(...);
}, [dependency]);
```

---

## Common Animation Patterns

### Page Load Sequence
```javascript
const tl = gsap.timeline();

tl.from(".logo", { opacity: 0, y: -50, duration: 0.5 })
  .from(".nav-item", { opacity: 0, y: -20, stagger: 0.1 }, "-=0.2")
  .from(".hero-title", { opacity: 0, x: -100, duration: 0.8 }, "-=0.3")
  .from(".hero-text", { opacity: 0, duration: 0.5 }, "-=0.4")
  .from(".cta-button", { opacity: 0, scale: 0.5, ease: "back.out" }, "-=0.2");
```

### Scroll-Triggered Sections
```javascript
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section.querySelectorAll(".fade-in"), {
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});
```

### Counter Animation
```javascript
const counter = { value: 0 };
const target = document.querySelector(".counter");

gsap.to(counter, {
  value: 1000,
  duration: 2,
  ease: "power1.out",
  onUpdate: () => {
    target.textContent = Math.round(counter.value);
  }
});
```

---

## Best Practices

1. **Use transforms** - `x`, `y`, `scale`, `rotation` instead of `left`, `top`, `width`, `height`
2. **Use `autoAlpha`** - Combines `opacity` with `visibility` for better performance
3. **Register plugins** - Always `gsap.registerPlugin()` before using
4. **Use `gsap.context()`** - Essential for React/Vue cleanup
5. **Remove markers** - Always remove `markers: true` in production
6. **Use `overwrite: "auto"`** - Prevents conflicting tweens
7. **Batch with stagger** - Use `stagger` instead of loops
8. **Use `will-change`** - Add `will-change: transform` to heavily animated elements
9. **Test reduced motion** - Respect `prefers-reduced-motion`
10. **Use `invalidateOnRefresh`** - For responsive ScrollTriggers
