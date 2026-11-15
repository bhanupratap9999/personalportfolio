"use client";

export default function AuroraBackground() {
  return (
    <div className="aurora-bg" aria-hidden="true">
      {/* Primary violet mesh */}
      <div
        className="aurora-blob bg-violet-600/30"
        style={{
          top: "-15%",
          left: "20%",
          width: "60vw",
          height: "60vw",
          animationDelay: "0s",
        }}
      />
      {/* Cyan mesh accent */}
      <div
        className="aurora-blob bg-cyan-500/20"
        style={{
          top: "40%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          animationDelay: "-6s",
        }}
      />
      {/* Indigo / blue deep glow */}
      <div
        className="aurora-blob bg-indigo-700/25"
        style={{
          bottom: "-15%",
          left: "5%",
          width: "55vw",
          height: "55vw",
          animationDelay: "-12s",
        }}
      />
      {/* Subtle emerald/teal pulse */}
      <div
        className="aurora-blob bg-emerald-600/15"
        style={{
          top: "60%",
          left: "40%",
          width: "40vw",
          height: "40vw",
          animationDelay: "-18s",
        }}
      />
    </div>
  );
}

