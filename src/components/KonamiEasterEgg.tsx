"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Trophy, X } from "lucide-react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiEasterEgg() {
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);

  const triggerConfetti = () => {
    // Left cannon
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 65,
      origin: { x: 0, y: 0.7 },
      colors: ["#8b5cf6", "#06b6d4", "#ec4899", "#10b981", "#f59e0b"],
    });
    // Right cannon
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 65,
      origin: { x: 1, y: 0.7 },
      colors: ["#8b5cf6", "#06b6d4", "#ec4899", "#10b981", "#f59e0b"],
    });
    // Mid blast
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
      });
    }, 250);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid capturing when typing inside input/textarea
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return;
      }

      setKeySequence((prev) => {
        const nextSequence = [...prev, e.key];
        if (nextSequence.length > KONAMI_CODE.length) {
          nextSequence.shift();
        }

        // Check if matched
        const isMatch = KONAMI_CODE.every(
          (key, index) => nextSequence[index]?.toLowerCase() === key.toLowerCase()
        );

        if (isMatch) {
          setActivated(true);
          triggerConfetti();
          return [];
        }

        return nextSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border border-violet-500/40 bg-zinc-950/90 p-4 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
              <Trophy className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <span>Secret Easter Egg Unlocked!</span>
                <Sparkles className="h-4 w-4 text-amber-400" />
              </div>
              <p className="mt-1 text-xs text-zinc-400">
                You entered the classic Konami code: <br />
                <span className="font-mono text-violet-300">↑ ↑ ↓ ↓ ← → ← → B A</span>
                <br />
                GenAI & 5-Star C++/Java supercharges unlocked!
              </p>
              <button
                onClick={triggerConfetti}
                className="mt-3 inline-flex items-center gap-1 rounded-lg bg-violet-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-violet-500 transition-colors"
              >
                More Confetti 🎉
              </button>
            </div>
            <button
              onClick={() => setActivated(false)}
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
