import type { Capability } from "./capability.model";
export const capabilities: Capability[] = [
  {
    id: "product-delivery",
    title: "Product Delivery",
    description: "End-to-end delivery from product intent to shipped interface.",
    evidence: "Ships with scope clarity, feedback loops, and measurable outcomes.",
    relatedProjects: ["Social Platform", "Admin Console"],
    type: "core",
  },
  {
    id: "frontend-architecture",
    title: "Frontend Architecture",
    description: "Typed boundaries, reusable patterns, and predictable data flow.",
    evidence: "Defines scalable structure and regression-safe UI boundaries.",
    relatedProjects: ["Social Platform", "UI Kit Scroll Area"],
    type: "core",
  },
  {
    id: "ui-engineering",
    title: "UI Engineering",
    description: "Accessible, responsive interfaces with consistent states.",
    evidence: "Builds maintainable UI surfaces and component contracts.",
    relatedProjects: ["Admin Console", "UI Kit Scroll Area"],
    type: "core",
  },
  {
    id: "api-contracts",
    title: "API Contracts",
    description: "Stable client integration through typed and explicit contracts.",
    evidence: "Keeps API drift visible and adapts response data at boundaries.",
    relatedProjects: ["OAuth Flow", "Social Platform"],
    type: "core",
  },
  {
    id: "testing-ci",
    title: "Testing & CI",
    description: "Automated checks that protect product behavior and delivery flow.",
    evidence: "Covers critical paths with unit, smoke, and build gates.",
    relatedProjects: ["Automation Tool", "Social Platform"],
    type: "core",
  },
  {
    id: "performance",
    title: "Performance",
    description: "Rendering and interaction decisions that keep product surfaces fast.",
    evidence: "Balances UX quality with runtime and build constraints.",
    relatedProjects: ["Operations Console", "Admin Console"],
    type: "supporting",
  },
  {
    id: "accessibility",
    title: "Accessibility",
    description: "Keyboard, focus, semantic, and contrast-aware UI implementation.",
    evidence: "Uses accessible primitives and explicit interaction states.",
    relatedProjects: ["UI Kit Scroll Area", "Admin Console"],
    type: "supporting",
  },
  {
    id: "automation",
    title: "Automation",
    description: "Developer tooling and delivery automation for repeated workflows.",
    evidence: "Turns manual process into repeatable checks and feedback loops.",
    relatedProjects: ["Automation Tool"],
    type: "supporting",
  },
];
export const defaultCapabilityId = "frontend-architecture";
export function getCapability(id: string) {
  return capabilities.find((capability) => capability.id === id) ?? capabilities[0];
}
