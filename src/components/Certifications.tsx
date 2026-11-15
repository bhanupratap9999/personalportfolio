"use client";

import { motion } from "framer-motion";
import {
  Award,
  Sparkles,
  Database,
  Cloud,
  CheckCircle,
  ExternalLink,
  Code,
  Trophy,
} from "lucide-react";
import { CERTIFICATIONS, ACHIEVEMENTS } from "@/data/portfolioData";

export default function Certifications() {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return Sparkles;
      case "Database":
        return Database;
      case "Cloud":
        return Cloud;
      default:
        return Award;
    }
  };

  return (
    <section id="certifications" className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-emerald-400"
          >
            <Award className="h-3.5 w-3.5" />
            <span>Verified Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight font-display text-white"
          >
            Certifications &amp; Achievements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-400"
          >
            Industry-standard qualifications in artificial intelligence, vector
            databases, cloud computing, and algorithmic benchmarks.
          </motion.p>
        </div>

        {/* Global Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = getCertIcon(cert.icon);

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-white/[0.05] flex flex-col justify-between"
              >
                <div>
                  {/* Top issuer badge & date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600/20 to-cyan-500/20 border border-violet-500/30 text-violet-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-zinc-400">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-violet-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="mt-1 text-xs font-semibold text-zinc-400 font-mono">
                    Issuer: {cert.issuer}
                  </div>

                  {/* Skills learned */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <CheckCircle className="h-3.5 w-3.5" />
                    <span>Verified Credential</span>
                  </span>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      aria-label={`Verify ${cert.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Competitive Coding Achievements Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-950/20 to-zinc-900/40 p-6 sm:p-8 backdrop-blur-xl flex items-start gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-violet-400 font-semibold uppercase">
                  Problem Solving Mastery
                </span>
              </div>
              <h4 className="mt-1 text-xl font-bold text-white font-display">
                200+ Coding Problems Solved
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Active problem solver across LeetCode, GeeksforGeeks, and CodeForces.
                Proficient in trees, graphs, dynamic programming, backtracking, and two-pointer algorithms.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-950/20 to-zinc-900/40 p-6 sm:p-8 backdrop-blur-xl flex items-start gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-600/20 text-cyan-400">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-cyan-400 font-semibold uppercase">
                  Language Proficiency
                </span>
              </div>
              <h4 className="mt-1 text-xl font-bold text-white font-display">
                5-Star Programming Badges
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Earned top 5-Star Badges in C++ and Java. Demonstrates deep understanding
                of object-oriented principles, virtual functions, memory allocation, and STL containers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
