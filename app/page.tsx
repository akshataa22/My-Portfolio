import { Navbar } from "@/components/navigation/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { ImpactStatsSection } from "@/components/sections/ImpactStatsSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StillHereSection } from "@/components/sections/StillHereSection";
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ToolboxSection } from "@/components/sections/ToolboxSection";
import { WhatIBringSection } from "@/components/sections/WhatIBringSection";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
  sameAs: [profile.socials.linkedin.href, profile.socials.github.href, profile.socials.twitter.href],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main id="main" className="flex-1">
        <HeroSection />
        <MarqueeSection />
        <ImpactStatsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ToolboxSection />
        <HowIWorkSection />
        <WhatIBringSection />
        {/* <TestimonialsSection /> */}
        <AboutSection />
        <ContactSection />
        <StillHereSection />
      </main>
      <FooterSection />
    </>
  );
}
