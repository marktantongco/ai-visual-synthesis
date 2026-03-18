"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Cpu, Eye, Shield, Layers, Film, Zap, Check, Lock, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Skill Data with Lessons ───────────────────────────────────────────── */
const skillNodes = [
  {
    id: 1,
    category: "FOUNDATION",
    title: "Technical Prompt Engineering",
    icon: Cpu,
    color: "#FFDE00",
    description: "Master systematic prompt construction using the CLIP/T5 attention framework, semantic weight stacking, and style vocabulary.",
    lessons: [
      {
        id: "1-1",
        title: "Prompt Structure Basics",
        what: "Learn the fundamental anatomy of an effective AI prompt: subject, action, context, style.",
        why: "A well-structured prompt produces consistent, high-quality outputs.",
        example: "a woman in a red dress, walking through rain, cinematic lighting --ar 16:9",
        practice: "Write 3 prompts using the basic structure"
      },
      {
        id: "1-2",
        title: "Semantic Weight Stacking",
        what: "Use parentheses and weights to emphasize or de-emphasize elements in your prompt.",
        why: "Control which elements the AI prioritizes in generation.",
        example: "a (majestic:1.3) mountain landscape with (tiny:0.7) village",
        practice: "Experiment with weight values from 0.5 to 1.5"
      },
      {
        id: "1-3",
        title: "Platform-Specific Syntax",
        what: "Each AI tool has unique parameters and formatting conventions.",
        why: "Maximize results by speaking each platform's native language.",
        example: "Midjourney: --ar 16:9 --v 6 --style raw | SDXL: (prompt), negative:(bad art)",
        practice: "Convert one prompt for 3 different platforms"
      }
    ],
    unlocked: true
  },
  {
    id: 2,
    category: "FOUNDATION",
    title: "Photographic Literacy",
    icon: Eye,
    color: "#00F5FF",
    description: "Apply real-world photography concepts as AI control parameters to achieve photorealistic results.",
    lessons: [
      {
        id: "2-1",
        title: "Lighting Pattern Vocabulary",
        what: "Learn lighting setups: Rembrandt, butterfly, split, loop, and rim lighting.",
        why: "Lighting defines mood and dimensionality in AI images.",
        example: "Rembrandt lighting from camera left, soft shadows, warm key light",
        practice: "Generate 5 portraits with different lighting setups"
      },
      {
        id: "2-2",
        title: "Camera & Lens Specifications",
        what: "Translate focal length and aperture into AI-friendly terms.",
        why: "Camera settings create specific looks: bokeh, compression, perspective.",
        example: "85mm f/1.4 portrait lens, shallow depth of field, cream background",
        practice: "Compare 35mm vs 85mm vs 135mm in your generations"
      },
      {
        id: "2-3",
        title: "Color Temperature & Grading",
        what: "Use Kelvin temperatures and color theory in prompts.",
        why: "Color grading establishes emotional tone and time period.",
        example: "3200K warm tungsten lighting, teal shadows, orange highlights",
        practice: "Create a day-to-night color grade series"
      }
    ],
    unlocked: true
  },
  {
    id: 3,
    category: "CONSISTENCY",
    title: "Strategic Negation & Refinement",
    icon: Shield,
    color: "#BF00FF",
    description: "Advanced exclusion techniques to eliminate AI artifacts and achieve clean, professional outputs.",
    lessons: [
      {
        id: "3-1",
        title: "Negative Prompt Algebra",
        what: "Build compound negative prompts that target specific artifacts.",
        why: "Negative prompts are as important as positive ones for quality.",
        example: "negative: (deformed hands, extra fingers:1.4), (blurry:1.2), watermark",
        practice: "Create a universal negative prompt template"
      },
      {
        id: "3-2",
        title: "Anatomy Correction",
        what: "Fix common AI anatomical errors through strategic prompting.",
        why: "Hands, faces, and poses often need correction.",
        example: "(correct anatomy:1.2), five fingers, natural pose, proper perspective",
        practice: "Generate 10 hands and refine until 8 are correct"
      }
    ],
    unlocked: false
  },
  {
    id: 4,
    category: "CONSISTENCY",
    title: "Identity Preservation",
    icon: Layers,
    color: "#FFB000",
    description: "Maintain consistent characters and styles across multi-image sequences.",
    lessons: [
      {
        id: "4-1",
        title: "Character Reference Systems",
        what: "Use --cref (Midjourney), IP-Adapter (SD), or character sheets.",
        why: "Create cohesive stories and brand assets with consistent characters.",
        example: "Use same seed + character description + reference image",
        practice: "Generate the same character in 5 different scenes"
      },
      {
        id: "4-2",
        title: "Style Anchoring",
        what: "Lock visual style across multiple generations.",
        why: "Maintain brand consistency in production workflows.",
        example: "--sref [image-url] for style reference in Midjourney",
        practice: "Create a style reference library for your projects"
      }
    ],
    unlocked: false
  },
  {
    id: 5,
    category: "REFINEMENT",
    title: "Post-Processing Workflows",
    icon: Film,
    color: "#00FF87",
    description: "Combine AI generation with professional post-processing for production-quality outputs.",
    lessons: [
      {
        id: "5-1",
        title: "AI Upscaling Integration",
        what: "Use Topaz, ESRGAN, or built-in upscalers for print-ready images.",
        why: "AI images need upscaling for professional use.",
        example: "Generate at 1024px → Upscale 4x → Lightroom final touches",
        practice: "Upscale and compare 3 different upscaling tools"
      },
      {
        id: "5-2",
        title: "Inpainting & Outpainting",
        what: "Extend images and fix specific regions without regeneration.",
        why: "Save time by editing only what needs to change.",
        example: "Extend background, fix hands, add objects to specific areas",
        practice: "Outpaint an image to 16:9 aspect ratio"
      }
    ],
    unlocked: false
  },
  {
    id: 6,
    category: "ORCHESTRATION",
    title: "AI Agent Workflows",
    icon: Zap,
    color: "#FF006E",
    description: "Design multi-agent pipelines for production AI workflows.",
    lessons: [
      {
        id: "6-1",
        title: "Agent Role Design",
        what: "Define specialized AI agents for each pipeline stage.",
        why: "Break complex workflows into manageable, repeatable processes.",
        example: "Planner → Researcher → Generator → Reviewer → Refiner",
        practice: "Design an agent pipeline for your use case"
      },
      {
        id: "6-2",
        title: "Validation & Fallback",
        what: "Build quality checks and backup plans into your workflow.",
        why: "Production systems need reliability and error handling.",
        example: "If generation fails quality check → regenerate with adjusted params",
        practice: "Add validation rules to your pipeline"
      }
    ],
    unlocked: false
  }
];

interface LessonProgress {
  [key: string]: boolean; // lessonId: completed
}

export default function SkillMapEnhanced() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  const [progress, setProgress] = useState<LessonProgress>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("avs-skill-progress");
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("avs-skill-progress", JSON.stringify(progress));
  }, [progress]);

  // Animate entrance
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.querySelectorAll(".skill-node-card"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" }
      );
    }
  }, []);

  const completeLesson = (lessonId: string) => {
    setProgress(prev => ({ ...prev, [lessonId]: true }));
  };

  const getSkillProgress = (skillId: number) => {
    const skill = skillNodes.find(s => s.id === skillId);
    if (!skill) return 0;
    const completed = skill.lessons.filter(l => progress[l.id]).length;
    return Math.round((completed / skill.lessons.length) * 100);
  };

  const getTotalProgress = () => {
    const totalLessons = skillNodes.reduce((acc, s) => acc + s.lessons.length, 0);
    const completedLessons = Object.values(progress).filter(Boolean).length;
    return Math.round((completedLessons / totalLessons) * 100);
  };

  const currentSkill = skillNodes.find(s => s.id === activeSkill);
  const currentLesson = currentSkill?.lessons.find(l => l.id === activeLesson);

  return (
    <section id="skillmap" className="py-16 px-4 bg-brutal-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-grid opacity-10" />

      <div ref={containerRef} className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-brutal-yellow border-4 border-brutal-black px-6 py-3 mb-6"
            style={{ boxShadow: "8px 8px 0 0 #0D0D0D" }}>
            <Zap className="w-5 h-5 text-brutal-black" />
            <span className="text-xs font-bold text-brutal-black tracking-[0.15em] uppercase font-mono">
              2026 Framework
            </span>
          </div>
          <h2 className="headline-xl text-brutal-cream mb-4">
            AI Practitioner <span className="text-brutal-yellow">Skill Map</span>
          </h2>
          <p className="text-brutal-gray max-w-2xl mx-auto">
            Click any skill to explore lessons. Track your progress and unlock new skills as you master each level.
          </p>
          
          {/* Overall Progress */}
          <div className="mt-6 p-4 bg-brutal-black-light border-2 border-brutal-yellow inline-block">
            <div className="flex items-center gap-4">
              <div className="text-3xl font-black text-brutal-yellow font-display">
                {getTotalProgress()}%
              </div>
              <div className="text-left">
                <div className="text-xs font-bold uppercase tracking-widest text-brutal-cream">
                  Overall Progress
                </div>
                <div className="text-xs text-brutal-gray">
                  {Object.values(progress).filter(Boolean).length} of{" "}
                  {skillNodes.reduce((acc, s) => acc + s.lessons.length, 0)} lessons completed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {skillNodes.map((skill) => {
            const skillProgress = getSkillProgress(skill.id);
            const isUnlocked = skill.unlocked || skillProgress > 0 || 
              (skill.id > 1 && getSkillProgress(skill.id - 1) >= 50);
            
            return (
              <div
                key={skill.id}
                className="skill-node-card"
              >
                <button
                  onClick={() => {
                    if (isUnlocked) {
                      setActiveSkill(activeSkill === skill.id ? null : skill.id);
                      setActiveLesson(null);
                    }
                  }}
                  disabled={!isUnlocked}
                  className={cn(
                    "w-full p-4 text-left border-3 transition-all relative",
                    activeSkill === skill.id
                      ? "text-brutal-black"
                      : "bg-brutal-black-light text-brutal-cream"
                  )}
                  style={{
                    borderColor: activeSkill === skill.id ? skill.color : "rgba(255,255,255,0.1)",
                    background: activeSkill === skill.id ? skill.color + "20" : undefined,
                    boxShadow: activeSkill === skill.id ? `0 0 20px ${skill.color}40` : "none"
                  }}
                >
                  {/* Lock Overlay */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-brutal-black/80 flex items-center justify-center z-10">
                      <Lock className="w-6 h-6 text-brutal-gray" />
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 flex items-center justify-center border-2"
                      style={{ borderColor: skill.color, background: skill.color + "20" }}
                    >
                      <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-1"
                      style={{ background: skill.color + "20", color: skill.color }}
                    >
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm mb-2">{skill.title}</h3>

                  {/* Progress Bar */}
                  <div className="mt-3">
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-brutal-gray">Progress</span>
                      <span style={{ color: skill.color }}>{skillProgress}%</span>
                    </div>
                    <div className="h-1.5 bg-brutal-black/50 overflow-hidden">
                      <div
                        className="h-full transition-all duration-500"
                        style={{ width: `${skillProgress}%`, background: skill.color }}
                      />
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Lesson Panel */}
        {currentSkill && (
          <div className="brutal-card-dark p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ background: currentSkill.color }}
                >
                  <currentSkill.icon className="w-5 h-5 text-brutal-black" />
                </div>
                <div>
                  <h3 className="font-bold text-brutal-cream">{currentSkill.title}</h3>
                  <p className="text-xs text-brutal-gray">{currentSkill.lessons.length} lessons</p>
                </div>
              </div>
              <button
                onClick={() => { setActiveSkill(null); setActiveLesson(null); }}
                className="p-2 text-brutal-gray hover:text-brutal-cream"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lesson List */}
            {!activeLesson && (
              <div className="space-y-2">
                {currentSkill.lessons.map((lesson, i) => {
                  const isCompleted = progress[lesson.id];
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson.id)}
                      className="w-full p-4 flex items-center gap-4 bg-brutal-black-light border-2 border-brutal-gray/20 hover:border-brutal-yellow transition-all text-left"
                    >
                      <div
                        className="w-8 h-8 flex items-center justify-center shrink-0"
                        style={{
                          background: isCompleted ? "#00FF87" : currentSkill.color + "30",
                          border: `2px solid ${isCompleted ? "#00FF87" : currentSkill.color}`
                        }}
                      >
                        {isCompleted ? (
                          <Check className="w-4 h-4 text-brutal-black" />
                        ) : (
                          <span className="text-xs font-bold" style={{ color: currentSkill.color }}>
                            {i + 1}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-brutal-cream">{lesson.title}</h4>
                        <p className="text-xs text-brutal-gray truncate">{lesson.what}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-brutal-gray shrink-0" />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Active Lesson */}
            {currentLesson && (
              <div className="space-y-6">
                <button
                  onClick={() => setActiveLesson(null)}
                  className="text-xs font-bold uppercase tracking-widest text-brutal-yellow hover:text-brutal-yellow-light"
                >
                  ← Back to lessons
                </button>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg text-brutal-cream mb-4">{currentLesson.title}</h4>
                    
                    <div className="space-y-4">
                      <div className="p-3 bg-brutal-black border-l-4" style={{ borderLeftColor: currentSkill.color }}>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-brutal-gray mb-1">
                          What It Is
                        </div>
                        <p className="text-sm text-brutal-cream">{currentLesson.what}</p>
                      </div>

                      <div className="p-3 bg-brutal-black border-l-4 border-brutal-yellow">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-brutal-gray mb-1">
                          Why It Matters
                        </div>
                        <p className="text-sm text-brutal-cream">{currentLesson.why}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-brutal-black border-2 border-brutal-yellow">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brutal-yellow mb-2">
                        Example Prompt
                      </div>
                      <code className="text-sm text-brutal-cream font-mono break-all">
                        {currentLesson.example}
                      </code>
                    </div>

                    <div className="p-4 bg-brutal-black border-2 border-brutal-cyan">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brutal-cyan mb-2">
                        Practice Exercise
                      </div>
                      <p className="text-sm text-brutal-cream">{currentLesson.practice}</p>
                    </div>

                    <button
                      onClick={() => completeLesson(currentLesson.id)}
                      disabled={progress[currentLesson.id]}
                      className={cn(
                        "w-full p-4 font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2",
                        progress[currentLesson.id]
                          ? "bg-brutal-green text-brutal-black"
                          : "bg-brutal-yellow text-brutal-black hover:bg-brutal-yellow-dark"
                      )}
                      style={{ boxShadow: "4px 4px 0 0 #0D0D0D" }}
                    >
                      {progress[currentLesson.id] ? (
                        <>
                          <Check className="w-5 h-5" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Check className="w-5 h-5" />
                          Mark as Complete
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
