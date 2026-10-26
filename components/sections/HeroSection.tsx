import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GooglyEyes } from "@/components/hero/GooglyEyes";
import { HeroPolaroid } from "@/components/hero/HeroPolaroid";
import { RotatingTagline } from "@/components/hero/RotatingTagline";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 pt-32 pb-20 md:grid-cols-[1.4fr_1fr] md:px-8 md:pt-44 md:pb-28"
    >
      <div className="flex flex-col gap-6">
        <HandwrittenNote className="-rotate-2">Hey there, welcome in!</HandwrittenNote>
        <h1
          id="hero-heading"
          className="font-display text-6xl leading-[0.95] font-semibold tracking-tight text-ink md:text-8xl"
        >
          Hi, I&apos;m{" "}
          <span className="whitespace-nowrap">
            <span className="text-accent">{profile.firstName}</span> <GooglyEyes />
          </span>
        </h1>
        <RotatingTagline taglines={profile.taglines} />
        <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">{profile.summary}</p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            See my work <ArrowDown className="size-4" aria-hidden />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Let&apos;s talk <ArrowUpRight className="size-4" aria-hidden />
          </a>
          <HandwrittenNote className="ml-2 rotate-[-4deg]">← psst, the fun stuff is further down</HandwrittenNote>
        </div>
      </div>

      <HeroPolaroid />
    </section>
  );
}
