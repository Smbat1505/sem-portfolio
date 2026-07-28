import type { ContactLink } from "./contact.model";
export const contactLinks: ContactLink[] = [
  { id: "email", label: "Email", value: "hello@semen.dev", href: "mailto:hello@semen.dev" },
  { id: "github", label: "GitHub", value: "github.com/semen-dev", href: "https://github.com/semen-dev" },
  { id: "linkedin", label: "LinkedIn", value: "linkedin.com/in/semen-dev", href: "https://linkedin.com/in/semen-dev" },
  { id: "telegram", label: "Telegram", value: "@semen_dev", href: "https://t.me/semen_dev" },
];
export const bestFit = [
  { title: "Product teams", description: "Collaborate closely with designers, PMs, and engineers." },
  { title: "Frontend systems", description: "Build scalable, maintainable interfaces and design systems." },
  { title: "UI architecture", description: "Structure complex interfaces for clarity and scale." },
  { title: "Automation & quality", description: "Improve developer experience and shipping reliability." },
];
