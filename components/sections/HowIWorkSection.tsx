import { Compass, Hammer, RefreshCw, Rocket, Search, type LucideIcon } from "lucide-react";
import { StaggerItem, StaggerList } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/skills";
import type { ProcessStep } from "@/data/types";

const stepIcons: Record<ProcessStep["icon"], LucideIcon> = {
  search: Search,
  compass: Compass,
  hammer: Hammer,
  rocket: Rocket,
  refresh: RefreshCw,
};

export function HowIWorkSection() {
  return (
    <SectionContainer id="process" labelledBy="process-heading">
      <SectionHeading
        id="process-heading"
        eyebrow="behind the scenes"
        title="How I work"
        description="From the first confusing requirement to the final deploy."
      />
      <StaggerList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step, index) => {
          const Icon = stepIcons[step.icon];
          return (
            <StaggerItem
              key={step.title}
              className="group flex flex-col gap-4 rounded-3xl border border-line bg-surface p-6 transition-transform duration-300 hover:-translate-y-2 hover:rotate-1"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-background text-accent transition-transform duration-300 group-hover:-rotate-12">
                  <Icon className="size-6" aria-hidden />
                </span>
                <span className="font-mono text-sm text-muted">0{index + 1}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </StaggerItem>
          );
        })}
      </StaggerList>
    </SectionContainer>
  );
}
