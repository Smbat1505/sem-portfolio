import { describe, expect, it } from "vitest";
import { getLocaleFromPathname, stripLocaleFromPathname, withLocalePath } from "./config";

describe("localized routing", () => {
  it("keeps the default English locale unprefixed", () => {
    expect(withLocalePath("/", "en")).toBe("/");
    expect(withLocalePath("/projects", "en")).toBe("/projects");
    expect(withLocalePath("/en/projects", "en")).toBe("/projects");
  });

  it("prefixes Russian routes", () => {
    expect(withLocalePath("/", "ru")).toBe("/ru");
    expect(withLocalePath("/projects", "ru")).toBe("/ru/projects");
    expect(withLocalePath("/en/projects", "ru")).toBe("/ru/projects");
  });

  it("detects and strips locale prefixes", () => {
    expect(getLocaleFromPathname("/projects")).toBe("en");
    expect(getLocaleFromPathname("/ru/projects")).toBe("ru");
    expect(stripLocaleFromPathname("/en/projects")).toBe("/projects");
    expect(stripLocaleFromPathname("/ru")).toBe("/");
  });
});
