import type { ExperienceEntry, ImpactStat } from "./types";

export const experience: ExperienceEntry[] = [
  {
    commitHash: "f4b1e7c",
    commitMessage: "feat: join Fable Fintech to build ExCore",
    role: "Full Stack Engineer",
    company: "Fable Fintech",
    location: "Mumbai, India",
    period: "Sep 2025 – Present",
    isCurrent: true,
    highlights: [
      "Develop a white-label, multi-tenant accounting platform for exchange houses with Next.js and Tailwind CSS, enabling scalable, customizable financial workflows.",
      "Architected REST APIs for Omney Business, a cross-border remittance platform, with Java, Spring Boot and MySQL, including maker-checker approvals for access management, invoicing, receivables and payables.",
      "Built a reusable shadcn/ui library that standardized the platform's design system and reduced codebase size by 10%.",
      "Deliver end-to-end financial features: client and vendor management, inward and outward remittance status mapping and financial reporting.",
    ],
  },
  {
    commitHash: "9c03a2d",
    commitMessage: "perf: ship Highlands Brain and a Storybook library",
    role: "Software Engineer",
    company: "Unico Connect",
    location: "Mumbai, India",
    period: "Jul 2024 – Sep 2025",
    isCurrent: false,
    highlights: [
      "Developed Highlands Brain, an AI-powered EdTech platform, with React.js and TanStack Query, improving productivity by 30%.",
      "Created a reusable Storybook component library, cutting development time by 40% across 3+ projects.",
      "Optimized Spring Boot API performance with pagination, caching and JPA query tuning for sub-second responses on high-volume operations.",
    ],
  },
  {
    commitHash: "1a7e5b0",
    commitMessage: "init: first full-stack commits at BridgeLabz",
    role: "Software Engineer Intern",
    company: "BridgeLabz",
    location: "Mumbai, India",
    period: "Sep 2023 – Jul 2024",
    isCurrent: false,
    highlights: [
      "Developed CRUD-based full-stack applications with React.js, Java, Spring Boot and MySQL.",
      "Followed test-driven development practices while collaborating with the development team.",
    ],
  },
];

export const impactStats: ImpactStat[] = [
  { value: 3, suffix: "+", label: "years shipping", context: "across fintech, ed-tech and e-commerce" },
  { value: 40, suffix: "%", label: "less dev time", context: "with a shared Storybook library" },
  { value: 30, suffix: "%", label: "productivity boost", context: "on an AI-powered EdTech platform" },
  { value: 25, suffix: "%", label: "faster reports", context: "for Highlands Brain admins" },
  { value: 10, suffix: "%", label: "smaller codebase", context: "with a shared shadcn/ui library" },
];
