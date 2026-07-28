import { describe, expect, it } from "vitest";
import { capabilities, defaultCapabilityId, getCapability } from "./capabilities.data";
describe("capability mapping", () => {
  it("returns the default capability", () => {
    expect(getCapability(defaultCapabilityId).id).toBe(defaultCapabilityId);
  });
  it("keeps each capability connected to evidence and work", () => {
    expect(capabilities.every((capability) => capability.evidence && capability.relatedProjects.length > 0)).toBe(true);
  });
});
