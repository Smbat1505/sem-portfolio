import { ProjectFilter } from "@/src/features/project-filter";
import { defaultLocale, getLocalizedContent, type Locale } from "@/src/shared/i18n";
import { Card, SectionHeader } from "@/src/shared/ui";

export function ProjectsPage({ locale = defaultLocale }: { locale?: Locale } = {}) {
  const content = getLocalizedContent(locale);

  return (
    <main className="mx-auto max-w-[var(--layout-page-max)] px-[var(--layout-page-padding)] py-16">
      <div className="grid gap-10 xl:grid-cols-[1fr_360px]">
        <section className="space-y-10">
          <SectionHeader title={content.projectsPage.title} description={content.projectsPage.description} />
          <ProjectFilter locale={locale} />
        </section>
        <aside className="xl:sticky xl:top-28 xl:self-start">
          <Card className="p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">
              {content.projectsPage.proofTitle}
            </h2>
            <div className="mt-6 divide-y divide-[var(--color-border)]">
              {content.sidebarProofSignals.map((signal) => (
                <div key={signal.title} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="font-semibold text-[var(--color-text-primary)]">{signal.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{signal.description}</p>
                </div>
              ))}
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-6 text-center">
              {content.projectsPage.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold text-[var(--color-accent-primary)]">{stat.value}</dt>
                  <dd className="text-xs text-[var(--color-text-muted)]">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </aside>
      </div>
    </main>
  );
}
