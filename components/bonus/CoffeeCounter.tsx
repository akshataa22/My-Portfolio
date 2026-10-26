"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useState } from "react";

function getCoffeeMood(cups: number) {
  if (cups === 0) return "No coffee yet?! Let's fix that.";
  if (cups <= 2) return "Now we're talking. Brain warming up.";
  if (cups <= 5) return "Peak productivity unlocked. ⚡";
  return "Okay, maybe switch to water. 💧";
}

export function CoffeeCounter() {
  const [cups, setCups] = useState(0);

  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <AnimatePresence>
          {cups > 0 && (
            <m.span
              key={cups}
              aria-hidden
              initial={{ opacity: 0.8, y: 0, scale: 0.8 }}
              animate={{ opacity: 0, y: -40, scale: 1.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute -top-2 left-1/2 -translate-x-1/2 text-2xl text-muted"
            >
              ♨
            </m.span>
          )}
        </AnimatePresence>
        <button
          type="button"
          onClick={() => setCups((count) => count + 1)}
          aria-label="Pour Akshata a cup of coffee"
          className="grid size-20 place-items-center rounded-full bg-coffee text-4xl shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <span aria-hidden>☕</span>
        </button>
      </div>
      <div className="flex flex-col gap-1" aria-live="polite">
        <p className="font-display text-4xl font-semibold text-ink tabular-nums">
          {cups} <span className="text-lg font-normal text-muted">{cups === 1 ? "cup" : "cups"} today</span>
        </p>
        <p className="font-hand text-xl text-accent">{getCoffeeMood(cups)}</p>
      </div>
    </div>
  );
}
