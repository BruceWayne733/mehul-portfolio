'use client';

import React from 'react';

const projects = [
  {
    title: 'AI Resume Sorter (Backend)',
    description:
      'AI-powered tool that parses and ranks resumes based on job descriptions using NLP techniques. Built with modern backend architecture for scalability and performance.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'NLP', 'Machine Learning'],
    github: 'https://github.com/BruceWayne733/ai-resume-sorter',
    featured: true,
  },
  {
    title: 'Path Visualizer',
    description:
      'Interactive visualization of pathfinding algorithms like Dijkstra, BFS, DFS, and A*. Features real-time algorithm execution with beautiful animations and educational content.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Algorithms'],
    github: 'https://github.com/BruceWayne733/path-visualizer',
    website: 'https://path-visualizer-beryl.vercel.app/',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio showcasing projects, resume, and blog. Built with Next.js and Tailwind, featuring modern design, dark mode support, and responsive layout.',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    github: 'https://github.com/BruceWayne733/mehul-portfolio',
    website: 'https://mehul-portfolio-red.vercel.app/',
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my passion for creating innovative solutions,
            from AI-powered applications to interactive visualizations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-indigo-500/20 dark:ring-indigo-400/20' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Featured
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 font-medium group/btn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Code</span>
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 font-medium group/btn"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/BruceWayne733"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 rounded-xl hover:from-gray-800 hover:to-gray-700 dark:hover:from-gray-200 dark:hover:to-gray-300 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </main>
  );
}
