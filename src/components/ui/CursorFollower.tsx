"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * TIER 2: Custom Cursor Follower
 * Creates a magnetic cursor effect with elastic physics
 * Only visible on desktop (hidden on mobile/touch devices)
 */
export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device
    const checkTouch = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;
    if (!cursor || !ring) return;

    // Mouse position tracking
    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Check for interactive elements
    const handleElementEnter = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"], .brutal-btn, .skill-node, .domain-card'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementEnter);
      el.addEventListener("mouseleave", handleElementLeave);
    });

    // GSAP ticker for smooth animation
    const updateCursor = () => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;

      gsap.set(cursor, { x: pos.x, y: pos.y });
      gsap.set(ring, { x: mouse.x, y: mouse.y });
    };

    gsap.ticker.add(updateCursor);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      gsap.ticker.remove(updateCursor);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementEnter);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, [isTouchDevice]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full bg-brutal-yellow"
          style={{
            width: isHovering ? "8px" : "6px",
            height: isHovering ? "8px" : "6px",
            transition: "width 0.2s ease, height 0.2s ease",
          }}
        />
      </div>

      {/* Outer ring */}
      <div
        ref={cursorRingRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full border-2 border-brutal-yellow/50"
          style={{
            width: isHovering ? "48px" : "36px",
            height: isHovering ? "48px" : "36px",
            transition: "width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), height 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
        />
      </div>
    </>
  );
}
