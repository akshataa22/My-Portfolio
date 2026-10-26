import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FilterChipProps = {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export function FilterChip({ children, isActive, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        isActive ? "border-ink bg-ink text-background" : "border-line bg-background text-muted hover:border-ink hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
