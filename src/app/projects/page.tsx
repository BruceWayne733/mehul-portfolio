'use client';

import React from 'react';

const projects = [
  {
    title: 'Automated Resume Screening System',
    description:
      'AI-powered tool that parses and ranks resumes based on job descriptions using NLP and TensorFlow.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'TensorFlow'],
    github: 'https://github.com/mehul/ai-resume-sorter',
  },
  {
    title: 'Curtin Health Backend',
    description:
      'Backend system enabling nurses, doctors, and patients to manage and view health screenings.',
    stack: ['Node.js', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/mehul/curtin-health-backend',
  },
  {
    title: 'HiFive Game Refactor',
    description:
      'Refactored card game logic using GRASP & GoF patterns. Added AI players and UML-based planning.',
    stack: ['Java', 'UML', 'IntelliJ'],
    github: 'https://github.com/mehul/hifive-refactor',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition bg-gray-50"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))} 
              </div>

              <a
                href={project.github}
                className="text-primary hover:underline font-medium"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
