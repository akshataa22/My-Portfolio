import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TagPillProps = {
  children: ReactNode;
  className?: string;
};

export function TagPill({ children, className }: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-background px-3 py-1 font-mono text-xs text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
