"use client";

import { cn } from "@/lib/cn";

type FilterChipsProps<Option extends string> = {
  label: string;
  options: readonly Option[];
  activeOption: Option;
  onChange: (option: Option) => void;
};

export function FilterChips<Option extends string>({ label, options, activeOption, onChange }: FilterChipsProps<Option>) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option === activeOption;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              isActive
                ? "border-ink bg-ink text-background"
                : "border-line bg-background text-muted hover:border-ink hover:text-ink",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
