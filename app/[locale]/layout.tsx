import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/src/shared/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div lang={locale} className="contents">
      {children}
    </div>
  );
}
