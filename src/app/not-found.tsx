import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#090a0f] text-white px-4 text-center">
      <div className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-mono text-violet-400 mb-4">
        404 • Page Not Found
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold font-display tracking-tight">
        Lost in Code?
      </h1>
      <p className="mt-3 text-sm text-zinc-400 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-500 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
