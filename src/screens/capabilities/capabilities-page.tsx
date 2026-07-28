import { defaultLocale, getLocalizedContent, type Locale } from "@/src/shared/i18n";
import { Card, SectionHeader, Tag } from "@/src/shared/ui";
import { CapabilityOverview } from "@/src/widgets/capability-overview";

export function CapabilitiesPage({ locale = defaultLocale }: { locale?: Locale } = {}) {
  const content = getLocalizedContent(locale);

  return (
    <main className="mx-auto max-w-[var(--layout-page-max)] px-[var(--layout-page-padding)] py-16">
      <section className="space-y-10">
        <SectionHeader title={content.capabilitiesPage.title} description={content.capabilitiesPage.description} />
        <CapabilityOverview capabilities={content.capabilities} locale={locale} />
        <Card className="overflow-hidden">
          <div className="hidden grid-cols-[0.7fr_1.35fr_1fr] border-b border-[var(--color-border)] px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)] md:grid">
            <span>{content.capabilitiesPage.tableHeaders.capability}</span>
            <span>{content.capabilitiesPage.tableHeaders.evidence}</span>
            <span>{content.capabilitiesPage.tableHeaders.relatedWork}</span>
          </div>
          {content.capabilities.map((capability) => (
            <div
              key={capability.id}
              className="grid gap-4 border-b border-[var(--color-border)] px-6 py-5 last:border-b-0 md:grid-cols-[0.7fr_1.35fr_1fr]"
            >
              <h3 className="font-semibold text-[var(--color-text-primary)]">{capability.title}</h3>
              <p className="text-sm leading-6 text-[var(--color-text-secondary)]">{capability.evidence}</p>
              <div className="flex flex-wrap gap-2">
                {capability.relatedProjects.map((project) => (
                  <Tag key={project}>{project}</Tag>
                ))}
              </div>
            </div>
          ))}
        </Card>
      </section>
    </main>
  );
}
