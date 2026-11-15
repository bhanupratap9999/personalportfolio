"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  FileDown,
  Mail,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  CheckCircle2,
  GraduationCap,
  Award,
  Code2,
  User,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"profile" | "architecture">("profile");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Availability Badge & Profile Chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="relative flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3.5 backdrop-blur-md">
            <div className="relative h-7 w-7 rounded-full overflow-hidden border border-violet-500/50">
              <Image
                src="/profile.jpg"
                alt="Bhanu Pratap Singh"
                fill
                className="object-cover object-top"
                priority
                sizes="28px"
              />
            </div>
            <span className="text-xs font-mono text-zinc-300">Bhanu Pratap Singh</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for internships / opportunities</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-display text-white">
                Hi, I&apos;m{" "}
                <span className="text-gradient-purple">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
            </motion.div>

            {/* Rotating headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 flex items-center h-10 overflow-hidden"
            >
              <span className="text-lg sm:text-2xl font-mono text-zinc-400 mr-2">
                &gt;
              </span>
              <motion.span
                key={currentTaglineIndex}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-lg sm:text-2xl font-semibold font-mono text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400"
              >
                {PERSONAL_INFO.taglines[currentTaglineIndex]}
              </motion.span>
            </motion.div>

            {/* One line pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-5 text-base sm:text-xl text-zinc-300 max-w-2xl leading-relaxed"
            >
              {PERSONAL_INFO.pitch}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all hover:scale-[1.02] hover:shadow-violet-600/50 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Bhanu_Pratap_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/25 active:scale-95"
              >
                <FileDown className="h-4 w-4 text-violet-400" />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-5 py-3.5 text-sm font-semibold text-zinc-300 transition-all hover:text-white hover:bg-white/5 active:scale-95"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Let&apos;s Talk</span>
              </button>
            </motion.div>

            {/* Social Icons & Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex items-center gap-4 text-zinc-400"
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all hover:border-violet-500/50 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all hover:border-cyan-500/50 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all hover:border-emerald-500/50 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>

              <div className="h-4 w-[1px] bg-white/10" />

              <span className="text-xs font-mono text-zinc-500">
                {PERSONAL_INFO.email}
              </span>
            </motion.div>
          </div>

          {/* Right Hero Column: Interactive Profile & RAG Architecture Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative rounded-3xl border border-white/15 bg-[#0e1017]/90 p-5 shadow-2xl backdrop-blur-2xl overflow-hidden group hover:border-violet-500/40 transition-colors"
            >
              {/* Card top bar with Tabs */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-1.5 rounded-full bg-white/5 p-1">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      activeTab === "profile"
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <User className="h-3 w-3" />
                    <span>Profile</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      activeTab === "architecture"
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Code2 className="h-3 w-3" />
                    <span>RAG Engine</span>
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>2026 Core</span>
                </div>
              </div>

              {/* Tab 1: Profile Card with Bhanu's Photo */}
              {activeTab === "profile" ? (
                <div className="space-y-4">
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/10 group">
                    <Image
                      src="/profile.jpg"
                      alt="Bhanu Pratap Singh"
                      fill
                      className="object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />

                    {/* Overlay info */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <div className="font-display font-bold text-white text-lg">
                          Bhanu Pratap Singh
                        </div>
                        <div className="text-xs font-mono text-violet-300 flex items-center gap-1.5">
                          <GraduationCap className="h-3.5 w-3.5" />
                          <span>Lovely Professional University</span>
                        </div>
                      </div>
                      <span className="rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-300">
                        CGPA 6.93
                      </span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
                      <div className="text-zinc-400 font-mono text-[10px]">COMPETITIVE CODING</div>
                      <div className="font-semibold text-white mt-0.5">200+ Solved</div>
                      <div className="text-[10px] text-zinc-500">LeetCode, GFG, CodeForces</div>
                    </div>

                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
                      <div className="text-zinc-400 font-mono text-[10px]">PROFICIENCY</div>
                      <div className="font-semibold text-amber-300 mt-0.5">5-Star Badges</div>
                      <div className="text-[10px] text-zinc-500">C++ &amp; Java Mastery</div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Tab 2: Interactive Code Snippet */
                <div>
                  <div className="font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto min-h-[260px]">
                    <p>
                      <span className="text-purple-400">@Service</span>
                    </p>
                    <p>
                      <span className="text-purple-400">public class</span>{" "}
                      <span className="text-yellow-300">RAGPipelineEngine</span> &#123;
                    </p>
                    <p className="pl-4 text-zinc-500">
                      // Vector Similarity + SSE Streaming
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">private final</span>{" "}
                      <span className="text-cyan-300">PgVectorStore</span> vectorStore;
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">private final</span>{" "}
                      <span className="text-cyan-300">OpenAiChatModel</span> chatModel;
                    </p>
                    <br />
                    <p className="pl-4">
                      <span className="text-purple-400">public</span> Flux&lt;ServerSentEvent&lt;String&gt;&gt;
                    </p>
                    <p className="pl-4">
                      streamResponse(
                      <span className="text-orange-300">String</span> query) &#123;
                    </p>
                    <p className="pl-8 text-zinc-400">
                      List&lt;Document&gt; hits = vectorStore
                    </p>
                    <p className="pl-12 text-emerald-400">
                      .similaritySearch(query, topK: 4);
                    </p>
                    <p className="pl-8 text-zinc-400">
                      <span className="text-purple-400">return</span> chatModel.stream(
                    </p>
                    <p className="pl-12 text-violet-300">
                      promptWithCitations(query, hits)
                    </p>
                    <p className="pl-8">);</p>
                    <p className="pl-4">&#125;</p>
                    <p>&#125;</p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2">
                      <div className="text-[10px] text-zinc-400 font-mono">INFERENCE</div>
                      <div className="font-mono text-xs font-semibold text-white">gpt-4o-mini SSE</div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2">
                      <div className="text-[10px] text-zinc-400 font-mono">VECTOR DB</div>
                      <div className="font-mono text-xs font-semibold text-white">PGVector 800-tk</div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
            aria-label="Scroll down to About section"
          >
            <span>EXPLORE</span>
            <ArrowDown className="h-4 w-4 animate-bounce text-violet-400" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
