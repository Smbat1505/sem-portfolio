import type { ContactLink } from "./contact.model";

export const primaryEmail = {
  value: "sem.antony.dev@gmail.com",
  href: "mailto:sem.antony.dev@gmail.com",
} as const;

export const contactLinks: ContactLink[] = [
  { id: "email", label: "Email", ...primaryEmail },
  { id: "github", label: "GitHub", value: "github.com/Smbat1505", href: "https://github.com/Smbat1505" },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/smbat-antonian",
    href: "https://www.linkedin.com/in/smbat-antonian",
  },
  { id: "telegram", label: "Telegram", value: "@SemAntony", href: "https://t.me/SemAntony" },
];
export const bestFit = [
  { title: "Product teams", description: "Collaborate closely with designers, PMs, and engineers." },
  { title: "Frontend systems", description: "Build scalable, maintainable interfaces and design systems." },
  { title: "UI architecture", description: "Structure complex interfaces for clarity and scale." },
  { title: "Automation & quality", description: "Improve developer experience and shipping reliability." },
];
