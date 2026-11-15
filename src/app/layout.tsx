import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CursorGlow from "@/components/CursorGlow";
import CommandPalette from "@/components/CommandPalette";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";
import Preloader from "@/components/Preloader";
import AuroraBackground from "@/components/AuroraBackground";

export const metadata: Metadata = {
  title: "Bhanu Pratap Singh | Full-Stack & GenAI Engineer",
  description:
    "Portfolio of Bhanu Pratap Singh — B.Tech CSE student at Lovely Professional University. Architecting high-performance full-stack applications and AI-powered systems with Java 21, Spring Boot, Next.js, and RAG pipelines.",
  keywords: [
    "Bhanu Pratap Singh",
    "Full-Stack Developer",
    "GenAI Engineer",
    "RAG Systems",
    "Java 21",
    "Spring Boot 3",
    "Next.js 15",
    "TypeScript",
    "PGVector",
    "Competitive Programmer",
    "Lovely Professional University",
  ],
  authors: [{ name: "Bhanu Pratap Singh", url: "https://github.com/bhanupratap9999" }],
  creator: "Bhanu Pratap Singh",
  metadataBase: new URL("https://bhanupratap.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhanupratap.dev",
    title: "Bhanu Pratap Singh | Full-Stack & GenAI Engineer",
    description:
      "Full-Stack Developer & GenAI Engineer specializing in Java 21, Spring AI RAG, Next.js 15, and scalable cloud systems.",
    siteName: "Bhanu Pratap Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhanu Pratap Singh — Full-Stack & GenAI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhanu Pratap Singh | Full-Stack & GenAI Engineer",
    description:
      "Full-Stack Developer & GenAI Engineer specializing in Java, Spring AI RAG, Next.js 15, and scalable cloud systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative bg-[#090a0f] text-zinc-100 antialiased selection:bg-violet-500/30 selection:text-white">
        <Preloader />
        <LenisProvider>
          {/* Noise / grain overlay for high-end feel */}
          <div className="noise-overlay" aria-hidden="true" />
          
          {/* Subtle animated aurora background */}
          <AuroraBackground />
          
          {/* Mouse tracking glow */}
          <CursorGlow />
          
          {/* Global quick search / command palette */}
          <CommandPalette />
          
          {/* Secret Easter Egg listener */}
          <KonamiEasterEgg />

          <main className="relative z-10">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}

