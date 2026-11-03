import { notFound, permanentRedirect } from "next/navigation";
import { HomePage } from "@/src/screens/home";
import { createStaticPageMetadata } from "@/src/shared/config/seo";
import { defaultLocale, isLocale, withLocalePath } from "@/src/shared/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return isLocale(locale) ? createStaticPageMetadata(locale, "home") : {};
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === defaultLocale) {
    permanentRedirect(withLocalePath("/", locale));
  }

  return <HomePage locale={locale} />;
}
