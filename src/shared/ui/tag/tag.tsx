import type { HTMLAttributes } from "react";
import { cn } from "@/src/shared/lib/cn";

export function Tag({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[rgb(255_255_255_/_0.04)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-secondary)]",
        className,
      )}
      {...props}
    />
  );
}
