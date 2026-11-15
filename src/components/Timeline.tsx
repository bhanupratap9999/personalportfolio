"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  MapPin,
  Sparkles,
  Award,
  CheckCircle2,
} from "lucide-react";
import { TIMELINE } from "@/data/portfolioData";

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-violet-400"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Path &amp; Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight font-display text-white"
          >
            Education &amp; Training
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-xl text-sm sm:text-base text-zinc-400"
          >
            My academic journey and specialized algorithmic training that shaped
            my software engineering discipline.
          </motion.p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-violet-500 via-cyan-500/50 to-emerald-500/20" />

          <div className="space-y-12">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              const isEducation = item.type === "education";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline center node */}
                  <div className="absolute left-4 sm:left-1/2 top-1.5 -translate-x-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#090a0f] bg-gradient-to-tr from-violet-600 to-cyan-500 shadow-md shadow-violet-500/30 text-white">
                    {isEducation ? (
                      <GraduationCap className="h-4 w-4" />
                    ) : (
                      <BookOpen className="h-4 w-4" />
                    )}
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? "sm:pl-10" : "sm:pr-10"
                    }`}
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-white/[0.05] group">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-violet-300">
                          {item.period}
                        </span>
                        {item.badge && (
                          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-zinc-400">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-violet-300 transition-colors">
                        {item.title}
                      </h3>

                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                        <span className="font-medium text-zinc-300">
                          {item.institution}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-zinc-500" />
                          {item.location}
                        </span>
                        {item.grade && (
                          <span className="rounded bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-300">
                            {item.grade}
                          </span>
                        )}
                      </div>

                      {/* Highlights */}
                      <ul className="mt-4 space-y-2 text-xs sm:text-sm text-zinc-300">
                        {item.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

