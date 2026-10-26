import { ChevronDown } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import type { ExperienceEntry } from "@/data/types";

function ExperienceCommit({ entry }: { entry: ExperienceEntry }) {
  return (
    <li className="relative pb-10 pl-8 last:pb-0 md:pl-12">
      <span
        aria-hidden
        className={`absolute top-2 -left-[9px] size-4 rounded-full border-2 border-accent ${entry.isCurrent ? "bg-accent" : "bg-background"}`}
      />
      <details open={entry.isCurrent} className="group rounded-3xl border border-line bg-surface p-5 md:p-7">
        <summary className="flex list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-xs text-coffee">
              commit {entry.commitHash}
              {entry.isCurrent && <span className="ml-2 text-sage">(HEAD → main)</span>}
            </p>
            <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              {entry.role} <span className="text-muted">@ {entry.company}</span>
            </h3>
            <p className="font-mono text-sm text-ink">{entry.commitMessage}</p>
            <p className="text-sm text-muted">
              {entry.period} · {entry.location}
            </p>
          </div>
          <ChevronDown
            aria-hidden
            className="mt-1 size-5 shrink-0 text-muted transition-transform group-open:rotate-180"
          />
        </summary>
        <ul className="mt-5 flex flex-col gap-2 rounded-2xl bg-background p-4 font-mono text-sm leading-relaxed">
          {entry.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-ink">
              <span className="text-sage" aria-hidden>
                +
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}

export function ExperienceSection() {
  return (
    <SectionContainer id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="$ git log --author=akshata"
        title="Experience"
        description="Every role is a commit. Open one to see the diff."
      />
      <RevealOnScroll>
        <ol className="ml-2 border-l-2 border-dashed border-line">
          {experience.map((entry) => (
            <ExperienceCommit key={entry.commitHash} entry={entry} />
          ))}
        </ol>
      </RevealOnScroll>
    </SectionContainer>
  );
}
