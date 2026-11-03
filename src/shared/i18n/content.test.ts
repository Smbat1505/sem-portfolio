import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import type { CaseStudy } from "../../entities/case-study";
import { caseStudySchema } from "../../entities/case-study/case-study.model";
import { capabilitySchema } from "../../entities/capability/capability.model";
import { projectSchema } from "../../entities/project/project.model";
import { locales, type Locale } from "./config";
import { filterLocalizedProjects, getLocalizedCapability, getLocalizedContent, localizedContent } from "./content";

const projectsOf = (locale: Locale) => localizedContent[locale].projects;
const defaultCapabilityId = "frontend-architecture";

describe.each(locales)("localized content (%s)", (locale) => {
  it("keeps projects valid against the schema", () => {
    for (const project of projectsOf(locale)) {
      expect(() => projectSchema.parse(project)).not.toThrow();
    }
  });

  it("keeps project slugs unique", () => {
    const slugs = projectsOf(locale).map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("returns all projects for the all filter", () => {
    expect(filterLocalizedProjects(locale, "all")).toHaveLength(projectsOf(locale).length);
  });

  it("returns only matching category projects", () => {
    const filtered = filterLocalizedProjects(locale, "automation");
    expect(filtered.every((project) => project.category === "automation")).toBe(true);
  });

  it("keeps capabilities valid and connected to evidence and work", () => {
    for (const capability of localizedContent[locale].capabilities) {
      expect(() => capabilitySchema.parse(capability)).not.toThrow();
      expect(capability.evidence).toBeTruthy();
      expect(capability.relatedProjects.length).toBeGreaterThan(0);
    }
  });

  it("contains the default capability", () => {
    expect(getLocalizedCapability(locale, defaultCapabilityId).id).toBe(defaultCapabilityId);
  });

  it("references existing project titles in capabilities", () => {
    const titles = new Set(projectsOf(locale).map((project) => project.title));
    for (const capability of localizedContent[locale].capabilities) {
      for (const name of capability.relatedProjects) {
        expect(titles.has(name), `${locale}: "${name}" in "${capability.id}"`).toBe(true);
      }
    }
  });

  it("keeps case studies valid against the schema", () => {
    for (const caseStudy of localizedContent[locale].caseStudies) {
      expect(() => caseStudySchema.parse(caseStudy)).not.toThrow();
    }
  });

  it("points media to existing files in public", () => {
    const { projects } = getLocalizedContent(locale);
    const caseStudies: CaseStudy[] = getLocalizedContent(locale).caseStudies;
    const sources = [
      ...projects.map((project) => project.preview?.src),
      ...caseStudies.flatMap((caseStudy) => [caseStudy.preview?.src, caseStudy.demo?.src]),
    ].filter((src): src is string => Boolean(src));

    for (const src of sources) {
      expect(existsSync(join(process.cwd(), "public", src)), `${locale}: missing public${src}`).toBe(true);
    }
  });
});

it("has the same project slugs in every locale", () => {
  const slugsOf = (locale: Locale) => projectsOf(locale).map((project) => project.slug);
  expect(slugsOf("ru")).toEqual(slugsOf("en"));
});
