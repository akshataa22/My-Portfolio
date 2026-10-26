"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { runTerminalCommand, terminalWelcome } from "./terminalCommands";

type TerminalLine = {
  id: number;
  kind: "input" | "output";
  text: string;
};

const PROMPT = "akshata@portfolio:~$";

export function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([{ id: 0, kind: "output", text: terminalWelcome }]);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextLineId = useRef(1);

  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) scrollArea.scrollTop = scrollArea.scrollHeight;
  }, [lines]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = inputValue.trim();
    if (!command) return;

    const result = runTerminalCommand(command);
    setHistory((previous) => [...previous, command]);
    setHistoryIndex(null);
    setInputValue("");

    if (result.kind === "clear") {
      setLines([]);
      return;
    }

    const inputLine: TerminalLine = { id: nextLineId.current++, kind: "input", text: command };
    const outputLine: TerminalLine = { id: nextLineId.current++, kind: "output", text: result.text };
    setLines((previous) => [...previous, inputLine, outputLine]);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (history.length === 0 || (event.key !== "ArrowUp" && event.key !== "ArrowDown")) return;
    event.preventDefault();

    const lastIndex = history.length - 1;
    const nextIndex =
      event.key === "ArrowUp"
        ? Math.max(0, (historyIndex ?? history.length) - 1)
        : historyIndex === null || historyIndex >= lastIndex
          ? null
          : historyIndex + 1;

    setHistoryIndex(nextIndex);
    setInputValue(nextIndex === null ? "" : history[nextIndex]);
  }

  return (
    <div
      className="flex h-96 flex-col overflow-hidden rounded-2xl bg-[#1c1612] font-mono text-sm text-[#f5ede0] shadow-xl"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3" aria-hidden>
        <span className="size-3 rounded-full bg-[#f0957a]" />
        <span className="size-3 rounded-full bg-[#e0a874]" />
        <span className="size-3 rounded-full bg-[#b4c487]" />
        <span className="ml-3 text-xs text-white/60">zsh — akshata-os</span>
      </div>

      <div ref={scrollAreaRef} role="log" aria-live="polite" className="flex-1 overflow-y-auto p-4">
        {lines.map((line) => (
          <pre key={line.id} className="mb-2 font-mono break-words whitespace-pre-wrap">
            {line.kind === "input" ? (
              <>
                <span className="text-[#b4c487]">{PROMPT}</span> {line.text}
              </>
            ) : (
              <span className="text-[#f5ede0]/85">{line.text}</span>
            )}
          </pre>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
        <label htmlFor="terminal-input" className="shrink-0 text-[#b4c487]">
          {PROMPT}
        </label>
        <input
          id="terminal-input"
          ref={inputRef}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder="type help"
          className="min-w-0 flex-1 bg-transparent text-[#f5ede0] caret-[#e0a874] outline-none placeholder:text-white/40"
        />
      </form>
    </div>
  );
}
