import { describe, expect, it } from "vitest";
import { getCaseStudySlugs, locales } from "../i18n";
import { createRobots, createSitemap, createStaticPageMetadata, getLanguageAlternates, staticPagePaths } from "./seo";

describe("SEO configuration", () => {
  it("builds canonical and language alternate URLs", () => {
    const metadata = createStaticPageMetadata("ru", "projects");

    expect(metadata.alternates).toEqual({
      canonical: "https://semantony.com/ru/projects",
      languages: {
        en: "https://semantony.com/projects",
        ru: "https://semantony.com/ru/projects",
        "x-default": "https://semantony.com/projects",
      },
    });
  });

  it("includes every canonical localized page exactly once in the sitemap", () => {
    const sitemap = createSitemap();
    const expectedPageCount = locales.length * (Object.keys(staticPagePaths).length + getCaseStudySlugs().length);
    const urls = sitemap.map((entry) => entry.url);

    expect(sitemap).toHaveLength(expectedPageCount);
    expect(new Set(urls)).toHaveLength(expectedPageCount);
    expect(urls).toContain("https://semantony.com/");
    expect(urls).toContain("https://semantony.com/ru/projects/operations-console");
    expect(urls.some((url) => new URL(url).pathname.startsWith("/en"))).toBe(false);
  });

  it("allows public crawling and advertises the sitemap", () => {
    expect(createRobots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: "https://semantony.com/sitemap.xml",
      host: "https://semantony.com",
    });
  });

  it("uses unprefixed English as the x-default language alternate", () => {
    expect(getLanguageAlternates("/contact")["x-default"]).toBe("https://semantony.com/contact");
  });
});
