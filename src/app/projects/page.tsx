'use client';

const projects = [
  {
    title: 'AI Resume Sorter',
    description:
      'A backend-first application that parses resumes against job descriptions, ranks candidates, and turns noisy hiring inputs into a clearer evaluation pipeline.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'NLP', 'Machine Learning'],
    github: 'https://github.com/BruceWayne733/ai-resume-sorter',
    featured: true,
  },
  {
    title: 'Path Visualizer',
    description:
      'A highly interactive educational interface for pathfinding algorithms with strong motion, responsive controls, and clearer algorithm intuition.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Algorithms'],
    github: 'https://github.com/BruceWayne733/path-visualizer',
    website: 'https://path-visualizer-beryl.vercel.app/',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal site designed to communicate technical range, product taste, and a more distinct engineering identity from the first screen.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/BruceWayne733/mehul-portfolio',
    website: 'https://mehul-portfolio-red.vercel.app/',
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <main className="pb-20">
      <section className="section-shell pt-8 sm:pt-12">
        <div className="panel rounded-[2.2rem] px-6 py-10 sm:px-10 sm:py-14">
          <span className="eyebrow">Projects</span>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-semibold leading-none tracking-[-0.06em] sm:text-6xl">
                Work that blends engineering depth with usable interfaces.
              </h1>
            </div>
            <p className="text-base leading-7 text-[var(--muted)] sm:text-lg">
              These are the projects that best reflect my current strengths: thoughtful backend systems, interactive frontend execution, and an emphasis on product clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell mt-10">
        <div className="grid gap-5 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="panel flex h-full flex-col rounded-[2rem] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-2xl font-semibold">{project.title}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>
                {project.featured && (
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    Featured
                  </span>
                )}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-3 pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] hover:-translate-y-0.5"
                >
                  View Code
                </a>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:-translate-y-0.5"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-14">
        <div className="panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-semibold">More work lives on GitHub.</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                Repositories are where implementation details, experimentation, and iteration history are easiest to inspect.
              </p>
            </div>
            <a
              href="https://github.com/BruceWayne733"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] hover:-translate-y-0.5"
            >
              Open GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
