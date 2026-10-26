"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { FilterChip } from "@/components/ui/FilterChip";
import type { Project, ProjectCategory } from "@/data/types";
import { ProjectCard } from "./ProjectCard";

type ProjectFilter = ProjectCategory | "All";

type ProjectsGalleryProps = {
  projects: Project[];
  categories: ProjectCategory[];
};

export function ProjectsGallery({ projects, categories }: ProjectsGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const visibleProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="flex flex-col gap-8">
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((filter) => (
          <FilterChip key={filter} isActive={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
            {filter}
          </FilterChip>
        ))}
      </div>
      <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
