import type { HTMLAttributes } from "react";
import { cn } from "@/src/shared/lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[linear-gradient(145deg,var(--color-bg-elevated),var(--color-surface))] shadow-[var(--shadow-card)]",
        className,
      )}
      {...props}
    />
  );
}
