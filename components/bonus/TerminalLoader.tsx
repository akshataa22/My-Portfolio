"use client";

import dynamic from "next/dynamic";

export const TerminalLoader = dynamic(
  () => import("./InteractiveTerminal").then((module) => module.InteractiveTerminal),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-96 place-items-center rounded-2xl bg-[#1c1612] font-mono text-sm text-white/60">
        booting akshata-os…
      </div>
    ),
  },
);
