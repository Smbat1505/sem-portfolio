"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getDictionary, getLocaleFromPathname, locales, withLocalePath } from "@/src/shared/i18n";
import { cn } from "@/src/shared/lib/cn";

const scrollStorageKey = "sem-portfolio:locale-switch-scroll-y";

export function LocaleSwitch({ compact = false, onSelect }: { compact?: boolean; onSelect?: () => void }) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(currentLocale);

  useEffect(() => {
    document.documentElement.lang = currentLocale;

    const storedScroll = window.sessionStorage.getItem(scrollStorageKey);
    if (!storedScroll) return;

    window.sessionStorage.removeItem(scrollStorageKey);
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: Number(storedScroll), behavior: "instant" });
    });
  }, [currentLocale, pathname]);

  return (
    <div
      role="group"
      aria-label={dictionary.preferences.language}
      className={cn(
        "grid grid-cols-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-control-track)] p-1",
        compact ? "gap-0.5" : "gap-1",
      )}
    >
      {locales.map((locale) => {
        const selected = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={withLocalePath(pathname, locale)}
            scroll={false}
            aria-current={selected ? "page" : undefined}
            hrefLang={locale}
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-[calc(var(--radius-md)-2px)] px-4 font-mono text-xs font-semibold tracking-[0.08em] transition-[background,color,box-shadow] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-primary)]",
              compact ? "min-w-11 px-2" : "w-full",
              selected
                ? "bg-[var(--color-control-active)] text-[var(--color-text-primary)] shadow-[var(--shadow-control)]"
                : "text-[var(--color-text-muted)] hover:bg-[var(--color-control-hover)] hover:text-[var(--color-text-primary)]",
            )}
            onClick={() => {
              window.sessionStorage.setItem(scrollStorageKey, String(window.scrollY));
              onSelect?.();
            }}
          >
            {dictionary.locale[locale]}
          </Link>
        );
      })}
    </div>
  );
}
