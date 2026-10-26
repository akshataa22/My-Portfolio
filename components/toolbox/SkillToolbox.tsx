"use client";

import * as m from "motion/react-m";
import { useRef, useState } from "react";
import { FilterChip } from "@/components/ui/FilterChip";
import type { Skill, SkillCategory } from "@/data/types";
import { cn } from "@/lib/cn";
import { useFinePointer } from "@/lib/useFinePointer";

type SkillFilter = SkillCategory | "All";

const categoryColors: Record<SkillCategory, string> = {
  Frontend: "bg-coffee/30",
  Backend: "bg-sage/30",
  Databases: "bg-sky/25",
  Tools: "bg-accent/20",
  Testing: "bg-surface-strong",
};

const stickerTilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "rotate-1", "-rotate-2"];

type SkillToolboxProps = {
  skills: Skill[];
  categories: SkillCategory[];
};

export function SkillToolbox({ skills, categories }: SkillToolboxProps) {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("All");
  const [layoutVersion, setLayoutVersion] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);
  const isDraggable = useFinePointer();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label="Highlight skills by category" className="flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((filter) => (
            <FilterChip key={filter} isActive={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
              {filter}
            </FilterChip>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setLayoutVersion((version) => version + 1)}
          className="font-hand text-xl text-accent underline-offset-4 hover:underline"
        >
          tidy up the desk ↺
        </button>
      </div>

      <div ref={boardRef} className="bg-dot-grid relative rounded-3xl border border-line bg-surface p-6 md:p-10">
        <ul key={layoutVersion} className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, index) => {
            const isHighlighted = activeFilter === "All" || activeFilter === skill.category;
            return (
              <m.li
                key={skill.name}
                drag={isDraggable}
                dragConstraints={boardRef}
                dragElastic={0.15}
                dragMomentum={false}
                whileHover={{ scale: 1.06 }}
                whileDrag={{ scale: 1.12, zIndex: 10 }}
                data-cursor="grab"
                className={cn(
                  "rounded-xl border border-line px-4 py-2 text-sm font-medium text-ink shadow-[2px_2px_0_0_var(--line)] transition-opacity select-none md:text-base",
                  categoryColors[skill.category],
                  stickerTilts[index % stickerTilts.length],
                  isHighlighted ? "opacity-100" : "opacity-25",
                )}
              >
                {skill.name}
              </m.li>
            );
          })}
        </ul>
        {isDraggable && (
          <p className="mt-6 text-center font-hand text-lg text-muted">psst, these stickers are draggable</p>
        )}
      </div>
    </div>
  );
}
