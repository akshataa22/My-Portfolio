"use client";

import * as m from "motion/react-m";
import Image from "next/image";
import { useState } from "react";
import type { Polaroid } from "@/data/types";

const stackPositions = [
  { rotate: -4, x: 0, y: 0, className: "z-40" },
  { rotate: 6, x: 18, y: 10, className: "z-30" },
  { rotate: -9, x: -16, y: 16, className: "z-20" },
  { rotate: 3, x: 8, y: 22, className: "z-10" },
];

export function PolaroidStack({ polaroids }: { polaroids: Polaroid[] }) {
  const [order, setOrder] = useState(() => polaroids.map((_, index) => index));
  const topPolaroid = polaroids[order[0]];

  function shuffleTopToBack() {
    setOrder(([top, ...rest]) => [...rest, top]);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        type="button"
        onClick={shuffleTopToBack}
        className="relative h-80 w-64 md:h-96 md:w-72"
      >
        <span className="sr-only">Show next photo after “{topPolaroid.caption}”.</span>
        {order.map((polaroidIndex, stackIndex) => {
          const polaroid = polaroids[polaroidIndex];
          const position = stackPositions[stackIndex % stackPositions.length];
          return (
            <m.span
              key={polaroid.caption}
              aria-hidden={stackIndex > 0}
              animate={{ rotate: position.rotate, x: position.x, y: position.y }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`absolute inset-0 flex flex-col rounded-sm bg-white p-3 pb-14 shadow-xl ${position.className}`}
            >
              {"image" in polaroid ? (
                <span className="relative flex-1 overflow-hidden rounded-sm bg-surface-strong">
                  <Image
                    src={polaroid.image.src}
                    alt={polaroid.image.alt}
                    fill
                    sizes="(min-width: 768px) 264px, 232px"
                    className="object-cover object-top"
                  />
                </span>
              ) : (
                <span aria-hidden className="grid flex-1 place-items-center rounded-sm bg-surface-strong text-7xl">
                  {polaroid.emoji}
                </span>
              )}
              <span className="absolute inset-x-0 bottom-4 text-center font-hand text-2xl text-[#2b2118]">
                {polaroid.caption}
              </span>
            </m.span>
          );
        })}
      </button>
      <p className="font-hand text-lg text-muted">click the photos to shuffle →</p>
    </div>
  );
}
