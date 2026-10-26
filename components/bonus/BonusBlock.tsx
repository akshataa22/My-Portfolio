import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";

type BonusBlockProps = {
  title: string;
  note?: string;
  children: ReactNode;
  className?: string;
};

export function BonusBlock({ title, note, children, className }: BonusBlockProps) {
  return (
    <article className={cn("flex min-w-0 flex-col gap-5 rounded-3xl border border-line bg-surface p-6 md:p-8", className)}>
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">{title}</h3>
        {note && <HandwrittenNote className="text-lg md:text-xl">{note}</HandwrittenNote>}
      </header>
      {children}
    </article>
  );
}
