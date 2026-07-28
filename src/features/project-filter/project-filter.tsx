"use client";

import { useState } from "react";
import { defaultLocale, filterLocalizedProjects, getLocalizedContent, type Locale } from "@/src/shared/i18n";
import { Button } from "@/src/shared/ui";
import { ProjectGrid } from "@/src/widgets/project-grid";

export function ProjectFilter({ locale = defaultLocale }: { locale?: Locale }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const content = getLocalizedContent(locale);
  const visibleProjects = filterLocalizedProjects(locale, activeFilter);

  return (
    <div className="space-y-6">
      <div className="flex min-h-12 flex-wrap gap-3" aria-label="Project filters">
        {content.projectFilters.map((filter) => (
          <Button
            key={filter.id}
            type="button"
            variant={activeFilter === filter.id ? "primary" : "secondary"}
            onClick={() => setActiveFilter(filter.id)}
            aria-pressed={activeFilter === filter.id}
            className="min-w-28"
          >
            {filter.label}
          </Button>
        ))}
      </div>
      <ProjectGrid projects={visibleProjects} labels={content.projectsPage.cardLabels} locale={locale} />
    </div>
  );
}
