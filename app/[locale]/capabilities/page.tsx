import { notFound, permanentRedirect } from "next/navigation";
import { CapabilitiesPage } from "@/src/screens/capabilities";
import { createStaticPageMetadata } from "@/src/shared/config/seo";
import { defaultLocale, isLocale, withLocalePath } from "@/src/shared/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return isLocale(locale) ? createStaticPageMetadata(locale, "capabilities") : {};
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === defaultLocale) {
    permanentRedirect(withLocalePath("/capabilities", locale));
  }

  return <CapabilitiesPage locale={locale} />;
}
