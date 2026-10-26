"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useId, useState } from "react";
import { TagPill } from "@/components/ui/TagPill";
import type { Project, ProjectCategory } from "@/data/types";

const previewBackgrounds: Record<ProjectCategory, string> = {
  Fintech: "bg-sage/20",
  EdTech: "bg-sky/20",
  Commerce: "bg-coffee/25",
};

export function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const buildNotesId = useId();

  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-[4px_4px_0_0_var(--line)]"
    >
      <div className={`border-b border-line ${previewBackgrounds[project.category]}`}>
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2" aria-hidden>
          <span className="size-2.5 rounded-full bg-accent/70" />
          <span className="size-2.5 rounded-full bg-coffee/80" />
          <span className="size-2.5 rounded-full bg-sage/80" />
          <span className="ml-3 font-mono text-xs text-muted">{project.slug}.app</span>
        </div>
        <div className="grid h-36 place-items-center text-6xl" aria-hidden>
          {project.emoji}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold text-ink">{project.title}</h3>
          <TagPill>{project.category}</TagPill>
        </div>
        <p className="text-muted">{project.tagline}</p>
        <ul className="flex flex-col gap-2 text-sm text-ink">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="text-accent" aria-hidden>
                ✦
              </span>
              {highlight}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech}>
              <TagPill>{tech}</TagPill>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={buildNotesId}
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className="mt-auto inline-flex items-center gap-1 self-start font-hand text-xl text-accent"
        >
          how I built it
          <ChevronDown className={`size-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} aria-hidden />
        </button>
        <div id={buildNotesId}>
          <AnimatePresence initial={false}>
            {isExpanded && (
              <m.ul
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex flex-col gap-2 rounded-2xl bg-background p-4 font-mono text-xs leading-relaxed text-muted"
              >
                {project.buildNotes.map((note) => (
                  <li key={note}>
                    <span className="text-sage">{"// "}</span>
                    {note}
                  </li>
                ))}
              </m.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </m.article>
  );
}
