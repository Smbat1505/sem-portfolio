export const themePreferences = ["system", "light", "dark"] as const;

export type ThemePreference = (typeof themePreferences)[number];

export const themeStorageKey = "sem-portfolio:theme";

export function isThemePreference(value: string | null): value is ThemePreference {
  return themePreferences.includes(value as ThemePreference);
}
