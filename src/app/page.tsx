export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50 text-gray-800 relative">
      <div className="max-w-3xl w-full text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Mehul Sharma</h1>
        <p className="text-xl text-gray-600 mb-6">
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
            href="/Mehul_Sharma_Resume.pdf"
            download
            className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}
