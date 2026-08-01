"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPathname, getLocalizedContent } from "@/src/shared/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const content = getLocalizedContent(locale);

  return (
    <footer
      lang={locale}
      className="border-t border-[var(--color-border)] px-[var(--layout-page-padding)] py-8 text-sm text-[var(--color-text-muted)]"
    >
      <div className="mx-auto flex max-w-[var(--layout-page-max)] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>{content.footer}</p>
        <p>© 2026 SemAntony</p>
      </div>
    </footer>
  );
}
