"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useRef } from "react";
import type { Testimonial } from "@/data/types";

const cardTilts = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;
    if (!track || !firstCard) return;
    track.scrollBy({ left: direction * (firstCard.clientWidth + 24), behavior: "smooth" });
  }

  return (
    <div className="flex flex-col gap-6">
      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Testimonials, scroll horizontally"
        className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 py-4 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-accent md:mx-0 md:px-1"
      >
        {testimonials.map((testimonial, index) => (
          <li
            key={testimonial.author}
            className={`flex w-[85%] shrink-0 snap-center flex-col justify-between gap-6 rounded-3xl border border-line bg-surface p-7 shadow-[4px_4px_0_0_var(--line)] transition-transform hover:rotate-0 sm:w-96 ${cardTilts[index % cardTilts.length]}`}
          >
            <Quote className="size-8 text-coffee" aria-hidden />
            <blockquote className="text-lg leading-relaxed text-ink">“{testimonial.quote}”</blockquote>
            <footer>
              <p className="font-display text-lg font-semibold text-ink">{testimonial.author}</p>
              <p className="text-sm text-muted">{testimonial.role}</p>
            </footer>
          </li>
        ))}
      </ul>
      <div className="flex gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => scrollByCard(-1)}
          className="grid size-11 place-items-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-background"
        >
          <ArrowLeft className="size-5" aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => scrollByCard(1)}
          className="grid size-11 place-items-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-background"
        >
          <ArrowRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
