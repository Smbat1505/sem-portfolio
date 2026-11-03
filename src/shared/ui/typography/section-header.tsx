import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  level = 1,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  level?: 1 | 2;
}) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent-primary)]">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-[length:var(--font-size-section)] font-semibold leading-[var(--line-title)] text-[var(--color-text-primary)]">
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 text-lg leading-[var(--line-body)] text-[var(--color-text-secondary)]">{description}</p>
      ) : null}
    </div>
  );
}
