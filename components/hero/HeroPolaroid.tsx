import { HandwrittenNote } from "@/components/ui/HandwrittenNote";

const floatingStickers = [
  { label: "3+ yrs", className: "-top-4 -left-6 rotate-[-10deg] bg-coffee text-[#1c1612]" },
  { label: "Fintech ✦", className: "top-1/3 -right-8 rotate-[8deg] bg-sage text-background" },
  { label: "☕ powered", className: "-bottom-5 left-4 rotate-[-4deg] bg-accent text-background" },
];

export function HeroPolaroid() {
  return (
    <figure className="relative mx-auto w-64 rotate-3 rounded-sm bg-white p-3 pb-12 shadow-xl transition-transform duration-300 hover:rotate-0 md:w-72">
      <div className="grid aspect-square place-items-center rounded-sm bg-surface-strong text-8xl" role="img" aria-label="Placeholder portrait of Akshata at her laptop">
        👩🏻‍💻
      </div>
      <figcaption className="absolute inset-x-0 bottom-3 text-center">
        <HandwrittenNote className="text-[#2b2118]">me, mid-deploy</HandwrittenNote>
      </figcaption>
      {floatingStickers.map((sticker) => (
        <span
          key={sticker.label}
          className={`absolute rounded-full px-3 py-1 text-sm font-semibold shadow-md transition-transform hover:animate-wiggle ${sticker.className}`}
        >
          {sticker.label}
        </span>
      ))}
    </figure>
  );
}
