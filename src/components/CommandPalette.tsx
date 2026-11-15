"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Copy,
  Check,
  FileDown,
  Sparkles,
  Sun,
  Moon,
  FolderGit2,
  Cpu,
  GraduationCap,
  Award,
  Mail,
  User,
  X,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import confetti from "canvas-confetti";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Social";
  icon: any;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle open with Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery("");
    }
  }, [open]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const scrollTo = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const isLight = root.classList.contains("light");
    if (isLight) {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
    setOpen(false);
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setOpen(false);
  };

  const commands: CommandItem[] = useMemo(
    () => [
      {
        id: "nav-about",
        title: "Go to About Me & Stats",
        category: "Navigation",
        icon: User,
        action: () => scrollTo("about"),
      },
      {
        id: "nav-skills",
        title: "Explore Tech Stack & Skills",
        category: "Navigation",
        icon: Cpu,
        action: () => scrollTo("skills"),
      },
      {
        id: "nav-projects",
        title: "View Featured Projects (DevPilot, Placify)",
        category: "Navigation",
        icon: FolderGit2,
        action: () => scrollTo("projects"),
      },
      {
        id: "nav-timeline",
        title: "View Journey & Education",
        category: "Navigation",
        icon: GraduationCap,
        action: () => scrollTo("timeline"),
      },
      {
        id: "nav-certs",
        title: "View Certifications & Badges",
        category: "Navigation",
        icon: Award,
        action: () => scrollTo("certifications"),
      },
      {
        id: "nav-contact",
        title: "Let's Talk / Contact Form",
        category: "Navigation",
        icon: Mail,
        action: () => scrollTo("contact"),
      },
      {
        id: "act-resume",
        title: "Download Resume (PDF)",
        category: "Actions",
        icon: FileDown,
        shortcut: "PDF",
        action: () => {
          window.open(PERSONAL_INFO.resumePath, "_blank");
          setOpen(false);
        },
      },
      {
        id: "act-email",
        title: "Copy Email Address",
        category: "Actions",
        icon: copied === "email" ? Check : Copy,
        shortcut: "Copy",
        action: () => copyToClipboard(PERSONAL_INFO.email, "email"),
      },
      {
        id: "act-phone",
        title: "Copy Phone Number (+91-9555862923)",
        category: "Actions",
        icon: copied === "phone" ? Check : Copy,
        shortcut: "Copy",
        action: () => copyToClipboard(PERSONAL_INFO.phone, "phone"),
      },
      {
        id: "act-theme",
        title: "Toggle Light / Dark Mode",
        category: "Actions",
        icon: Sun,
        shortcut: "Theme",
        action: toggleTheme,
      },
      {
        id: "act-confetti",
        title: "Celebrate with Confetti 🎉",
        category: "Actions",
        icon: Sparkles,
        action: fireConfetti,
      },
      {
        id: "soc-github",
        title: "Open GitHub Profile",
        category: "Social",
        icon: ExternalLink,
        action: () => {
          window.open(PERSONAL_INFO.github, "_blank");
          setOpen(false);
        },
      },
      {
        id: "soc-linkedin",
        title: "Open LinkedIn Profile",
        category: "Social",
        icon: ExternalLink,
        action: () => {
          window.open(PERSONAL_INFO.linkedin, "_blank");
          setOpen(false);
        },
      },
    ],
    [copied]
  );

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const lower = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.title.toLowerCase().includes(lower) ||
        c.category.toLowerCase().includes(lower)
    );
  }, [commands, query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  return (
    <>
      {/* Keyboard shortcut trigger button on bottom left or pill */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-md transition-all hover:border-violet-500/40 hover:text-white shadow-lg"
          aria-label="Open Command Palette"
        >
          <Search className="h-3.5 w-3.5 text-violet-400" />
          <span>Quick search</span>
          <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-mono text-zinc-300">
            Ctrl+K
          </kbd>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#0f111a]/95 text-white shadow-2xl backdrop-blur-2xl"
              onKeyDown={handleKeyDown}
            >
              {/* Top search bar */}
              <div className="flex items-center border-b border-white/10 px-4 py-3.5">
                <Search className="mr-3 h-5 w-5 text-violet-400 shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  placeholder="Type a command or search section..."
                  className="w-full bg-transparent text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-1 text-zinc-400 hover:bg-white/5 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="max-h-80 overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-8 text-center text-sm text-zinc-500">
                    No results found for &quot;{query}&quot;
                  </div>
                ) : (
                  filteredCommands.map((cmd, index) => {
                    const Icon = cmd.icon;
                    const isSelected = index === selectedIndex;
                    return (
                      <button
                        key={cmd.id}
                        onClick={cmd.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors ${
                          isSelected
                            ? "bg-violet-600/20 text-white border border-violet-500/30"
                            : "text-zinc-300 hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                              isSelected
                                ? "bg-violet-500 text-white"
                                : "bg-white/5 text-zinc-400"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium">{cmd.title}</div>
                            <div className="text-[11px] text-zinc-500">
                              {cmd.category}
                            </div>
                          </div>
                        </div>

                        {cmd.shortcut && (
                          <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                            {cmd.shortcut}
                          </span>
                        )}
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2 text-[11px] text-zinc-500">
                <div className="flex items-center gap-2">
                  <span>Use</span>
                  <kbd className="rounded border border-white/10 px-1 py-0.5">
                    ↑
                  </kbd>
                  <kbd className="rounded border border-white/10 px-1 py-0.5">
                    ↓
                  </kbd>
                  <span>to navigate</span>
                  <kbd className="rounded border border-white/10 px-1.5 py-0.5">
                    ↵
                  </kbd>
                  <span>to select</span>
                </div>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

