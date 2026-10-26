import type { Education, NavItem, Profile } from "./types";

export const profile: Profile = {
  name: "Akshata Dhanawade",
  firstName: "Akshata",
  role: "Full Stack Engineer",
  location: "Mumbai, India",
  timeZone: "Asia/Kolkata",
  email: "dhanawadeakshata53@gmail.com",
  phone: "+91-8082777595",
  resumePath: "/Akshata_Dhanawade_Full_Stack_Engineer.pdf",
  summary:
    "I turn complex business requirements into reliable, easy-to-use software. Full Stack Engineer with 3+ years of building scalable, secure, responsive apps across fintech, ed-tech and e-commerce. Strong in React, Next.js, Java and Spring Boot, with AI-powered dashboards and integrations like Stripe and WhatsApp.",
  bio: [
    "I started with Java and Spring Boot at BridgeLabz, fell for React along the way, and now I happily live on both sides of the API. Today I build ExCore at Fable Fintech, where every button might move real money, so I care a lot about approvals, permissions and the boring details that keep things safe.",
    "I love turning messy business rules into clean, typed systems, and I'm at my best on small teams where I can own a feature from database table to pixel. Off the keyboard, you'll find me planning the next trip or playing games with teammates.",
  ],
  taglines: [
    "I build fintech dashboards that make numbers feel friendly.",
    "I tame maker-checker workflows so money moves safely.",
    "I write Spring Boot APIs and the React that talks to them.",
    "From BridgeLabz intern to shipping ExCore and Omney Business.",
  ],
  socials: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akshatadhanawade/",
      handle: "in/akshatadhanawade",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/akshataa22",
      handle: "@akshataa22",
    },
    twitter: {
      label: "Twitter",
      href: "https://x.com/akshatairl",
      handle: "@akshatairl",
    },
  },
};

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Fun", href: "#still-here" },
  { label: "Contact", href: "#contact" },
];

export const education: Education = {
  institution: "Atharva College of Engineering",
  degree: "B.E.",
  period: "Aug 2018 – Aug 2022",
  location: "Mumbai, India",
  grade: "CGPA 7.78",
};

export const companies: string[] = [
  "Fable Fintech",
  "Unico Connect",
  "BridgeLabz",
];
