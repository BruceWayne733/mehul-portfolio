import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden py-24 px-4 bg-gradient-to-br from-slate-100 via-white to-slate-200 text-gray-900">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.25fr,1fr] items-center">
        <div className="flex flex-col gap-8 text-left">
          <div className="flex flex-wrap gap-3 text-sm text-indigo-300">
            <span className="rounded-full bg-white/10 px-3 py-1">Backend Engineering</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Product Craft</span>
            <span className="rounded-full bg-white/10 px-3 py-1">System Design</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-black tracking-tight text-slate-900">Mehul Sharma</h1>
            <p className="text-xl text-slate-700">
              Software Engineer focused on building scalable backend systems and clean user experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-start">
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition duration-300 hover:bg-indigo-700"
            >
              View Projects
            </a>
            <a
              href="/Mehul_Sharma_Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-indigo-700 transition duration-300 hover:bg-white/20"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl backdrop-blur-lg">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/40">
                <Image
                  src="/mehul_linkedin.jpg"
                  alt="Mehul Sharma"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-indigo-200">Connect</p>
                <a
                  href="https://www.linkedin.com/in/mehul-sharma-1308861a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-slate-900 hover:text-indigo-600"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-800">
              <div className="rounded-2xl bg-white/20 px-4 py-3 text-center">
                <p className="text-2xl font-bold text-slate-900">5+</p>
                <p>Years Experience</p>
              </div>
              <div className="rounded-2xl bg-white/20 px-4 py-3 text-center">
                <p className="text-2xl font-bold text-slate-900">12</p>
                <p>Products Shipped</p>
              </div>
              <div className="col-span-2 rounded-2xl bg-gradient-to-r from-indigo-500/30 to-purple-500/30 px-4 py-3 text-center text-sm text-indigo-100">
                Exploring distributed systems, developer tooling, and human-centered design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
