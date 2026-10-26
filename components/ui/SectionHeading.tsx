import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { HandwrittenNote } from "./HandwrittenNote";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ id, eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <header className={cn("mb-12 flex flex-col gap-3 md:mb-16", align === "center" && "items-center text-center")}>
      <HandwrittenNote className="-rotate-2">{eyebrow}</HandwrittenNote>
      <h2 id={id} className="font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
        {title}
      </h2>
      {description && <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{description}</p>}
    </header>
  );
}
