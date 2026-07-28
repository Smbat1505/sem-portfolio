import type { ProofSignal } from "./proof-signal.model";
export const proofSignals: ProofSignal[] = [
  {
    id: "typed-systems",
    title: "Typed Systems",
    description: "TypeScript-first architecture for safer, scalable code.",
  },
  {
    id: "resilient",
    title: "Resilient by Default",
    description: "Defensive patterns, graceful states, and fault tolerance.",
  },
  {
    id: "product-thinking",
    title: "Product Thinking",
    description: "Outcomes over outputs, aligned with real user needs.",
  },
  {
    id: "ship-confidence",
    title: "Ship with Confidence",
    description: "Tested, documented, and ready for production.",
  },
];
export const sidebarProofSignals = [
  { title: "Typed contracts", description: "Type safety across service boundaries and schema validation." },
  { title: "Optimistic UI", description: "Responsive interfaces with rollback and background reconciliation." },
  { title: "CI gates", description: "Quality enforced via automated tests, linting, and policy checks." },
  { title: "Runtime verification", description: "Critical flows protected with smoke checks and structured evidence." },
];
