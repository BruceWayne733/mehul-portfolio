'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[var(--border)] bg-[color:var(--surface)] px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.14)] md:px-6">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--foreground)]"
        >
          Mehul Sharma
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? 'bg-[var(--foreground)] text-[var(--background)]'
                    : 'text-[var(--muted)] hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            onClick={toggleTheme}
            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--foreground)] transition hover:-translate-y-0.5"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586Z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1Zm-13 0a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1Zm10.95 5.536a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414ZM4.343 4.343a1 1 0 0 1 1.414 0l.707.707A1 1 0 0 1 5.05 6.464l-.707-.707a1 1 0 0 1 0-1.414Zm11.314 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM5.757 13.536a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM10 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--foreground)]"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586Z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1Zm-13 0a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1Zm10.95 5.536a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414ZM4.343 4.343a1 1 0 0 1 1.414 0l.707.707A1 1 0 0 1 5.05 6.464l-.707-.707a1 1 0 0 1 0-1.414Zm11.314 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM5.757 13.536a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM10 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--foreground)]"
            aria-label="Toggle navigation menu"
          >
            <span className="text-lg leading-none">{isOpen ? 'x' : '+'}</span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-3 flex max-w-6xl flex-col gap-2 rounded-3xl border border-[var(--border)] bg-[color:var(--surface)] p-3 shadow-[0_18px_40px_rgba(15,23,42,0.12)] md:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? 'bg-[var(--foreground)] text-[var(--background)]'
                    : 'text-[var(--muted)] hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
