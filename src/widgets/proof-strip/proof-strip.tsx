import { Boxes, CircleUserRound, Rocket, ShieldCheck } from "lucide-react";
import { defaultLocale, getLocalizedContent, type Locale } from "@/src/shared/i18n";
import { Card, Icon } from "@/src/shared/ui";

const icons = [ShieldCheck, Boxes, CircleUserRound, Rocket];

export function ProofStrip({ locale = defaultLocale }: { locale?: Locale }) {
  const { proofSignals } = getLocalizedContent(locale);

  return (
    <Card className="grid gap-0 overflow-hidden md:grid-cols-4">
      {proofSignals.map((signal, index) => {
        const IconComponent = icons[index];
        return (
          <div
            key={signal.id}
            className="flex min-h-36 items-start gap-4 border-[var(--color-border)] p-6 md:border-r md:last:border-r-0"
          >
            <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-accent-primary)]">
              <Icon icon={IconComponent} />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">{signal.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">{signal.description}</p>
            </div>
          </div>
        );
      })}
    </Card>
  );
}
