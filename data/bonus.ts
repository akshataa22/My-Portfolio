import type { BucketListItem, NowPlayingTrack, Place, Polaroid } from "./types";

export const polaroids: Polaroid[] = [
  {
    image: {
      src: "/profile_pic.jpeg",
      alt: "Akshata smiling at a café table with a slice of pizza",
    },
    caption: "hi, it's me 👋",
  },
  {
    image: {
      src: "/playingguitar_pic.jpeg",
      alt: "Akshata playing an acoustic guitar in a music store",
    },
    caption: "learning guitar, slowly",
  },
  {
    image: { src: "/coffee_pic.jpeg", alt: "A Coffee picture" },
    caption: "fuel: strong coffee",
  },
];

export const aboutFacts: string[] = [
  "Based in Mumbai, happiest near the sea",
  "Started in Java, fell for TypeScript",
  "Will refactor your CSS for fun",
  "Coffee first, code second",
  "Beginner guitarist",
];

export const nowPlaying: NowPlayingTrack = {
  title: "Sunflower",
  artist: "Post Malone & Swae Lee",
  note: "on loop while debugging",
  spotifyTrackId: "3KkXRkHbMCARz0aVfEt68P",
};

export const places: Place[] = [
  {
    name: "Mumbai",
    emoji: "🌊",
    memory: "Home. Marine Drive at sunset fixes every bug.",
    latitude: 19.07,
    longitude: 72.88,
  },
  {
    name: "Goa",
    emoji: "🏖️",
    memory: "Beach mornings, sunset vibes and too much bebinca.",
    latitude: 15.3,
    longitude: 74.12,
  },
  {
    name: "Bangalore",
    emoji: "🌿",
    memory: "Cafe hopping, startup vibes and unexpected rain.",
    latitude: 12.97,
    longitude: 77.59,
  },
  {
    name: "Alibaug",
    emoji: "⛵",
    memory: "Coastal escapes, sandy beaches and peaceful sunsets.",
    latitude: 18.64,
    longitude: 72.87,
  },
];

export const bucketList: BucketListItem[] = [
  { label: "Play Drums", isDone: true },
  { label: "Learn swimming", isDone: true },
  { label: "Travel in flight", isDone: false },
  { label: "Solo trip", isDone: false },
  { label: "Go bungee jumping", isDone: true },
  { label: "Contribute to open source", isDone: false },
  { label: "See the northern lights", isDone: false },
  { label: "Build my own portfolio", isDone: true },
  { label: "Learn to play the guitar", isDone: false },
];

export const funFacts: string[] = [
  "I've written more maker-checker flows than birthday cards.",
  "My first program printed my name 100 times. I was very proud.",
  "I name my Git branches like movie sequels.",
  "I can tell a MySQL query is slow just by the silence.",
  "I once fixed a production bug from a train in Mumbai local.",
  "Dark mode by night, cream mode by day. Balance.",
];
