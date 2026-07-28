import { z } from "zod";
export const contactLinkSchema = z.object({ id: z.string(), label: z.string(), value: z.string(), href: z.string() });
export type ContactLink = z.infer<typeof contactLinkSchema>;
