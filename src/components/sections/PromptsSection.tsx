"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ChevronRight, Sparkles } from "lucide-react";
import { FadeIn, GlassCard, NeonTag } from "@/components/ui/primitives";

import { categories, prompts } from "@/data/imagePrompts";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileTap={{ scale: 0.95 }}
      className="shrink-0 p-2 rounded-lg glass border border-white/10 text-white/50 hover:text-white hover:border-neon-cyan/40 transition-all"
      aria-label="Copy prompt to clipboard"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Check className="w-4 h-4 text-neon-green" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Copy className="w-4 h-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function PromptsSection() {
  const [activeCategory, setActiveCategory] = useState("portrait");

  const promptsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AI Prompts Library",
    "description": "A collection of 80+ high-quality prompts for AI image generation across Midjourney, DALL-E 3, and Stable Diffusion.",
    "itemListElement": Object.values(prompts).flat().map((prompt, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": prompt.title,
        "text": prompt.prompt,
        "keywords": prompt.tags.join(", "),
        "creator": {
          "@type": "Organization",
          "name": "AI Visual Synthesis"
        }
      }
    }))
  };

  return (
    <section id="prompts" className="section scroll-mt-20" aria-labelledby="prompts-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(promptsJsonLd) }}
      />
      {/* Header */}
      <FadeIn>
        <div className="text-center mb-12">
          <NeonTag color="purple">Prompt Library</NeonTag>
          <h2
            id="prompts-heading"
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl mt-4 mb-4 tracking-tight"
          >
            <span className="gradient-text-cyan">80+ Prompts</span>
            <br />
            Ready to Use
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Copy any prompt directly. Each is tested and optimized for maximum
            quality output.
          </p>
        </div>
      </FadeIn>

      {/* Category tabs */}
      <FadeIn delay={0.1}>
        <div
          className="flex flex-wrap gap-2 justify-center mb-10"
          role="tablist"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all border ${
                activeCategory === cat.id
                  ? "bg-neon-cyan text-dark-900 border-neon-cyan"
                  : "glass border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </motion.button>
          ))}
        </div>
      </FadeIn>

      {/* Prompt cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[65vh] overflow-y-auto scroll-smooth custom-scrollbar pr-2 pb-4 pt-2"
          role="tabpanel"
          tabIndex={0}
          aria-label={`${activeCategory} prompts`}
        >
          {(prompts[activeCategory] ?? []).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="h-full focus-within:ring-2 focus-within:ring-neon-cyan focus-within:ring-offset-2 focus-within:-outline-offset-2 rounded-2xl"
              tabIndex={-1}
            >
              <GlassCard className="h-full" glow="purple">
                <div className="p-5 h-full flex flex-col">
                  {/* Tool badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 glass border border-neon-purple/30 rounded-full px-3 py-1 text-xs font-semibold text-neon-purple mb-2">
                        <Sparkles className="w-3 h-3" />
                        {item.tool}
                      </div>
                      <h3 className="font-display font-bold text-lg text-white" tabIndex={0}>
                        {item.title}
                      </h3>
                    </div>
                    <CopyButton text={item.prompt} />
                  </div>

                  {/* Prompt text */}
                  <div className="glass rounded-xl p-4 border border-white/5 flex-1 mb-4">
                    <p className="text-sm text-white/60 leading-relaxed font-mono line-clamp-5 selection:bg-neon-cyan/20 selection:text-white" tabIndex={0}>
                      {item.prompt}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2" aria-label="Tags">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      {/* SEO hidden content for crawlers */}
      <div className="sr-only">
        {Object.entries(prompts).map(([catId, catPrompts]) => (
          <div key={catId}>
            <h3>Category: {catId}</h3>
            {catPrompts.map((p) => (
              <article key={p.title} itemScope itemType="https://schema.org/CreativeWork">
                <h4 itemProp="name">{p.title}</h4>
                <p itemProp="text">Prompt: {p.prompt}</p>
                <p>Tool: {p.tool}</p>
                <p itemProp="keywords">Tags: {p.tags.join(", ")}</p>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
