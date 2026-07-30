import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/src/entities/project";
import { defaultLocale, type Locale, type ProjectPageContent, withLocalePath } from "@/src/shared/i18n";
import { Card, Icon, Tag } from "@/src/shared/ui";

export function ProjectCard({
  project,
  labels,
  locale = defaultLocale,
}: {
  project: Project;
  labels: ProjectPageContent["cardLabels"];
  locale?: Locale;
}) {
  return (
    <Link
      href={withLocalePath(`/projects/${project.slug}`, locale)}
      className="group block rounded-[var(--radius-md)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-primary)]"
    >
      <Card className="h-full overflow-hidden transition-[border-color,transform] duration-200 group-hover:-translate-y-1 group-hover:border-[var(--color-border-active)]">
        <div className="h-36 border-b border-(--color-border) bg-[image:var(--color-project-preview)] p-4">
          <div className="h-full rounded-sm border border-[var(--color-subtle-border)] bg-[var(--color-project-preview-inner)]" />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{project.title}</h3>
          <p className="mt-3 min-h-20 text-sm leading-6 text-[var(--color-text-secondary)]">{project.summary}</p>
          <dl className="mt-5 space-y-2 text-sm">
            <div className="flex gap-4">
              <dt className="w-16 shrink-0 text-[var(--color-accent-primary)]">{labels.role}</dt>
              <dd className="text-[var(--color-text-secondary)]">{project.role}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-16 shrink-0 text-[var(--color-accent-primary)]">{labels.stack}</dt>
              <dd className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-16 shrink-0 text-[var(--color-accent-primary)]">{labels.impact}</dt>
              <dd className="text-[var(--color-text-secondary)]">{project.impact}</dd>
            </div>
          </dl>
          <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-4 text-sm font-medium text-[var(--color-accent-primary)]">
            <span>{labels.caseStudy}</span>
            <Icon icon={ArrowRight} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
