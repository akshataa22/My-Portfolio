import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HandwrittenNoteProps = {
  children: ReactNode;
  className?: string;
};

export function HandwrittenNote({ children, className }: HandwrittenNoteProps) {
  return <span className={cn("font-hand text-xl leading-tight text-accent md:text-2xl", className)}>{children}</span>;
}
