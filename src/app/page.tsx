import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Mehul Sharma</h1>
      <p className="text-lg mb-6">Backend Developer | React | FastAPI | PostgreSQL</p>

      <a
        href="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View Projects
      </a>

      <a
        href="/Mehul_Sharma_Resume.pdf"
        download
        className="mt-4 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
      >
        Download Resume
      </a>

    </main>
  );
}
