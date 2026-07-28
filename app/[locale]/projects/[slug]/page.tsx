import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/src/screens/case-study";
import { getCaseStudySlugs, isLocale, locales } from "@/src/shared/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) => getCaseStudySlugs().map((slug) => ({ locale, slug })));
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <CaseStudyPage locale={locale} slug={slug} />;
}
