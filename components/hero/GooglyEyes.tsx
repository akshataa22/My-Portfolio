"use client";

import { useEffect, useRef } from "react";

const MAX_PUPIL_OFFSET_PX = 6;

export function GooglyEyes() {
  const eyesRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const eyes = eyesRef.current;
    if (!eyes || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId = 0;
    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        eyes.querySelectorAll<HTMLElement>("[data-pupil]").forEach((pupil) => {
          const socket = pupil.parentElement!.getBoundingClientRect();
          const angle = Math.atan2(
            event.clientY - (socket.top + socket.height / 2),
            event.clientX - (socket.left + socket.width / 2),
          );
          const x = Math.cos(angle) * MAX_PUPIL_OFFSET_PX;
          const y = Math.sin(angle) * MAX_PUPIL_OFFSET_PX;
          pupil.style.transform = `translate(${x}px, ${y}px)`;
        });
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <span ref={eyesRef} aria-hidden className="inline-flex translate-y-1 gap-1 align-middle">
      {[0, 1].map((eye) => (
        <span
          key={eye}
          className="grid size-10 place-items-center rounded-full border-2 border-ink bg-white md:size-14"
        >
          <span data-pupil className="size-4 rounded-full bg-ink transition-transform duration-75 md:size-6" />
        </span>
      ))}
    </span>
  );
}
