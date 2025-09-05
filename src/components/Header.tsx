'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { Container } from './Containet';
import { usePathname } from 'next/navigation';

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400'
        )}>
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
}

export default function Header() {
  return (
    <Container
      className="top-[var(--header-top,theme(spacing.6))] w-full mb-20"
      style={{
        position:
          'var(--header-inner-position)' as React.CSSProperties['position'],
      }}>
      <div className="relative flex gap-4">
        <div className="flex flex-1 justify-end md:justify-center">
          <nav>
            <ul className="flex rounded-2xl bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              <NavItem href="/">Home</NavItem>
              <NavItem href="https://github.com">
                <span className="flex items-center gap-1">GitHub</span>
              </NavItem>
              <NavItem href="https://www.linkedin.com/">
                <span className="flex items-center gap-1">LinkedIn</span>
              </NavItem>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
}
