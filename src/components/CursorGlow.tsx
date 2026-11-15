"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  const cursorX = useSpring(-500, { damping: 25, stiffness: 200 });
  const cursorY = useSpring(-500, { damping: 25, stiffness: 200 });

  useEffect(() => {
    setMounted(true);
    // Check if device has a fine pointer (mouse)
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasMouse || prefersReducedMotion) {
      setIsPointerDevice(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  if (!mounted || !isPointerDevice) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed top-0 left-0 z-30 h-96 w-96 rounded-full bg-radial from-violet-500/15 via-cyan-500/5 to-transparent blur-3xl"
      aria-hidden="true"
    />
  );
}
