"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getDictionary, getLocaleFromPathname, locales, withLocalePath } from "@/src/shared/i18n";

const scrollStorageKey = "sem-portfolio:locale-switch-scroll-y";

export function LocaleSwitch() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(currentLocale);

  useEffect(() => {
    const storedScroll = window.sessionStorage.getItem(scrollStorageKey);
    if (!storedScroll) return;

    window.sessionStorage.removeItem(scrollStorageKey);
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: Number(storedScroll), behavior: "instant" });
    });
  }, [pathname]);

  return (
    <div className="w-24 whitespace-nowrap rounded-[var(--radius-sm)] border border-[var(--color-border)] px-3 py-2 text-center font-mono text-xs text-[var(--color-text-secondary)]">
      {locales.map((locale, index) => (
        <span key={locale}>
          <Link
            href={withLocalePath(pathname, locale)}
            scroll={false}
            aria-current={locale === currentLocale ? "true" : undefined}
            className={
              locale === currentLocale
                ? "text-[var(--color-accent-primary)]"
                : "hover:text-[var(--color-accent-primary)]"
            }
            onClick={() => {
              window.sessionStorage.setItem(scrollStorageKey, String(window.scrollY));
            }}
          >
            {dictionary.locale[locale]}
          </Link>
          {index < locales.length - 1 ? <span aria-hidden="true"> / </span> : null}
        </span>
      ))}
    </div>
  );
}
