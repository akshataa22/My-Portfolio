import { SkillToolbox } from "@/components/toolbox/SkillToolbox";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories, skills } from "@/data/skills";

export function ToolboxSection() {
  return (
    <SectionContainer id="toolbox" labelledBy="toolbox-heading">
      <SectionHeading
        id="toolbox-heading"
        eyebrow="what's on my desk"
        title="Tech toolbox"
        description="Pick a category to highlight it, or just drag the stickers around. I won't judge the mess."
      />
      <SkillToolbox skills={skills} categories={skillCategories} />
    </SectionContainer>
  );
}
