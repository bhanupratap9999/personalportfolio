"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message: data.message || "Message sent successfully! I'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", message: "" });
        // Celebratory mini confetti
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again or email directly.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again or email directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-violet-400"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Initiate Collaboration</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-display text-white max-w-3xl"
          >
            Let&apos;s build something{" "}
            <span className="text-gradient-purple">great together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-sm sm:text-base text-zinc-400"
          >
            Whether you have an internship opportunity, full-stack opening, GenAI
            project, or simply want to connect — my inbox is always open.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Click to Copy Email Card */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">DIRECT EMAIL</div>
                    <div className="text-sm font-semibold text-white break-all">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:bg-violet-600 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {copiedEmail && (
                <div className="mt-2 text-right text-[11px] font-mono text-emerald-400">
                  Copied to clipboard!
                </div>
              )}
            </div>

            {/* Click to Copy Phone Card */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600/20 text-cyan-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">PHONE / WHATSAPP</div>
                    <div className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:bg-cyan-600 hover:text-white transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {copiedPhone && (
                <div className="mt-2 text-right text-[11px] font-mono text-emerald-400">
                  Copied to clipboard!
                </div>
              )}
            </div>

            {/* LinkedIn & GitHub Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between text-zinc-400 group-hover:text-cyan-400">
                  <LinkedinIcon className="h-5 w-5" />
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-6">
                  <div className="text-xs text-zinc-400 font-mono">NETWORK</div>
                  <div className="text-sm font-semibold text-white">LinkedIn</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all hover:border-violet-500/40 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between text-zinc-400 group-hover:text-violet-400">
                  <GithubIcon className="h-5 w-5" />
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-6">
                  <div className="text-xs text-zinc-400 font-mono">CODE</div>
                  <div className="text-sm font-semibold text-white">GitHub</div>
                </div>
              </a>
            </div>

            {/* Quick response commitment banner */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-xs text-zinc-400 flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping-slow shrink-0" />
              <span>
                Standard response time: within 24 hours. Based in India (IST / UTC+5:30).
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Fill in the details below and I will respond to your email.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-zinc-300 uppercase mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Chen"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-violet-500 focus:bg-white/[0.07] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-zinc-300 uppercase mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-violet-500 focus:bg-white/[0.07] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-zinc-300 uppercase mb-1.5"
                  >
                    Project Details or Opportunity
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your team, tech stack, or what you'd like to build together..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-violet-500 focus:bg-white/[0.07] focus:outline-none transition-all resize-none"
                  />
                </div>

                <AnimatePresence>
                  {status.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
                        status.type === "success"
                          ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                          : "bg-rose-500/10 border border-rose-500/30 text-rose-300"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                      ) : null}
                      <span>{status.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all hover:shadow-violet-600/50 hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
