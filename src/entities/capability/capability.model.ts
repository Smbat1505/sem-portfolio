import { z } from "zod";
export const capabilitySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  evidence: z.string(),
  relatedProjects: z.array(z.string()),
  type: z.enum(["core", "supporting"]),
});
export type Capability = z.infer<typeof capabilitySchema>;
