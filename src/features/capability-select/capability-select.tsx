"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import {
  defaultLocale,
  getLocalizedCapability,
  getLocalizedContent,
  type Locale,
  withLocalePath,
} from "@/src/shared/i18n";
import {
  Button,
  Card,
  Icon,
  PortfolioAccessibilityIcon,
  PortfolioApiContractsIcon,
  PortfolioAutomationIcon,
  PortfolioFrontendArchitectureIcon,
  PortfolioPerformanceIcon,
  PortfolioProductDeliveryIcon,
  PortfolioTestingCiIcon,
  PortfolioUiEngineeringIcon,
  Tag,
} from "@/src/shared/ui";

const defaultCapabilityId = "frontend-architecture";

const iconMap = {
  "product-delivery": PortfolioProductDeliveryIcon,
  "frontend-architecture": PortfolioFrontendArchitectureIcon,
  "ui-engineering": PortfolioUiEngineeringIcon,
  "api-contracts": PortfolioApiContractsIcon,
  "testing-ci": PortfolioTestingCiIcon,
  performance: PortfolioPerformanceIcon,
  accessibility: PortfolioAccessibilityIcon,
  automation: PortfolioAutomationIcon,
} as const;

const nodePositions: Record<string, { x: number; y: number }> = {
  "product-delivery": { x: 50, y: 12 },
  "frontend-architecture": { x: 50, y: 42 },
  "ui-engineering": { x: 18, y: 29 },
  "api-contracts": { x: 82, y: 29 },
  "testing-ci": { x: 18, y: 71 },
  performance: { x: 31, y: 90 },
  accessibility: { x: 69, y: 90 },
  automation: { x: 82, y: 71 },
};

const graphEdges = [
  [50, 22, 50, 42],
  [50, 42, 18, 29],
  [50, 42, 82, 29],
  [50, 42, 18, 71],
  [50, 42, 31, 90],
  [50, 42, 69, 90],
  [50, 42, 82, 71],
] as const;

const mobileNodePositions: Record<string, { x: number; y: number }> = {
  "product-delivery": { x: 50, y: 8 },
  "frontend-architecture": { x: 50, y: 22 },
  "ui-engineering": { x: 28, y: 36 },
  "api-contracts": { x: 72, y: 50 },
  "testing-ci": { x: 28, y: 64 },
  automation: { x: 72, y: 78 },
  performance: { x: 25, y: 92 },
  accessibility: { x: 75, y: 92 },
};

export function CapabilitySelect({ locale = defaultLocale }: { locale?: Locale }) {
  const [selectedId, setSelectedId] = useState(defaultCapabilityId);
  const content = getLocalizedContent(locale);
  const selected = getLocalizedCapability(locale, selectedId);
  const selectedIcon = iconMap[selected.id as keyof typeof iconMap] ?? PortfolioFrontendArchitectureIcon;
  const selectedProjects = useMemo(() => selected.relatedProjects, [selected.relatedProjects]);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.25fr_0.95fr]">
      <Card className="relative min-h-[640px] overflow-hidden p-5 sm:p-6 lg:min-h-[700px]">
        <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute inset-x-14 top-20 h-64 rounded-full bg-[radial-gradient(circle,var(--color-accent-tint),transparent_70%)] blur-2xl" />
        <div className="relative z-10 flex items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">
            {content.capabilitiesPage.graph.interactiveEyebrow}
          </p>
          <span className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-xs text-[var(--color-text-muted)]">
            {content.capabilitiesPage.graph.interactiveBadge}
          </span>
        </div>

        <div className="relative z-10 mt-8 h-[660px] sm:h-[590px] lg:h-[610px]">
          <svg
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full sm:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {graphEdges.map(([x1, y1, x2, y2], index) => (
              <path
                key={index}
                d={
                  "M " +
                  x1 +
                  " " +
                  y1 +
                  " C " +
                  x1 +
                  " " +
                  (y1 + y2) / 2 +
                  ", " +
                  x2 +
                  " " +
                  (y1 + y2) / 2 +
                  ", " +
                  x2 +
                  " " +
                  y2
                }
                fill="none"
                stroke="var(--color-accent-primary)"
                strokeOpacity="0.45"
                strokeWidth="0.32"
                strokeDasharray={index > 2 ? "2 2" : undefined}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {content.capabilities.map((capability) => {
            const position = nodePositions[capability.id];
            const mobilePosition = mobileNodePositions[capability.id];
            const NodeIcon = iconMap[capability.id as keyof typeof iconMap] ?? PortfolioAutomationIcon;
            const active = selectedId === capability.id;
            return (
              <button
                key={capability.id}
                type="button"
                onClick={() => setSelectedId(capability.id)}
                className="absolute left-[var(--node-x-mobile)] top-[var(--node-y-mobile)] w-[8.8rem] -translate-x-1/2 -translate-y-1/2 rounded-[var(--radius-md)] border bg-[var(--color-panel-glass)] p-3 text-left shadow-[var(--shadow-card)] backdrop-blur transition-[border-color,background,transform] hover:border-[var(--color-accent-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-primary)] sm:left-[var(--node-x)] sm:top-[var(--node-y)] sm:w-[min(14.5rem,42vw)] sm:p-4"
                style={
                  {
                    "--node-x": position.x + "%",
                    "--node-y": position.y + "%",
                    "--node-x-mobile": mobilePosition.x + "%",
                    "--node-y-mobile": mobilePosition.y + "%",
                    borderColor: active ? "var(--color-accent-primary)" : "var(--color-border)",
                    background: active ? "var(--color-accent-tint)" : undefined,
                  } as CSSProperties
                }
                aria-pressed={active}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[var(--color-border-active)] text-[var(--color-accent-primary)] sm:size-9">
                    <Icon icon={NodeIcon} />
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">{capability.title}</span>
                </div>
              </button>
            );
          })}
        </div>
      </Card>

      <Card className="p-7">
        <div className="grid size-20 place-items-center rounded-full border border-[var(--color-border-active)] bg-[var(--color-accent-tint)] text-[var(--color-accent-primary)]">
          <Icon icon={selectedIcon} className="size-8" />
        </div>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">
          {content.capabilitiesPage.graph.selectedEyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[var(--color-text-primary)]">{selected.title}</h2>
        <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">{selected.description}</p>
        <ul className="mt-7 space-y-3 text-[var(--color-text-secondary)]">
          {content.capabilitiesPage.graph.selectedChecklist.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <Icon icon={CheckCircle2} className="text-[var(--color-accent-primary)]" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 border-t border-[var(--color-border)] pt-6">
          <p className="text-sm leading-6 text-[var(--color-text-secondary)]">{selected.evidence}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {selectedProjects.map((project) => (
              <Tag key={project}>{project}</Tag>
            ))}
          </div>
        </div>
        <Button href={withLocalePath("/projects", locale)} variant="ghost" className="mt-8 px-0">
          {content.capabilitiesPage.graph.exploreCaseStudies} <Icon icon={ArrowUpRight} />
        </Button>
      </Card>
    </div>
  );
}
