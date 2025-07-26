export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-gray-900">
      <div className="max-w-3xl w-full text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Mehul Sharma</h1>
        <p className="text-xl text-gray-600 mb-6">
          Software Engineer focused on building scalable backend systems and clean user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/Mehul_Sharma_Resume.pdf"
            download
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </main>
  )
}
