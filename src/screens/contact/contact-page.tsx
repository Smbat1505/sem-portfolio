import { ArrowRight, Download, Mail } from "lucide-react";
import { contactLinks, primaryEmail } from "@/src/entities/contact";
import { defaultLocale, getDictionary, type Locale, withLocalePath } from "@/src/shared/i18n";
import {
  Button,
  Card,
  Icon,
  PortfolioGithubIcon,
  PortfolioLinkedinIcon,
  PortfolioTelegramIcon,
  SectionHeader,
} from "@/src/shared/ui";

const contactIcons = {
  email: Mail,
  github: PortfolioGithubIcon,
  linkedin: PortfolioLinkedinIcon,
  telegram: PortfolioTelegramIcon,
} as const;

export function ContactPage({ locale = defaultLocale }: { locale?: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto max-w-[var(--layout-page-max)] px-[var(--layout-page-padding)] py-16">
      <section className="grid gap-10 lg:grid-cols-[1fr_0.72fr]">
        <div>
          <SectionHeader
            eyebrow={dictionary.contact.eyebrow}
            title={dictionary.contact.title}
            description={dictionary.contact.description}
          />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={primaryEmail.href} variant="primary">
              <Icon icon={Mail} /> {dictionary.common.emailMe}
            </Button>
            <Button href={withLocalePath("/resume", locale)}>
              <Icon icon={Download} /> {dictionary.common.viewResume}
            </Button>
          </div>
        </div>
        <Card className="p-8">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">
            {dictionary.contact.availabilityEyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold text-[var(--color-text-primary)]">
            {dictionary.contact.availabilityTitle}
          </h2>
          <div className="mt-7 space-y-4 text-[var(--color-text-secondary)]">
            {dictionary.contact.availabilityItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </Card>
      </section>
      <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {contactLinks.map((link) => {
          const IconComponent = contactIcons[link.id as keyof typeof contactIcons];
          return (
            <a
              key={link.id}
              href={link.href}
              className="group rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-accent-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-primary)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="grid size-12 place-items-center rounded-[var(--radius-md)] bg-[var(--color-accent-tint)] text-[var(--color-accent-primary)]">
                  <Icon icon={IconComponent} />
                </div>
                <Icon
                  icon={ArrowRight}
                  className="text-[var(--color-accent-primary)] transition-transform group-hover:translate-x-1"
                />
              </div>
              <h3 className="mt-5 font-semibold text-[var(--color-text-primary)]">{link.label}</h3>
            </a>
          );
        })}
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">{dictionary.contact.bestFitTitle}</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {dictionary.contact.bestFit.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
