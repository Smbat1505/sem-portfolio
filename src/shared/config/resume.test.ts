import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { locales } from "../i18n/config";
import { resumePdfPath } from "./resume";

describe.each(locales)("resume PDF (%s)", (locale) => {
  it("points to an existing file in public", () => {
    expect(existsSync(join(process.cwd(), "public", resumePdfPath(locale)))).toBe(true);
  });
});

it("serves a different file for every locale", () => {
  const paths = locales.map((locale) => resumePdfPath(locale));
  expect(new Set(paths).size).toBe(locales.length);
});
