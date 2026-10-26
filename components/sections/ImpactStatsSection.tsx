import { CountUpNumber } from "@/components/stats/CountUpNumber";
import { StaggerItem, StaggerList } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { impactStats } from "@/data/experience";

export function ImpactStatsSection() {
  return (
    <SectionContainer id="impact" labelledBy="impact-heading">
      <SectionHeading id="impact-heading" eyebrow="receipts, not vibes" title="Impact in numbers" />
      <StaggerList className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {impactStats.map((stat, index) => (
          <StaggerItem
            key={stat.label}
            className={`flex flex-col gap-2 rounded-3xl border border-line bg-surface p-5 transition-transform hover:-translate-y-1 hover:-rotate-1 ${index === 0 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <CountUpNumber value={stat.value} suffix={stat.suffix} />
            <span className="font-medium text-ink">{stat.label}</span>
            <span className="text-sm text-muted">{stat.context}</span>
          </StaggerItem>
        ))}
      </StaggerList>
    </SectionContainer>
  );
}
