/**
 * GSAP Animation Utilities for Next.js
 * =====================================
 * 
 * This module provides safe, SSR-friendly animation hooks and utilities
 * using GSAP instead of Framer Motion. This resolves the whitespace issue
 * where elements remain hidden due to animation initialization failures.
 * 
 * KEY PRINCIPLE: Elements start visible, animations are enhancements.
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────
   Animation Configuration
───────────────────────────────────────────── */

export const ANIMATION_CONFIG = {
  // Default durations
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
  },
  // Default easings
  ease: {
    smooth: 'power2.out',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)',
    snappy: 'power3.out',
  },
  // Fallback timeout (ms)
  fallbackTimeout: 3000,
  // Scroll trigger defaults
  scrollTrigger: {
    start: 'top 85%',
    end: 'bottom 15%',
    toggleActions: 'play none none none',
  },
};

/* ─────────────────────────────────────────────
   useGSAPReady Hook
   Ensures GSAP is only used after component mount
───────────────────────────────────────────── */

export function useGSAPReady() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return isReady;
}

/* ─────────────────────────────────────────────
   useFadeInOnScroll Hook
   Safe fade-in animation when element enters viewport
   
   KEY FIX: Elements start visible (opacity: 1).
   Animation is an enhancement, not a requirement.
───────────────────────────────────────────── */

export function useFadeInOnScroll<T extends HTMLElement = HTMLDivElement>(options: {
  threshold?: number;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
} = {}) {
  const {
    threshold = 0.1,
    delay = 0,
    duration = 0.6,
    y = 30,
    once = true,
  } = options;

  const ref = useRef<T>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isReady = useGSAPReady();

  useEffect(() => {
    if (!ref.current || !isReady || hasAnimated) return;

    const element = ref.current;

    // Create scroll trigger - animation is ENHANCEMENT only
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: `top ${100 - threshold * 100}%`,
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true);

          // Animate from a subtle state (not invisible)
          // Element is already visible, we just add a subtle entrance effect
          gsap.fromTo(
            element,
            { 
              opacity: 0.3,  // Start from visible state, not invisible
              y: Math.min(y, 10)  // Smaller y movement
            },
            {
              opacity: 1,
              y: 0,
              duration: duration * 0.5,  // Faster animation
              delay,
              ease: ANIMATION_CONFIG.ease.snappy,
            }
          );
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [isReady, hasAnimated, threshold, delay, duration, y, once]);

  // Quick fallback: Force visibility after just 500ms (not 3 seconds!)
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (ref.current && !hasAnimated) {
        gsap.set(ref.current, { opacity: 1, y: 0, visibility: 'visible' });
        setHasAnimated(true);
      }
    }, 500);  // Much faster fallback

    return () => clearTimeout(fallbackTimer);
  }, [hasAnimated]);

  return { ref, hasAnimated };
}

/* ─────────────────────────────────────────────
   useStaggerChildren Hook
   Animate multiple children with stagger effect
   
   KEY FIX: Children start visible, animation is enhancement only
───────────────────────────────────────────── */

export function useStaggerChildren(options: {
  selector?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  y?: number;
} = {}) {
  const {
    selector = ':scope > *',
    stagger = 0.08,
    delay = 0,
    duration = 0.5,
    y = 20,
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isReady = useGSAPReady();

  useEffect(() => {
    if (!containerRef.current || !isReady || hasAnimated) return;

    const children = containerRef.current.querySelectorAll(selector);
    if (children.length === 0) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 85%',
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true);

          // KEY FIX: Children are already visible, just add subtle animation
          gsap.fromTo(
            children,
            { y: Math.min(y, 10) },  // Subtle movement only, no opacity change
            {
              y: 0,
              duration: duration * 0.5,  // Faster animation
              stagger,
              delay,
              ease: ANIMATION_CONFIG.ease.snappy,
            }
          );
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [isReady, hasAnimated, selector, stagger, delay, duration, y]);

  // Faster fallback (500ms instead of 3 seconds)
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (containerRef.current && !hasAnimated) {
        const children = containerRef.current.querySelectorAll(selector);
        gsap.set(children, { y: 0, visibility: 'visible' });
        setHasAnimated(true);
      }
    }, 500);

    return () => clearTimeout(fallbackTimer);
  }, [hasAnimated, selector]);

  return { containerRef, hasAnimated };
}

/* ─────────────────────────────────────────────
   useParallax Hook
   Parallax scroll effect
───────────────────────────────────────────── */

export function useParallax<T extends HTMLElement = HTMLDivElement>(speed: number = 0.5) {
  const ref = useRef<T>(null);
  const isReady = useGSAPReady();

  useEffect(() => {
    if (!ref.current || !isReady) return;

    const element = ref.current;

    gsap.to(element, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === element) st.kill();
      });
    };
  }, [isReady, speed]);

  return ref;
}

/* ─────────────────────────────────────────────
   useHoverAnimation Hook
   Hover scale/glow effect
───────────────────────────────────────────── */

export function useHoverAnimation<T extends HTMLElement = HTMLDivElement>(options: {
  scale?: number;
  y?: number;
  glowColor?: string;
} = {}) {
  const { scale = 1.02, y = -4, glowColor } = options;
  const ref = useRef<T>(null);
  const isReady = useGSAPReady();

  useEffect(() => {
    if (!ref.current || !isReady) return;

    const element = ref.current;
    let animation: gsap.core.Tween | null = null;

    const handleEnter = () => {
      animation?.kill();
      animation = gsap.to(element, {
        scale,
        y,
        duration: 0.25,
        ease: 'power2.out',
        boxShadow: glowColor ? `0 0 30px ${glowColor}` : undefined,
      });
    };

    const handleLeave = () => {
      animation?.kill();
      animation = gsap.to(element, {
        scale: 1,
        y: 0,
        duration: 0.25,
        ease: 'power2.out',
        boxShadow: 'none',
      });
    };

    element.addEventListener('mouseenter', handleEnter);
    element.addEventListener('mouseleave', handleLeave);

    return () => {
      element.removeEventListener('mouseenter', handleEnter);
      element.removeEventListener('mouseleave', handleLeave);
      animation?.kill();
    };
  }, [isReady, scale, y, glowColor]);

  return ref;
}

/* ─────────────────────────────────────────────
   useFloatAnimation Hook
   Continuous floating animation
───────────────────────────────────────────── */

export function useFloatAnimation<T extends HTMLElement = HTMLDivElement>(options: {
  y?: number;
  duration?: number;
  delay?: number;
} = {}) {
  const { y = 10, duration = 2, delay = 0 } = options;
  const ref = useRef<T>(null);
  const isReady = useGSAPReady();

  useEffect(() => {
    if (!ref.current || !isReady) return;

    const element = ref.current;

    gsap.to(element, {
      y: -y,
      duration,
      delay,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      gsap.killTweensOf(element);
    };
  }, [isReady, y, duration, delay]);

  return ref;
}

/* ─────────────────────────────────────────────
   useScrollProgress Hook
   Track scroll progress for progress bars
───────────────────────────────────────────── */

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const isReady = useGSAPReady();

  useEffect(() => {
    if (!isReady) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, [isReady]);

  return progress;
}

/* ─────────────────────────────────────────────
   useAnimatedCounter Hook
   Animated number counting
───────────────────────────────────────────── */

export function useAnimatedCounter(options: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  trigger?: 'immediate' | 'scroll';
}) {
  const {
    target,
    duration = 2,
    prefix = '',
    suffix = '',
    trigger = 'scroll',
  } = options;

  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);
  const [hasStarted, setHasStarted] = useState(false);
  const isReady = useGSAPReady();

  const animateCounter = useCallback(() => {
    if (!ref.current || hasStarted) return;

    setHasStarted(true);

    const obj = { value: 0 };

    gsap.to(obj, {
      value: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        setDisplayValue(`${prefix}${Math.round(obj.value).toLocaleString()}${suffix}`);
      },
    });
  }, [hasStarted, target, duration, prefix, suffix]);

  useEffect(() => {
    if (!ref.current || !isReady || hasStarted) return;

    if (trigger === 'immediate') {
      animateCounter();
      return;
    }

    const scrollTrigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: animateCounter,
    });

    return () => scrollTrigger.kill();
  }, [isReady, hasStarted, trigger, animateCounter]);

  // Fallback
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!hasStarted) {
        setDisplayValue(`${prefix}${target.toLocaleString()}${suffix}`);
        setHasStarted(true);
      }
    }, ANIMATION_CONFIG.fallbackTimeout);

    return () => clearTimeout(fallbackTimer);
  }, [hasStarted, target, prefix, suffix]);

  return { ref, displayValue, hasStarted };
}

/* ─────────────────────────────────────────────
   GSAPFadeIn Component Wrapper
   Drop-in replacement for Framer Motion FadeIn
───────────────────────────────────────────── */

export function GSAPFadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  y = 30,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}) {
  const { ref } = useFadeInOnScroll({ delay, duration, y });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   GSAPStagger Component Wrapper
   Drop-in replacement for staggered children
   
   KEY FIX: Children are visible by default
───────────────────────────────────────────── */

export function GSAPStagger({
  children,
  className = '',
  stagger = 0.08,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const { containerRef } = useStaggerChildren({ stagger, delay });

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ visibility: 'visible' }}  // Always visible
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   cleanupScrollTriggers Utility
   Call this when unmounting components
───────────────────────────────────────────── */

export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach(st => st.kill());
}

/* ─────────────────────────────────────────────
   refreshScrollTriggers Utility
   Call this after dynamic content loads
───────────────────────────────────────────── */

export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}

/* ─────────────────────────────────────────────
   TIER 2: Magnetic Effect Hook
   Cursor-following magnetic pull for buttons
───────────────────────────────────────────── */

export function useMagneticEffect<T extends HTMLElement = HTMLButtonElement>(
  strength: number = 0.3
) {
  const ref = useRef<T>(null);
  const isReady = useGSAPReady();

  useEffect(() => {
    if (!ref.current || !isReady) return;

    const element = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isReady, strength]);

  return ref;
}

/* ─────────────────────────────────────────────
   TIER 2: 3D Tilt Effect Hook
   Perspective transform for cards
───────────────────────────────────────────── */

export function use3DTilt<T extends HTMLElement = HTMLDivElement>(
  maxTilt: number = 10
) {
  const ref = useRef<T>(null);
  const isReady = useGSAPReady();

  useEffect(() => {
    if (!ref.current || !isReady) return;

    const element = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const tiltX = (y - 0.5) * maxTilt;
      const tiltY = (x - 0.5) * -maxTilt;

      gsap.to(element, {
        rotateX: tiltX,
        rotateY: tiltY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isReady, maxTilt]);

  return ref;
}

/* ─────────────────────────────────────────────
   TIER 3: Particle System Generator
   Creates generative floating particles
───────────────────────────────────────────── */

export function useParticleSystem(
  containerRef: React.RefObject<HTMLElement | null>,
  options: {
    count?: number;
    minSize?: number;
    maxSize?: number;
    color?: string;
    minOpacity?: number;
    maxOpacity?: number;
  } = {}
) {
  const {
    count = 25,
    minSize = 4,
    maxSize = 12,
    color = "255, 222, 0",
    minOpacity = 0.1,
    maxOpacity = 0.4
  } = options;

  const isReady = useGSAPReady();
  const particlesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!containerRef.current || !isReady) return;

    const container = containerRef.current;

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      const size = minSize + Math.random() * (maxSize - minSize);
      const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(${color}, ${opacity});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
      `;
      container.appendChild(particle);
      particlesRef.current.push(particle);

      // Animate particle
      gsap.to(particle, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        opacity: `random(${minOpacity}, ${maxOpacity})`,
        duration: 3 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        repeatRefresh: true
      });
    }

    return () => {
      particlesRef.current.forEach(p => p.remove());
      particlesRef.current = [];
    };
  }, [containerRef, isReady, count, minSize, maxSize, color, minOpacity, maxOpacity]);

  return particlesRef;
}

/* ─────────────────────────────────────────────
   TIER 2: Scroll Chapter Hook
   Pinned section with scrubbed timeline
───────────────────────────────────────────── */

export function useScrollChapter<T extends HTMLElement = HTMLElement>(
  options: {
    pinDuration?: string;
    snapPoints?: number[];
    onProgress?: (progress: number) => void;
  } = {}
) {
  const { pinDuration = "150%", snapPoints = [0, 0.5, 1], onProgress } = options;
  const ref = useRef<T>(null);
  const isReady = useGSAPReady();

  useEffect(() => {
    if (!ref.current || !isReady) return;

    const element = ref.current;

    const st = ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: `+=${pinDuration}`,
      pin: true,
      scrub: 1,
      snap: snapPoints.length > 0 ? {
        snapTo: snapPoints,
        duration: 0.5,
        ease: "power2.inOut"
      } : undefined,
      onUpdate: (self) => onProgress?.(self.progress)
    });

    return () => st.kill();
  }, [isReady, pinDuration, snapPoints, onProgress]);

  return ref;
}

/* ─────────────────────────────────────────────
   TIER 1: Reduced Motion Check Hook
   Returns true if user prefers reduced motion
───────────────────────────────────────────── */

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

/* ─────────────────────────────────────────────
   TIER 2: Multi-layer Parallax Hook
   Creates depth effect with multiple scroll speeds
───────────────────────────────────────────── */

export function useMultiLayerParallax<T extends HTMLElement = HTMLElement>(
  layers: { selector: string; speed: number }[]
) {
  const ref = useRef<T>(null);
  const isReady = useGSAPReady();

  useEffect(() => {
    if (!ref.current || !isReady) return;

    const container = ref.current;
    const triggers: ScrollTrigger[] = [];

    layers.forEach(({ selector, speed }) => {
      const elements = container.querySelectorAll(selector);

      elements.forEach(el => {
        const st = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: speed,
          animation: gsap.to(el, {
            yPercent: speed * 50,
            ease: "none"
          })
        });

        triggers.push(st);
      });
    });

    return () => triggers.forEach(st => st.kill());
  }, [isReady, layers]);

  return ref;
}

export default {
  useGSAPReady,
  useFadeInOnScroll,
  useStaggerChildren,
  useParallax,
  useHoverAnimation,
  useFloatAnimation,
  useScrollProgress,
  useAnimatedCounter,
  GSAPFadeIn,
  GSAPStagger,
  cleanupScrollTriggers,
  refreshScrollTriggers,
  ANIMATION_CONFIG,
  // Tier 2 additions
  useMagneticEffect,
  use3DTilt,
  useScrollChapter,
  useMultiLayerParallax,
  // Tier 3 additions
  useParticleSystem,
  // Tier 1 utility
  useReducedMotion,
};
