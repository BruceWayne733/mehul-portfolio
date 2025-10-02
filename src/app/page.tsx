export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Blobs Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-300/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-40 right-10 animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-pink-300/30 dark:bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob bottom-10 left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-2xl rounded-2xl p-10 max-w-4xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mehul Sharma
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-light">
              Software Engineer & Full-Stack Developer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about building scalable backend systems and crafting exceptional user experiences.
              Specialized in modern web technologies and distributed systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
            >
              View Projects
            </a>

            <a
              href="https://www.linkedin.com/in/mehul-sharma-1308861a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <img
                src="/mehul_linkedin.jpg"
                alt="Mehul Sharma"
                className="w-6 h-6 rounded-full object-cover"
              />
              <span>LinkedIn</span>
            </a>

            <a
              href="/Mehul_Sharma_Resume.pdf"
              download
              className="px-8 py-4 border-2 border-gray-600 dark:border-gray-400 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-xl rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a dedicated software engineer with a passion for creating innovative solutions that make a difference.
              My journey in technology has been driven by curiosity and a desire to solve complex problems through elegant code.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date
              with the latest industry trends and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-xl rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Backend</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Docker'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-xl rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">Frontend</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-xl rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-6 text-pink-600 dark:text-pink-400">Tools & Others</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Git', 'AWS', 'Linux', 'Nginx', 'Machine Learning'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
            >
              Send Email
            </a>
            <a
              href="https://github.com/BruceWayne733"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-600 dark:border-gray-400 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
