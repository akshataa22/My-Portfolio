import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/BrandIcons";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { navItems, profile } from "@/data/profile";

export function FooterSection() {
  const { linkedin, github, twitter } = profile.socials;

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-2">
            <HandwrittenNote>
              say hi, or internet-stalk me a little more 👀
            </HandwrittenNote>
            <p className="font-display text-5xl font-semibold tracking-tight text-ink md:text-8xl">
              {profile.firstName}
              <span className="text-accent">.</span>
            </p>
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 self-start rounded-full border border-ink px-5 py-2.5 font-medium text-ink transition-colors hover:bg-ink hover:text-background md:self-auto"
          >
            Back to top <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>

        <div className="flex flex-col gap-6 border-t border-dashed border-line pt-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-3">
            <li>
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${linkedin.label} profile`}
                className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </li>
            <li>
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${github.label} profile`}
                className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <GithubIcon className="size-4" />
              </a>
            </li>
            <li>
              <a
                href={twitter.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${twitter.label} profile`}
                className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <TwitterIcon className="size-4" />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-1 text-sm text-muted md:flex-row md:justify-between">
          <p>Copyleft © [what-year-is-this] {profile.name}</p>
          <p>Crafted with ❤️ by {profile.firstName}</p>
        </div>
      </div>
    </footer>
  );
}
