import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/shared/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonBaseProps = { children: ReactNode; className?: string; variant?: ButtonVariant };
type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variants: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-[var(--color-accent-primary)] text-[var(--color-bg)] hover:brightness-105",
  secondary:
    "border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] hover:border-[var(--color-border-active)] hover:bg-[var(--color-surface)]",
  ghost: "border-transparent bg-transparent text-[var(--color-accent-primary)] hover:bg-[var(--color-surface)]",
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, className, variant = "secondary", ...rest } = props;
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-3 rounded-[var(--radius-md)] border px-5 text-sm font-medium transition-[background,border-color,filter,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-primary)] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );

  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
