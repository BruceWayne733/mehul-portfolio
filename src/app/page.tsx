"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <main className="relative min-h-screen overflow-hidden py-24 flex items-center justify-center px-4 transition-colors duration-700 bg-gradient-to-br from-indigo-50 via-rose-50 to-slate-200 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-70 mix-blend-plus-lighter blur-3xl motion-safe:animate-aurora bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.35),transparent_55%),_radial-gradient(circle_at_85%_15%,rgba(244,114,182,0.3),transparent_60%),_radial-gradient(circle_at_50%_80%,rgba(56,189,248,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.35),transparent_55%),_radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.25),transparent_60%),_radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.25),transparent_60%)]" />
        </div>

        <button
          type="button"
          onClick={() => setIsDark((prev) => !prev)}
          className="absolute top-6 right-6 z-10 flex items-center gap-2 rounded-full border border-white/40 bg-white/50 px-4 py-2 text-sm font-medium text-slate-800 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
        >
          {isDark ? "🌞 Light" : "🌙 Dark"}
        </button>

        {/* Content */}
        <div className="relative z-10 max-w-3xl w-full text-center rounded-2xl border border-white/30 bg-white/60 p-10 shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_30px_80px_-40px_rgba(79,70,229,0.45)] dark:border-slate-700/60 dark:bg-slate-900/60 dark:shadow-[0_30px_90px_-50px_rgba(15,23,42,0.7)]">
          <h1 className="text-5xl font-extrabold mb-4">Mehul Sharma</h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">
            Software Engineer focused on building scalable backend systems and clean user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="/projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-indigo-500"
            >
              View Projects
            </a>

            <a
              href="https://www.linkedin.com/in/mehul-sharma-1308861a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-md border border-indigo-500/80 text-indigo-600 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-400 hover:text-indigo-500 dark:border-indigo-300/70 dark:text-indigo-200 dark:hover:border-indigo-200 dark:hover:text-indigo-100"
            >
              <Image
                src="/mehul_linkedin.jpg"
                alt="Mehul Sharma"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="/Mehul_Sharma_Resume.pdf"
              download
              className="px-6 py-3 rounded-md border border-indigo-500/80 text-indigo-600 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-400 hover:text-indigo-500 dark:border-indigo-300/70 dark:text-indigo-200 dark:hover:border-indigo-200 dark:hover:text-indigo-100"
            >
              Download Resume
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
