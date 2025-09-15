'use client';

import React from 'react';

const projects = [
  {
  title: 'AI Resume Sorter (Backend)',
  description:
    'AI-powered tool that parses and ranks resumes based on job descriptions using NLP techniques.',
  stack: ['Python', 'FastAPI', 'PostgreSQL'],
  github: 'https://github.com/BruceWayne733/ai-resume-sorter',
  },
  {
    title: 'Path Visualizer',
    description:
      'Interactive visualization of pathfinding algorithms like Dijkstra, BFS, DFS, and A*. Built with React, TypeScript, and Tailwind CSS.',
    stack: ['React', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/BruceWayne733/path-visualizer',
    website: 'https://path-visualizer-beryl.vercel.app/', // once deployed
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio showcasing projects, resume, and blog. Built with Next.js and Tailwind, deployed on Vercel.',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    github: 'https://github.com/BruceWayne733/mehul-portfolio',
    website: 'https://mehul-portfolio-red.vercel.app/',
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

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-primary hover:underline font-medium"
                  >
                    GitHub →
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    className="text-primary hover:underline font-medium"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
