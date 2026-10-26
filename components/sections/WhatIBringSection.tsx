import { Layers, Plug, Puzzle, ShieldCheck, type LucideIcon } from "lucide-react";
import { StaggerItem, StaggerList } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { offerings } from "@/data/skills";
import type { Offering } from "@/data/types";

const offeringIcons: Record<Offering["icon"], LucideIcon> = {
  layers: Layers,
  shield: ShieldCheck,
  puzzle: Puzzle,
  plug: Plug,
};

export function WhatIBringSection() {
  return (
    <SectionContainer id="services" labelledBy="services-heading">
      <SectionHeading id="services-heading" eyebrow="why hire me?" title="What I bring to the team" />
      <StaggerList className="grid gap-4 md:grid-cols-2">
        {offerings.map((offering) => {
          const Icon = offeringIcons[offering.icon];
          return (
            <StaggerItem
              key={offering.title}
              className="group flex gap-5 rounded-3xl border border-line bg-surface p-6 shadow-[4px_4px_0_0_var(--line)] transition-transform hover:-translate-y-1 md:p-8"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-accent text-background transition-transform group-hover:scale-110">
                <Icon className="size-6" aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-2xl font-semibold text-ink">{offering.title}</h3>
                <p className="leading-relaxed text-muted">{offering.description}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerList>
    </SectionContainer>
  );
}
