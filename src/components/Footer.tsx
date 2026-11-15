"use client";

import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#07080c]/80 py-12 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Monogram and authorship */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-display font-bold text-white text-base">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 text-[10px] font-mono font-black text-white">
                BP
              </span>
              <span>Bhanu Pratap Singh</span>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              Designed &amp; built by Bhanu Pratap Singh • Full-Stack &amp; GenAI Engineer
            </p>
            <p className="text-[11px] text-zinc-500 font-mono mt-1">
              Crafted with Next.js 15, Tailwind CSS v4 &amp; Framer Motion
            </p>
          </div>

          {/* Center/Right: Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:border-violet-500/50 hover:bg-white/10 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:border-cyan-500/50 hover:bg-white/10 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:border-emerald-500/50 hover:bg-white/10 hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>

            <div className="h-4 w-[1px] bg-white/10 mx-1" />

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-mono text-zinc-300 hover:border-violet-500/40 hover:bg-white/10 hover:text-white transition-all"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-zinc-600 font-mono">
          © {new Date().getFullYear()} Bhanu Pratap Singh. All rights reserved. Available for work worldwide.
        </div>
      </div>
    </footer>
  );
}
