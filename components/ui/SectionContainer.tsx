import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionContainerProps = {
  id: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
};

export function SectionContainer({ id, children, className, labelledBy }: SectionContainerProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28", className)}
    >
      {children}
    </section>
  );
}
