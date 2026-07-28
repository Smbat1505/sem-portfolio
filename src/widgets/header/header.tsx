"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LocaleSwitch } from "@/src/features/locale-switch";
import { navigationItems } from "@/src/shared/config/navigation";
import { getDictionary, getLocaleFromPathname, stripLocaleFromPathname, withLocalePath } from "@/src/shared/i18n";

export function Header() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(currentLocale);
  const homeHref = withLocalePath("/", currentLocale);

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[rgb(17_19_18_/_0.86)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[var(--layout-page-max)] items-center justify-between px-[var(--layout-page-padding)] py-5">
        <Link
          href={homeHref}
          className="flex items-center gap-3 text-xl font-semibold text-[var(--color-text-primary)]"
        >
          <span className="grid size-8 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-border-active)] text-[var(--color-accent-primary)]">
            S
          </span>
          Semen
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 text-sm text-[var(--color-text-secondary)] md:flex"
        >
          {navigationItems.map((item) => {
            const href = withLocalePath(item.href, currentLocale);
            const active = stripLocaleFromPathname(pathname) === item.href;

            return (
              <Link
                key={item.href}
                href={href}
                aria-current={active ? "page" : undefined}
                className="inline-flex min-w-24 justify-center transition-colors hover:text-[var(--color-accent-primary)] aria-[current=page]:text-[var(--color-accent-primary)]"
              >
                {dictionary.navigation[item.key]}
              </Link>
            );
          })}
        </nav>
        <LocaleSwitch />
      </div>
      <nav
        aria-label="Mobile navigation"
        className="mx-auto flex max-w-[var(--layout-page-max)] gap-2 overflow-x-auto px-[var(--layout-page-padding)] pb-3 text-sm text-[var(--color-text-secondary)] md:hidden"
      >
        {navigationItems.map((item) => {
          const href = withLocalePath(item.href, currentLocale);
          const active = stripLocaleFromPathname(pathname) === item.href;

          return (
            <Link
              key={item.href}
              href={href}
              aria-current={active ? "page" : undefined}
              className="shrink-0 rounded-full border border-[var(--color-border)] px-4 py-2 transition-colors hover:border-[var(--color-border-active)] hover:text-[var(--color-accent-primary)] aria-[current=page]:border-[var(--color-accent-primary)] aria-[current=page]:text-[var(--color-accent-primary)]"
            >
              {dictionary.navigation[item.key]}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
