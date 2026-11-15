"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Quick progress increment to hit 100% in ~900ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090a0f] text-white"
        >
          {/* Subtle aurora glow in loader */}
          <div className="absolute h-72 w-72 rounded-full bg-violet-600/20 blur-[90px]" />
          <div className="absolute h-72 w-72 rounded-full bg-cyan-600/15 blur-[90px] translate-x-12 translate-y-12" />

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider text-violet-400 uppercase font-mono"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Initializing System • 2026
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-2xl sm:text-3xl font-bold tracking-tight font-display text-white"
            >
              Bhanu Pratap Singh
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-1 text-xs sm:text-sm text-zinc-400 font-mono"
            >
              Full-Stack Developer • GenAI Engineer
            </motion.p>

            <div className="mt-8 flex w-48 flex-col items-center gap-2">
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex w-full justify-between text-[11px] font-mono text-zinc-500">
                <span>LOADING ASSETS</span>
                <span className="text-zinc-300">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
