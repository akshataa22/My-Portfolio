import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type StickerCardProps = {
  children: ReactNode;
  className?: string;
};

export function StickerCard({ children, className }: StickerCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-line bg-surface p-6 shadow-[4px_4px_0_0_var(--line)] md:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
