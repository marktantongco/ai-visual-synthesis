"use client";

import { useState, useEffect } from "react";
import { Home, Wand2, Wrench, Shuffle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "hero", label: "Home", icon: Home, href: "#hero" },
  { id: "prompt-builder", label: "Builder", icon: Wand2, href: "#prompt-builder" },
  { id: "tools", label: "Tools", icon: Wrench, href: "#tools" },
  { id: "techniques", label: "Compare", icon: Shuffle, href: "#techniques" },
  { id: "final-generator", label: "Generate", icon: Sparkles, href: "#prompt-builder" },
];

export default function MobileTabBar() {
  const [activeTab, setActiveTab] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Intersection observer for active section
    const sections = tabs.map(tab => document.querySelector(tab.href));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Hide/show on scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleTabClick = (href: string, id: string) => {
    setActiveTab(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Tab Bar - iOS Native Feel */}
      <nav
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300",
          !isVisible && "translate-y-full"
        )}
        style={{
          background: "linear-gradient(to top, rgba(13, 13, 13, 0.98), rgba(13, 13, 13, 0.95))",
          borderTop: "3px solid #FFDE00",
          paddingBottom: "env(safe-area-inset-bottom, 8px)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)"
        }}
        aria-label="Mobile navigation"
      >
        <div className="flex items-stretch justify-around h-16 pt-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.href, tab.id)}
                className={cn(
                  "flex flex-col items-center justify-center flex-1 min-w-0 transition-all duration-200",
                  "min-h-[44px] px-2"
                )}
                aria-current={isActive ? "page" : undefined}
                title={tab.label}
              >
                <div
                  className={cn(
                    "w-8 h-8 flex items-center justify-center transition-all duration-200",
                    isActive && "scale-110"
                  )}
                  style={{
                    background: isActive ? "#FFDE00" : "transparent",
                    boxShadow: isActive ? "2px 2px 0 0 #0D0D0D" : "none"
                  }}
                >
                  <tab.icon
                    className={cn(
                      "w-5 h-5 transition-colors",
                      isActive ? "text-brutal-black" : "text-brutal-gray"
                    )}
                  />
                </div>
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-wider mt-1 transition-colors",
                    isActive ? "text-brutal-yellow" : "text-brutal-gray"
                  )}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Spacer for bottom tab bar on mobile */}
      <div className="h-20 lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }} />
    </>
  );
}
