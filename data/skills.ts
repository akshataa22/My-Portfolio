import type { Offering, ProcessStep, Skill, SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = ["Frontend", "Backend", "Databases", "Tools", "Testing"];

export const skills: Skill[] = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "shadcn/ui", category: "Frontend" },
  { name: "Hero UI", category: "Frontend" },
  { name: "Zustand", category: "Frontend" },
  { name: "TanStack Query", category: "Frontend" },
  { name: "React Hook Form", category: "Frontend" },
  { name: "Storybook", category: "Frontend" },
  { name: "HTML5 & CSS3", category: "Frontend" },
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Spring Security", category: "Backend" },
  { name: "Spring Data JPA", category: "Backend" },
  { name: "Hibernate", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },
  { name: "RBAC", category: "Backend" },
  { name: "Multi-Tenancy", category: "Backend" },
  { name: "Maker-Checker", category: "Backend" },
  { name: "MySQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Stripe API", category: "Tools" },
  { name: "WhatsApp API", category: "Tools" },
  { name: "Maven", category: "Tools" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Swagger", category: "Tools" },
  { name: "Vite", category: "Tools" },
  { name: "Netlify", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "Jest", category: "Testing" },
  { name: "Unit Testing", category: "Testing" },
  { name: "Integration Testing", category: "Testing" },
];

export const marqueeTech: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Tailwind CSS",
  "MySQL",
  "MongoDB",
  "Stripe",
  "Storybook",
];

export const processSteps: ProcessStep[] = [
  {
    title: "Decode",
    description: "Sit with the problem, the users and the business rules until the edge cases stop surprising me.",
    icon: "search",
  },
  {
    title: "Architect",
    description: "Sketch the data model, API contracts and approval flows before a single component exists.",
    icon: "compass",
  },
  {
    title: "Build",
    description: "Ship typed, reusable pieces on both ends, with tests where money or permissions are involved.",
    icon: "hammer",
  },
  {
    title: "Ship",
    description: "Release in small slices, watch the metrics and keep the rollback button warm.",
    icon: "rocket",
  },
  {
    title: "Iterate",
    description: "Turn feedback and performance numbers into the next, smaller, sharper release.",
    icon: "refresh",
  },
];

export const offerings: Offering[] = [
  {
    title: "End-to-end features",
    description: "From Spring Boot endpoints to polished Next.js screens, one person owning the whole slice.",
    icon: "layers",
  },
  {
    title: "Fintech-grade workflows",
    description: "Maker-checker approvals, RBAC and multi-tenant isolation that auditors are happy with.",
    icon: "shield",
  },
  {
    title: "Component libraries",
    description: "shadcn/ui and Storybook design systems that cut build time and codebase size across teams.",
    icon: "puzzle",
  },
  {
    title: "Integrations",
    description: "Stripe payments, WhatsApp notifications and the glue code that keeps them reliable.",
    icon: "plug",
  },
];
