"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * TIER 2: Scroll Progress Indicator
 * Shows reading progress as a brutalist-style progress bar at the top of the viewport
 */
export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const progressInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current || !progressInnerRef.current) return;

    // Animate progress bar width based on scroll
    gsap.to(progressInnerRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          if (progressInnerRef.current) {
            gsap.set(progressInnerRef.current, { scaleX: self.progress });
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-1 z-[100] bg-brutal-black/20"
      style={{ transformOrigin: "left center" }}
    >
      <div
        ref={progressInnerRef}
        className="h-full bg-brutal-yellow"
        style={{
          transform: "scaleX(0)",
          transformOrigin: "left center",
          boxShadow: "0 0 10px rgba(255, 222, 0, 0.5)",
        }}
      />
    </div>
  );
}
