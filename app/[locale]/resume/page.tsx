import { notFound } from "next/navigation";
import { ResumePage } from "@/src/screens/resume";
import { createStaticPageMetadata } from "@/src/shared/config/seo";
import { isLocale } from "@/src/shared/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return isLocale(locale) ? createStaticPageMetadata(locale, "resume") : {};
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <ResumePage locale={locale} />;
}
