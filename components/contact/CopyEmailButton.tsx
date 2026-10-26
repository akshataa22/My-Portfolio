"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (!hasCopied) return;
    const timeoutId = window.setTimeout(() => setHasCopied(false), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [hasCopied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setHasCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-left font-medium text-background transition-transform hover:-translate-y-0.5 md:text-lg"
      >
        {hasCopied ? <Check className="size-5" aria-hidden /> : <Copy className="size-5" aria-hidden />}
        <span className="break-all">{email}</span>
      </button>
      <p role="status" className="font-hand text-xl text-sage">
        {hasCopied ? "copied! talk soon ✨" : ""}
      </p>
    </div>
  );
}
