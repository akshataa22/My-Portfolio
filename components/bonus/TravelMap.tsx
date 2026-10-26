"use client";

import { useState, type KeyboardEvent } from "react";
import type { Place } from "@/data/types";

const MAP_WIDTH = 100;
const MAP_HEIGHT = 95;
const MAP_PADDING = 8;
const LONGITUDE_RANGE = { min: 70, max: 80 } as const;
const LATITUDE_RANGE = { min: 8, max: 34 } as const;

function projectToMap({ latitude, longitude }: Place) {
  const xRatio = (longitude - LONGITUDE_RANGE.min) / (LONGITUDE_RANGE.max - LONGITUDE_RANGE.min);
  const yRatio = (LATITUDE_RANGE.max - latitude) / (LATITUDE_RANGE.max - LATITUDE_RANGE.min);
  return {
    x: MAP_PADDING + xRatio * (MAP_WIDTH - MAP_PADDING * 2),
    y: MAP_PADDING + yRatio * (MAP_HEIGHT - MAP_PADDING * 2),
  };
}

export function TravelMap({ places }: { places: Place[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlace = places[activeIndex];
  const pins = places.map((place) => ({ place, ...projectToMap(place) }));
  const journeyPath = pins.map(({ x, y }) => `${x},${y}`).join(" ");

  function handlePinKeyDown(event: KeyboardEvent<SVGGElement>, index: number) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveIndex(index);
    }
  }

  return (
    <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="bg-dot-grid max-h-112 w-full rounded-2xl border border-line bg-background"
        role="group"
        aria-label="Map of places I've travelled to"
      >
        <polyline
          points={journeyPath}
          fill="none"
          stroke="var(--coffee)"
          strokeWidth={0.5}
          strokeDasharray="1.5 1.5"
          strokeLinecap="round"
        />
        {pins.map(({ place, x, y }, index) => {
          const isActive = index === activeIndex;
          return (
            <g
              key={place.name}
              role="button"
              tabIndex={0}
              aria-label={`${place.name}: ${place.memory}`}
              aria-pressed={isActive}
              transform={`translate(${x} ${y})`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onKeyDown={(event) => handlePinKeyDown(event, index)}
              className="outline-none"
            >
              <circle r={5} fill="transparent" />
              <circle
                r={isActive ? 3.2 : 2.2}
                fill={isActive ? "var(--accent)" : "var(--ink)"}
                stroke="var(--background)"
                strokeWidth={0.8}
                className="transition-all duration-200"
              />
              {isActive && (
                <text
                  y={-5}
                  textAnchor="middle"
                  fontSize={4}
                  className="fill-ink font-hand font-semibold"
                  aria-hidden
                >
                  {place.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <div aria-live="polite" className="flex flex-col gap-3">
        <span className="text-6xl" aria-hidden>
          {activePlace.emoji}
        </span>
        <p className="font-display text-3xl font-semibold text-ink">{activePlace.name}</p>
        <p className="text-lg text-muted">{activePlace.memory}</p>
        <p className="font-mono text-xs text-muted">
          {activeIndex + 1} / {places.length} · not to scale, just vibes ✈️
        </p>
      </div>
    </div>
  );
}
