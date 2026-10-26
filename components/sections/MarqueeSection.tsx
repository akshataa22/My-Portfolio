import { companies } from "@/data/profile";
import { marqueeTech } from "@/data/skills";

const marqueeItems = [...companies.map((company) => `✦ ${company}`), ...marqueeTech];

export function MarqueeSection() {
  return (
    <section aria-label="Companies and technologies" className="border-y border-line bg-surface py-6">
      <p className="mb-4 text-center font-mono text-xs tracking-widest text-muted uppercase">
        Worked with these teams &amp; tools
      </p>
      <div className="flex overflow-hidden mask-x-from-90% mask-x-to-100%">
        <ul className="paused-on-hover flex w-max shrink-0 animate-marquee gap-10 pr-10">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <li
              key={`${item}-${index}`}
              aria-hidden={index >= marqueeItems.length}
              className="font-display text-2xl whitespace-nowrap text-ink md:text-3xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
