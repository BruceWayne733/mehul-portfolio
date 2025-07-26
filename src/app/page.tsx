export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50 text-gray-800 overflow-hidden">
      {/* Blobs Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-40 right-10 animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob bottom-10 left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Content */}
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
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-100 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}
