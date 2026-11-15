"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  Layers,
  FolderGit2,
  Code2,
  Terminal,
  Activity,
  Bot,
  Zap,
  TrendingDown,
  Bell,
  CheckCircle,
  FileCode2,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types";

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "AI" | "Full-Stack">("All");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-violet-400"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Featured Case Studies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight font-display text-white"
          >
            Production &amp; Flagship Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-400"
          >
            Architected and deployed applications featuring autonomous AI retrieval,
            distributed microservices, and modern web frameworks.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(["All", "AI", "Full-Stack"] as const).map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "text-white shadow-lg shadow-violet-600/25"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 border border-violet-400/40"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {cat === "All" ? "All Projects (3)" : cat === "AI" ? "GenAI & RAG" : "Full-Stack SaaS"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isDevPilot = project.id === "devpilot";
  const isPlacify = project.id === "placify";
  const isPriceTracker = project.id === "smart-price-tracker";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={`group relative rounded-3xl border ${
        isDevPilot
          ? "border-violet-500/40 bg-[#0e1019]/90 shadow-[0_0_50px_-12px_rgba(139,92,246,0.2)]"
          : "border-white/10 bg-[#0f111a]/80"
      } backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:border-violet-500/50`}
    >
      {/* Animated gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500/80 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
        {/* Left Column: Project Details */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-mono font-medium text-violet-300">
              {project.date}
            </span>
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300">
              {project.category}
            </span>
            {project.highlightTag && (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-300 flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                {project.highlightTag}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-display text-white group-hover:text-violet-200 transition-colors">
            {project.title}
          </h3>

          <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-400">
            {project.subtitle}
          </p>

          {/* Description Bullets */}
          <div className="mt-5 space-y-2.5">
            {project.description.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Metrics Pill Row */}
          {project.metrics && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/10">
              {project.metrics.map((metric, i) => (
                <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02] p-2">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">
                    {metric.label}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white font-mono mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Tags */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-zinc-300 transition-colors hover:border-violet-500/40 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions: Live Demo & GitHub */}
          <div className="mt-8 flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-violet-600/30 transition-all hover:scale-[1.02] hover:shadow-violet-600/50 active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-200 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Custom Browser-Frame Mockup */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl border border-white/15 bg-[#090a0f] p-4 shadow-2xl overflow-hidden group-hover:border-violet-500/30 transition-colors">
            {/* Browser top chrome */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-[11px] font-mono text-zinc-400 max-w-[240px] truncate">
                <span className="text-zinc-600">https://</span>
                <span className="text-zinc-300">
                  {isDevPilot
                    ? "devpilot.ai/workspace/bhanu/repo"
                    : isPlacify
                    ? "placify.edu/portal/dashboard"
                    : "pricetracker.dev/monitor/live"}
                </span>
              </div>
              <div className="flex items-center gap-1 text-zinc-500 text-[10px] font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Custom interactive Mockup preview based on project */}
            {isDevPilot && <DevPilotMockup />}
            {isPlacify && <PlacifyMockup />}
            {isPriceTracker && <PriceTrackerMockup />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// DevPilot Interactive RAG Codebase Simulation
function DevPilotMockup() {
  return (
    <div className="space-y-3 font-mono text-xs">
      {/* Top Query */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-start gap-2.5">
        <div className="h-5 w-5 rounded bg-violet-600/30 flex items-center justify-center text-violet-300 shrink-0 mt-0.5">
          Q
        </div>
        <div>
          <div className="text-zinc-300 font-medium">
            How does the automated token splitter chunk repo files?
          </div>
          <div className="text-[10px] text-zinc-500 mt-0.5">
            Query vectorized with text-embedding-3-small • 1536 dim
          </div>
        </div>
      </div>

      {/* RAG Citation Box */}
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
        <div className="flex items-center justify-between text-[11px] text-emerald-400 mb-1">
          <span className="flex items-center gap-1">
            <FileCode2 className="h-3.5 w-3.5" />
            <span>src/indexing/TokenSplitterPipeline.java:42-88</span>
          </span>
          <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold">
            PGVector Sim: 0.94
          </span>
        </div>
        <p className="text-[11px] text-zinc-400 font-sans line-clamp-2">
          &quot;TokenTextSplitter configured for 800 tokens per chunk with 50-token
          overlap. Document metadata stored with repo commit SHA and GitHub OAuth
          author.&quot;
        </p>
      </div>

      {/* SSE Real-time Output stream */}
      <div className="rounded-xl border border-violet-500/30 bg-violet-950/20 p-3.5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-violet-400 text-[11px] font-bold">
            <Bot className="h-3.5 w-3.5" />
            <span>DevPilot Copilot [SSE Stream]</span>
          </div>
          <span className="flex items-center gap-1 text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            Tokens/sec: 42.8
          </span>
        </div>
        <p className="text-zinc-200 text-xs font-sans leading-relaxed">
          The ingestion engine utilizes Spring AI&apos;s TokenTextSplitter. When a
          GitHub repo is synchronized via OAuth 2.0, files are chunked into
          800-token blocks, embedded asynchronously, and stored in PostgreSQL
          PGVector with cosine similarity indices.
        </p>
      </div>
    </div>
  );
}

// Placify Interactive Student/Recruiter Portal Mockup
function PlacifyMockup() {
  return (
    <div className="space-y-3 font-sans text-xs">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="font-semibold text-white font-mono text-xs">
          STUDENT APPLICATION TRACKER
        </span>
        <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-mono text-cyan-300">
          JWT Authenticated (Role: Student)
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-2.5">
          <div>
            <div className="font-semibold text-white">Full-Stack GenAI Intern</div>
            <div className="text-[11px] text-zinc-400">Google Cloud Platform</div>
          </div>
          <span className="rounded-lg bg-emerald-500/20 px-2 py-1 text-[11px] font-mono font-medium text-emerald-400">
            Selected (Offer)
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-2.5">
          <div>
            <div className="font-semibold text-white">Software Engineer Intern</div>
            <div className="text-[11px] text-zinc-400">Microsoft Azure Team</div>
          </div>
          <span className="rounded-lg bg-violet-500/20 px-2 py-1 text-[11px] font-mono font-medium text-violet-400">
            Tech Interview R2
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-2.5">
          <div>
            <div className="font-semibold text-white">Backend Systems Intern</div>
            <div className="text-[11px] text-zinc-400">Atlassian Confluence</div>
          </div>
          <span className="rounded-lg bg-amber-500/20 px-2 py-1 text-[11px] font-mono font-medium text-amber-400">
            Resume Screened
          </span>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-2 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
        <span>Socket.IO Live Gateway</span>
        <span className="text-emerald-400">Connected (0 dropped frames)</span>
      </div>
    </div>
  );
}

// Smart Price Tracker Mockup
function PriceTrackerMockup() {
  return (
    <div className="space-y-3 font-sans text-xs">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div>
          <div className="font-semibold text-white">Sony WH-1000XM5 Wireless</div>
          <div className="text-[10px] text-zinc-400 font-mono">Scraped via Firecrawl AI</div>
        </div>
        <div className="text-right">
          <div className="font-mono font-bold text-emerald-400 text-sm">$279.00</div>
          <div className="text-[10px] text-rose-400 flex items-center gap-0.5 justify-end">
            <TrendingDown className="h-3 w-3" />
            <span>-24% lowest ever</span>
          </div>
        </div>
      </div>

      {/* Simulated price fluctuation bar */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2 font-mono">
          <span>30-Day Price Movement</span>
          <span>Cron: Daily 00:00 UTC</span>
        </div>
        <div className="h-16 w-full flex items-end gap-1.5 pt-2">
          {[60, 65, 70, 75, 72, 68, 64, 60, 58, 55, 48, 42, 38, 30].map(
            (height, i) => (
              <div
                key={i}
                style={{ height: `${height}%` }}
                className={`flex-1 rounded-t transition-all ${
                  i === 13 ? "bg-emerald-400" : "bg-violet-500/40"
                }`}
                title={`Day ${i + 1}`}
              />
            )
          )}
        </div>
      </div>

      {/* Triggered Alert Pill */}
      <div className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-xs text-emerald-300">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          <span>Resend Email Dispatched: Target Price Hit</span>
        </div>
        <span className="font-mono text-[10px]">Just now</span>
      </div>
    </div>
  );
}
