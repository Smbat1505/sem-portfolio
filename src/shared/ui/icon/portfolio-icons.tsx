import type { SVGProps } from "react";

function BaseIcon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {children}
    </svg>
  );
}

export function PortfolioProductDeliveryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3.5 19 7.5v8.9l-7 4.1-7-4.1V7.5L12 3.5Z" />
      <path d="m5.4 7.8 6.6 3.8 6.6-3.8" />
      <path d="M12 11.6v8.1" />
      <path d="M8.7 14.8h6.6" />
    </BaseIcon>
  );
}

export function PortfolioFrontendArchitectureIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4 19 7.8 12 11.6 5 7.8 12 4Z" />
      <path d="m6.7 11.4 5.3 2.9 5.3-2.9" />
      <path d="m6.7 15.3 5.3 2.9 5.3-2.9" />
    </BaseIcon>
  );
}

export function PortfolioUiEngineeringIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="5" width="16" height="13" rx="2" />
      <path d="M4 9h16" />
      <path d="M8 13h4" />
      <path d="M8 16h7" />
      <circle cx="17" cy="15" r="1.5" />
    </BaseIcon>
  );
}

export function PortfolioTestingCiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12 2.4 2.4 4.8-5" />
      <path d="M12 2.8v2" />
      <path d="M21.2 12h-2" />
      <path d="M12 21.2v-2" />
      <path d="M2.8 12h2" />
    </BaseIcon>
  );
}

export function PortfolioApiContractsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M8.5 5.5C6.7 5.5 6 6.6 6 8.2v1.1c0 1.3-.7 2-2 2.1 1.3.1 2 1 2 2.2v1.2c0 1.6.7 2.7 2.5 2.7" />
      <path d="M15.5 5.5c1.8 0 2.5 1.1 2.5 2.7v1.1c0 1.3.7 2 2 2.1-1.3.1-2 1-2 2.2v1.2c0 1.6-.7 2.7-2.5 2.7" />
      <path d="M11 8.5h2" />
      <path d="M10 12h4" />
      <path d="M11 15.5h2" />
    </BaseIcon>
  );
}

export function PortfolioPerformanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M5.1 17a8 8 0 1 1 13.8 0" />
      <path d="M12 17l3.6-6" />
      <path d="M7.5 16.5h9" />
      <path d="M7.4 11.2l1.3 1.3" />
      <path d="M16.6 11.2l-1.3 1.3" />
    </BaseIcon>
  );
}

export function PortfolioAccessibilityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="4.8" r="1.7" />
      <path d="M5.5 9.2h13" />
      <path d="M12 9.4v4" />
      <path d="m8.4 20 2.2-6.4h2.8l2.2 6.4" />
      <path d="M9.8 13.6h4.4" />
    </BaseIcon>
  );
}

export function PortfolioAutomationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <rect x="5" y="8" width="14" height="10" rx="2.4" />
      <path d="M12 8V5.5" />
      <path d="M9 5.5h6" />
      <circle cx="9.4" cy="13" r=".8" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="13" r=".8" fill="currentColor" stroke="none" />
      <path d="M9.5 16h5" />
      <path d="M3.5 12h1.5" />
      <path d="M19 12h1.5" />
    </BaseIcon>
  );
}

export function PortfolioGithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M9.2 19.6c-4.2 1.2-4.2-2-5.9-2.4" />
      <path d="M14.8 21v-3.2c0-.9-.3-1.5-.8-1.9 2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.2 6c.1-.3.6-1.8-.1-3.6 0 0-1.1-.4-3.7 1.4a12.7 12.7 0 0 0-6.8 0C5 2 3.9 2.4 3.9 2.4 3.2 4.2 3.7 5.7 3.8 6a4.7 4.7 0 0 0-1.3 3.9c0 4.7 2.8 5.7 5.5 6-.4.3-.7.9-.8 1.7V21" />
    </BaseIcon>
  );
}

export function PortfolioLinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 10v6" />
      <path d="M12 16v-3.3c0-1.7 3-2 3 0V16" />
      <path d="M12 10v6" />
      <circle cx="8" cy="7.5" r=".7" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function PortfolioTelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M20 5.3 4.7 11.4c-1 .4-.9 1.8.2 2.1l3.8 1.1 1.5 4.2c.3.9 1.5 1.1 2.1.3l2.1-2.7 3.9 2.9c.8.6 1.9.1 2-1L22 6.6c.1-.9-.9-1.6-2-1.3Z" />
      <path d="m8.8 14.6 8.6-6.1-6.7 7.7" />
    </BaseIcon>
  );
}
