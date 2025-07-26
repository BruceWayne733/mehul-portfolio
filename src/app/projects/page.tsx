import React from 'react';

const projects = [
  {
    title: 'Automated Resume Screening System',
    description: 'AI-powered tool that parses and ranks resumes based on job descriptions.',
    stack: 'Python, FastAPI, PostgreSQL, TensorFlow',
    github: 'https://github.com/mehul/resume-sorter',
  },
  {
    title: 'Curtin Health Backend',
    description: 'Backend system for managing health screenings and patient data.',
    stack: 'Node.js, PostgreSQL, JWT',
    github: 'https://github.com/mehul/curtin-health-backend',
  },
  {
    title: 'HiFive Game Refactor',
    description: 'Refactored card game with AI players and UML-based design patterns.',
    stack: 'Java, IntelliJ, UML',
    github: 'https://github.com/mehul/hifive-refactor',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">{project.stack}</p>
            <a
              href={project.github}
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
