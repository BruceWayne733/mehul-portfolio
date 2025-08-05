export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-100 via-white to-slate-200 text-gray-900">
      {/* Blobs Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-40 right-10 animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob bottom-10 left-1/2 transform -translate-x-1/2"></div>
      </div>

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
          <img
          src="/mehul_linkedin.jpg"
          alt="Mehul Sharma"
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
      </div>
    </main>
  );
}
