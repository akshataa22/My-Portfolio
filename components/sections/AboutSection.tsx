import { GraduationCap } from "lucide-react";
import { PolaroidStack } from "@/components/about/PolaroidStack";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerCard } from "@/components/ui/StickerCard";
import { aboutFacts, polaroids } from "@/data/bonus";
import { education, profile } from "@/data/profile";

export function AboutSection() {
  return (
    <SectionContainer id="about" labelledBy="about-heading">
      <SectionHeading id="about-heading" eyebrow="the person behind the pull requests" title="About me" />
      <div className="grid items-center gap-14 md:grid-cols-[1fr_1.3fr]">
        <PolaroidStack polaroids={polaroids} />

        <RevealOnScroll className="flex flex-col gap-6">
          <p className="text-lg leading-relaxed text-ink">{profile.bio[0]}</p>
          <p className="leading-relaxed text-muted">{profile.bio[1]}</p>

          <ul className="flex flex-wrap gap-2">
            {aboutFacts.map((fact) => (
              <li key={fact} className="rounded-full bg-surface-strong px-4 py-1.5 text-sm text-ink">
                {fact}
              </li>
            ))}
          </ul>

          <StickerCard className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-background text-accent">
              <GraduationCap className="size-6" aria-hidden />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">{education.institution}</h3>
              <p className="text-muted">
                {education.degree} · {education.grade}
              </p>
              <p className="font-mono text-xs text-muted">
                {education.period} · {education.location}
              </p>
            </div>
          </StickerCard>
        </RevealOnScroll>
      </div>
    </SectionContainer>
  );
}
