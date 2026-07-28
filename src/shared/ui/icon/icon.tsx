import type { ComponentType, SVGProps } from "react";
import { cn } from "@/src/shared/lib/cn";

export type IconGlyph = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

export function Icon({
  icon: IconComponent,
  className,
  label,
}: {
  icon: IconGlyph;
  className?: string;
  label?: string;
}) {
  return (
    <IconComponent
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("size-5", className)}
      strokeWidth={1.8}
    />
  );
}
