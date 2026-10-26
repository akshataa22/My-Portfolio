import { Download, Phone } from "lucide-react";
import { CopyEmailButton } from "@/components/contact/CopyEmailButton";
import { DeployHelloButton } from "@/components/contact/DeployHelloButton";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/BrandIcons";
import { OpenToWorkBadge } from "@/components/navigation/OpenToWorkBadge";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { profile } from "@/data/profile";

const contactLinkClass =
  "inline-flex items-center gap-2 rounded-full border border-line bg-background px-4 py-2 text-ink transition-colors hover:border-ink";

export function ContactSection() {
  const { linkedin, github, twitter } = profile.socials;

  return (
    <SectionContainer id="contact" labelledBy="contact-heading">
      <div className="flex flex-col gap-8 rounded-[2.5rem] border border-line bg-surface p-8 shadow-[6px_6px_0_0_var(--line)] md:p-16">
        <div className="flex flex-col gap-4">
          <OpenToWorkBadge />
          <h2 id="contact-heading" className="font-display text-5xl font-semibold tracking-tight text-ink md:text-7xl">
            Let&apos;s build something <span className="text-accent italic">together</span>.
          </h2>
          <p className="max-w-xl text-lg text-muted">
            I&apos;m open to full-time Full Stack and Frontend roles. Got a product, a team or just a hard problem? My
            inbox is warm.
          </p>
        </div>

        <CopyEmailButton email={profile.email} />

        <ul className="flex flex-wrap gap-3">
          <li>
            <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
              <LinkedinIcon className="size-4" /> {linkedin.label}
            </a>
          </li>
          <li>
            <a href={github.href} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
              <GithubIcon className="size-4" /> {github.label}
            </a>
          </li>
          <li>
            <a href={twitter.href} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
              <TwitterIcon className="size-4" /> {twitter.label}
            </a>
          </li>
          <li>
            <a href={`tel:${profile.phone.replace(/-/g, "")}`} className={contactLinkClass}>
              <Phone className="size-4" aria-hidden /> {profile.phone}
            </a>
          </li>
          <li>
            <a href={profile.resumePath} download className={contactLinkClass}>
              <Download className="size-4" aria-hidden /> Download resume
            </a>
          </li>
        </ul>

        <div className="flex flex-col gap-3 border-t border-dashed border-line pt-8">
          <HandwrittenNote>bored? try this →</HandwrittenNote>
          <DeployHelloButton />
        </div>
      </div>
    </SectionContainer>
  );
}
