import Image from "next/image";

const highlightStats = [
  { value: "1+", label: "Years Experience" },
  { value: "3", label: "Featured Projects" },
  { value: "8+", label: "Technologies & Tools" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden py-24 flex items-center justify-center px-4 bg-gradient-to-br from-slate-100 via-white to-slate-200 text-gray-900">
      {/* Content */}
      <div className="bg-white/40 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-10 max-w-3xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4">Mehul Sharma</h1>
        <p className="text-xl text-gray-700 mb-6">
          Software Engineer focused on building scalable backend systems and clean user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="/projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
          >
            View Projects
          </a>

          <a
          href="https://www.linkedin.com/in/mehul-sharma-1308861a0/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-100 transition duration-300"
          >
          <Image
            src="/mehul_linkedin.jpg"
            alt="Mehul Sharma"
            width={24}
            height={24}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm font-medium">Linkedin</span>
          </a>

            
          <a
            href="/Mehul_Sharma_Resume.pdf"
            download
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-100 transition duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {highlightStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/30 bg-white/60 px-6 py-5 shadow-sm backdrop-blur"
            >
              <p className="text-3xl font-semibold text-indigo-600">{stat.value}</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
