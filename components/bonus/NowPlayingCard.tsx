"use client";

import { ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { NowPlayingTrack } from "@/data/types";
import { cn } from "@/lib/cn";
import { createSpotifyController, type SpotifyEmbedController } from "@/lib/spotifyIframeApi";

const EQUALIZER_BARS = ["animate-equalizer-1", "animate-equalizer-2", "animate-equalizer-3", "animate-equalizer-4"];
const EMBED_HEIGHT = 152;

type EmbedStatus = "loading" | "ready" | "failed";

export function NowPlayingCard({ track }: { track: NowPlayingTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [embedStatus, setEmbedStatus] = useState<EmbedStatus>("loading");
  const embedContainerRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<SpotifyEmbedController | null>(null);
  const hasStartedRef = useRef(false);
  const spotifyTrackUrl = `https://open.spotify.com/track/${track.spotifyTrackId}`;

  useEffect(() => {
    const container = embedContainerRef.current;
    if (!container) return;

    let isCancelled = false;

    createSpotifyController(container, track.spotifyTrackId, EMBED_HEIGHT)
      .then((controller) => {
        if (isCancelled) {
          controller.destroy();
          return;
        }

        controllerRef.current = controller;
        controller.addListener("playback_update", ({ data }) => {
          setIsPlaying(!data.isPaused);
          if (data.duration > 0 && data.position >= data.duration - 500) hasStartedRef.current = false;
        });
        controller.addListener("ready", () => setEmbedStatus("ready"));
      })
      .catch(() => {
        if (!isCancelled) setEmbedStatus("failed");
      });

    return () => {
      isCancelled = true;
      controllerRef.current?.destroy();
      controllerRef.current = null;
    };
  }, [track.spotifyTrackId]);

  function togglePlayback() {
    const controller = controllerRef.current;
    if (!controller) return;

    if (isPlaying) {
      controller.pause();
      return;
    }

    if (!hasStartedRef.current) {
      controller.loadEntity(`spotify:track:${track.spotifyTrackId}`, false, 0);
      hasStartedRef.current = true;
    }

    controller.play();
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
          disabled={embedStatus !== "ready"}
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

      {embedStatus === "failed" ? (
        <a
          href={spotifyTrackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-ink underline underline-offset-4"
        >
          Couldn&apos;t load the player, open in Spotify
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
      ) : (
        <div ref={embedContainerRef} className="h-[152px] w-full overflow-hidden rounded-xl" />
      )}
    </div>
  );
}
