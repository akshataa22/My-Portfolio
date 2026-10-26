"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react";

type CountUpNumberProps = {
  value: number;
  suffix: string;
};

export function CountUpNumber({ value, suffix }: CountUpNumberProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(numberRef, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!prefersReducedMotion && numberRef.current) numberRef.current.textContent = "0";
  }, [prefersReducedMotion]);

  useEffect(() => {
    const element = numberRef.current;
    if (!isInView || prefersReducedMotion || !element) return;

    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => {
        element.textContent = String(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [isInView, prefersReducedMotion, value]);

  return (
    <span className="font-display text-5xl font-semibold text-ink tabular-nums md:text-6xl">
      <span ref={numberRef}>{value}</span>
      <span className="text-accent">{suffix}</span>
    </span>
  );
}
