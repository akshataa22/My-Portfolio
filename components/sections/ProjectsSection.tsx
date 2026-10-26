import { ProjectsGallery } from "@/components/projects/ProjectsGallery";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectCategories, projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <SectionContainer id="work" labelledBy="work-heading">
      <SectionHeading
        id="work-heading"
        eyebrow="sneak peek of my work"
        title="Selected work"
        description="Production platforms I've helped build across fintech, ed-tech and commerce. Hover to tilt, tap “how I built it” for the nerdy bits."
      />
      <ProjectsGallery projects={projects} categories={projectCategories} />
    </SectionContainer>
  );
}
