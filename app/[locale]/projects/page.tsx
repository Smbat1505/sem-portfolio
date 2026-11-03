import { notFound, permanentRedirect } from "next/navigation";
import { ProjectsPage } from "@/src/screens/projects";
import { createStaticPageMetadata } from "@/src/shared/config/seo";
import { defaultLocale, isLocale, withLocalePath } from "@/src/shared/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return isLocale(locale) ? createStaticPageMetadata(locale, "projects") : {};
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === defaultLocale) {
    permanentRedirect(withLocalePath("/projects", locale));
  }

  return <ProjectsPage locale={locale} />;
}
