import Image from 'next/image';
import Link from 'next/link';

const focusAreas = [
  'Backend architecture that stays maintainable under real usage.',
  'Product-minded frontend work with strong hierarchy and motion.',
  'AI-assisted workflows that solve an actual operational problem.',
];

const highlightProjects = [
  {
    name: 'AI Resume Sorter',
    summary:
      'An NLP-driven backend system that parses resumes against job descriptions and ranks candidates with an explainable workflow.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'NLP'],
  },
  {
    name: 'Path Visualizer',
    summary:
      'An interactive algorithms playground designed to make Dijkstra, BFS, DFS, and A* feel intuitive instead of abstract.',
    tags: ['React', 'TypeScript', 'Algorithms'],
  },
  {
    name: 'Portfolio Platform',
    summary:
      'A deliberately designed personal site focused on clarity, visual polish, and a stronger first impression.',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive UI'],
  },
];

const principles = [
  {
    title: 'Build for scale, not just demos',
    copy:
      'I care about codebases that remain understandable after the initial excitement wears off. Structure, interfaces, and operational simplicity matter.',
  },
  {
    title: 'Design should carry intent',
    copy:
      'I treat frontend work as product communication. Every section should answer a user question quickly and leave a crisp impression.',
  },
  {
    title: 'Execution beats novelty',
    copy:
      'The goal is not to use every new tool. The goal is to choose the right stack and ship something that actually works well.',
  },
];

export default function Home() {
  return (
    <main className="pb-20">
      <section className="section-shell pt-8 sm:pt-12">
        <div className="panel grid overflow-hidden rounded-[2rem] lg:grid-cols-[1.35fr_0.9fr]">
          <div className="relative px-6 py-12 sm:px-10 sm:py-16">
            <div className="rise">
              <span className="eyebrow">Software Engineer / Full-Stack Builder</span>
            </div>
            <div className="rise-delay mt-6 max-w-3xl">
              <h1 className="text-5xl font-semibold leading-none tracking-[-0.06em] sm:text-7xl">
                I build systems that feel sharp on the surface and solid underneath.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                I&apos;m Mehul Sharma. My work sits at the intersection of backend engineering,
                modern product interfaces, and practical AI-driven tooling.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] hover:-translate-y-0.5"
              >
                Explore Projects
              </Link>
              <a
                href="/Mehul%20Sharma%20-%20Resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:-translate-y-0.5"
              >
                Open Resume
              </a>
              <a
                href="https://www.linkedin.com/in/mehul-sharma-1308861a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-[var(--muted)] hover:text-[var(--foreground)]"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Focus
                </p>
                <p className="mt-2 text-2xl font-semibold">Backend</p>
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Strength
                </p>
                <p className="mt-2 text-2xl font-semibold">System Design</p>
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Approach
                </p>
                <p className="mt-2 text-2xl font-semibold">Ship Cleanly</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--border)] bg-[linear-gradient(180deg,rgba(194,65,12,0.14),transparent)] px-6 py-8 lg:border-l lg:border-t-0 lg:px-8 lg:py-10">
            <div className="mx-auto max-w-sm">
              <div className="panel rounded-[1.75rem] p-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-[1.5rem] border border-[var(--border)]">
                    <Image
                      src="/mehul_linkedin.jpg"
                      alt="Portrait of Mehul Sharma"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Mehul Sharma</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Building thoughtful products with strong engineering fundamentals.
                    </p>
                  </div>
                </div>

                <div className="accent-line my-6" />

                <div className="space-y-4">
                  {focusAreas.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                      <p className="text-sm leading-6 text-[var(--muted)]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Current Lens
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                    Creating backend-first products that still feel premium to use on the frontend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-20 sm:mt-24">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Selected Work</span>
            <h2 className="section-title mt-4">Projects that represent how I think.</h2>
          </div>
          <p className="section-copy">
            I like products that are clear in purpose, technically grounded, and enjoyable to explore.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {highlightProjects.map((project) => (
            <article
              key={project.name}
              className="panel rounded-[1.75rem] p-6 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-semibold">{project.name}</p>
                <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                  Highlight
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-20 sm:mt-24">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <span className="eyebrow">Working Style</span>
            <h2 className="section-title mt-4">The standard I try to hold.</h2>
            <p className="section-copy mt-4">
              Good engineering is not only about correctness. It is also about how quickly another person can understand, trust, and extend what you built.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.title} className="panel rounded-[2rem] p-6">
                <p className="text-lg font-semibold leading-7">{principle.title}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-20 sm:mt-24">
        <div className="panel rounded-[2.2rem] px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 className="section-title mt-4">If the work matters, I want to hear about it.</h2>
              <p className="section-copy mt-4">
                I&apos;m interested in roles and projects where product quality and engineering discipline both matter.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="https://github.com/BruceWayne733"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] hover:-translate-y-0.5"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mehul-sharma-1308861a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:-translate-y-0.5"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
