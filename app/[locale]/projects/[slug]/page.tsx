import { notFound, permanentRedirect } from "next/navigation";
import { CaseStudyPage } from "@/src/screens/case-study";
import { createCaseStudyMetadata } from "@/src/shared/config/seo";
import { defaultLocale, getCaseStudySlugs, isLocale, locales, withLocalePath } from "@/src/shared/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) => getCaseStudySlugs().map((slug) => ({ locale, slug })));
}

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;

  return isLocale(locale) ? createCaseStudyMetadata(locale, slug) : {};
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === defaultLocale) {
    permanentRedirect(withLocalePath(`/projects/${slug}`, locale));
  }

  return <CaseStudyPage locale={locale} slug={slug} />;
}
