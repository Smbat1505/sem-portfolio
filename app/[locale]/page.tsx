import { notFound } from "next/navigation";
import { HomePage } from "@/src/screens/home";
import { isLocale } from "@/src/shared/i18n";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}
