import { ArrowRight, Download } from "lucide-react";
import { defaultLocale, getDictionary, getLocalizedContent, type Locale, withLocalePath } from "@/src/shared/i18n";
import { cn } from "@/src/shared/lib/cn";
import { Button, Icon, SectionHeader } from "@/src/shared/ui";
import { ContactOrbitCta } from "@/src/widgets/contact-orbit-cta";
import { HomeSkillGraph } from "@/src/widgets/home-skill-graph";
import { ProjectGrid } from "@/src/widgets/project-grid";
import { ProofStrip } from "@/src/widgets/proof-strip";

export function HomePage({ locale = defaultLocale }: { locale?: Locale }) {
  const dictionary = getDictionary(locale);
  const content = getLocalizedContent(locale);

  return (
    <main
      lang={locale}
      className="mx-auto max-w-[var(--layout-page-max)] px-[var(--layout-page-padding)] py-10 xl:py-8"
    >
      <section className="mb-20 grid items-center gap-12 xl:min-h-[calc(100vh-8rem)] xl:grid-cols-[0.82fr_1.18fr] xl:gap-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--color-accent-primary)]">
            {dictionary.home.eyebrow}
          </p>
          <h1
            className={cn(
              "mt-8 max-w-[11ch] text-[clamp(3.1rem,4.7vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[var(--color-text-primary)]",
              locale === "en" && "xl:max-w-[9.6ch]",
            )}
          >
            {dictionary.home.title}
          </h1>
          <p className="mt-7 min-h-[5lh] max-w-2xl text-[length:var(--font-size-lead)] leading-[var(--line-body)] text-[var(--color-text-secondary)] sm:min-h-[4lh]">
            {dictionary.home.description}
          </p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:gap-6">
            <Button href={withLocalePath("/projects", locale)} variant="primary">
              {dictionary.common.viewCaseStudies} <Icon icon={ArrowRight} />
            </Button>
            <Button href={withLocalePath("/resume", locale)}>
              <Icon icon={Download} /> {dictionary.common.viewResume}
            </Button>
          </div>
        </div>
        <HomeSkillGraph capabilities={content.capabilities} locale={locale} />
      </section>
      <section className="space-y-10">
        <ProofStrip locale={locale} />
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            level={2}
            title={dictionary.home.selectedWorkTitle}
            description={dictionary.home.selectedWorkDescription}
          />
          <Button href={withLocalePath("/projects", locale)} variant="ghost" className="hidden md:inline-flex">
            {dictionary.common.viewAllProjects} <Icon icon={ArrowRight} />
          </Button>
        </div>
        <ProjectGrid projects={content.projects.slice(0, 3)} labels={content.projectsPage.cardLabels} locale={locale} />
      </section>
      <div className="mt-20 lg:mt-28">
        <ContactOrbitCta
          eyebrow={dictionary.home.contactEyebrow}
          title={dictionary.home.contactTitle}
          description={dictionary.home.contactDescription}
          action={dictionary.home.contactAction}
          href={withLocalePath("/contact", locale)}
        />
      </div>
    </main>
  );
}
