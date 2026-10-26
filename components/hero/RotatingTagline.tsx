"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useState } from "react";

type RotatingTaglineProps = {
  taglines: string[];
  intervalMs?: number;
};

export function RotatingTagline({ taglines, intervalMs = 3200 }: RotatingTaglineProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % taglines.length),
      intervalMs,
    );
    return () => window.clearInterval(intervalId);
  }, [taglines.length, intervalMs]);

  return (
    <p className="relative grid font-display text-2xl leading-snug text-muted italic md:text-4xl">
      <span className="sr-only">{taglines.join(" ")}</span>
      {taglines.map((tagline) => (
        <span key={tagline} aria-hidden className="invisible col-start-1 row-start-1">
          {tagline}
        </span>
      ))}
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={activeIndex}
          aria-hidden
          className="col-start-1 row-start-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {taglines[activeIndex]}
        </m.span>
      </AnimatePresence>
    </p>
  );
}
