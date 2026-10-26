type SpotifyPlaybackUpdate = {
  data: { isPaused: boolean; isBuffering: boolean; position: number; duration: number };
};

export type SpotifyEmbedController = {
  play: () => void;
  togglePlay: () => void;
  destroy: () => void;
  addListener(event: "ready", callback: () => void): void;
  addListener(event: "playback_update", callback: (update: SpotifyPlaybackUpdate) => void): void;
};

type SpotifyIframeApi = {
  createController: (
    element: HTMLElement,
    options: { uri: string; width?: string | number; height?: number },
    callback: (controller: SpotifyEmbedController) => void,
  ) => void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyIframeApi) => void;
  }
}

const SPOTIFY_IFRAME_API_SRC = "https://open.spotify.com/embed/iframe-api/v1";

let spotifyApiPromise: Promise<SpotifyIframeApi> | null = null;

function loadSpotifyIframeApi() {
  spotifyApiPromise ??= new Promise<SpotifyIframeApi>((resolve, reject) => {
    window.onSpotifyIframeApiReady = resolve;
    const script = document.createElement("script");
    script.src = SPOTIFY_IFRAME_API_SRC;
    script.async = true;
    script.onerror = () => {
      spotifyApiPromise = null;
      reject(new Error("Could not load the Spotify iFrame API"));
    };
    document.body.append(script);
  });
  return spotifyApiPromise;
}

export async function createSpotifyController(container: HTMLElement, trackId: string, height: number) {
  const api = await loadSpotifyIframeApi();
  const mountPoint = document.createElement("div");
  container.replaceChildren(mountPoint);

  return new Promise<SpotifyEmbedController>((resolve) => {
    api.createController(mountPoint, { uri: `spotify:track:${trackId}`, width: "100%", height }, resolve);
  });
}
