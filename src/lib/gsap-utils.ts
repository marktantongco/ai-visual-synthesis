// GSAP Animation Utilities
// =========================

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// TEXT REVEAL ANIMATIONS
// ============================================

/**
 * Split text into characters for animation
 */
export function splitText(element: HTMLElement): string[] {
  const text = element.textContent || "";
  element.innerHTML = text
    .split("")
    .map((char) => `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`)
    .join("");
  return Array.from(element.querySelectorAll("span")).map((span) => span.textContent || "");
}

/**
 * Animate text reveal with stagger
 */
export function animateTextReveal(
  element: HTMLElement,
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
    y?: number;
    opacity?: number;
  } = {}
) {
  const { duration = 0.6, stagger = 0.03, delay = 0, y = 30, opacity = 0 } = options;

  const chars = element.querySelectorAll("span");
  gsap.from(chars, {
    opacity,
    y,
    duration,
    stagger,
    delay,
    ease: "power3.out",
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Fade in element on scroll
 */
export function fadeInOnScroll(
  element: HTMLElement,
  options: {
    trigger?: HTMLElement | string;
    start?: string;
    end?: string;
    scrub?: boolean;
    once?: boolean;
  } = {}
) {
  const { trigger = element, start = "top 80%", end = "bottom 20%", scrub = false, once = true } = options;

  gsap.from(element, {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub,
      once,
    },
  });
}

/**
 * Stagger reveal for list items
 */
export function staggerReveal(
  elements: HTMLElement[],
  options: {
    stagger?: number;
    duration?: number;
    y?: number;
    trigger?: HTMLElement | string;
  } = {}
) {
  const { stagger = 0.1, duration = 0.6, y = 30, trigger = elements[0] } = options;

  gsap.from(elements, {
    opacity: 0,
    y,
    duration,
    stagger,
    scrollTrigger: {
      trigger,
      start: "top 80%",
    },
  });
}

// ============================================
// PARALLAX ANIMATIONS
// ============================================

/**
 * Parallax scroll effect
 */
export function parallaxScroll(
  element: HTMLElement,
  options: {
    speed?: number;
    trigger?: HTMLElement | string;
    start?: string;
    end?: string;
  } = {}
) {
  const { speed = 100, trigger = element, start = "top bottom", end = "bottom top" } = options;

  gsap.to(element, {
    y: -speed,
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub: true,
    },
  });
}

// ============================================
// HOVER ANIMATIONS
// ============================================

/**
 * Scale and glow on hover
 */
export function hoverScaleGlow(
  element: HTMLElement,
  options: {
    scale?: number;
    glowColor?: string;
    duration?: number;
  } = {}
) {
  const { scale = 1.05, glowColor = "#00F5FF", duration = 0.3 } = options;

  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale,
      boxShadow: `0 0 30px ${glowColor}`,
      duration,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,
      boxShadow: "none",
      duration,
      ease: "power2.out",
    });
  });
}

// ============================================
// TIMELINE ANIMATIONS
// ============================================

/**
 * Create a reusable timeline
 */
export function createTimeline(
  elements: HTMLElement[],
  animations: Array<{
    target: number;
    props: gsap.TweenVars;
  }>
) {
  const tl = gsap.timeline();

  animations.forEach(({ target, props }) => {
    tl.to(elements[target], props);
  });

  return tl;
}

// ============================================
// SVG MORPH ANIMATIONS
// ============================================

/**
 * Simple SVG path animation
 */
export function animateSVGPath(
  path: SVGPathElement,
  options: {
    duration?: number;
    ease?: string;
  } = {}
) {
  const { duration = 1, ease = "power2.inOut" } = options;

  const length = path.getTotalLength();
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  gsap.to(path, {
    strokeDashoffset: 0,
    duration,
    ease,
  });
}

// ============================================
// FLOATING ANIMATIONS
// ============================================

/**
 * Gentle floating animation
 */
export function floatAnimation(
  element: HTMLElement,
  options: {
    y?: number;
    duration?: number;
    delay?: number;
  } = {}
) {
  const { y = 10, duration = 2, delay = 0 } = options;

  gsap.to(element, {
    y: -y,
    duration,
    delay,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

// ============================================
// REVEAL ANIMATIONS
// ============================================

/**
 * Reveal from bottom
 */
export function revealFromBottom(
  element: HTMLElement,
  options: {
    duration?: number;
    delay?: number;
    ease?: string;
  } = {}
) {
  const { duration = 0.8, delay = 0, ease = "power3.out" } = options;

  gsap.from(element, {
    opacity: 0,
    y: 100,
    duration,
    delay,
    ease,
  });
}

// ============================================
// COUNTER ANIMATION
// ============================================

/**
 * Animate number counting
 */
export function animateCounter(
  element: HTMLElement,
  options: {
    target: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
  }
) {
  const { target, duration = 2, prefix = "", suffix = "" } = options;

  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
    },
  });
}

// ============================================
// CUSTOM HOOKS
// ============================================

/**
 * Hook for scroll-triggered animations
 */
export function useScrollAnimation(
  ref: React.RefObject<HTMLElement>,
  animation: gsap.TweenVars,
  options: {
    trigger?: string;
    start?: string;
    end?: string;
    scrub?: boolean;
  } = {}
) {
  const { trigger, start = "top 80%", end = "bottom 20%", scrub = false } = options;

  gsap.from(ref.current, {
    ...animation,
    scrollTrigger: {
      trigger: trigger || ref.current,
      start,
      end,
      scrub,
    },
  });
}

export default {
  splitText,
  animateTextReveal,
  fadeInOnScroll,
  staggerReveal,
  parallaxScroll,
  hoverScaleGlow,
  createTimeline,
  animateSVGPath,
  floatAnimation,
  revealFromBottom,
  animateCounter,
  useScrollAnimation,
};
