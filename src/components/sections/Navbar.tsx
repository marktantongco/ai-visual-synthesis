"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, Zap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMagneticEffect, useReducedMotion } from "@/lib/gsap-animations";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "#interactive-tools", label: "Builder" },
  { href: "#compare", label: "Compare" },
  { href: "#tools", label: "Tools" },
  { href: "#skillmap", label: "Skills" },
  { href: "#prompts", label: "Prompts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useMagneticEffect<HTMLAnchorElement>(0.3);
  const prefersReducedMotion = useReducedMotion();
  
  // Track scroll direction for hide/show
  const lastScrollY = useRef(0);

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
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);
      
      // TIER 2: Hide/show navbar based on scroll direction
      if (!prefersReducedMotion) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReducedMotion]);

  // GSAP animations
  useEffect(() => {
    if (prefersReducedMotion) return;
    
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
  }, [prefersReducedMotion]);

  // TIER 2: Animate navbar hide/show
  useEffect(() => {
    if (!navRef.current || prefersReducedMotion) return;
    
    gsap.to(navRef.current, {
      y: hidden ? -100 : 0,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [hidden, prefersReducedMotion]);

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
          {/* Logo - TIER 2: Magnetic Effect */}
          <a
            ref={logoRef}
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
              <NavLink key={link.href} href={link.href} label={link.label} isActive={active === link.href} />
            ))}
          </nav>

          {/* Sticky CTA - Desktop */}
          <a
            href="#interactive-tools"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-brutal-yellow text-brutal-black font-bold text-xs uppercase tracking-wider border-3 border-brutal-black transition-all hover:bg-brutal-yellow-light"
            style={{ boxShadow: '4px 4px 0 0 #0D0D0D', borderWidth: '3px' }}
          >
            <Sparkles className="w-4 h-4" />
            Generate Prompt
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 bg-brutal-yellow border-3 border-brutal-black min-h-[48px] min-w-[48px] flex items-center justify-center"
            style={{ borderWidth: '3px' }}
            aria-label="Toggle menu"
            title="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-brutal-black" /> : <Menu className="w-6 h-6 text-brutal-black" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-brutal-cream pt-20 px-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-4 text-lg font-bold uppercase text-brutal-black hover:text-brutal-yellow hover:bg-brutal-black border-3 border-brutal-black hover:border-brutal-yellow transition-all min-h-[56px] flex items-center"
                style={{ borderWidth: '3px' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 p-3 bg-brutal-yellow border-3 border-brutal-black min-h-[48px] min-w-[48px] flex items-center justify-center"
            style={{ borderWidth: '3px' }}
            title="Close menu"
          >
            <X className="w-6 h-6 text-brutal-black" />
          </button>
        </div>
      )}
    </>
  );
}

// TIER 2: Individual nav link with hover animation
function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!linkRef.current || !underlineRef.current) return;

    const link = linkRef.current;
    const underline = underlineRef.current;

    const handleEnter = () => {
      gsap.to(underline, {
        scaleX: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      if (!isActive) {
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    link.addEventListener("mouseenter", handleEnter);
    link.addEventListener("mouseleave", handleLeave);

    // Set initial state for active link
    gsap.set(underline, { scaleX: isActive ? 1 : 0 });

    return () => {
      link.removeEventListener("mouseenter", handleEnter);
      link.removeEventListener("mouseleave", handleLeave);
    };
  }, [isActive]);

  return (
    <a
      ref={linkRef}
      href={href}
      title={label}
      className="nav-link-item relative px-4 py-3 text-sm font-bold uppercase tracking-wider text-brutal-black hover:text-brutal-yellow hover:bg-brutal-black transition-all duration-150 border-2 border-transparent hover:border-brutal-yellow mx-1 min-h-[44px] flex items-center"
      style={{ borderWidth: '2px', borderColor: isActive ? '#FFDE00' : 'transparent' }}
    >
      {label}
      {/* Animated underline */}
      <div
        ref={underlineRef}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brutal-yellow origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </a>
  );
}
