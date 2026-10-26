import { navItems, profile } from "@/data/profile";
import { LiveClock } from "./LiveClock";
import { MobileNavMenu } from "./MobileNavMenu";
import { OpenToWorkBadge } from "./OpenToWorkBadge";
import { ThemeToggle } from "./ThemeToggle";

const navLinkClass =
  "rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-accent";

export function Navbar() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-3 z-40 px-3 md:top-5">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-line bg-background/80 py-2 pr-2 pl-4 shadow-sm backdrop-blur-md"
        >
          <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
            akshata<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <span className="hidden lg:inline-flex">
              <LiveClock timeZone={profile.timeZone} label="Mumbai" />
            </span>
            <span className="hidden sm:inline-flex">
              <OpenToWorkBadge />
            </span>
            <ThemeToggle />
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Resume
            </a>
            <MobileNavMenu items={navItems} resumePath={profile.resumePath} linkClassName={navLinkClass} />
          </div>
        </nav>
      </header>
    </>
  );
}
