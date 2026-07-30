import type { Capability } from "@/src/entities/capability";
import type { Locale } from "@/src/shared/i18n";
import { Card, Tag } from "@/src/shared/ui";

const labels = {
  en: {
    eyebrow: "Delivery path",
    title: "Core capabilities work as one system",
    description: "The sequence stays readable here; project evidence below shows where each capability was applied.",
    supporting: "Supporting layer",
  },
  ru: {
    eyebrow: "Путь delivery",
    title: "Ключевые навыки работают как одна система",
    description: "Здесь — понятная последовательность, ниже — проектные доказательства применения каждого навыка.",
    supporting: "Поддерживающий слой",
  },
} satisfies Record<Locale, Record<string, string>>;

export function CapabilityOverview({ capabilities, locale }: { capabilities: Capability[]; locale: Locale }) {
  const core = capabilities.filter((capability) => capability.type === "core");
  const supporting = capabilities.filter((capability) => capability.type === "supporting");
  const copy = labels[locale];

  return (
    <Card className="overflow-hidden p-5 sm:p-7">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">
          {copy.eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)]">{copy.title}</h2>
        <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">{copy.description}</p>
      </div>

      <ol className="relative mt-9 grid gap-3 lg:grid-cols-5">
        <span
          aria-hidden="true"
          className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-[linear-gradient(90deg,transparent,var(--color-accent-primary),transparent)] opacity-55 lg:block"
        />
        {core.map((capability, index) => (
          <li
            key={capability.id}
            className="relative z-10 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-panel-glass)] p-4"
          >
            <span className="grid size-10 place-items-center rounded-full border border-[var(--color-border-active)] bg-[var(--color-bg-elevated)] font-mono text-xs text-[var(--color-accent-primary)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-sm font-semibold text-[var(--color-text-primary)]">{capability.title}</h3>
            <p className="mt-2 text-xs leading-5 text-[var(--color-text-secondary)]">{capability.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex flex-col gap-3 border-t border-[var(--color-border)] pt-5 sm:flex-row sm:items-center">
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          {copy.supporting}
        </p>
        <div className="flex flex-wrap gap-2">
          {supporting.map((capability) => (
            <Tag key={capability.id} className="bg-[var(--color-accent-ghost)]">
              {capability.title}
            </Tag>
          ))}
        </div>
      </div>
    </Card>
  );
}
