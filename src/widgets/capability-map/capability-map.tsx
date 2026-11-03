import type { CSSProperties } from "react";
import { defaultLocale, getLocalizedContent, type Locale } from "@/src/shared/i18n";
import {
  Card,
  Icon,
  PortfolioApiContractsIcon,
  PortfolioFrontendArchitectureIcon,
  PortfolioProductDeliveryIcon,
  PortfolioTestingCiIcon,
  PortfolioUiEngineeringIcon,
} from "@/src/shared/ui";

const graphNodes = [
  { id: "product-delivery", x: 50, y: 10, icon: PortfolioProductDeliveryIcon },
  { id: "frontend-architecture", x: 17, y: 42, icon: PortfolioFrontendArchitectureIcon },
  { id: "ui-engineering", x: 83, y: 42, icon: PortfolioUiEngineeringIcon },
  { id: "testing-ci", x: 28, y: 82, icon: PortfolioTestingCiIcon },
  { id: "api-contracts", x: 72, y: 82, icon: PortfolioApiContractsIcon },
] as const;

const graphLines = [
  [50, 22, 50, 46],
  [50, 46, 17, 42],
  [50, 46, 83, 42],
  [50, 46, 28, 82],
  [50, 46, 72, 82],
] as const;

const mobileNodePositions: Record<string, { x: number; y: number }> = {
  "product-delivery": { x: 50, y: 10 },
  "frontend-architecture": { x: 30, y: 39 },
  "ui-engineering": { x: 70, y: 39 },
  "testing-ci": { x: 30, y: 78 },
  "api-contracts": { x: 70, y: 78 },
};

export function CapabilityMap({ compact = false, locale = defaultLocale }: { compact?: boolean; locale?: Locale }) {
  const content = getLocalizedContent(locale);
  const capabilityMap = new Map(content.capabilities.map((capability) => [capability.id, capability]));

  return (
    <Card className="relative min-h-[600px] overflow-hidden p-5 sm:p-6 lg:min-h-[680px]">
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute inset-x-10 top-20 h-48 rounded-full bg-[radial-gradient(circle,var(--color-accent-tint),transparent_68%)] blur-2xl" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">
            {content.capabilitiesPage.graph.previewEyebrow}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-[var(--color-text-primary)]">
            {content.capabilitiesPage.graph.previewTitle}
          </h2>
        </div>
        <span className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-xs text-[var(--color-text-muted)]">
          {content.capabilitiesPage.graph.previewBadge}
        </span>
      </div>

      <div className="relative z-10 mt-8 h-[520px] sm:h-[560px] lg:h-[590px]">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {graphLines.map(([x1, y1, x2, y2], index) => (
            <path
              key={index}
              d={`M ${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`}
              fill="none"
              stroke="var(--color-accent-primary)"
              strokeOpacity="0.58"
              strokeWidth="0.35"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-[58%] grid size-20 sm:top-[46%] sm:size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[22px] border border-[var(--color-border-active)] bg-[linear-gradient(145deg,var(--color-accent-tint),var(--color-panel-glass))] text-3xl font-semibold text-[var(--color-accent-primary)] shadow-[var(--shadow-card)]">
          S
        </div>

        {graphNodes.map((node) => {
          const capability = capabilityMap.get(node.id);
          if (!capability) return null;
          return (
            <div
              key={node.id}
              className="absolute left-[var(--node-x-mobile)] top-[var(--node-y-mobile)] w-36 -translate-x-1/2 -translate-y-1/2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-panel-glass)] p-3 shadow-[var(--shadow-card)] backdrop-blur transition-colors hover:border-[var(--color-accent-primary)] sm:left-[var(--node-x)] sm:top-[var(--node-y)] sm:w-[min(15.5rem,44vw)] sm:p-4"
              style={
                {
                  "--node-x": `${node.x}%`,
                  "--node-y": `${node.y}%`,
                  "--node-x-mobile": `${mobileNodePositions[node.id].x}%`,
                  "--node-y-mobile": `${mobileNodePositions[node.id].y}%`,
                } as CSSProperties
              }
            >
              <div className="mb-2 grid size-8 sm:mb-3 sm:size-9 place-items-center rounded-full border border-[var(--color-border-active)] text-[var(--color-accent-primary)]">
                <Icon icon={node.icon} />
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] sm:text-base">
                {capability.title}
              </h3>
              {!compact ? (
                <p className="mt-2 text-xs leading-5 text-[var(--color-text-secondary)]">{capability.description}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
