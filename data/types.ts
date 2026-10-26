export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Profile = {
  name: string;
  firstName: string;
  role: string;
  location: string;
  timeZone: string;
  email: string;
  phone: string;
  resumePath: string;
  summary: string;
  bio: [string, string];
  taglines: string[];
  socials: {
    linkedin: SocialLink;
    github: SocialLink;
    twitter: SocialLink;
  };
};

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ImpactStat = {
  value: number;
  suffix: string;
  label: string;
  context: string;
};

export type ProjectCategory = "Fintech" | "EdTech" | "Commerce";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  emoji: string;
  stack: string[];
  highlights: string[];
  buildNotes: string[];
  href?: string;
};

export type ExperienceEntry = {
  commitHash: string;
  commitMessage: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  highlights: string[];
};

export type SkillCategory = "Frontend" | "Backend" | "Databases" | "Tools" | "Testing";

export type Skill = {
  name: string;
  category: SkillCategory;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: "search" | "compass" | "hammer" | "rocket" | "refresh";
};

export type Offering = {
  title: string;
  description: string;
  icon: "layers" | "shield" | "puzzle" | "plug";
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type Polaroid = { caption: string } & ({ image: { src: string; alt: string } } | { emoji: string });

export type Education = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
};

export type NowPlayingTrack = {
  title: string;
  artist: string;
  note: string;
  spotifyTrackId: string;
};

export type Place = {
  name: string;
  emoji: string;
  memory: string;
  latitude: number;
  longitude: number;
};

export type BucketListItem = {
  label: string;
  isDone: boolean;
};
