import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Languages,
  Layers3,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { defaultLocale, getDictionary, type Locale, withLocalePath } from "@/src/shared/i18n";
import { Button, Card, Icon, SectionHeader, Tag } from "@/src/shared/ui";

export function ResumePage({ locale = defaultLocale }: { locale?: Locale }) {
  const dictionary = getDictionary(locale);
  const resume = dictionary.resume;

  return (
    <main className="mx-auto max-w-[var(--layout-page-max)] px-[var(--layout-page-padding)] py-16">
      <section className="grid gap-10 lg:grid-cols-[1fr_0.72fr]">
        <div>
          <SectionHeader eyebrow={resume.role} title={resume.title} description={resume.headline} />
          <p className="mt-7 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">{resume.description}</p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:gap-6">
            <Button href={withLocalePath("/contact", locale)} variant="primary">
              {dictionary.common.contactMe} <Icon icon={ArrowRight} />
            </Button>
            <span className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] px-5 text-sm font-medium text-[var(--color-text-muted)] opacity-70">
              <Icon icon={Download} /> {dictionary.common.pdfInNextVersion}
            </span>
          </div>
        </div>

        <Card className="relative overflow-hidden p-8">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:18px_18px]" />
          <div className="relative z-10">
            <div className="grid size-16 place-items-center rounded-[var(--radius-md)] border border-[var(--color-border-active)] bg-[rgb(125_211_176_/_0.1)] text-[var(--color-accent-primary)]">
              <Icon icon={FileText} className="size-7" />
            </div>
            <dl className="mt-8 space-y-5">
              {resume.metrics.map((metric) => (
                <div key={metric.label} className="border-b border-[var(--color-border)] pb-5 last:border-0 last:pb-0">
                  <dt className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-[var(--color-text-primary)]">{metric.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 border-t border-[var(--color-border)] pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">
                {resume.snapshotTitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {resume.snapshotItems.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-14 grid gap-5 md:grid-cols-3">
        {resume.impact.map((item) => (
          <Card key={item.label} className="p-6">
            <p className="text-3xl font-semibold text-[var(--color-accent-primary)]">{item.value}</p>
            <h2 className="mt-4 font-semibold text-[var(--color-text-primary)]">{item.label}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{item.description}</p>
          </Card>
        ))}
      </section>

      <section className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {resume.skillGroups.map((group) => (
          <Card key={group.title} className="p-6">
            <h2 className="font-semibold text-[var(--color-text-primary)]">{group.title}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </section>

      <section className="mt-14">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-border-active)] text-[var(--color-accent-primary)]">
            <Icon icon={Languages} className="size-5" />
          </div>
          <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">{resume.languagesTitle}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {resume.languages.map((language) => (
            <Card key={language.name} className="p-6">
              <h3 className="font-semibold text-[var(--color-text-primary)]">{language.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{language.level}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">
              {resume.projectEvidenceEyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)]">
              {resume.projectEvidenceTitle}
            </h2>
          </div>
          <Button href={withLocalePath("/projects", locale)} variant="ghost" className="px-0">
            {dictionary.common.viewAllProjects} <Icon icon={ArrowRight} />
          </Button>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {resume.projectEvidence.map((item) => (
            <Card key={item.project} className="p-6">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{item.project}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{item.focus}</p>
              <div className="mt-5 border-t border-[var(--color-border)] pt-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  {resume.projectEvidenceOutcomeLabel}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-primary)]">{item.outcome}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-10 xl:grid-cols-[1fr_380px]">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">{resume.experienceTitle}</h2>
          <div className="mt-6 space-y-5">
            {resume.experience.map((item) => (
              <Card key={item.period + item.role} className="p-7">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">
                  {item.period}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-primary)]">{item.role}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.company}</p>
                <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">{item.summary}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-accent-primary)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <aside className="xl:sticky xl:top-28 xl:self-start">
          <Card className="p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">{resume.principlesTitle}</h2>
            <div className="mt-6 divide-y divide-[var(--color-border)]">
              {resume.principles.map((principle) => (
                <div key={principle.title} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="font-semibold text-[var(--color-text-primary)]">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{principle.description}</p>
                </div>
              ))}
            </div>
            <Button href={withLocalePath("/projects", locale)} variant="ghost" className="mt-6 px-0">
              {dictionary.common.viewProofThroughProjects} <Icon icon={ArrowRight} />
            </Button>
          </Card>

          <Card className="mt-5 p-7">
            <div className="grid size-12 place-items-center rounded-[var(--radius-md)] border border-[var(--color-border-active)] bg-[rgb(125_211_176_/_0.1)] text-[var(--color-accent-primary)]">
              <Icon icon={Route} />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-[var(--color-text-primary)]">{resume.workingModelTitle}</h2>
            <div className="mt-5 space-y-4">
              {resume.workingModel.map((item) => (
                <div key={item.title}>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)]">
                    <Icon icon={CheckCircle2} className="size-4 text-[var(--color-accent-primary)]" />
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </section>

      <section className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="p-7">
          <div className="grid size-12 place-items-center rounded-[var(--radius-md)] border border-[var(--color-border-active)] bg-[rgb(125_211_176_/_0.1)] text-[var(--color-accent-primary)]">
            <Icon icon={Layers3} />
          </div>
          <h2 className="mt-5 text-2xl font-semibold text-[var(--color-text-primary)]">{resume.pdfReadyTitle}</h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">{resume.pdfReadyDescription}</p>
        </Card>
        <div className="grid gap-5 md:grid-cols-3">
          {resume.pdfReadyItems.map((item, index) => {
            const PdfIcon = [FileText, ShieldCheck, Sparkles][index] ?? FileText;

            return (
              <Card key={item.title} className="p-6">
                <div className="grid size-10 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-border-active)] text-[var(--color-accent-primary)]">
                  <Icon icon={PdfIcon} className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}
