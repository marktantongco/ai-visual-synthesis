"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Twitter, Youtube, Zap, Heart, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  {
    heading: "Learn",
    links: [
      { label: "Tools Overview", href: "#tools" },
      { label: "Techniques Guide", href: "#techniques" },
      { label: "Prompt Library", href: "#prompts" },
      { label: "Gallery", href: "#gallery" },
      { label: "Learning Roadmap", href: "#roadmap" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Midjourney Docs", href: "https://docs.midjourney.com" },
      { label: "Stable Diffusion Wiki", href: "https://github.com/AUTOMATIC1111" },
      { label: "Flux.1 GitHub", href: "https://github.com/black-forest-labs" },
      { label: "PromptHero", href: "https://prompthero.com" },
      { label: "Civitai Models", href: "https://civitai.com" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "r/StableDiffusion", href: "https://reddit.com/r/StableDiffusion" },
      { label: "Midjourney Discord", href: "https://discord.gg/midjourney" },
      { label: "AI Art Twitter", href: "https://twitter.com/search?q=%23aiart" },
      { label: "Lexica.art", href: "https://lexica.art" },
      { label: "OpenArt.ai", href: "https://openart.ai" },
    ],
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CTA animation
      gsap.fromTo(".footer-cta",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".footer-cta",
            start: "top 85%",
          }
        }
      );

      // Links stagger
      gsap.fromTo(".footer-col",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".footer-links",
            start: "top 85%",
          }
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="bg-brutal-black border-t-4 border-brutal-yellow" 
      role="contentinfo"
      style={{ borderColor: '#FFDE00', borderTopWidth: '4px' }}
    >
      {/* CTA banner */}
      <div className="footer-cta relative">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,var(--brutal-yellow)_1px,transparent_1px),linear-gradient(-45deg,var(--brutal-yellow)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brutal-yellow border-3 border-brutal-black px-4 py-2 mb-8"
               style={{ borderWidth: '3px', boxShadow: '6px 6px 0 0 #0D0D0D' }}>
            <span className="w-2 h-2 bg-brutal-black rounded-full animate-pulse" />
            <span className="text-xs font-bold text-brutal-black tracking-widest uppercase">
              Free — No signup required
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight mb-8 text-brutal-cream">
            Start Creating
            <br />
            <span className="text-brutal-yellow">AI Art Today</span>
          </h2>

          <p className="text-brutal-gray text-lg max-w-xl mx-auto mb-12">
            You now have everything you need. Pick a tool, copy a prompt, and
            start generating. The only thing left is to begin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tools"
              className="brutal-btn text-brutal-black text-lg px-10 py-4"
            >
              Explore Tools
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </a>
            <a
              href="#prompts"
              className="brutal-btn brutal-btn-dark text-lg px-10 py-4"
            >
              Browse Prompts
            </a>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="footer-links max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="footer-col col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brutal-yellow flex items-center justify-center border-3 border-brutal-cream"
                   style={{ borderWidth: '3px', boxShadow: '4px 4px 0 0 #0D0D0D' }}>
                <Zap className="w-5 h-5 text-brutal-black" />
              </div>
              <span className="font-display font-black text-xl text-brutal-cream">
                AI<span className="text-brutal-yellow">Synth</span>
              </span>
            </div>
            <p className="text-sm text-brutal-gray leading-relaxed mb-6">
              The complete interactive guide to AI visual synthesis, prompt
              engineering, and creative AI tools.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-brutal-black border-2 border-brutal-gray flex items-center justify-center text-brutal-gray hover:text-brutal-yellow hover:border-brutal-yellow transition-all"
                  style={{ borderWidth: '2px' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="footer-col">
              <h3 className="text-xs font-bold text-brutal-yellow uppercase tracking-widest mb-6">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brutal-gray hover:text-brutal-yellow transition-colors"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-brutal-grayDark mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-brutal-gray">
          <div>
            © 2026 AISynth. Made with{" "}
            <Heart className="w-4 h-4 inline text-brutal-accent" /> for creators.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brutal-cream transition-colors font-bold uppercase text-xs tracking-wider">
              Privacy
            </a>
            <a href="#" className="hover:text-brutal-cream transition-colors font-bold uppercase text-xs tracking-wider">
              Terms
            </a>
            <a href="#" className="hover:text-brutal-cream transition-colors font-bold uppercase text-xs tracking-wider">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
