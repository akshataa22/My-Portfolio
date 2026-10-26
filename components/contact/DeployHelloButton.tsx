"use client";

import * as m from "motion/react-m";
import { useEffect, useState } from "react";

const BUILD_LOG = [
  "$ vercel deploy --hello",
  "▲ Building portfolio-of-akshata…",
  "✓ Compiled coffee.ts in 0.4s",
  "✓ Linted vibes, 0 warnings",
  "✓ Generated 1 new friendship",
  "🚀 Deployed! Now send that email ↑",
];

const LINE_DELAY_MS = 450;
const CONFETTI_COUNT = 18;
const CONFETTI_COLORS = ["bg-accent", "bg-coffee", "bg-sage", "bg-sky"];

const confettiPieces = Array.from({ length: CONFETTI_COUNT }, (_, index) => {
  const angle = (index / CONFETTI_COUNT) * Math.PI * 2;
  const distance = 70 + (index % 3) * 35;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance - 30,
    rotate: (index % 2 === 0 ? 1 : -1) * (90 + index * 20),
    color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
  };
});

export function DeployHelloButton() {
  const [visibleLineCount, setVisibleLineCount] = useState(0);
  const [runId, setRunId] = useState(0);
  const isRunning = visibleLineCount > 0 && visibleLineCount < BUILD_LOG.length;
  const isDeployed = visibleLineCount === BUILD_LOG.length;

  useEffect(() => {
    if (runId === 0 || visibleLineCount >= BUILD_LOG.length) return;
    const timeoutId = window.setTimeout(() => setVisibleLineCount((count) => count + 1), LINE_DELAY_MS);
    return () => window.clearTimeout(timeoutId);
  }, [runId, visibleLineCount]);

  function startDeploy() {
    setVisibleLineCount(1);
    setRunId((id) => id + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative self-start">
        <button
          type="button"
          data-cursor="peek"
          onClick={startDeploy}
          disabled={isRunning}
          className="rounded-full border-2 border-dashed border-accent px-5 py-2.5 font-mono text-sm text-accent transition-transform hover:-rotate-2 disabled:opacity-60"
        >
          {isDeployed ? "deploy again?" : "don't press deploy"}
        </button>
        {isDeployed && (
          <span key={runId} aria-hidden className="pointer-events-none absolute top-1/2 left-1/2">
            {confettiPieces.map((piece, index) => (
              <m.span
                key={index}
                className={`absolute size-2.5 rounded-sm ${piece.color}`}
                initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                animate={{ x: piece.x, y: piece.y, rotate: piece.rotate, opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />
            ))}
          </span>
        )}
      </div>

      {visibleLineCount > 0 && (
        <pre
          aria-live="polite"
          className="overflow-x-auto rounded-2xl bg-[#1c1612] p-4 font-mono text-xs leading-relaxed text-[#f5ede0] md:text-sm"
        >
          {BUILD_LOG.slice(0, visibleLineCount).join("\n")}
        </pre>
      )}
    </div>
  );
}
