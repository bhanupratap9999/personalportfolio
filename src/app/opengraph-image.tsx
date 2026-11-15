import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Bhanu Pratap Singh — Full-Stack & GenAI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#090a0f",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1a1c29 2%, transparent 0%), radial-gradient(circle at 75px 75px, #131522 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(139, 92, 246, 0.25)",
            filter: "blur(100px)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            borderRadius: "9999px",
            border: "1px solid rgba(139, 92, 246, 0.4)",
            backgroundColor: "rgba(139, 92, 246, 0.15)",
            padding: "8px 20px",
            fontSize: "18px",
            color: "#c084fc",
            marginBottom: "28px",
          }}
        >
          <span style={{ color: "#34d399", marginRight: "8px" }}>●</span>
          Available for Internships &amp; Roles
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            letterSpacing: "-0.03em",
            marginBottom: "16px",
            display: "flex",
          }}
        >
          Bhanu Pratap Singh
        </div>

        <div
          style={{
            fontSize: "30px",
            color: "#a1a1aa",
            marginBottom: "36px",
            maxWidth: "900px",
            lineHeight: "1.4",
          }}
        >
          Full-Stack Developer • GenAI Engineer • Problem Solver
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          {["Java 21", "Spring AI", "Next.js 15", "PGVector", "C++"].map((tag) => (
            <div
              key={tag}
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "8px 18px",
                fontSize: "16px",
                color: "#e4e4e7",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
