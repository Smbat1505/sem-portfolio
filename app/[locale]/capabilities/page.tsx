import { notFound } from "next/navigation";
import { CapabilitiesPage } from "@/src/screens/capabilities";
import { isLocale } from "@/src/shared/i18n";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <CapabilitiesPage locale={locale} />;
}
