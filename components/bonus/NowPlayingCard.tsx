"use client";

import { ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { NowPlayingTrack } from "@/data/types";
import { cn } from "@/lib/cn";
import { createSpotifyController, type SpotifyEmbedController } from "@/lib/spotifyIframeApi";

const EQUALIZER_BARS = ["animate-equalizer-1", "animate-equalizer-2", "animate-equalizer-3", "animate-equalizer-4"];
const EMBED_HEIGHT = 80;

type EmbedStatus = "idle" | "loading" | "ready" | "failed";

export function NowPlayingCard({ track }: { track: NowPlayingTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [embedStatus, setEmbedStatus] = useState<EmbedStatus>("idle");
  const embedContainerRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<SpotifyEmbedController | null>(null);
  const spotifyTrackUrl = `https://open.spotify.com/track/${track.spotifyTrackId}`;

  useEffect(() => () => controllerRef.current?.destroy(), []);

  async function startSpotifyEmbed(container: HTMLDivElement) {
    setEmbedStatus("loading");
    try {
      const controller = await createSpotifyController(container, track.spotifyTrackId, EMBED_HEIGHT);
      controllerRef.current = controller;
      controller.addListener("playback_update", ({ data }) => setIsPlaying(!data.isPaused));
      controller.addListener("ready", () => {
        setEmbedStatus("ready");
        controller.play();
      });
    } catch {
      setEmbedStatus("failed");
    }
  }

  function togglePlayback() {
    if (controllerRef.current) {
      controllerRef.current.togglePlay();
    } else if (embedStatus === "idle" && embedContainerRef.current) {
      void startSpotifyEmbed(embedContainerRef.current);
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <div
          aria-hidden
          className={cn(
            "grid size-44 animate-spin-slow place-items-center rounded-full bg-[#1c1612] shadow-xl ring-4 ring-line md:size-52",
            !isPlaying && "animation-paused",
          )}
        >
          <span className="grid size-[85%] place-items-center rounded-full border border-white/10">
            <span className="grid size-[80%] place-items-center rounded-full border border-white/10">
              <span className="grid size-16 place-items-center rounded-full bg-accent">
                <span className="size-3 rounded-full bg-[#1c1612]" />
              </span>
            </span>
          </span>
        </div>
        <button
          type="button"
          onClick={togglePlayback}
          disabled={embedStatus === "failed"}
          aria-busy={embedStatus === "loading"}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
          className="absolute -right-2 -bottom-2 grid size-14 place-items-center rounded-full bg-coffee text-[#1c1612] shadow-lg transition-transform hover:scale-110 disabled:opacity-50"
        >
          {isPlaying ? <Pause className="size-6" aria-hidden /> : <Play className="size-6" aria-hidden />}
        </button>
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <div className="flex h-5 items-end gap-1" aria-hidden>
          {EQUALIZER_BARS.map((animationClass) => (
            <span
              key={animationClass}
              className={cn(
                "h-full w-1 origin-bottom rounded-full bg-sage",
                isPlaying ? animationClass : "scale-y-30",
              )}
            />
          ))}
        </div>
        <p className="font-display text-2xl font-semibold text-ink">{track.title}</p>
        <p className="text-muted">{track.artist}</p>
        <p className="font-hand text-lg text-accent">{track.note}</p>
      </div>

      <div
        ref={embedContainerRef}
        className={cn("w-full overflow-hidden rounded-xl", embedStatus === "ready" ? "h-20" : "h-0")}
      />

      {embedStatus !== "ready" && (
        <a
          href={spotifyTrackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-ink underline underline-offset-4"
        >
          {embedStatus === "failed" ? "Couldn't load the player, open in Spotify" : "Listen on Spotify"}
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
      )}
    </div>
  );
}
