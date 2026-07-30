"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { isThemePreference, themePreferences, themeStorageKey, type ThemePreference } from "@/src/shared/config/theme";
import { getDictionary, type Locale } from "@/src/shared/i18n";
import { cn } from "@/src/shared/lib/cn";
import { Icon } from "@/src/shared/ui";

const themeIcons = {
  system: Monitor,
  light: Sun,
  dark: Moon,
} as const;

const themeChangeEvent = "sem-portfolio:theme-change";

function applyTheme(preference: ThemePreference) {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const resolvedTheme = preference === "system" ? systemTheme : preference;

  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.style.colorScheme = resolvedTheme;
}

function getThemeSnapshot(): ThemePreference {
  const preference = document.documentElement.dataset.themePreference ?? null;
  return isThemePreference(preference) ? preference : "system";
}

function getServerThemeSnapshot(): ThemePreference {
  return "system";
}

function subscribeToTheme(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleThemeChange = () => callback();
  const handleSystemThemeChange = () => {
    if (getThemeSnapshot() === "system") {
      applyTheme("system");
      callback();
    }
  };

  window.addEventListener(themeChangeEvent, handleThemeChange);
  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener(themeChangeEvent, handleThemeChange);
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
}

export function ThemeSwitch({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const dictionary = getDictionary(locale);
  const preference = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  const selectTheme = (nextPreference: ThemePreference) => {
    window.localStorage.setItem(themeStorageKey, nextPreference);
    applyTheme(nextPreference);
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  return (
    <div
      role="radiogroup"
      aria-label={dictionary.preferences.theme}
      className={cn(
        "grid grid-cols-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-control-track)] p-1",
        compact ? "gap-0.5" : "gap-1",
      )}
    >
      {themePreferences.map((theme) => {
        const ThemeIcon = themeIcons[theme];
        const label = dictionary.preferences[theme];
        const selected = theme === preference;

        return (
          <button
            key={theme}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={label}
            title={compact ? label : undefined}
            onClick={() => selectTheme(theme)}
            className={cn(
              "inline-flex min-h-11 items-center justify-center gap-2 rounded-[calc(var(--radius-md)-2px)] px-3 text-sm font-medium transition-[background,color,box-shadow] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-primary)]",
              compact ? "min-w-11 px-0" : "w-full",
              selected
                ? "bg-[var(--color-control-active)] text-[var(--color-text-primary)] shadow-[var(--shadow-control)]"
                : "text-[var(--color-text-muted)] hover:bg-[var(--color-control-hover)] hover:text-[var(--color-text-primary)]",
            )}
          >
            <Icon icon={ThemeIcon} className="size-4 shrink-0" />
            {!compact ? <span>{label}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
