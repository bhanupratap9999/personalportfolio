"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Cpu,
  Code2,
  Database,
  Terminal,
  Server,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { SKILL_CATEGORIES, MARQUEE_TECH } from "@/data/portfolioData";

export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Sparkles;
      case 1:
        return Code2;
      case 2:
        return Server;
      case 3:
        return Database;
      case 4:
        return Cpu;
      default:
        return Terminal;
    }
  };

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-cyan-400"
          >
            <Cpu className="h-3.5 w-3.5" />
            <span>Interactive Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight font-display text-white"
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-400"
          >
            Full-stack engineering capabilities honed through real-world systems,
            RAG pipelines, and high-performance algorithms.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(idx);
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "text-white shadow-lg shadow-violet-600/20"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 border border-violet-400/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`relative z-10 h-4 w-4 ${isActive ? "text-white" : "text-zinc-400"}`} />
                <span className="relative z-10">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 backdrop-blur-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {SKILL_CATEGORIES[activeCategoryIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    {SKILL_CATEGORIES[activeCategoryIndex].description}
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-violet-400">
                  {SKILL_CATEGORIES[activeCategoryIndex].skills.length} core proficiencies
                </span>
              </div>

              {/* Skill chips grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f111a]/70 p-4 transition-all duration-300 hover:border-violet-500/50 hover:bg-[#131622] hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-violet-400 group-hover:scale-150 transition-transform" />
                      <div>
                        <div className="font-semibold text-sm sm:text-base text-white group-hover:text-violet-300 transition-colors">
                          {skill.name}
                        </div>
                        {skill.level && (
                          <div className="text-[11px] font-mono text-zinc-400">
                            {skill.level}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-zinc-500 group-hover:bg-violet-600/20 group-hover:text-violet-300 transition-colors">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Infinite Tech Marquee */}
        <div className="mt-16">
          <div className="text-center mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Technology Ecosystem &amp; Tooling
            </span>
          </div>

          <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="animate-marquee flex items-center gap-3">
              {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, i) => (
                <div
                  key={`${tech}-${i}`}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs sm:text-sm font-mono text-zinc-300 backdrop-blur-md transition-colors hover:border-violet-400/50 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
