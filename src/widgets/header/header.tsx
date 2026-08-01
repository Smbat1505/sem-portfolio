"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LocaleSwitch } from "@/src/features/locale-switch";
import { ThemeSwitch } from "@/src/features/theme-switch";
import { navigationItems } from "@/src/shared/config/navigation";
import { getDictionary, getLocaleFromPathname, stripLocaleFromPathname, withLocalePath } from "@/src/shared/i18n";
import styles from "./header.module.css";

const mobileMenuId = "mobile-site-menu";

export function Header() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(currentLocale);
  const homeHref = withLocalePath("/", currentLocale);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  const closeMenu = (restoreFocus = false) => {
    setMenuOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const panel = menuPanelRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = panel ? Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)) : [];

    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => focusableElements[0]?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header lang={currentLocale} className={styles.header}>
        <div className="mx-auto flex min-h-[4.75rem] max-w-[var(--layout-page-max)] items-center justify-between gap-5 px-[var(--layout-page-padding)]">
          <Link
            href={homeHref}
            className="flex items-center gap-3 text-xl font-semibold text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-primary)]"
          >
            <span className="grid size-8 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-border-active)] text-[var(--color-accent-primary)]">
              S
            </span>
            SemAntony
          </Link>

          <nav
            aria-label={dictionary.preferences.mainNavigation}
            className="hidden items-center gap-5 text-sm text-[var(--color-text-secondary)] lg:flex xl:gap-8"
          >
            {navigationItems.map((item) => {
              const href = withLocalePath(item.href, currentLocale);
              const active = stripLocaleFromPathname(pathname) === item.href;

              return (
                <Link
                  key={item.href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className="inline-flex min-h-11 min-w-20 items-center justify-center rounded-[var(--radius-sm)] px-2 transition-colors hover:text-[var(--color-accent-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-primary)] aria-[current=page]:text-[var(--color-accent-primary)] xl:min-w-24"
                >
                  {dictionary.navigation[item.key]}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LocaleSwitch compact />
            <ThemeSwitch locale={currentLocale} compact />
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={mobileMenuId}
            aria-label={menuOpen ? dictionary.preferences.closeMenu : dictionary.preferences.openMenu}
            data-open={menuOpen}
            className={styles.menuButton}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuDisc} aria-hidden="true">
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div
            ref={menuPanelRef}
            id={mobileMenuId}
            role="dialog"
            aria-modal="true"
            aria-label={dictionary.preferences.mobileMenu}
            className={styles.mobilePanel}
          >
            <div className={styles.panelGlow} aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-[var(--layout-page-max)] px-[var(--layout-page-padding)] py-6">
              <nav aria-label={dictionary.preferences.mobileMenu}>
                <ul className="grid gap-2">
                  {navigationItems.map((item, index) => {
                    const href = withLocalePath(item.href, currentLocale);
                    const active = stripLocaleFromPathname(pathname) === item.href;

                    return (
                      <li key={item.href}>
                        <Link
                          href={href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => closeMenu()}
                          className={styles.mobileLink}
                        >
                          <span>{dictionary.navigation[item.key]}</span>
                          <span className={styles.mobileLinkIndex} aria-hidden="true">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-7 grid gap-5 border-t border-[var(--color-border)] pt-6">
                <section aria-labelledby="mobile-language-label">
                  <h2
                    id="mobile-language-label"
                    className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]"
                  >
                    {dictionary.preferences.language}
                  </h2>
                  <LocaleSwitch onSelect={() => closeMenu()} />
                </section>

                <section aria-labelledby="mobile-theme-label">
                  <h2
                    id="mobile-theme-label"
                    className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]"
                  >
                    {dictionary.preferences.theme}
                  </h2>
                  <ThemeSwitch locale={currentLocale} />
                </section>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {menuOpen ? (
        <button
          type="button"
          tabIndex={-1}
          aria-label={dictionary.preferences.closeMenu}
          className={styles.backdrop}
          onClick={() => closeMenu(true)}
        />
      ) : null}
    </>
  );
}
