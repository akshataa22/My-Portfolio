"use client";

import { useSyncExternalStore } from "react";

type LiveClockProps = {
  timeZone: string;
  label: string;
};

function subscribeToMinuteTicks(onTick: () => void) {
  const intervalId = window.setInterval(onTick, 15_000);
  return () => window.clearInterval(intervalId);
}

export function LiveClock({ timeZone, label }: LiveClockProps) {
  const formattedTime = useSyncExternalStore(
    subscribeToMinuteTicks,
    () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone,
        weekday: "short",
        hour: "numeric",
        minute: "2-digit",
      }).format(new Date()),
    () => null,
  );

  return (
    <span className="font-mono text-xs text-muted" aria-label={`Local time in ${label}`}>
      {label} · {formattedTime ?? "--:--"}
    </span>
  );
}
