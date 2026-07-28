import { describe, expect, it } from "vitest";
import { filterProjects, projects } from "./projects.data";
describe("project filtering", () => {
  it("returns all projects for all filter", () => {
    expect(filterProjects("all")).toHaveLength(projects.length);
  });
  it("returns only matching category projects", () => {
    expect(filterProjects("automation").every((project) => project.category === "automation")).toBe(true);
  });
});
