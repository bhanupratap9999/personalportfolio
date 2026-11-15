"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Award,
  BookOpen,
  GraduationCap,
  Sparkles,
  Layers,
  MapPin,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { PERSONAL_INFO, STATS } from "@/data/portfolioData";

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * value);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-violet-400"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Engineering Profile</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight font-display text-white"
          >
            About &amp; Core Highlights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-400"
          >
            Bridging algorithmic foundations with enterprise backend systems and
            state-of-the-art GenAI architectures.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Main Bio Card (spans 2 columns & 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group hover:border-violet-500/40 transition-colors"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-violet-400 text-xs font-mono tracking-wider uppercase mb-3">
                <GraduationCap className="h-4 w-4" />
                <span>Undergraduate • Lovely Professional University</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Building at the Intersection of Systems &amp; Intelligence
              </h3>

              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                I am a B.Tech Computer Science and Engineering student at{" "}
                <span className="text-white font-medium">
                  Lovely Professional University
                </span>{" "}
                (2023–Present, CGPA: 6.93). My engineering passion revolves
                around building production-grade software: from distributed
                backends in <span className="text-violet-300">Java 21</span> and{" "}
                <span className="text-violet-300">Spring Boot 3</span>, to
                reactive modern frontends with{" "}
                <span className="text-cyan-300">Next.js &amp; TypeScript</span>,
                and high-accuracy{" "}
                <span className="text-emerald-300">RAG AI pipelines</span>.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Spring AI RAG",
                  "Java 21",
                  "Next.js App Router",
                  "PGVector Embeddings",
                  "C++ Competitive DSA",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-zinc-300"
                  >
                    #{chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                Phagwara, Punjab / Jhansi, UP
              </span>
              <span className="font-mono text-emerald-400">
                ● Open to relocation &amp; remote
              </span>
            </div>
          </motion.div>

          {/* Stat Card 1: 200+ Problems Solved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl flex flex-col justify-between group hover:border-cyan-500/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Code2 className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-mono text-cyan-300">
                DSA Mastery
              </span>
            </div>

            <div className="mt-8">
              <div className="text-4xl sm:text-5xl text-white">
                <Counter value={200} suffix="+" />
              </div>
              <div className="mt-2 text-sm font-semibold text-zinc-200">
                Problems Solved
              </div>
              <p className="mt-1 text-xs text-zinc-400">
                Across LeetCode, GeeksforGeeks, and CodeForces.
              </p>
            </div>
          </motion.div>

          {/* Stat Card 2: 150+ DSA Practice Problems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl flex flex-col justify-between group hover:border-violet-500/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-mono text-violet-300">
                CipherSchools
              </span>
            </div>

            <div className="mt-8">
              <div className="text-4xl sm:text-5xl text-white">
                <Counter value={150} suffix="+" />
              </div>
              <div className="mt-2 text-sm font-semibold text-zinc-200">
                DSA Intensive Problems
              </div>
              <p className="mt-1 text-xs text-zinc-400">
                In-depth time/space complexity optimization in C++.
              </p>
            </div>
          </motion.div>

          {/* Stat Card 3: 5-Star Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl flex flex-col justify-between group hover:border-amber-500/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
                <Award className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-mono text-amber-300">
                HackerRank
              </span>
            </div>

            <div className="mt-8">
              <div className="text-4xl sm:text-5xl text-white">
                <Counter value={5} suffix="★" />
              </div>
              <div className="mt-2 text-sm font-semibold text-zinc-200">
                C++ &amp; Java Badges
              </div>
              <p className="mt-1 text-xs text-zinc-400">
                Recognized 5-Star proficiency in OOP and memory management.
              </p>
            </div>
          </motion.div>

          {/* Stat Card 4: 3 Major Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl flex flex-col justify-between group hover:border-emerald-500/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                <Layers className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono text-emerald-300">
                Production-Ready
              </span>
            </div>

            <div className="mt-8">
              <div className="text-4xl sm:text-5xl text-white">
                <Counter value={3} suffix="" />
              </div>
              <div className="mt-2 text-sm font-semibold text-zinc-200">
                Major Deployed Apps
              </div>
              <p className="mt-1 text-xs text-zinc-400">
                DevPilot (RAG), Placify Portal &amp; Smart Price Tracker.
              </p>
            </div>
          </motion.div>

          {/* Certifications Banner Card (spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-950/30 via-zinc-900/40 to-cyan-950/30 p-6 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-violet-500/40 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-violet-400">
                <CheckCircle className="h-4 w-4" />
                <span>3 Accredited Certifications</span>
              </div>
              <h4 className="mt-1 text-lg font-bold text-white font-display">
                Oracle AI Associate, MongoDB RAG &amp; NPTEL Cloud
              </h4>
              <p className="mt-1 text-xs text-zinc-400">
                Rigorous testing across vector embeddings, cloud infrastructure, and AI fundamentals.
              </p>
            </div>

            <a
              href="#certifications"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <span>View Credentials</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
