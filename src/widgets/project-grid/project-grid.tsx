import type { Project } from "@/src/entities/project";
import { defaultLocale, type Locale, type ProjectPageContent } from "@/src/shared/i18n";
import { ProjectCard } from "./project-card";

export function ProjectGrid({
  projects,
  labels,
  locale = defaultLocale,
}: {
  projects: Project[];
  labels: ProjectPageContent["cardLabels"];
  locale?: Locale;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} labels={labels} locale={locale} />
      ))}
    </div>
  );
}
