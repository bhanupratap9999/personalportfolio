"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileDown,
  Menu,
  X,
  Sparkles,
  Command,
  ArrowUpRight,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["about", "skills", "projects", "timeline", "certifications", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 rounded-full border px-3 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-white/15 bg-[#090a0f]/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "border-white/10 bg-[#090a0f]/50 backdrop-blur-md"
        } max-w-4xl w-full`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 font-display font-bold tracking-tight text-white hover:text-violet-300 transition-colors"
        >
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 text-white font-mono text-xs font-black shadow-md shadow-violet-500/30">
            BP
          </div>
          <span className="hidden sm:inline-block text-sm font-semibold tracking-tight">
            Bhanu<span className="text-violet-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] px-2 py-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`relative px-3 py-1 text-xs font-medium transition-colors ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/15 shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick theme toggle */}
          <ThemeToggle />

          {/* Resume CTA */}
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-3.5 py-1.5 text-xs font-medium text-white shadow-md shadow-violet-600/25 transition-all hover:scale-[1.02] hover:shadow-violet-600/40 active:scale-95"
          >
            <span>Resume</span>
            <FileDown className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 md:hidden items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="pointer-events-auto absolute top-16 left-4 right-4 z-50 overflow-hidden rounded-2xl border border-white/15 bg-[#0e1017]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                </button>
              ))}

              <div className="mt-2 border-t border-white/10 pt-3 flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-sm font-semibold text-white shadow-lg"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
