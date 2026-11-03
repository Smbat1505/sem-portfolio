import type { Locale } from "@/src/shared/i18n/config";

const resumePdfPaths: Record<Locale, string> = {
  en: "/resume/smbat-antonian-cv-en.pdf",
  ru: "/resume/smbat-antonian-cv-ru.pdf",
};

export const resumePdfPath = (locale: Locale): string => resumePdfPaths[locale];
