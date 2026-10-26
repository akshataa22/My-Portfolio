import type { Project, ProjectCategory } from "./types";

export const projectCategories: ProjectCategory[] = ["Fintech", "EdTech", "Commerce"];

export const projects: Project[] = [
  {
    slug: "omney-business",
    title: "Omney Business",
    tagline: "A cross-border remittance platform for invoicing, receivables, payables and payments.",
    category: "Fintech",
    emoji: "🌍",
    stack: ["React.js", "React Hook Form", "Tailwind CSS", "Spring Boot", "MySQL"],
    highlights: [
      "Financial operations for invoicing, receivables, payables and client and vendor management.",
      "Financial analytics and transaction workflows that support cross-border remittance operations.",
    ],
    buildNotes: [
      "Stripe handles secure payment processing and keeps online payment workflows simple.",
      "Long financial forms are built with React Hook Form, so validation stays fast and typed.",
      "Inward and outward remittance statuses are mapped into one clear transaction timeline.",
    ],
  },
  {
    slug: "excore",
    title: "ExCore",
    tagline: "A white-label, multi-tenant accounting platform for exchange houses.",
    category: "Fintech",
    emoji: "💱",
    stack: ["Next.js", "TypeScript", "Java", "Spring Boot", "Spring Security", "MySQL"],
    highlights: [
      "Modules for user access management, chart of accounts, ledger creation and group onboarding.",
      "Maker-checker approval workflows with tenant-level data isolation and transactional integrity.",
    ],
    buildNotes: [
      "REST APIs are secured with Spring Security, and JPA/Hibernate transactions keep every ledger write consistent.",
      "Tenant context is resolved per request so queries can never leak across exchange-house groups.",
      "The WhatsApp API sends automated financial notifications so nobody misses an approval.",
    ],
  },
  {
    slug: "highlands-brain",
    title: "Highlands Brain",
    tagline: "An ed-tech SaaS with role-based dashboards for admins, staff and students.",
    category: "EdTech",
    emoji: "🧠",
    stack: ["Next.js", "Hero UI", "TypeScript", "Zustand", "Tailwind CSS"],
    highlights: [
      "Ticket-based support, digital master agreement signing, analytics and attendance tracking.",
      "Cut report processing time by 25% and streamlined admin workflows.",
    ],
    buildNotes: [
      "Zustand stores are sliced per role so each dashboard only loads the state it needs.",
      "TanStack Query handles caching and pagination, keeping heavy tables snappy.",
      "AI-assisted features were added behind clear loading and error states.",
    ],
  },
  {
    slug: "raj-gharana",
    title: "Raj Gharana",
    tagline: "A jewelry management system for purchases, payments and customer history.",
    category: "Commerce",
    emoji: "💍",
    stack: ["Next.js", "React", "TypeScript"],
    highlights: [
      "Purchase, payment and customer-history tracking behind role-based access control.",
      "Reduced page load time by 20% with server-side rendering and dynamic filtering.",
    ],
    buildNotes: [
      "Listing pages render on the server, so filters arrive with data instead of a spinner.",
      "RBAC guards live in one place and wrap both routes and actions.",
    ],
  },
];
