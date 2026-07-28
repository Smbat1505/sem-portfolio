import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import {
  defaultLocale,
  getLocalizedCaseStudy,
  getLocalizedContent,
  type Locale,
  withLocalePath,
} from "@/src/shared/i18n";
import { Button, Card, Icon, SectionHeader, Tag } from "@/src/shared/ui";

export function CaseStudyPage({ slug, locale = defaultLocale }: { slug: string; locale?: Locale }) {
  const content = getLocalizedContent(locale);
  const caseStudy = getLocalizedCaseStudy(locale, slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[var(--layout-page-max)] px-[var(--layout-page-padding)] py-16">
      <Button href={withLocalePath("/projects", locale)} variant="ghost" className="mb-10 px-0">
        <Icon icon={ArrowLeft} /> {content.caseStudiesPage.backToProjects}
      </Button>

      <section className="motion-enter grid gap-10 lg:grid-cols-[1fr_0.72fr]">
        <div>
          <SectionHeader eyebrow={caseStudy.eyebrow} title={caseStudy.title} description={caseStudy.summary} />
          <div className="mt-8 flex flex-wrap gap-2">
            {caseStudy.capabilities.map((capability) => (
              <Tag key={capability}>{capability}</Tag>
            ))}
          </div>
        </div>

        <Card className="relative overflow-hidden p-7">
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:18px_18px]" />
          <dl className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {[
              [content.caseStudiesPage.role, caseStudy.role],
              [content.caseStudiesPage.impact, caseStudy.impact],
              [content.caseStudiesPage.timeline, caseStudy.timeline],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-[var(--color-border)] pb-5 last:border-0 last:pb-0">
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{label}</dt>
                <dd className="mt-2 text-base font-semibold text-[var(--color-text-primary)]">{value}</dd>
              </div>
            ))}
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                {content.caseStudiesPage.stack}
              </dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {caseStudy.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </dd>
            </div>
          </dl>
        </Card>
      </section>

      <section className="motion-enter mt-14 grid gap-5 md:grid-cols-2">
        {Object.values(caseStudy.sections).map((section) => (
          <Card key={section.title} className="p-7">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">
              {content.caseStudiesPage.overview}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--color-text-primary)]">{section.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">{section.body}</p>
          </Card>
        ))}
      </section>

      <section className="motion-enter mt-14 grid gap-10 xl:grid-cols-[1fr_380px]">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">
            {content.caseStudiesPage.decisions}
          </h2>
          <div className="mt-6 grid gap-5">
            {caseStudy.decisions.map((decision, index) => (
              <Card key={decision.title} className="p-6">
                <div className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-border-active)] font-mono text-sm text-[var(--color-accent-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">{decision.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{decision.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <aside className="xl:sticky xl:top-28 xl:self-start">
          <Card className="p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">{content.caseStudiesPage.proof}</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-[var(--color-text-secondary)]">
              {caseStudy.proof.map((proof) => (
                <li key={proof} className="flex gap-3">
                  <Icon icon={CheckCircle2} className="mt-0.5 size-5 shrink-0 text-[var(--color-accent-primary)]" />
                  <span>{proof}</span>
                </li>
              ))}
            </ul>
          </Card>
        </aside>
      </section>

      <Card className="motion-enter mt-14 p-7 md:flex md:items-center md:justify-between md:gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">
            {content.caseStudiesPage.nextStepTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)]">
            {content.caseStudiesPage.nextStepDescription}
          </p>
        </div>
        <Button href={withLocalePath("/contact", locale)} variant="primary" className="mt-6 shrink-0 md:mt-0">
          {content.caseStudiesPage.contact} <Icon icon={ArrowRight} />
        </Button>
      </Card>
    </main>
  );
}
