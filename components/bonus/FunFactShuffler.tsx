"use client";

import { Shuffle } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useState } from "react";

export function FunFactShuffler({ facts }: { facts: string[] }) {
  const [factIndex, setFactIndex] = useState(0);

  function showRandomFact() {
    const offset = 1 + Math.floor(Math.random() * (facts.length - 1));
    setFactIndex((index) => (index + offset) % facts.length);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid min-h-28 items-center" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <m.p
            key={factIndex}
            initial={{ opacity: 0, rotate: -2, y: 10 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, rotate: 2, y: -10 }}
            transition={{ duration: 0.25 }}
            className="font-display text-2xl leading-snug text-ink"
          >
            “{facts[factIndex]}”
          </m.p>
        </AnimatePresence>
      </div>
      <button
        type="button"
        onClick={showRandomFact}
        className="inline-flex items-center gap-2 self-start rounded-full bg-ink px-5 py-2.5 font-medium text-background transition-transform hover:-rotate-2"
      >
        <Shuffle className="size-4" aria-hidden /> Another one
      </button>
    </div>
  );
}
