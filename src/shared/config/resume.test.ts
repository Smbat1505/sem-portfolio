import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { resumePdfPath } from "./resume";

describe("resume PDF", () => {
  it("points to an existing file in public", () => {
    expect(existsSync(join(process.cwd(), "public", resumePdfPath))).toBe(true);
  });
});
