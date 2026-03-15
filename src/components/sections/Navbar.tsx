"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, Zap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "#prompt-builder", label: "Builder" },
  { href: "#tools", label: "Tools" },
  { href: "#techniques", label: "Techniques" },
  { href: "#prompts", label: "Prompts" },
  { href: "#gallery", label: "Gallery" },
  { href: "#roadmap", label: "Roadmap" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      // Staggered links
      gsap.fromTo(".nav-link-item",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, delay: 0.3, ease: "back.out(1.7)" }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-brutal-cream border-b-3 border-brutal-black py-2"
            : "bg-transparent py-3"
        )}
        style={{ borderBottomWidth: scrolled ? '3px' : '0px', borderColor: '#0D0D0D' }}
      >
        <div className="max-w-7xl mx-auto px-3 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-brutal-yellow flex items-center justify-center border-3 border-brutal-black shadow-brutal-sm group-hover:shadow-brutal transition-all duration-150"
                 style={{ borderWidth: '3px' }}>
              <Zap className="w-5 h-5 text-brutal-black" />
            </div>
            <span className="font-display font-black text-lg md:text-xl tracking-tight hidden sm:block">
              AI<span className="text-brutal-yellow">Synth</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-item px-3 py-2 text-sm font-bold uppercase tracking-wider text-brutal-black hover:text-brutal-yellow hover:bg-brutal-black transition-all duration-150 border-2 border-transparent hover:border-brutal-yellow mx-1"
                style={{ borderWidth: '2px', borderColor: 'transparent' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 bg-brutal-yellow border-3 border-brutal-black"
            style={{ borderWidth: '3px' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-brutal-black" /> : <Menu className="w-5 h-5 text-brutal-black" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-brutal-cream pt-20 px-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-4 text-lg font-bold uppercase text-brutal-black hover:text-brutal-yellow hover:bg-brutal-black border-3 border-brutal-black hover:border-brutal-yellow transition-all"
                style={{ borderWidth: '3px' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 p-3 bg-brutal-yellow border-3 border-brutal-black"
            style={{ borderWidth: '3px' }}
          >
            <X className="w-6 h-6 text-brutal-black" />
          </button>
        </div>
      )}
    </>
  );
}
